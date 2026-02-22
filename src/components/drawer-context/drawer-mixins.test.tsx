import { closedMixin, openedMixin } from "./drawer-mixins";

describe("drawer mixins", () => {
  it("opened mixin should match expected shape", () => {
    expect(openedMixin(240)).toStrictEqual({
      overflowX: "hidden",
      width: 240,
    });
  });

  it("closed mixin should match expected shape", () => {
    expect(closedMixin()).toStrictEqual({
      overflowX: "hidden",
      width: 64,
    });
  });
});
