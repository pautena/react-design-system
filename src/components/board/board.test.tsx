import React from "react";
import { render, screen } from "~/Tests/TestingLibrary";
import { Board } from "./Board";
import { mockMarkdownContent } from "~/Tests/Mocks/Markdown.mock";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Typography } from "@mui/material";

const content = "This is the content";

const content1 = "This is the content 1";
const content2 = "This is the content 2";
const content3 = "This is the content 3";
const arrayContent = [content1, content2, content3];

const mockCopy = () => {
  const copy = vi.fn();
  Object.assign(navigator, {
    clipboard: {
      writeText: copy,
    },
  });
  return { copy };
};

describe("Board", () => {
  const renderComponent = ({
    markdown,
    content,
  }: {
    markdown?: string;
    content?: string | string[];
  }) => {
    const { copy } = mockCopy();
    render(<Board markdown={markdown} content={content} />);

    return { copy };
  };

  it("should render a string content", () => {
    renderComponent({ content });

    expect(screen.getByText(content)).toBeVisible();
  });

  it("should render a array of string content", () => {
    renderComponent({ content: arrayContent });

    expect(screen.getByText(content1)).toBeVisible();
    expect(screen.getByText(content2)).toBeVisible();
    expect(screen.getByText(content3)).toBeVisible();
  });

  it.skip("should render a markdown content", () => {
    renderComponent({ markdown: mockMarkdownContent });

    expect(
      screen.getByRole("heading", { name: "Diu in illa Lavini atque de quoque", level: 5 }),
    ).toBeVisible();
  });

  describe("copy", () => {
    it("should copy the string content to the clipboard if the copy button is clicked", async () => {
      const { copy } = renderComponent({ content });

      await userEvent.click(screen.getByRole("button"));

      expect(copy).toHaveBeenCalledTimes(1);
      expect(copy).toHaveBeenCalledWith(content);
    });

    it("should copy the string array content to the clipboard if the copy button is clicked", async () => {
      const expectedCopy = arrayContent.join("\n");
      const { copy } = renderComponent({ content: arrayContent });

      await userEvent.click(screen.getByRole("button"));

      expect(copy).toHaveBeenCalledTimes(1);
      expect(copy).toHaveBeenCalledWith(expectedCopy);
    });

    it.skip("should copy the markdown content to the clipboard if the copy button is clicked", async () => {
      const { copy } = renderComponent({ markdown: mockMarkdownContent });

      await userEvent.click(screen.getByRole("button"));

      expect(copy).toHaveBeenCalledTimes(1);
      expect(copy).toHaveBeenCalledWith(mockMarkdownContent);
    });

    it("should render the children and copy the string content if it has a custom children", async () => {
      const content = "lorem: ipsum";
      const { copy } = mockCopy();
      render(
        <Board content={content}>
          <Typography variant="h6">row 1</Typography>
          <Typography variant="caption"> row 2</Typography>
          <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
            row 3
          </Typography>
          <Typography variant="body2" fontWeight={700}>
            row 4
          </Typography>
        </Board>,
      );

      expect(screen.getByText(/row 1/i)).toBeVisible();
      expect(screen.getByText(/row 2/i)).toBeVisible();
      expect(screen.getByText(/row 3/i)).toBeVisible();
      expect(screen.getByText(/row 4/i)).toBeVisible();

      await userEvent.click(screen.getByRole("button"));

      expect(copy).toHaveBeenCalledTimes(1);
      expect(copy).toHaveBeenCalledWith(content);
    });
  });
});
