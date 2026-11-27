import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Download } from "lucide-react";
import { useBulkExport, useGetResourceLabel, useResourceContext, useResourceTranslation, } from "ra-core";
import { Button } from "../ui/button";
/**
 * Export the selected rows
 *
 * To be used inside the <DataTable bulkActionsButtons> prop.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/bulkexportbutton/ BulkExportButton documentation}
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
export const BulkExportButton = ({ icon = defaultIcon, label: labelProp, onClick, ...props }) => {
    const bulkExport = useBulkExport(props);
    const resource = useResourceContext(props);
    const getResourceLabel = useGetResourceLabel();
    const label = useResourceTranslation({
        resourceI18nKey: resource
            ? `resources.${resource}.action.export`
            : undefined,
        baseI18nKey: "ra.action.export",
        options: {
            name: resource ? getResourceLabel(resource, 1) : undefined,
        },
        userText: labelProp,
    });
    const handleClick = (event) => {
        bulkExport();
        onClick?.(event);
    };
    return (_jsxs(Button, { onClick: handleClick, role: "button", variant: "outline", size: "sm", className: "flex items-center gap-2 h-9", "aria-label": typeof label === "string" ? label : undefined, ...sanitizeRestProps(props), children: [icon, label] }));
};
const defaultIcon = _jsx(Download, { className: "h-4 w-4" });
const sanitizeRestProps = ({ resource: _resource, exporter: _exporter, onClick: _onClick, label: _label, icon: _icon, meta: _meta, ...rest }) => rest;
