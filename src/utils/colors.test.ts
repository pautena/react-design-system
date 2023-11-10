import { stringToHexColor } from "./colors";

describe("stringToHexColor", () => {
  it.each([
    ["#9b3242", "lorem ipsum"],
    ["#df4d92", "test1"],
    ["#36e3cd", "I'm batman"],
  ])("it should return %s if value is %s", (hex: string, value: string) => {
    expect(stringToHexColor(value)).toBe(hex);
  });
});
