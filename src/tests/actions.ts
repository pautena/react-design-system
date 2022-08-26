import userEvent from "@testing-library/user-event";
import { screen } from "./testing-library";

export const selectOption = async (element: HTMLElement, option: string) => {
  await userEvent.click(element);
  await userEvent.click(screen.getByRole("option", { name: option }));
};
