import { ChevronDown, ChevronUp, Filter, Plus, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
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
} from "./remote-data-table.types";

/**
 * Props for the RemoteDataTableQueryBuilder component
 */
type RemoteDataTableQueryBuilderProps = {
  /** Query builder configuration */
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

const selectClassName =
  "h-9 w-full rounded-md border border-input bg-background px-2 text-sm text-foreground";

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
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <label className="sr-only" htmlFor={`field-${filter.id}`}>
        Field
      </label>
      <select
        id={`field-${filter.id}`}
        aria-label="Field"
        className={cn(selectClassName, "sm:w-44")}
        value={filter.field}
        onChange={(event) => onFieldChange(filter.id, event.target.value)}
      >
        {fields.map((queryField) => (
          <option key={queryField.name} value={queryField.name}>
            {queryField.label}
          </option>
        ))}
      </select>

      <label className="sr-only" htmlFor={`op-${filter.id}`}>
        Operator
      </label>
      <select
        id={`op-${filter.id}`}
        aria-label="Operator"
        className={cn(selectClassName, "sm:w-36")}
        value={filter.op}
        onChange={(event) =>
          onOpChange(filter.id, event.target.value as QuerySpecOp)
        }
      >
        {ops.map((op) => (
          <option key={op} value={op}>
            {querySpecOpLabels[op] ?? op}
          </option>
        ))}
      </select>

      {filter.op === "isnull" ? (
        <select
          aria-label="Null state"
          className={cn(selectClassName, "sm:flex-1")}
          value={filter.value ?? "true"}
          onChange={(event) => onValueChange(filter.id, event.target.value)}
        >
          <option value="true">Is null</option>
          <option value="false">Is not null</option>
        </select>
      ) : useOptions ? (
        <select
          aria-label={valueLabel}
          className={cn(selectClassName, "sm:flex-1")}
          value={filter.value ?? ""}
          onChange={(event) => onValueChange(filter.id, event.target.value)}
        >
          <option value="">Select value</option>
          {fieldOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field?.type === "boolean" ? (
        <select
          aria-label={valueLabel}
          className={cn(selectClassName, "sm:flex-1")}
          value={filter.value ?? "true"}
          onChange={(event) => onValueChange(filter.id, event.target.value)}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      ) : (
        <div className="flex flex-1 flex-col">
          {shouldShrinkLabel ? (
            <label
              className="mb-1 text-xs text-muted-foreground"
              htmlFor={`value-${filter.id}`}
            >
              {valueLabel}
            </label>
          ) : null}
          <Input
            id={`value-${filter.id}`}
            type={inputType}
            aria-label={valueLabel}
            value={filter.value ?? ""}
            onChange={(event) => onValueChange(filter.id, event.target.value)}
            placeholder={valuePlaceholder}
          />
        </div>
      )}

      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Remove filter"
        onClick={() => onRemove(filter.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

/**
 * Filter builder for RemoteDataTable query definitions.
 */
export const RemoteDataTableQueryBuilder = ({
  queryBuilder,
}: RemoteDataTableQueryBuilderProps) => {
  const [queryOpen, setQueryOpen] = useState(false);
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

  const handleQueryClose = () => {
    setQueryOpen(false);
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
    <Popover open={queryOpen} onOpenChange={setQueryOpen}>
      <div className="border-b border-border px-4 py-3">
        <PopoverTrigger
          render={(props) => (
            <button
              type="button"
              {...props}
              aria-label="Filter query"
              className={cn(
                "flex w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-left text-sm text-foreground",
                "hover:bg-muted/40",
                typeof props.className === "string"
                  ? props.className
                  : undefined,
              )}
            >
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1 truncate text-muted-foreground">
                {querySummary || placeholder || "Add filters"}
              </span>
              {queryOpen ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          )}
        />
      </div>
      <PopoverContent
        className="w-[min(560px,calc(100vw-2rem))] p-4"
        align="start"
      >
        <div className="flex max-h-[60vh] flex-col gap-4 overflow-y-auto">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Filters</p>
              <p className="text-xs text-muted-foreground">
                {queryFilters.length
                  ? `${queryFilters.length} filter${queryFilters.length === 1 ? "" : "s"} applied`
                  : "No filters yet"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleAddFilter}
                disabled={queryFields.length === 0}
              >
                <Plus className="mr-1 h-4 w-4" />
                Add filter
              </Button>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Close filters"
                onClick={handleQueryClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {queryFilters.length === 0 ? (
            <p className="text-sm text-muted-foreground">No filters yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
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
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
