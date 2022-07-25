import React from "react";
import { render, screen } from "../../tests";
import { mockModel, createModelInstance } from "../generators.mock";
import { ModelField } from "../generators.model";
import { ObjectDetails } from "./object-details";

describe("ObjectDetails", () => {
  const renderComponent = () => {
    const instance = createModelInstance(mockModel);
    return {
      ...render(<ObjectDetails model={mockModel} instance={instance} />),
      instance,
      model: mockModel,
    };
  };

  const assertField = (field: ModelField, instance: object) => {
    const { id, type, name, description } = field;
    const value = instance[id];

    if (type === "group") {
      expect(screen.getByRole("heading", { level: 1, name }));
      expect(screen.getByRole("heading", { level: 2, name: description }));
      field.value.forEach((groupValue) => assertField(groupValue, value));
      return;
    }

    expect(screen.getByRole("label", { name: name })).toBeInTheDocument();
    if (type === "boolean") {
      expect(screen.getByTestId(value ? "CheckIcon" : "CloseIcon")).toBeInTheDocument();
    } else {
      expect(screen.getByText(value)).toBeInTheDocument();
    }
  };

  it("would render a label/value pair for each detail", () => {
    const { instance, model } = renderComponent();

    model.fields.forEach((detail) => assertField(detail, instance));
  });
});
