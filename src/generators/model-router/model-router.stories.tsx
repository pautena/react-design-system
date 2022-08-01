import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { ModelRouter, RequestState } from "./model-router";
import { mockModel, createModelInstance } from "../generators.mock";
import { BrowserRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import { mergeAll } from "ramda";
import { useState } from "react";
import { NotificationCenterProvider } from "../../providers";

const data = [
  createModelInstance(mockModel, 100),
  createModelInstance(mockModel, 101),
  createModelInstance(mockModel, 102),
  createModelInstance(mockModel, 103),
  createModelInstance(mockModel, 104),
];

export default {
  title: "Generators/ModelRouter",
  component: ModelRouter,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelRouter>;

const Template = createTemplate((args: any) => {
  const [data, setData] = useState(args.list.data || []);
  const [addRequestState, setAddRequestState] = useState<RequestState>({ idle: true });
  const [removeRequestState, setRemoveRequestState] = useState<RequestState>({ idle: true });

  const onSubmitAddAction = action("Submit add form");
  const onRequestRemoveAction = action("click remove item option");

  const props = mergeAll([
    args,
    {
      list: {
        data,
        removeRequestState,
        onClickRemoveItem: (item) => {
          setRemoveRequestState({ idle: false, loading: true });
          onRequestRemoveAction(item);

          setTimeout(() => {
            setData((d) => [...d.filter((d) => d !== item)]);
            setRemoveRequestState({ idle: true, loading: false, success: true });
          }, 2000);
        },
      },
      add: {
        request: addRequestState,
        onSubmit: (obj: any) => {
          setAddRequestState({ idle: false, loading: true });
          onSubmitAddAction(obj);

          setTimeout(() => {
            setData((d) => [...d, obj]);
            setAddRequestState({ idle: true, loading: false, success: true });
          }, 2000);
        },
      },
    },
  ]);

  return (
    <NotificationCenterProvider>
      <ModelRouter {...props} />
    </NotificationCenterProvider>
  );
});

export const Default = Template.bind({});
Default.args = {
  modelName: "Items",
  model: mockModel,
  list: {
    data,
  },
};
