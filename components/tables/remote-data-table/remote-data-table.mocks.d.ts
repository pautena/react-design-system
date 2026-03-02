import { QuerySpecField, RemoteDataTableColumn } from './remote-data-table';
/**
 * Mock item type for testing and stories
 */
export type MockItem = {
    id: string;
    name: string;
    status: "Active" | "Inactive" | "Archived";
    createdAt: string;
};
/**
 * Basic columns for testing (no custom cell rendering)
 */
export declare const mockColumnsBasic: RemoteDataTableColumn<MockItem>[];
/**
 * Full-featured columns for stories (with sorting, custom cells, and widths)
 */
export declare const mockColumnsFull: RemoteDataTableColumn<MockItem>[];
/**
 * Query fields for filter builder
 */
export declare const mockQueryFields: QuerySpecField[];
/**
 * Generates mock items for testing
 */
export declare const buildMockItems: (count: number) => MockItem[];
/**
 * Default mock dataset (48 items)
 */
export declare const mockItems: MockItem[];
