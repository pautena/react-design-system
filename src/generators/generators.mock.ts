import { BasicModelInstance, Model, ModelField } from "./generators.model";
import { faker } from "@faker-js/faker";
import { newArrayWithSize } from "../utils";

export const mockModel: Model = {
  fields: [
    {
      id: "id",
      type: "string",
      description: "User identifier",
      name: "Id",
      xs: 12,
      sm: 6,
      md: 4,
      listable: false,
    },
    {
      id: "firstName",
      type: "string",
      description: "User first name",
      name: "First name",
      xs: 12,
      sm: 6,
      md: 4,
      listable: true,
    },
    {
      id: "middleName",
      type: "string",
      description: "User middle name",
      name: "Middle name",
      xs: 12,
      sm: 6,
      md: 4,
      listable: true,
    },
    {
      id: "lastName",
      type: "string",
      description: "User last name",
      name: "Last name",
      xs: 12,
      sm: 6,
      md: 4,
      listable: true,
    },
    {
      id: "gender",
      type: "enum",
      value: faker.definitions.name?.gender || [],
      description: "User gender",
      name: "Gender",
      xs: 12,
      sm: 6,
      md: 3,
    },
    {
      id: "age",
      type: "number",
      description: "User age",
      name: "Age",
      xs: 12,
      sm: 6,
      md: 3,
      listable: true,
    },
    {
      id: "birthDate",
      type: "string",
      description: "When he was born",
      name: "Birth Date",
      xs: 12,
      sm: 6,
      md: 6,
      listable: true,
    },
    {
      id: "car",
      type: "group",
      description: "Information about the user car",
      name: "User car",
      xs: 12,
      value: [
        {
          id: "model",
          type: "enum",
          value: faker.definitions.vehicle?.model || [],
          description: "Lorem ipsum",
          name: "Model",
          xs: 12,
          sm: 5,
        },
        {
          id: "manufacturer",
          type: "enum",
          value: faker.definitions.vehicle?.manufacturer || [],
          description: "Lorem ipsum",
          name: "Manufacturer",
          xs: 12,
          sm: 5,
        },
        {
          id: "color",
          type: "string",
          description: "Lorem ipsum",
          name: "Color",
          xs: 12,
          sm: 2,
        },
        {
          id: "type",
          type: "multienum",
          value: faker.definitions.vehicle?.type || [],
          description: "Lorem ipsum",
          name: "Type",
          xs: 12,
          sm: 3,
        },
        {
          id: "vin",
          type: "string",
          description: "Lorem ipsum",
          name: "VIN",
          xs: 12,
          sm: 5,
        },
        {
          id: "vrm",
          type: "string",
          description: "Lorem ipsum",
          name: "VRM",
          xs: 12,
          sm: 4,
        },
      ],
    },
    {
      id: "quantity",
      type: "number",
      description: "Lorem ipsum",
      name: "Q",
      xs: 12,
      sm: 2,
      md: 1,
    },
    {
      id: "available",
      type: "boolean",
      description: "Lorem ipsum",
      name: "Available",
      xs: 12,
      sm: 2,
    },
    {
      id: "currency",
      type: "string",
      description: "Lorem ipsum",
      name: "Unit Price Currency",
      xs: 12,
      sm: 3,
    },
    {
      id: "tradeDate",
      type: "string",
      description: "Lorem ipsum",
      name: "Trade date",
      xs: 12,
      sm: 3,
    },
  ],
};

export interface MockInstance {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  age: number;
  birthDate: string;
  car: {
    model: string;
    manufacturer: string;
    color: string;
    type: string[];
    vin: string;
    vrm: string;
  };
  quantity: number;
  available: boolean;
  currency: string;
  tradeDate: string;
}

const mockFieldValue = {
  id: () => faker.datatype.number({ min: 1000, max: 100000 }).toString(),
  firstName: faker.name.firstName,
  middleName: faker.name.middleName,
  lastName: faker.name.lastName,
  gender: faker.name.gender,
  age: () => faker.datatype.number({ min: 20, max: 60 }),
  birthDate: () => faker.datatype.datetime().toString(),
  model: faker.vehicle.model,
  manufacturer: faker.vehicle.manufacturer,
  color: faker.vehicle.color,
  type: () => {
    const array = newArrayWithSize(faker.datatype.number({ min: 2, max: 5 }), 0);
    const result = array.map(() => faker.vehicle.type());
    return [...new Set(result)];
  },
  vin: faker.vehicle.vin,
  vrm: faker.vehicle.vrm,
  quantity: () => faker.datatype.number({ min: 1, max: 9 }),
  available: faker.datatype.boolean,
  currency: () => "MXN",
  tradeDate: () => "Thu Jul 21 2022 22:44:10 GMT+0200 (Central European Summer Time)",
};

export const createModelInstance = <T extends BasicModelInstance>(model: Model, seed = 100): T => {
  faker.seed(seed);
  const obj = {};

  model.fields.forEach((field) => {
    let value;
    if (field.type === "group") {
      value = {};
      field.value.forEach((groupField) => {
        value[groupField.id] = getModelFieldValue(groupField);
      });
    } else {
      value = getModelFieldValue(field);
    }

    obj[field.id] = value;
  });

  return obj as T;
};

const getModelFieldValue = ({ id, type }: ModelField) => {
  const fieldGenerator = mockFieldValue[id];
  if (!fieldGenerator) {
    const generator = faker.datatype[type];
    return generator ? generator() : faker.datatype.string();
  }
  return fieldGenerator();
};
