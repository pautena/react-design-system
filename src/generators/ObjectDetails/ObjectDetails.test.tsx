import React from "react";
import { expectModelFieldValue } from "~/Tests/Assertions";
import { render } from "~/Tests/TestingLibrary";
import { mockModel, createModelInstance } from "../Generators.mock";
import { ObjectDetails } from "./ObjectDetails";

describe("ObjectDetails", () => {
  const renderComponent = () => {
    const instance = createModelInstance(mockModel);
    return {
      ...render(<ObjectDetails model={mockModel} instance={instance} />),
      instance,
      model: mockModel,
    };
  };

  it("would render a label/value pair for each detail", () => {
    const { instance, model } = renderComponent();

    model.fields.forEach((detail) => expectModelFieldValue(detail, instance));
  });
});
