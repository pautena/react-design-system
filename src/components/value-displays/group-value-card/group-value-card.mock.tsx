import React from "react";
import { ValueBoolean } from "../value-boolean/value-boolean";
import { ValueRating } from "../value-rating";
import { ValueText } from "../value-text";
import { GroupValueCard, GroupValueCardProps, GroupValueItem } from "./group-value-card";

export const GroupValueCardDummy = ({ dense, ...rest }: GroupValueCardProps) => {
  return (
    <GroupValueCard {...rest} dense={dense}>
      <GroupValueItem xs={12} sm={6} md={4}>
        <ValueText dense={dense} label="Hello world" value="Lorem ipsum sit amet" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={2}>
        <ValueBoolean dense={dense} label="Enabled" value />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText dense={dense} label="Quantity" value="1200" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText dense={dense} label="Currency" value="EUR" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={6}>
        <ValueText
          dense={dense}
          label="I am Batman"
          value=" Does it come in black? It's ends here. Hero can be anyone"
        />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText dense={dense} label="Status" value="Open" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueText dense={dense} label="Level" value="2144" />
      </GroupValueItem>
      <GroupValueItem xs={12} sm={6} md={3}>
        <ValueRating dense={dense} label="Rating" value={3} />
      </GroupValueItem>
    </GroupValueCard>
  );
};
