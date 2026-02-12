import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Popover,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { type FocusEvent, type MouseEvent, useMemo, useState } from "react";
import {
  coerceFilterValue,
  createFilterId,
  formatFiltersSummary,
  getFieldByName,
  getOpsForField,
  querySpecOpLabels,
} from "./query-spec-utils";
import type {
  QuerySpecField,
  QuerySpecFilter,
  QuerySpecOp,
  RemoteDataTableQueryBuilderProps as RemoteDataTableQueryBuilderConfig,
} from "./RemoteDataTable.types";

type RemoteDataTableQueryBuilderProps = {
  queryBuilder: RemoteDataTableQueryBuilderConfig;
};

type QueryFilterRowProps = {
  filter: QuerySpecFilter;
  fields: QuerySpecField[];
  fieldMap: Map<string, QuerySpecField>;
  onFieldChange: (filterId: string, nextFieldName: string) => void;
  onOpChange: (filterId: string, nextOp: QuerySpecOp) => void;
  onValueChange: (filterId: string, nextValue: string) => void;
  onRemove: (filterId: string) => void;
};

const QueryFilterRow = ({
  filter,
  fields,
  fieldMap,
  onFieldChange,
  onOpChange,
  onValueChange,
  onRemove,
}: QueryFilterRowProps) => {
  const field = fieldMap.get(filter.field);
  const ops = getOpsForField(field);
  const valueLabel = filter.op === "in" ? "Values" : "Value";
  const inputType =
    field?.type === "number"
      ? "number"
      : field?.type === "date"
        ? "date"
        : field?.type === "datetime"
          ? "datetime-local"
          : "text";
  const shouldShrinkLabel =
    field?.type === "date" || field?.type === "datetime";
  const valuePlaceholder =
    field?.placeholder ??
    (filter.op === "in" ? "Comma-separated values" : undefined);
  const fieldOptions = field?.options ?? [];
  const useOptions =
    fieldOptions.length > 0 && (filter.op === "eq" || filter.op === "neq");

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      alignItems={{ xs: "stretch", sm: "center" }}
    >
      <TextField
        select
        size="small"
        label="Field"
        value={filter.field}
        onChange={(event) => onFieldChange(filter.id, event.target.value)}
        sx={{ minWidth: 160 }}
      >
        {fields.map((queryField) => (
          <MenuItem key={queryField.name} value={queryField.name}>
            {queryField.label}
          </MenuItem>
        ))}
      </TextField>
      <ToggleButtonGroup
        exclusive
        size="small"
        color="primary"
        value={filter.op}
        onChange={(_, value) => {
          if (value !== null) {
            onOpChange(filter.id, value as QuerySpecOp);
          }
        }}
        sx={{ minWidth: 150, alignSelf: "center" }}
      >
        {ops.map((op) => (
          <ToggleButton key={op} value={op}>
            {querySpecOpLabels[op] ?? op}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {filter.op === "isnull" ? (
        <TextField
          select
          size="small"
          label="Null state"
          value={filter.value ?? "true"}
          onChange={(event) => onValueChange(filter.id, event.target.value)}
          sx={{ minWidth: 160, flex: 1 }}
        >
          <MenuItem value="true">Is null</MenuItem>
          <MenuItem value="false">Is not null</MenuItem>
        </TextField>
      ) : useOptions ? (
        <TextField
          select
          size="small"
          label={valueLabel}
          value={filter.value ?? ""}
          onChange={(event) => onValueChange(filter.id, event.target.value)}
          sx={{ minWidth: 160, flex: 1 }}
        >
          {fieldOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ) : field?.type === "boolean" ? (
        <TextField
          select
          size="small"
          label={valueLabel}
          value={filter.value ?? "true"}
          onChange={(event) => onValueChange(filter.id, event.target.value)}
          sx={{ minWidth: 160, flex: 1 }}
        >
          <MenuItem value="true">True</MenuItem>
          <MenuItem value="false">False</MenuItem>
        </TextField>
      ) : (
        <TextField
          size="small"
          type={inputType}
          label={valueLabel}
          value={filter.value ?? ""}
          onChange={(event) => onValueChange(filter.id, event.target.value)}
          placeholder={valuePlaceholder}
          InputLabelProps={shouldShrinkLabel ? { shrink: true } : undefined}
          sx={{ minWidth: 160, flex: 1 }}
        />
      )}
      <IconButton
        size="small"
        aria-label="Remove filter"
        onClick={() => onRemove(filter.id)}
      >
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export const RemoteDataTableQueryBuilder = ({
  queryBuilder,
}: RemoteDataTableQueryBuilderProps) => {
  const [queryAnchor, setQueryAnchor] = useState<HTMLElement | null>(null);
  const queryOpen = Boolean(queryAnchor);
  const queryPopoverWidth = queryAnchor?.clientWidth ?? 560;
  const {
    fields: queryFields,
    filters: queryFilters,
    onFiltersChange,
    placeholder,
    summaryFormatter,
  } = queryBuilder;
  const queryFieldMap = useMemo(
    () => new Map(queryFields.map((field) => [field.name, field])),
    [queryFields],
  );

  const querySummary = useMemo(() => {
    if (!queryFilters.length) {
      return "";
    }

    if (summaryFormatter) {
      return summaryFormatter(queryFilters, queryFields);
    }

    return formatFiltersSummary(queryFilters, queryFields);
  }, [queryFilters, queryFields, summaryFormatter]);

  const handleQueryOpen = (
    event: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>,
  ) => {
    setQueryAnchor(event.currentTarget);
  };

  const handleQueryClose = () => {
    setQueryAnchor(null);
  };

  const handleAddFilter = () => {
    if (queryFields.length === 0) {
      return;
    }

    const field = queryFields[0];
    const ops = getOpsForField(field);
    const op = ops[0] ?? "eq";
    const value = coerceFilterValue(field, op);

    onFiltersChange([
      ...queryFilters,
      { id: createFilterId(), field: field.name, op, value },
    ]);
  };

  const handleRemoveFilter = (filterId: string) => {
    onFiltersChange(queryFilters.filter((filter) => filter.id !== filterId));
  };

  const handleFieldChange = (filterId: string, nextFieldName: string) => {
    const nextField = getFieldByName(queryFields, nextFieldName);
    if (!nextField) {
      return;
    }

    const allowedOps = getOpsForField(nextField);

    onFiltersChange(
      queryFilters.map((filter) => {
        if (filter.id !== filterId) {
          return filter;
        }

        const op = allowedOps.includes(filter.op)
          ? filter.op
          : (allowedOps[0] ?? "eq");
        const value = coerceFilterValue(nextField, op, filter.value);

        return {
          ...filter,
          field: nextField.name,
          op,
          value,
        };
      }),
    );
  };

  const handleOpChange = (filterId: string, nextOp: QuerySpecOp) => {
    onFiltersChange(
      queryFilters.map((filter) => {
        if (filter.id !== filterId) {
          return filter;
        }

        const field = queryFieldMap.get(filter.field);
        const value = coerceFilterValue(field, nextOp, filter.value);

        return {
          ...filter,
          op: nextOp,
          value,
        };
      }),
    );
  };

  const handleValueChange = (filterId: string, nextValue: string) => {
    onFiltersChange(
      queryFilters.map((filter) =>
        filter.id === filterId
          ? {
              ...filter,
              value: nextValue,
            }
          : filter,
      ),
    );
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          px: 2,
          py: 1.5,
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder={placeholder ?? "Add filters"}
          value={querySummary}
          onClick={handleQueryOpen}
          onFocus={handleQueryOpen}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <FilterAltOutlinedIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {queryOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </InputAdornment>
            ),
          }}
          inputProps={{ "aria-label": "Filter query" }}
          sx={{
            "& .MuiInputBase-root": { cursor: "pointer" },
            "& .MuiInputBase-input": {
              cursor: "pointer",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            },
          }}
        />
      </Box>
      <Popover
        open={queryOpen}
        anchorEl={queryAnchor}
        onClose={handleQueryClose}
        disableRestoreFocus
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              width: queryPopoverWidth,
              maxWidth: "calc(100vw - 32px)",
              p: 2,
            },
          },
        }}
      >
        <Box sx={{ maxHeight: "60vh", overflowY: "auto" }}>
          <Stack spacing={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
            >
              <Typography variant="subtitle2">Filters</Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Button
                  size="small"
                  startIcon={<AddIcon fontSize="small" />}
                  onClick={handleAddFilter}
                  disabled={queryFields.length === 0}
                >
                  Add filter
                </Button>
                <IconButton
                  size="small"
                  aria-label="Close filters"
                  onClick={handleQueryClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            {queryFilters.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No filters yet.
              </Typography>
            ) : (
              <Stack spacing={1.5}>
                {queryFilters.map((filter) => (
                  <QueryFilterRow
                    key={filter.id}
                    filter={filter}
                    fields={queryFields}
                    fieldMap={queryFieldMap}
                    onFieldChange={handleFieldChange}
                    onOpChange={handleOpChange}
                    onValueChange={handleValueChange}
                    onRemove={handleRemoveFilter}
                  />
                ))}
              </Stack>
            )}
          </Stack>
        </Box>
      </Popover>
    </>
  );
};
