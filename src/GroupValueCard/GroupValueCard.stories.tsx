import type { Meta, StoryObj } from "@storybook/react";
import { ValueBoolean } from "../components/value-boolean";
import { ValueContent } from "../components/value-content";
import { ValueDatetime } from "../components/value-datetime";
import { ValueImage } from "../components/value-image";
import { ValueRating } from "../components/value-rating";
import { ValueText } from "../components/value-text";
import workInProgressImg from "../stories/assets/work-in-progress.jpg";
import { withLocalizationProvider, withPadding } from "../storybook";
import { TablePlaceholder } from "../tests/table-placeholder";
import { ValueItem } from "../ValueItem";
import GroupValueCard from "./GroupValueCard";

export default {
  title: "Data Display/GroupValueCard",
  component: GroupValueCard,
  decorators: [withPadding(2), withLocalizationProvider],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GroupValueCard>;
type Story = StoryObj<typeof GroupValueCard>;

export const Default: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    children: [
      <ValueItem key="1" size={{ xs: 12, sm: 6, md: 4 }}>
        <ValueText label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>,
      <ValueItem key="2" size={{ xs: 12, sm: 6, md: 2 }}>
        <ValueBoolean label="Enabled" value />
      </ValueItem>,
      <ValueItem key="3" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText label="Quantity" value="1200" />
      </ValueItem>,
      <ValueItem key="4" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText label="Currency" value="EUR" />
      </ValueItem>,
      <ValueItem key="5" size={{ xs: 12, sm: 6, md: 6 }}>
        <ValueText
          label="I am Batman"
          value=" Does it come in black? It's ends here. Hero can be anyone"
        />
      </ValueItem>,
      <ValueItem key="6" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText label="Status" value="Open" />
      </ValueItem>,
      <ValueItem key="7" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText label="Level" value="2144" />
      </ValueItem>,
      <ValueItem key="8" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueRating label="Rating" value={3} />
      </ValueItem>,
      <ValueItem key="9" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueDatetime
          label="Created at"
          value={new Date(2022, 5, 1)}
          format="yyyy-MM-dd"
        />
      </ValueItem>,
    ],
  },
};

export const Dense: Story = {
  args: {
    ...Default.args,
    dense: true,
    children: [
      <ValueItem key="1" size={{ xs: 12, sm: 6, md: 4 }}>
        <ValueText dense label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>,
      <ValueItem key="2" size={{ xs: 12, sm: 6, md: 2 }}>
        <ValueBoolean dense label="Enabled" value />
      </ValueItem>,
      <ValueItem key="3" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense label="Quantity" value="1200" />
      </ValueItem>,
      <ValueItem key="4" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense label="Currency" value="EUR" />
      </ValueItem>,
      <ValueItem key="5" size={{ xs: 12, sm: 6, md: 6 }}>
        <ValueText
          dense
          label="I am Batman"
          value=" Does it come in black? It's ends here. Hero can be anyone"
        />
      </ValueItem>,
      <ValueItem key="6" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense label="Status" value="Open" />
      </ValueItem>,
      <ValueItem key="7" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense label="Level" value="2144" />
      </ValueItem>,
      <ValueItem key="8" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueRating dense label="Rating" value={3} />
      </ValueItem>,
      <ValueItem key="9" size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueDatetime
          dense
          label="Created at"
          value={new Date(2022, 5, 1)}
          format="yyyy-MM-dd"
        />
      </ValueItem>,
    ],
  },
};

export const WihtoutSubtitle: Story = {
  args: {
    title: "Hello world",
    children: [
      <ValueItem key="1" size={{ xs: 12, sm: 6, md: 4 }}>
        <ValueText label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>,
      <ValueItem key="2" size={{ xs: 12, sm: 6, md: 2 }}>
        <ValueBoolean label="Enabled" value />
      </ValueItem>,
    ],
  },
};

export const WithImage: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    centered: true,
    children: (
      <ValueItem size={{ xs: 12 }} bordered={false}>
        <ValueImage label="Lorem ipsum" value={workInProgressImg} />
      </ValueItem>
    ),
  },
};

export const WithDataTable: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    children: (
      <ValueItem size={{ xs: 12 }} bordered={false}>
        <ValueContent label="lorem ipsum">
          <TablePlaceholder />
        </ValueContent>
      </ValueItem>
    ),
  },
};
