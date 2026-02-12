import { describe, expect, it } from "vitest";
import { buildQuerySpecParams } from "./query-spec-utils";
import type { QuerySpecField, QuerySpecFilter } from "./RemoteDataTable.types";

describe("query-spec-utils", () => {
  describe("buildQuerySpecParams", () => {
    it("normalizes query values for different field types", () => {
      const fields: QuerySpecField[] = [
        { name: "status", label: "Status" },
        { name: "count", label: "Count", type: "number" },
        { name: "archived", label: "Archived", type: "boolean" },
        { name: "archivedAt", label: "Archived at", type: "datetime" },
        { name: "tags", label: "Tags" },
      ];
      const filters: QuerySpecFilter[] = [
        { id: "1", field: "status", op: "eq", value: "Active" },
        { id: "2", field: "count", op: "gte", value: "10" },
        { id: "3", field: "archived", op: "eq", value: "false" },
        { id: "4", field: "archivedAt", op: "isnull", value: "false" },
        { id: "5", field: "tags", op: "in", value: "tag1, tag2" },
      ];

      expect(buildQuerySpecParams(filters, fields)).toEqual({
        status: "Active",
        count__gte: 10,
        archived: false,
        archivedAt__isnull: false,
        tags__in: "tag1,tag2",
      });
    });
  });
});
