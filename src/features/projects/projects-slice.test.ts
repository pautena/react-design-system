import { createMockStore } from "../../testing/testing-library";
import projectsData from "./projects-data.json";
import { selectProject } from "./projects-slice";
import { Project } from "./projects.types";

const project: Project = projectsData[0];

describe("Projects slice", () => {
  describe("when the reducer is created", () => {
    it("it has the projects data", () => {
      const store = createMockStore();

      expect(store.getState().projects.projects).toStrictEqual(projectsData);
    });

    it("there is no selectedProject by default", () => {
      const store = createMockStore();

      expect(store.getState().projects.selectedProject).toBeUndefined();
    });
  });

  it("changes the state correctly when selectProject is dispatched", () => {
    const store = createMockStore();
    store.dispatch(selectProject(project));

    expect(store.getState().projects.selectedProject).toStrictEqual(project);
  });
});
