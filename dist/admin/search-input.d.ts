import type { TextInputProps } from "./text-input";
/**
 * Text input with a search icon, designed for filter forms without a label.
 *
 * It automatically uses the 'q' source for full-text search by default.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/searchinput/ SearchInput documentation}
 *
 * @example
 * import { List, DataTable, SearchInput } from './index';
 *
 * const postListFilters = [
 *   <SearchInput source="q" alwaysOn />,
 * ];
 *
 * const PostList = () => (
 *   <List filters={postListFilters}>
 *     <DataTable>
 *       <DataTable.Col source="title" />
 *       <DataTable.Col source="author" />
 *       <DataTable.Col source="published_at" />
 *     </DataTable>
 *   </List>
 * );
 */
export declare const SearchInput: (inProps: SearchInputProps) => import("react").JSX.Element;
export type SearchInputProps = TextInputProps & {
    disableClearable?: boolean;
};
