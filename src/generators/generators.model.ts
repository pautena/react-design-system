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

type SingleFields = StringField | NumberField | BooleanField | EnumField | MultiEnumField;

export type GroupField = {
  type: "group";
  value: (Base & Breakpoints & SingleFields)[];
} & Base;

type Fields = SingleFields | GroupField;

export type ModelField = Base & Breakpoints & Fields;

export type Model = {
  fields: ModelField[];
};

export interface BasicModelInstance {
  id: string;
  [key: string]: any;
}

export type ModelFieldTypes = "string" | "number" | "boolean" | "enum" | "multienum";
