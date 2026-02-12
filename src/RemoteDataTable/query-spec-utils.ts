import type {
  QuerySpecField,
  QuerySpecFilter,
  QuerySpecOp,
} from "./RemoteDataTable.types";

const defaultQuerySpecOps: QuerySpecOp[] = ["eq"];

export const querySpecOpLabels: Record<QuerySpecOp, string> = {
  eq: "is",
  neq: "is not",
  lt: "<",
  lte: "<=",
  gt: ">",
  gte: ">=",
  ilike: "contains",
  in: "in",
  isnull: "is null",
};

export const createFilterId = () =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `filter-${Math.random().toString(36).slice(2, 10)}`;

export const getFieldByName = (fields: QuerySpecField[], name: string) =>
  fields.find((field) => field.name === name);

export const getOpsForField = (field?: QuerySpecField) =>
  field?.ops?.length ? field.ops : defaultQuerySpecOps;

export const coerceFilterValue = (
  field: QuerySpecField | undefined,
  op: QuerySpecOp,
  value?: string,
) => {
  if (op === "isnull") {
    return value === "false" ? "false" : "true";
  }

  if (field?.type === "boolean") {
    return value === "false" ? "false" : "true";
  }

  return value ?? "";
};

const normalizeFilterValue = (
  filter: QuerySpecFilter,
  field?: QuerySpecField,
) => {
  if (filter.op === "isnull") {
    return filter.value === "false" ? "false" : "true";
  }

  const raw = (filter.value ?? "").trim();
  if (!raw) {
    return "";
  }

  if (filter.op === "in") {
    return raw
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .join(",");
  }

  if (field?.type === "date" || field?.type === "datetime") {
    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }

  if (field?.type === "boolean") {
    return raw === "false" ? "false" : "true";
  }

  return raw;
};

const getOptionLabel = (value: string, field?: QuerySpecField) => {
  if (!field?.options?.length) {
    return value;
  }

  return field.options.find((option) => option.value === value)?.label ?? value;
};

const formatFilterSummary = (
  filter: QuerySpecFilter,
  field?: QuerySpecField,
) => {
  const label = field?.label ?? filter.field;
  const rawValue = (filter.value ?? "").trim();

  if (filter.op === "isnull") {
    const isNull = rawValue !== "false";
    return `${label} ${isNull ? "is null" : "is not null"}`;
  }

  if (!rawValue) {
    return "";
  }

  const opLabel = querySpecOpLabels[filter.op] ?? filter.op;

  if (filter.op === "in") {
    const values = rawValue
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((value) => getOptionLabel(value, field))
      .join(", ");
    return `${label} ${opLabel} (${values})`;
  }

  const displayValue = getOptionLabel(rawValue, field);
  const needsQuotes =
    !field?.type ||
    field.type === "string" ||
    field.type === "date" ||
    field.type === "datetime";
  const formattedValue = needsQuotes ? `"${displayValue}"` : displayValue;
  return `${label} ${opLabel} ${formattedValue}`;
};

export const formatFiltersSummary = (
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => {
  if (!filters.length) {
    return "";
  }

  const fieldMap = new Map(fields.map((field) => [field.name, field]));
  return filters
    .map((filter) => formatFilterSummary(filter, fieldMap.get(filter.field)))
    .filter(Boolean)
    .join(" AND ");
};

export const buildQuerySpecParams = (
  filters: QuerySpecFilter[],
  fields: QuerySpecField[],
) => {
  const fieldMap = new Map(fields.map((field) => [field.name, field]));
  const params: Record<string, string | number | boolean> = {};

  for (const filter of filters) {
    const field = fieldMap.get(filter.field);
    if (!field) {
      continue;
    }

    const normalized = normalizeFilterValue(filter, field);
    if (!normalized && filter.op !== "isnull") {
      continue;
    }

    const key = filter.op === "eq" ? field.name : `${field.name}__${filter.op}`;
    if (filter.op === "isnull") {
      params[key] = normalized !== "false";
    } else if (field.type === "boolean") {
      params[key] = normalized !== "false";
    } else if (field.type === "number" && filter.op !== "in") {
      const numeric = Number(normalized);
      params[key] = Number.isNaN(numeric) ? normalized : numeric;
    } else {
      params[key] = normalized;
    }
  }

  return params;
};
