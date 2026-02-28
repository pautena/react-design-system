import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { vi } from "vitest";
import Button from "@/components/button";
import { render, screen, waitForElementToBeRemoved } from "@/tests/testing-library";
import { mockConsoleError } from "@/tests/mocks";

import {
  type Notification,
  NotificationCenterContext,
  NotificationCenterProviderUndefinedError,
  useNotificationCenter,
} from "./notification-center-context";
import { useNotifyWhenValueChanges } from "./notification-center-hooks";
import { NotificationCenterProvider } from "./notification-center-provider";

describe("NotificationCenterProvider", () => {
  const renderComponent = ({
    autoHideDuration,
  }: {
    autoHideDuration?: number;
  } = {}) => {
    const TestContent = () => {
      const { show, hide } = useNotificationCenter();

      const showNotification = (severity: Notification["severity"]) => {
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
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    renderComponent({ autoHideDuration: 100 });

    await user.click(screen.getByRole("button", { name: /info/i }));

    vi.advanceTimersByTime(120);
    await waitForElementToBeRemoved(() => screen.queryByText(/an alert/i));
    vi.useRealTimers();
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

describe("useNotifyWhenValueChanges", () => {
  const DUMMY_NOTIFICATION: Notification = {
    title: "Hello World",
    message: "Lorem ipsum sit amet",
    severity: "info",
  };

  const renderHook = ({ to, from }: { to: boolean; from: boolean }) => {
    const show = vi.fn();

    const DummyComponent = () => {
      const [value, setValue] = useState<boolean | undefined>(false);
      useNotifyWhenValueChanges(DUMMY_NOTIFICATION, value, { from, to });

      return (
        <div>
          <Button onClick={() => setValue(undefined)}>undefined</Button>
          <Button onClick={() => setValue(false)}>false</Button>
          <Button onClick={() => setValue(true)}>true</Button>
        </div>
      );
    };

    render(
      <NotificationCenterContext.Provider
        value={{
          show,
          hide: vi.fn(),
        }}
      >
        <DummyComponent />
      </NotificationCenterContext.Provider>,
    );

    return { show };
  };

  const changeValueTo = async (value: "undefined" | "false" | "true") => {
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: value }));
  };

  it("wouldn't call the show method when is rendered", () => {
    const { show } = renderHook({ to: true, from: false });

    expect(show).not.toHaveBeenCalled();
  });

  it("wouldn't call the show method when it changes to a value that is not to", async () => {
    const { show } = renderHook({ to: true, from: false });

    await changeValueTo("false");

    expect(show).not.toHaveBeenCalled();
  });

  it("wouldn't call the show method when value changes from undefined to to", async () => {
    const { show } = renderHook({ to: true, from: false });

    await changeValueTo("undefined");
    await changeValueTo("true");

    expect(show).not.toHaveBeenCalled();
  });

  it("would call the show method when value changes from to to", async () => {
    const { show } = renderHook({ to: true, from: false });

    await changeValueTo("false");
    await changeValueTo("true");

    expect(show).toHaveBeenCalledTimes(1);
    expect(show).toHaveBeenCalledWith(DUMMY_NOTIFICATION);
  });
});
