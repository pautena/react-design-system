/**
 * MODEL TYPES
 * Types used to specify the model
 */
export type ModelFieldTypes = "string" | "number" | "boolean" | "enum" | "multienum";

type Base = {
  id: string;
  description: string;
  name: string;
  listable?: boolean;
};

type Breakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type StringField = {
  type: "string";
};

type NumberField = {
  type: "number";
};

type BooleanField = {
  type: "boolean";
};

type EnumField = {
  type: "enum";
  value: string[];
};

type MultiEnumField = {
  type: "multienum";
  value: string[];
};

type DateField = {
  type: "date";
  format: string;
  default: Date;
};

type TimeField = {
  type: "time";
  format: string;
  default: Date;
};

type DatetimeField = {
  type: "datetime";
  format: string;
  default: Date;
};

type SingleFields =
  | StringField
  | NumberField
  | BooleanField
  | EnumField
  | MultiEnumField
  | DateField
  | TimeField
  | DatetimeField;

export type GroupField = {
  type: "group";
  value: (Base & Breakpoints & SingleFields)[];
} & Base;

type Fields = SingleFields | GroupField;
export type ModelField = Base & Breakpoints & Fields;

export type Model = {
  fields: ModelField[];
};

/**
 * INSTANCE TYPES
 * Types used to represent an instance of a model specification
 */
export type BaseFieldType = string | number | boolean | Date;
export type ArrayFieldType = string[];
export type SingleFieldType = BaseFieldType | ArrayFieldType;
export type GroupInstanceType = { [key: string]: SingleFieldType };
export type FieldType = SingleFieldType | GroupInstanceType;

export interface BasicModelInstance {
  id: string;
  [key: string]: FieldType;
}
