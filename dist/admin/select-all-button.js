import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Translate, useListContext } from "ra-core";
import { Button } from "../ui/button";
import { cn } from "../lib/utils";
/**
 * A button that selects all records (up to a limit) for the current list.
 *
 * Uses ListContext.getData when available to select across all pages,
 * falling back to onSelectAll otherwise.
 *
 * To be used inside the <DataTable bulkActionsButtons> prop or in BulkActionsToolbar.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/selectallbutton/ SelectAllButton documentation}
 *
 * @example
 * import { BulkActionsToolbar, BulkDeleteButton, SelectAllButton } from './index';
 *
 * const PostBulkActionsToolbar = () => (
 *   <BulkActionsToolbar>
 *     <SelectAllButton />
 *     <BulkDeleteButton />
 *   </BulkActionsToolbar>
 * );
 */
export const SelectAllButton = ({ label = "ra.action.select_all", limit, queryOptions, className, onClick, ...props }) => {
    const [isSelected, setIsSelected] = useState(false);
    const { getData, onSelect, onSelectAll } = useListContext();
    const handleClick = async (event) => {
        if (getData) {
            const records = await getData({
                maxResults: limit,
                meta: queryOptions?.meta,
            });
            onSelect(records?.map((record) => record.id) ?? []);
        }
        else {
            onSelectAll({ limit, queryOptions });
        }
        onClick?.(event);
        setIsSelected(true);
    };
    if (isSelected) {
        return null;
    }
    return (_jsx(Button, { type: "button", variant: "outline", size: "sm", className: cn("h-9", className), onClick: handleClick, ...props, children: _jsx(Translate, { i18nKey: label, children: label }) }));
};
