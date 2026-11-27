/**
 * A pagination component with page numbers and rows per page selector.
 *
 * Displays pagination controls with previous/next buttons, page numbers with ellipsis for long lists,
 * and a dropdown to change items per page. Works with List context.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/listpagination/ ListPagination documentation}
 *
 * @example
 * import { List, ListPagination } from './index';
 *
 * const PostListPagination = () => (
 *   <ListPagination rowsPerPageOptions={[5, 10, 25]} />
 * );
 *
 * export const PostList = () => (
 *   <List pagination={<PostListPagination />}>
 *     // ...
 *   </List>
 * );
 */
export declare const ListPagination: ({ rowsPerPageOptions, className, }: {
    rowsPerPageOptions?: number[];
    className?: string;
}) => import("react").JSX.Element;
