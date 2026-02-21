import { ValueBoolean } from "../components/value-boolean";
import { ValueDatetime } from "../components/value-datetime";
import { ValueItem } from "../components/value-item";
import { ValueRating } from "../components/value-rating";
import { ValueText } from "../components/value-text";
import GroupValueCard, { type GroupValueCardProps } from "./GroupValueCard";

export const GroupValueCardDummy = ({
  dense,
  ...rest
}: GroupValueCardProps) => {
  return (
    <GroupValueCard {...rest} dense={dense}>
      <ValueItem size={{ xs: 12, sm: 6, md: 4 }}>
        <ValueText
          dense={dense}
          label="Hello world"
          value="Lorem ipsum sit amet"
        />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 2 }}>
        <ValueBoolean dense={dense} label="Enabled" value />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense={dense} label="Quantity" value="1200" />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense={dense} label="Currency" value="EUR" />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 6 }}>
        <ValueText
          dense={dense}
          label="I am Batman"
          value=" Does it come in black? It's ends here. Hero can be anyone"
        />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense={dense} label="Status" value="Open" />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueText dense={dense} label="Level" value="2144" />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueRating dense={dense} label="Rating" value={3} />
      </ValueItem>
      <ValueItem size={{ xs: 12, sm: 6, md: 3 }}>
        <ValueDatetime
          dense={dense}
          label="Created at"
          value={new Date(2022, 5, 1)}
          format="yyyy-MM-dd"
        />
      </ValueItem>
    </GroupValueCard>
  );
};
