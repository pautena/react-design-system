import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
import { FormEvent, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export type SearchInputSize = "small" | "medium";

export interface SearchFilter {
  id: string;
  label: string;
  type: "text" | "number" | "boolean" | "datetime";
}

export interface SearchInputProps<T> {
  /**
   * The label for the search input.
   */
  label?: string;
  /**
   * The placeholder text for the search input.
   */
  placeholder?: string;
  /**
   * If true, the search input will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * Helper text to display below the search input.
   */
  helperText?: string;
  /**
   * The size of the search input.
   */
  size?: SearchInputSize;
  /**
   * An array of filters to apply to the search.
   */
  filters?: SearchFilter[];
  /**
   * The system prop that allows defining system overrides and additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The format to use for date inputs.
   */
  dateFormat?: string;
  /**
   * Callback function to handle the search action.
   */
  onSearch: (data: T) => void;
}
export interface SearchInputProps<T> {
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  helperText?: string;
  size?: SearchInputSize;
  filters?: SearchFilter[];
  sx?: SxProps<Theme>;
  dateFormat?: string;
  onSearch: (data: T) => void;
}

const filtersSx = {
  position: "absolute",
};

const createInitialData = <T,>(filters: SearchFilter[]) => {
  const data: Record<string, unknown> = {
    search: "",
  };
  const fields: Record<string, boolean> = { search: false };

  filters.forEach(({ id, type }) => {
    if (type === "text") {
      data[id] = "";
    } else if (type === "number") {
      data[id] = 0;
    } else if (type === "boolean") {
      data[id] = false;
    } else {
      data[id] = Date.now();
    }
    fields[id] = false;
  });

  return {
    initialData: data as T,
    fields,
  };
};

/**
 * A generic search input component that supports various types of filters.
 */
export const SearchInput = <T,>({
  label,
  placeholder,
  helperText,
  size = "medium",
  fullWidth,
  dateFormat,
  filters = [],
  onSearch,
  sx,
}: SearchInputProps<T>) => {
  const { initialData, fields } = createInitialData(filters);
  const [data, setData] = useState<any>(initialData);
  const [changedFields, setChangedFields] = useState(fields);
  const [expanded, setExpanded] = useState(false);
  const hasFilters = filters.length > 0;
  const hasData = Object.values(changedFields).some((field) => !!field);

  const clearSearch = () => {
    const { initialData, fields } = createInitialData(filters);
    setData(initialData);
    setChangedFields(fields);
  };

  const handleNewData = (id: string, value: unknown) => {
    setData((d: any) => ({ ...d, [id]: value }));
    setChangedFields((f) => ({ ...f, [id]: !!value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setExpanded(false);

    const search: any = {};
    Object.entries(changedFields).forEach(([key, value]) => {
      if (value) {
        search[key] = data[key];
      }
    });

    onSearch(search);
    clearSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={label}
        required
        value={data.search}
        onChange={(e) => handleNewData("search", e.target.value)}
        fullWidth={fullWidth}
        helperText={helperText}
        size={size}
        sx={sx}
        InputProps={{
          placeholder,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" size={size} sx={{ mr: 1 }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: hasFilters && (
            <InputAdornment position="end">
              {hasData && (
                <IconButton size={size} sx={{ ml: 1 }} onClick={clearSearch}>
                  <ClearIcon />
                </IconButton>
              )}
              <IconButton size={size} onClick={() => setExpanded((e) => !e)}>
                <TuneIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {hasFilters && (
        <Paper sx={{ filtersSx }}>
          <Collapse in={expanded}>
            <Grid container sx={{ p: 2 }} spacing={1}>
              {expanded &&
                filters.map(({ id, label, type }) => {
                  if (type === "boolean") {
                    return (
                      <Grid key={id} item xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={label}
                            checked={data[id]}
                            onChange={(_, value) => handleNewData(id, value)}
                          />
                        </FormGroup>
                      </Grid>
                    );
                  }

                  if (type === "datetime") {
                    return (
                      <Grid key={id} item xs={12}>
                        <DateTimePicker
                          label={label}
                          format={dateFormat}
                          value={data[id]}
                          onChange={(value) => handleNewData(id, value)}
                          slotProps={{
                            textField: {
                              size: "small",
                            },
                          }}
                          sx={{ width: 1 }}
                        />
                      </Grid>
                    );
                  }

                  return (
                    <Grid key={id} item xs={12}>
                      <TextField
                        type={type}
                        size="small"
                        label={label}
                        value={data[id]}
                        onChange={(e) =>
                          handleNewData(
                            id,
                            type === "number" ? parseInt(e.target.value, 10) : e.target.value,
                          )
                        }
                        fullWidth
                      />
                    </Grid>
                  );
                })}
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Button color="error" onClick={() => setExpanded(false)} sx={{ mr: 1 }}>
                  Close
                </Button>
                <Button type="submit">Search</Button>
              </Grid>
            </Grid>
          </Collapse>
        </Paper>
      )}
    </form>
  );
};
