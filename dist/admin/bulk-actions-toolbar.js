import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useListContext, Translate } from "ra-core";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BulkDeleteButton } from "./bulk-delete-button";
import { SelectAllButton } from "./select-all-button";
import { X } from "lucide-react";
import { BulkExportButton } from "./bulk-export-button";
/**
 * Default children for BulkActionsToolbar. Renders SelectAllButton, BulkExportButton, and BulkDeleteButton.
 *
 * @internal
 */
export function BulkActionsToolbarChildren() {
    return (_jsxs(_Fragment, { children: [_jsx(SelectAllButton, {}), _jsx(BulkExportButton, {}), _jsx(BulkDeleteButton, {})] }));
}
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
export const BulkActionsToolbar = ({ children = _jsx(BulkActionsToolbarChildren, {}), }) => {
    const { selectedIds, onUnselectItems } = useListContext();
    if (!selectedIds?.length) {
        return null;
    }
    const handleUnselectAll = (e) => {
        e.stopPropagation();
        onUnselectItems();
    };
    return (_jsxs(Card, { className: "flex flex-col gap-2 md:gap-6 md:flex-row items-stretch sm:items-center p-2 px-4 w-[90%] sm:w-fit mx-auto fixed bottom-2 left-0 right-0 z-10 bg-zinc-100 dark:bg-zinc-900", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "ghost", className: "has-[>svg]:px-0", onClick: handleUnselectAll, children: _jsx(X, {}) }), _jsx("span", { className: "text-sm text-muted-foreground", children: _jsxs(Translate, { i18nKey: "ra.action.bulk_actions", options: { smart_count: selectedIds.length }, children: [selectedIds.length, " rows selected"] }) })] }), children] }));
};
