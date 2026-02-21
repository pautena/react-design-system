export const markdownMuiOptions = {
  overrides: {
    h1: {
      component: "h1",
      props: {
        className: "mb-3 text-xl font-semibold",
      },
    },
    h2: {
      component: "h2",
      props: {
        className: "mb-3 text-lg font-semibold",
      },
    },
    h3: {
      component: "h3",
      props: {
        className: "mb-2 text-base font-medium",
      },
    },
    h4: {
      component: "h4",
      props: {
        className: "mb-2 text-sm font-medium",
      },
    },
    p: {
      component: "p",
      props: {
        className: "mb-3",
      },
    },
    a: {
      component: "a",
      props: {
        className: "text-primary underline underline-offset-2",
      },
    },
    li: {
      component: "li",
    },
  },
};
