import { HeaderLayout, HeaderLayoutError } from "./header-layout";
import { render, screen } from "../tests/testing-library";
import Typography from "@mui/material/Typography";
import { expectProgressIndicator } from "../tests/assertions";

describe("HeaderLayout", () => {
  const renderComponent = ({
    loading,
    fetching,
    error,
  }: { loading?: boolean; fetching?: boolean; error?: HeaderLayoutError } = {}) => {
    return render(
      <HeaderLayout
        title="Lorem ipsum"
        subtitle="Dolor sit amet"
        loading={loading}
        fetching={fetching}
        error={error}
      >
        <Typography>Test content</Typography>
      </HeaderLayout>,
    );
  };

  it("should render the header", () => {
    renderComponent();

    expect(screen.getByRole("heading", { level: 1, name: /lorem ipsum/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /dolor sit amet/i })).toBeInTheDocument();
  });

  it("should render a main element", () => {
    renderComponent();

    expect(screen.getByRole("main")).toBeVisible();
  });

  it("should render the content", () => {
    renderComponent();

    expect(screen.getByText(/test content/i)).toBeVisible();
  });

  it("should render a loading indicator if loading=true", () => {
    renderComponent({ loading: true });

    expectProgressIndicator();
  });

  describe("fetching=true", () => {
    it("should render a loading indicator", () => {
      renderComponent({ fetching: true });

      expectProgressIndicator();
    });

    it("should render the content", () => {
      renderComponent({ fetching: true });

      expect(screen.getByText(/test content/i)).toBeVisible();
    });
  });

  describe("error", () => {
    it("should not render the error if there is no one", () => {
      renderComponent({ error: undefined });

      expect(screen.queryByText(/there has been an error/i)).not.toBeInTheDocument();
    });

    it("should render a title if there is an error without title", () => {
      renderComponent({
        error: {
          message: "Invalid user id",
        },
      });

      expect(screen.queryByText(/there has been an error/i)).toBeVisible();
    });

    it("should render a title if there is an error with title", () => {
      renderComponent({
        error: {
          title: "We had an error",
          message: "Invalid user id",
        },
      });

      expect(screen.queryByText(/we had an error/i)).toBeVisible();
    });

    it("should render the message", () => {
      renderComponent({
        error: {
          title: "We had an error",
          message: "Invalid user id",
        },
      });

      expect(screen.queryByText(/invalid user id/i)).toBeVisible();
    });
  });
});
