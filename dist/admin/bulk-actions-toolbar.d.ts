import type { ReactNode } from "react";
/**
 * Default children for BulkActionsToolbar. Renders SelectAllButton, BulkExportButton, and BulkDeleteButton.
 *
 * @internal
 */
export declare function BulkActionsToolbarChildren(): import("react").JSX.Element;
/**
 * A sticky toolbar that appears when rows are selected in a DataTable.
 *
 * Shows the number of selected rows and provides bulk action buttons. Automatically hidden
 * when no rows are selected. Positioned at the bottom center of the screen.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/bulkactionstoolbar/ BulkActionsToolbar documentation}
 *
 * @example
 * import { BulkActionsToolbar, BulkDeleteButton } from './index';
 *
 * const CustomBulkToolbar = () => (
 *     <BulkActionsToolbar>
 *         <BulkDeleteButton />
 *     </BulkActionsToolbar>
 * );
 *
 * const PostList = () => (
 *   <List>
 *     <DataTable bulkActionsToolbar={<CustomBulkToolbar />}>
 *       ...
 *     </DataTable>
 *   </List>
 * );
 */
export declare const BulkActionsToolbar: ({ children, }: {
    children?: ReactNode;
}) => import("react").JSX.Element | null;
