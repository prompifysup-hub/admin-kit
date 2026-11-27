import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { useBulkDeleteController, useGetResourceLabel, useResourceContext, useResourceTranslation, } from "ra-core";
import { cn } from "../lib/utils";
/**
 * A button that deletes multiple selected records at once.
 *
 * Allows to delete selected records in a DataTable. Use within
 * the bulkActionsButtons prop of DataTable or inside BulkActionsToolbar.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/bulkdeletebutton/ BulkDeleteButton documentation}
 *
 * @example
 * import { BulkDeleteButton, BulkExportButton, DataTable, List } from './index';
 *
 * export const PostList = () => (
 *   <List>
 *     <DataTable
 *       bulkActionsButtons={
 *         <>
 *           <BulkExportButton />
 *           <BulkDeleteButton />
 *         </>
 *       }
 *     >
 *       ...
 *     </DataTable>
 *   </List>
 * );
 */
export const BulkDeleteButton = ({ icon = defaultIcon, label: labelProp, className, ...props }) => {
    // Prompify: ask first, then delete immediately (no undo window that a reload would lose).
    const { handleDelete: deleteNow, isPending } = useBulkDeleteController({ mutationMode: "pessimistic", ...props });
    const handleDelete = () => {
        if (!window.confirm("Delete the selected items? This cannot be undone."))
            return;
        deleteNow();
    };
    const resource = useResourceContext(props);
    const getResourceLabel = useGetResourceLabel();
    const label = useResourceTranslation({
        resourceI18nKey: resource
            ? `resources.${resource}.action.delete`
            : undefined,
        baseI18nKey: "ra.action.delete",
        options: {
            name: resource ? getResourceLabel(resource, 1) : undefined,
        },
        userText: labelProp,
    });
    return (_jsxs(Button, { variant: "destructive", type: "button", onClick: handleDelete, disabled: isPending, "aria-label": typeof label === "string" ? label : undefined, className: cn("h-9", className), children: [icon, label] }));
};
const defaultIcon = _jsx(Trash, {});
