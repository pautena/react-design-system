import { action } from "storybook/actions";
import type { PlaceholderAction } from "./Placeholder";

export const actions: PlaceholderAction[] = [
  {
    id: "add",
    text: "Add",
    href: "/placeholders/add",
  },
  {
    id: "edit",
    text: "Edit",
    onClick: action("on click edit action"),
  },
];
