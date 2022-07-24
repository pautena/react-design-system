type Base = {
  field: string;
  description: string;
  name: string;
};

type Breakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type StringValue = {
  type: "string";
  value: string;
};

type NumberValue = {
  type: "number";
  value: number;
};

type BooleanValue = {
  type: "boolean";
  value: boolean;
};

type SingleValues = StringValue | NumberValue | BooleanValue;

export type GroupValue = {
  type: "group";
  value: (Base & Breakpoints & SingleValues)[];
};

type Values = SingleValues | GroupValue;

export type DetailValue = Base & Breakpoints & Values;
