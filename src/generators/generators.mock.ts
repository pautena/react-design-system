import { Model, ModelField } from "./generators.model";
import { faker } from "@faker-js/faker";

export const mockModel: Model = {
  fields: [
    {
      id: "firstName",
      type: "string",
      description: "User first name",
      name: "First name",
      xs: 12,
      sm: 6,
      md: 4,
    },
    {
      id: "middleName",
      type: "string",
      description: "User middle name",
      name: "Middle name",
      xs: 12,
      sm: 6,
      md: 4,
    },
    {
      id: "lastName",
      type: "string",
      description: "User last name",
      name: "Last name",
      xs: 12,
      sm: 6,
      md: 4,
    },
    {
      id: "gender",
      type: "string",
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
    },
    {
      id: "birthDate",
      type: "string",
      description: "When he was born",
      name: "Birth Date",
      xs: 12,
      sm: 6,
      md: 6,
    },
    {
      id: "car",
      type: "group",
      description: "Information about the user car",
      name: "User car",
      value: [
        {
          id: "model",
          type: "string",
          description: "Lorem ipsum",
          name: "Model",
          xs: 12,
          sm: 5,
        },
        {
          id: "manufacturer",
          type: "string",
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
          type: "string",
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

const mockFieldValue = {
  firstName: faker.name.firstName,
  middleName: faker.name.middleName,
  lastName: faker.name.lastName,
  gender: faker.name.gender,
  age: () => faker.datatype.number({ min: 20, max: 60 }),
  birthDate: () => faker.datatype.datetime().toString(),
  model: faker.vehicle.model,
  manufacturer: faker.vehicle.manufacturer,
  color: faker.vehicle.color,
  type: faker.vehicle.type,
  vin: faker.vehicle.vin,
  vrm: faker.vehicle.vrm,
  quantity: () => faker.datatype.number({ min: 1, max: 9 }),
  available: faker.datatype.boolean,
  currency: () => "MXN",
  tradeDate: () => "Thu Jul 21 2022 22:44:10 GMT+0200 (Central European Summer Time)",
};

export const createModelInstance = (model: Model, seed = 100) => {
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

  return obj;
};

const getModelFieldValue = ({ id, type }: ModelField) => {
  const fieldGenerator = mockFieldValue[id];
  if (!fieldGenerator) {
    const generator = faker.datatype[type];
    return generator ? generator() : faker.datatype.string();
  }
  return fieldGenerator();
};
