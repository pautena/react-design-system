import React from "react";
import { QueryContainer, QueryContainerError, QueryContainerSuccess } from "./query-container";
import { render, screen } from "~/tests/testing-library";
import { Typography } from "@mui/material";
import { expectProgressIndicator } from "~/tests/assertions";

describe("QueryContainer", () => {
  const renderComponent = ({
    fetching = false,
    loading = false,
    error = undefined,
    success = undefined,
  }: {
    fetching?: boolean;
    loading?: boolean;
    error?: QueryContainerError;
    success?: QueryContainerSuccess;
  } = {}) => {
    return render(
      <QueryContainer fetching={fetching} loading={loading} error={error} success={success}>
        <Typography>children content</Typography>
      </QueryContainer>,
    );
  };

  describe("fetching", () => {
    it("should render a loading indicator", () => {
      renderComponent({ fetching: true });

      expectProgressIndicator();
    });

    it("should render the children", () => {
      renderComponent({ fetching: true });

      expect(screen.getByText(/children content/i)).toBeVisible();
    });
  });

  describe("loading", () => {
    it("should render a loading indicator", () => {
      renderComponent({ loading: true });

      expectProgressIndicator();
    });

    it("shouldn't render the children", () => {
      renderComponent({ loading: true });

      expect(screen.queryByText(/children content/i)).not.toBeInTheDocument();
    });
  });

  describe("error", () => {
    it("should render an error alert", () => {
      renderComponent({ error: { message: "Internal error" } });

      expect(screen.getByRole("alert")).toHaveAttribute("aria-describedby", "error");
    });

    it("should render the error message if error is defined", () => {
      renderComponent({ error: { message: "Internal error" } });

      expect(screen.getByText(/internal error/i)).toBeInTheDocument();
    });

    it("should render the error title if error.name is defined", () => {
      renderComponent({ error: { name: "Internal error", message: "There was an error" } });

      expect(screen.getByRole("heading", { name: /internal error/i })).toBeInTheDocument();
    });

    it("shouldn't render the error title if error is defined but the error.name not", () => {
      renderComponent({ error: { message: "Internal error" } });

      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });
  });

  describe("success", () => {
    it("should render a success alert", () => {
      renderComponent({ success: { message: "Item added" } });

      expect(screen.getByRole("alert")).toHaveAttribute("aria-describedby", "success");
    });

    it("should render the success message if success is defined", () => {
      renderComponent({ success: { message: "Item added" } });

      expect(screen.getByText(/item added/i)).toBeInTheDocument();
    });

    it("should render the success title if success.name is defined", () => {
      renderComponent({
        success: { name: "Item added", message: "The item has been added successfully" },
      });

      expect(screen.getByRole("heading", { name: /item added/i })).toBeInTheDocument();
    });

    it("shouldn't render the error title if success is defined but the success.name not", () => {
      renderComponent({ success: { message: "Item added" } });

      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });
    //TODO validate the severity of the alert

    it("should render the content", () => {
      renderComponent({ success: { message: "Item added" } });

      expect(screen.getByText(/children content/i)).toBeInTheDocument();
    });
  });

  it("should render the children if isFetching is false and there is no defined error", () => {
    renderComponent({ fetching: false, error: undefined });

    expect(screen.getByText(/children content/i)).toBeInTheDocument();
  });
});
