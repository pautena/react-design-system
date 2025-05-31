import { ValueBoolean } from "../value-boolean";
import { ValueDatetime } from "../value-datetime";
import { ValueItem } from "../value-item";
import { ValueRating } from "../value-rating";
import { ValueText } from "../value-text";
import { GroupValueCard, type GroupValueCardProps } from "./group-value-card";

export const GroupValueCardDummy = ({
  dense,
  editable,
  ...rest
}: GroupValueCardProps & { editable?: boolean }) => {
  return (
    <GroupValueCard {...rest} dense={dense}>
      <ValueItem xs={12} sm={6} md={4}>
        <ValueText
          editable={editable}
          dense={dense}
          label="Hello world"
          value="Lorem ipsum sit amet"
        />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={2}>
        <ValueBoolean editable={editable} dense={dense} label="Enabled" value />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={3}>
        <ValueText
          editable={editable}
          dense={dense}
          label="Quantity"
          value="1200"
        />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={3}>
        <ValueText
          editable={editable}
          dense={dense}
          label="Currency"
          value="EUR"
        />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={6}>
        <ValueText
          editable={editable}
          dense={dense}
          label="I am Batman"
          value=" Does it come in black? It's ends here. Hero can be anyone"
        />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={3}>
        <ValueText
          editable={editable}
          dense={dense}
          label="Status"
          value="Open"
        />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={3}>
        <ValueText
          editable={editable}
          dense={dense}
          label="Level"
          value="2144"
        />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={3}>
        <ValueRating
          editable={editable}
          dense={dense}
          label="Rating"
          value={3}
        />
      </ValueItem>
      <ValueItem xs={12} sm={6} md={3}>
        <ValueDatetime
          editable={editable}
          dense={dense}
          label="Created at"
          value={new Date(2022, 5, 1)}
          format="yyyy-MM-dd"
        />
      </ValueItem>
    </GroupValueCard>
  );
};
