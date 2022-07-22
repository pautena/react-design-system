import React from "react";
import userEvent from "@testing-library/user-event";
import { AlertColor, Box, Button } from "@mui/material";
import { render, screen, waitForElementToBeRemoved } from "../../tests";
import { NotificationCenterProvider } from "./notification-center.provider";
import {
  NotificationCenterProviderUndefinedError,
  useNotificationCenter,
} from "./notification-center.context";

describe("NotificationCenterProvider", () => {
  const renderComponent = ({ autoHideDuration }: { autoHideDuration?: number } = {}) => {
    const TestContent = () => {
      const { show, hide } = useNotificationCenter();

      const showNotification = (severity: AlertColor) => {
        show({
          title: "An alert!",
          message: "Lorem ipsum sit amet",
          severity,
        });
      };
      return (
        <>
          <Button onClick={() => showNotification("success")}>success</Button>
          <Button onClick={() => showNotification("info")}>info</Button>
          <Button onClick={() => showNotification("warning")}>warning</Button>
          <Button onClick={() => showNotification("error")}>error</Button>
          <Button onClick={hide}>hide</Button>
        </>
      );
    };

    return render(
      <NotificationCenterProvider autoHideDuration={autoHideDuration}>
        <TestContent />
      </NotificationCenterProvider>,
    );
  };

  it("would render an alert with a title and message when a notification is requested", async () => {
    renderComponent();

    await userEvent.click(screen.getByRole("button", { name: /info/i }));

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(/an alert/i)).toBeInTheDocument();
    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeInTheDocument();
  });

  it("would hide the notification if close is called", async () => {
    renderComponent();

    await userEvent.click(screen.getByRole("button", { name: /info/i }));
    await userEvent.click(screen.getByRole("button", { name: /hide/i }));

    await waitForElementToBeRemoved(() => screen.getByRole("alert"));
  });

  it("would hide the notification if the user clicks the close button", async () => {
    renderComponent();

    await userEvent.click(screen.getByRole("button", { name: /info/i }));
    await userEvent.click(screen.getByTestId("CloseIcon"));

    await waitForElementToBeRemoved(() => screen.getByRole("alert"));
  });

  it("would hide the notification after a delay", async () => {
    renderComponent({ autoHideDuration: 100 });

    await userEvent.click(screen.getByRole("button", { name: /info/i }));

    await waitForElementToBeRemoved(() => screen.getByRole("alert"));
  });

  describe("notification severity", () => {
    it.each([
      ["success", /success/i],
      ["info", /info/i],
      ["warning", /warning/i],
      ["error", /error/i],
    ])(
      "would render a notification with severity %s",
      async (severity: string, buttonName: RegExp) => {
        renderComponent();

        await userEvent.click(screen.getByRole("button", { name: buttonName }));

        expect(screen.getByRole("alert", { name: severity })).toBeInTheDocument();
      },
    );
  });
});

describe("useNotificationCenter", () => {
  it("would throw an error if the component is not wrapped by a NotificationCenterContext.Provider", () => {
    const FailingComponent = () => {
      useNotificationCenter();
      return <Box>FailingComponent</Box>;
    };

    try {
      render(<FailingComponent />);
      fail();
    } catch (err) {
      expect(err).toStrictEqual(NotificationCenterProviderUndefinedError);
    }
  });
});
