import { HeaderLayout, HeaderLayoutError } from "./header-layout";
import { fireEvent, render, screen } from "../tests/testing-library";
import { Content } from "../content";
import { Header } from "../header";
import Typography from "@mui/material/Typography";
import { expectProgressIndicator } from "../tests/assertions";
import { Route, Routes, useParams } from "react-router-dom";
import { linkedTabs } from "../header/header.dummy";
import { TestRouterId } from "../tests/components";

describe("HeaderLayout", () => {
  const renderComponent = ({
    loading,
    fetching,
    error,
  }: { loading?: boolean; fetching?: boolean; error?: HeaderLayoutError } = {}) => {
    return render(
      <HeaderLayout loading={loading} fetching={fetching} error={error}>
        <Header title="Lorem ipsum" subtitle="Dolor sit amet" />
        <Content>
          <Typography>Test content</Typography>
        </Content>
      </HeaderLayout>,
    );
  };

  const renderNavigationComponent = () => {
    render(
      <Routes>
        <Route
          path="/*"
          element={
            <HeaderLayout>
              <Header
                title="Lorem ipsum"
                subtitle="Dolor sit amet"
                tabs={linkedTabs}
                tabsMode="navigation"
              />
              <Content>
                <Routes>
                  <Route path="/tab/:id" element={<TestRouterId />} />
                  <Route path="/other" element={<Typography>Panel: other</Typography>} />
                  <Route path="/another" element={<Typography>Panel: another</Typography>} />
                  <Route path="/:id/subtab" element={<Typography>Panel: subtab</Typography>} />
                </Routes>
              </Content>
            </HeaderLayout>
          }
        />
      </Routes>,
      {
        router: "memory",
        historyOptions: {
          initialEntries: ["/other"],
        },
      },
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

    describe("navigation router", () => {
      it("should render all tabs", () => {
        renderNavigationComponent();

        linkedTabs.forEach((tab) => {
          expect(screen.getByRole("tab", { name: tab.label })).toBeVisible();
        });
      });

      it("should render the tab content when is clicked", () => {
        renderNavigationComponent();

        fireEvent.click(screen.getByRole("tab", { name: /tab 2/i }));
        expect(screen.getByText(/router id: tab2/i)).toBeVisible();

        fireEvent.click(screen.getByRole("tab", { name: "Other" }));
        expect(screen.getByText(/panel: other/i)).toBeVisible();

        fireEvent.click(screen.getByRole("tab", { name: /another/i }));
        expect(screen.getByText(/panel: another/i)).toBeVisible();

        fireEvent.click(screen.getByRole("tab", { name: /subtab/i }));
        expect(screen.getByText(/panel: subtab/i)).toBeVisible();
      });
    });
  });
});
