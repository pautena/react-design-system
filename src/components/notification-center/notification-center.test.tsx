import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Button from "@/components/button";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@/tests/testing-library";
import { mockConsoleError } from "@/tests/mocks";

import {
  NotificationCenterProviderUndefinedError,
  useNotificationCenter,
} from "./notification-center-context";
import { NotificationCenterProvider } from "./notification-center-provider";

describe("NotificationCenterProvider", () => {
  const renderComponent = ({ duration }: { duration?: number } = {}) => {
    const TestContent = () => {
      const { toast } = useNotificationCenter();

      const showNotification = (severity: "success" | "info" | "warning" | "error") => {
        switch (severity) {
          case "success":
            toast.success("An alert!", { description: "Lorem ipsum sit amet" });
            break;
          case "info":
            toast.info("An alert!", { description: "Lorem ipsum sit amet" });
            break;
          case "warning":
            toast.warning("An alert!", { description: "Lorem ipsum sit amet" });
            break;
          case "error":
            toast.error("An alert!", { description: "Lorem ipsum sit amet" });
            break;
        }
      };

      return (
        <>
          <Button onClick={() => showNotification("success")}>success</Button>
          <Button onClick={() => showNotification("info")}>info</Button>
          <Button onClick={() => showNotification("warning")}>warning</Button>
          <Button onClick={() => showNotification("error")}>error</Button>
          <Button onClick={() => toast.dismiss()}>hide</Button>
        </>
      );
    };

    return render(
      <NotificationCenterProvider duration={duration}>
        <TestContent />
      </NotificationCenterProvider>,
    );
  };

  it("would render a notification with a title and message when requested", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: /info/i }));

    expect(await screen.findByText(/an alert/i)).toBeInTheDocument();
    expect(await screen.findByText(/lorem ipsum sit amet/i)).toBeInTheDocument();
  });

  it("would hide the notification if close is called", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: /info/i }));
    await user.click(screen.getByRole("button", { name: /hide/i }));

    await waitForElementToBeRemoved(() => screen.queryByText(/an alert/i));
  });

  it("would hide the notification if the user clicks the close button", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: /info/i }));
    await user.click(screen.getByRole("button", { name: /close/i }));

    await waitForElementToBeRemoved(() => screen.queryByText(/an alert/i));
  });

  it("would hide the notification after a delay", async () => {
    const user = userEvent.setup();
    renderComponent({ duration: 100 });

    await user.click(screen.getByRole("button", { name: /info/i }));

    await waitForElementToBeRemoved(() => screen.queryByText(/an alert/i));
  });
});

describe("useNotificationCenter", () => {
  mockConsoleError();

  it("would throw an error if the component is not wrapped by a NotificationCenterContext.Provider", () => {
    const FailingComponent = () => {
      useNotificationCenter();
      return <div>FailingComponent</div>;
    };

    expect(() => render(<FailingComponent />)).toThrow(
      NotificationCenterProviderUndefinedError,
    );
  });
});
