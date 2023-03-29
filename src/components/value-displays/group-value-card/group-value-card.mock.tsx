import React from "react";
import { ValueBoolean } from "../value-boolean/value-boolean";
import { ValueRating } from "../value-rating";
import { ValueText } from "../value-text";
import { GroupValueCard, GroupValueCardProps, GroupValueItem } from "./group-value-card";

export const GroupValueCardDummy = (props: GroupValueCardProps) => {
  return (
    <GroupValueCard {...props}>
      <GroupValueItem xs={12} sm={6} md={4}>
        <ValueText label="Hello world" value="Lorem ipsum sit amet" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={2}>
        <ValueBoolean label="Enabled" value />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText label="Quantity" value="1200" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText label="Currency" value="EUR" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={6}>
        <ValueText
          label="I am Batman"
          value=" Does it come in black? It's ends here. Hero can be anyone"
        />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText label="Status" value="Open" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText label="Level" value="2144" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueRating label="Rating" value={3} />
      </GroupValueItem>
    </GroupValueCard>
  );
};
