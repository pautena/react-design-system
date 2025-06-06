import Grid from "@mui/material/Grid";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type {
  ArrayGroupField,
  ArrayInstanceType,
  BasicModelInstance,
  GroupField,
  GroupInstanceType,
  Model,
  ModelField,
} from "../generators/generators.model";
import { GroupValueCard } from "../group-value-card";
import { newBreakpointsCounter } from "../utils/breakpoints";
import { ValueBoolean } from "../value-boolean";
import { ValueDatetime } from "../value-datetime";
import { ValueItem } from "../value-item";
import { ValueText } from "../value-text";

interface SingleDetailValueFactoryOptions {
  dense?: boolean;
}

const singleDetailValueFactory = <T extends BasicModelInstance>(
  field: ModelField,
  instance: T | GroupInstanceType,
  { dense }: SingleDetailValueFactoryOptions = {},
) => {
  const { id, name, type } = field;
  const value = instance[id];
  if (type === "boolean") {
    return <ValueBoolean dense={dense} label={name} value={value as boolean} />;
  }
  if (type === "date" || type === "time" || type === "datetime") {
    return (
      <ValueDatetime
        dense={dense}
        label={name}
        value={value as Date}
        format={field.format}
      />
    );
  }

  if (typeof value === "object" && !Array.isArray(value)) {
    return (
      <ValueText dense={dense} label={name} value={JSON.stringify(value)} />
    );
  }
  return <ValueText dense={dense} label={name} value={value?.toString()} />;
};

interface ObjectArrayGroupProps {
  field: ArrayGroupField;
  instance: ArrayInstanceType;
  dense?: boolean;
}

const ObjectArrayGroup = ({
  field: { name, description, value },
  instance,
  dense,
}: ObjectArrayGroupProps) => {
  const columns: GridColDef[] = [{ field: "id", headerName: "ID", width: 70 }];

  value.forEach((column) => {
    columns.push({
      field: column.id,
      headerName: column.name,
    });
  });

  const rows = instance.map((f, id) => ({
    id,
    ...f,
  }));

  return (
    <GroupValueCard title={name} subtitle={description} dense={dense}>
      <Grid size={{ xs: 12 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          density={dense ? "compact" : "standard"}
          disableRowSelectionOnClick
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          sx={{ height: 400 }}
        />
      </Grid>
    </GroupValueCard>
  );
};

interface ObjectDetailGroupProps {
  field: GroupField;
  instance: GroupInstanceType;
  dense?: boolean;
}

const ObjectDetailGroup = ({
  field: { name, description, value },
  instance,
  dense,
}: ObjectDetailGroupProps) => {
  const breakpointsCounter = newBreakpointsCounter();

  return (
    <GroupValueCard title={name} subtitle={description} dense={dense}>
      {value.map((field) => {
        const { id, xs, sm, md, lg, xl } = field;
        const bordered = breakpointsCounter.increment(field);
        return (
          <ValueItem key={id} size={{ xs, sm, md, lg, xl }} bordered={bordered}>
            {singleDetailValueFactory(field, instance, { dense })}
          </ValueItem>
        );
      })}
    </GroupValueCard>
  );
};

export interface ObjectDetailsProps<T extends BasicModelInstance> {
  model: Model;
  dense?: boolean;
  instance: T;
}

/**
 * ObjectDetails component renders detailed information about a given instance of a model.
 * It supports rendering various types of fields including single values, groups, and arrays of groups.
 */
export const ObjectDetails = <T extends BasicModelInstance>({
  model,
  instance,
  dense,
}: ObjectDetailsProps<T>) => {
  const breakpointsCounter = newBreakpointsCounter();
  return (
    <Grid container spacing={dense ? 1 : 2}>
      {model.fields.map((field) => {
        const { id, type, xs = 3, sm = 0, md = 0, lg = 0, xl = 0 } = field;

        if (type === "group") {
          breakpointsCounter.increment({ xs: 12 });
          return (
            <Grid size={{ xs: 12 }} key={id}>
              <ObjectDetailGroup
                field={field}
                instance={instance[id] as GroupInstanceType}
                dense={dense}
              />
            </Grid>
          );
        }

        if (type === "group[]") {
          breakpointsCounter.increment({ xs: 12 });
          return (
            <Grid size={{ xs: 12 }} key={id}>
              <ObjectArrayGroup
                field={field}
                instance={instance[id] as any}
                dense={dense}
              />
            </Grid>
          );
        }

        const bordered = breakpointsCounter.increment(field);
        return (
          <ValueItem key={id} size={{ xs, sm, md, lg, xl }} bordered={bordered}>
            {singleDetailValueFactory(field, instance, { dense })}
          </ValueItem>
        );
      })}
    </Grid>
  );
};
