import { renderFeatureHook,waitFor } from 'testing/testing-library';
import { API } from "aws-amplify";
import {useGetProjectsQuery,useAddProjectMutation,useUpdateProjectMutation} from './projects-api'
import { mocks } from 'testing/mocks';
import { Project } from 'app/base-api';

jest.mock('aws-amplify');


describe("Projects API",()=>{
  describe("useGetProjectsQuery",()=>{
    const renderUseGetProjectsQuery = ({
      data,
      error,
    }: { data?: Project[]; error?: Error } = {}) => {
      if (data) {
        (API.graphql as jest.Mock).mockResolvedValue({data,errors:[]})
      }
      if (error) {
        (API.graphql as jest.Mock).mockRejectedValue({data:null,errors:[error]});
      }

      return renderFeatureHook(() => useGetProjectsQuery());

    };

    describe("when is dispatched", () => {
      it("changes the state correctly", () => {
        const {result:{current:{isLoading,isFetching}}} = renderUseGetProjectsQuery({ data: mocks.projects });

        expect(isLoading).toBeTruthy();
        expect(isFetching).toBeTruthy();
      });
      

      it("makes one http call to brain for each Resource", async () => {
        renderUseGetProjectsQuery({ data: mocks.projects });

        await waitFor(() => {
          expect(API.graphql).toHaveBeenCalledTimes(1);
          expect(API.graphql).toHaveBeenCalledWith("");
        });
      });
    });

    it("changes the state correclty when finishes with success", async () => {
      const renderResult = renderUseGetProjectsQuery({ data: mocks.projects });

      await waitFor(() => {
        const {isSuccess,currentData} = renderResult.result.current;
        expect(isSuccess).toBeTruthy();

        expect(currentData).toStrictEqual(mocks.projects);
      });
    });

    it("changes the state correctly when finishes with an error", async () => {
      const error: Error = { name: "TestError", message: "This is an error" };
      const renderResult = renderUseGetProjectsQuery({ error });

      await waitFor(() => {
        const {isError,error} = renderResult.result.current;
        expect(isError).toBeTruthy();
        expect(error).toStrictEqual(error);
      });
    });
  })


  // describe("useAddProjectMutation",()=>{
    
  // })


  // describe("useUpdateProjectMutation",()=>{
    
  // })
})