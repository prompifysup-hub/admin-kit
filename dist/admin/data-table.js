import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, createElement, isValidElement, useCallback } from "react";
import { DataTableBase, DataTableRenderContext, FieldTitle, RecordContextProvider, useDataTableCallbacksContext, useDataTableConfigContext, useDataTableDataContext, useDataTableRenderContext, useDataTableSelectedIdsContext, useDataTableSortContext, useDataTableStoreContext, useGetPathForRecordCallback, useRecordContext, useResourceContext, useStore, useTranslate, useTranslateLabel, useNavigate, } from "ra-core";
import { ArrowDownAZ, ArrowUpZA } from "lucide-react";
import get from "lodash/get";
import { cn } from "../lib/utils";
import { Alert, AlertDescription } from "../ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../ui/table";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../ui/tooltip";
import { ColumnsSelector, ColumnsSelectorItem, } from "./columns-button";
import { NumberField } from "./number-field";
import { BulkActionsToolbar, BulkActionsToolbarChildren, } from "./bulk-actions-toolbar";
const defaultBulkActionButtons = _jsx(BulkActionsToolbarChildren, {});
/**
 * A powerful data table with sorting, selection, and column customization.
 *
 * Displays records in a table with built-in support for column sorting, bulk selection, row clicks,
 * and column visibility controls. Use DataTable.Col to define columns.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/datatable/ DataTable documentation}
 *
 * @example
 * import { List, DataTable, ReferenceField, EditButton } from './index';
 *
 * export const PostList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col label="User">
 *         <ReferenceField source="user_id" reference="users" />
 *       </DataTable.Col>
 *       <DataTable.Col source="title" />
 *       <DataTable.Col>
 *         <EditButton />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export function DataTable(props) {
    const { children, className, rowClassName, bulkActionButtons = defaultBulkActionButtons, bulkActionsToolbar, ...rest } = props;
    const hasBulkActions = !!bulkActionsToolbar || bulkActionButtons !== false;
    const resourceFromContext = useResourceContext(props);
    const storeKey = props.storeKey || `${resourceFromContext}.datatable`;
    const [columnRanks] = useStore(`${storeKey}_columnRanks`);
    const columns = columnRanks
        ? reorderChildren(children, columnRanks)
        : children;
    return (_jsxs(DataTableBase, { hasBulkActions: hasBulkActions, loading: null, empty: _jsx(DataTableEmpty, {}), ...rest, children: [_jsx("div", { className: cn("rounded-md border", className), children: _jsxs(Table, { children: [_jsx(DataTableRenderContext.Provider, { value: "header", children: _jsx(DataTableHead, { children: columns }) }), _jsx(DataTableBody, { rowClassName: rowClassName, children: columns })] }) }), bulkActionsToolbar ??
                (bulkActionButtons !== false && (_jsx(BulkActionsToolbar, { children: isValidElement(bulkActionButtons)
                        ? bulkActionButtons
                        : defaultBulkActionButtons }))), _jsx(DataTableRenderContext.Provider, { value: "columnsSelector", children: _jsx(ColumnsSelector, { children: children }) })] }));
}
DataTable.Col = DataTableColumn;
DataTable.NumberCol = DataTableNumberColumn;
const DataTableHead = ({ children }) => {
    const data = useDataTableDataContext();
    const { hasBulkActions = false } = useDataTableConfigContext();
    const { onSelect } = useDataTableCallbacksContext();
    const selectedIds = useDataTableSelectedIdsContext();
    const handleToggleSelectAll = (checked) => {
        if (!onSelect || !data || !selectedIds)
            return;
        onSelect(checked
            ? selectedIds.concat(data
                .filter((record) => !selectedIds.includes(record.id))
                .map((record) => record.id))
            : // We should only unselect the ids present in the current page
                selectedIds.filter((id) => !data.some((record) => record.id === id)));
    };
    const selectableIds = Array.isArray(data)
        ? data.map((record) => record.id)
        : [];
    return (_jsx(TableHeader, { children: _jsxs(TableRow, { children: [hasBulkActions ? (_jsx(TableHead, { className: "w-8", children: _jsx(Checkbox, { onCheckedChange: handleToggleSelectAll, checked: selectedIds &&
                            selectedIds.length > 0 &&
                            selectableIds.length > 0 &&
                            selectableIds.every((id) => selectedIds.includes(id)), className: "mb-2" }) })) : null, children] }) }));
};
const DataTableBody = ({ children, rowClassName, }) => {
    const data = useDataTableDataContext();
    return (_jsx(TableBody, { children: data?.map((record, rowIndex) => (_jsx(RecordContextProvider, { value: record, children: _jsx(DataTableRow, { className: rowClassName?.(record), children: children }) }, record.id ?? `row${rowIndex}`))) }));
};
const DataTableRow = ({ children, className, }) => {
    const { rowClick, handleToggleItem } = useDataTableCallbacksContext();
    const selectedIds = useDataTableSelectedIdsContext();
    const { hasBulkActions = false } = useDataTableConfigContext();
    const record = useRecordContext();
    if (!record) {
        throw new Error("DataTableRow can only be used within a RecordContext");
    }
    const resource = useResourceContext();
    if (!resource) {
        throw new Error("DataTableRow can only be used within a ResourceContext");
    }
    const navigate = useNavigate();
    const getPathForRecord = useGetPathForRecordCallback();
    const handleToggle = useCallback((event) => {
        event.stopPropagation();
        if (!handleToggleItem)
            return;
        handleToggleItem(record.id, event);
    }, [handleToggleItem, record.id]);
    const handleClick = useCallback(async () => {
        const temporaryLink = typeof rowClick === "function"
            ? rowClick(record.id, resource, record)
            : rowClick;
        const link = isPromise(temporaryLink) ? await temporaryLink : temporaryLink;
        const path = await getPathForRecord({
            record,
            resource,
            link,
        });
        if (path === false || path == null) {
            return;
        }
        navigate(path, {
            state: { _scrollToTop: true },
        });
    }, [record, resource, rowClick, navigate, getPathForRecord]);
    return (_jsxs(TableRow, { onClick: handleClick, className: cn(rowClick !== false && "cursor-pointer", className), children: [hasBulkActions ? (_jsx(TableCell, { className: "flex w-8", onClick: handleToggle, children: _jsx(Checkbox, { checked: selectedIds?.includes(record.id), onClick: handleToggle }) })) : null, children] }, record.id));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPromise = (value) => value && typeof value.then === "function";
const DataTableEmpty = () => {
    return (_jsx(Alert, { children: _jsx(AlertDescription, { children: "No results found." }) }));
};
export function DataTableColumn(props) {
    const renderContext = useDataTableRenderContext();
    switch (renderContext) {
        case "columnsSelector":
            return _jsx(ColumnsSelectorItem, { ...props });
        case "header":
            return _jsx(DataTableHeadCell, { ...props });
        case "data":
            return _jsx(DataTableCell, { ...props });
    }
}
/**
 * Reorder children based on columnRanks
 *
 * Note that columnRanks may be shorter than the number of children
 */
const reorderChildren = (children, columnRanks) => Children.toArray(children).reduce((acc, child, index) => {
    const rank = columnRanks.indexOf(index);
    if (rank === -1) {
        // if the column is not in columnRanks, keep it at the same index
        acc[index] = child;
    }
    else {
        // if the column is in columnRanks, move it to the rank index
        acc[rank] = child;
    }
    return acc;
}, []);
function DataTableHeadCell(props) {
    const { disableSort, source, label, sortByOrder, className, headerClassName, } = props;
    const sort = useDataTableSortContext();
    const { handleSort } = useDataTableCallbacksContext();
    const resource = useResourceContext();
    const translate = useTranslate();
    const translateLabel = useTranslateLabel();
    const { storeKey, defaultHiddenColumns } = useDataTableStoreContext();
    const [hiddenColumns] = useStore(storeKey, defaultHiddenColumns);
    const isColumnHidden = hiddenColumns.includes(source);
    if (isColumnHidden)
        return null;
    const nextSortOrder = sort && sort.field === source
        ? oppositeOrder[sort.order]
        : (sortByOrder ?? "ASC");
    const fieldLabel = translateLabel({
        label: typeof label === "string" ? label : undefined,
        resource,
        source,
    });
    const sortLabel = translate("ra.sort.sort_by", {
        field: fieldLabel,
        field_lower_first: typeof fieldLabel === "string"
            ? fieldLabel.charAt(0).toLowerCase() + fieldLabel.slice(1)
            : undefined,
        order: translate(`ra.sort.${nextSortOrder}`),
        _: translate("ra.action.sort"),
    });
    return (_jsx(TableHead, { className: cn(className, headerClassName), children: handleSort && sort && !disableSort && source ? (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsxs(TooltipTrigger, { render: _jsx(Button, { variant: "ghost", size: "sm", className: "-ml-3 -mr-3 h-8 data-[state=open]:bg-accent cursor-pointer", "data-field": source, onClick: handleSort }), children: [headerClassName?.includes("text-right") ? null : (_jsx(FieldTitle, { label: label, source: source, resource: resource })), sort.field === source ? (sort.order === "ASC" ? (_jsx(ArrowDownAZ, { className: "ml-2 h-6 w-6" })) : (_jsx(ArrowUpZA, { className: "ml-2 h-6 w-6" }))) : null, headerClassName?.includes("text-right") ? (_jsx(FieldTitle, { label: label, source: source, resource: resource })) : null] }), _jsx(TooltipContent, { children: _jsx("p", { children: sortLabel }) })] }) })) : (_jsx(FieldTitle, { label: label, source: source, resource: resource })) }));
}
const oppositeOrder = {
    ASC: "DESC",
    DESC: "ASC",
};
function DataTableCell(props) {
    const { children, render, field, source, className, cellClassName, conditionalClassName, } = props;
    const { storeKey, defaultHiddenColumns } = useDataTableStoreContext();
    const [hiddenColumns] = useStore(storeKey, defaultHiddenColumns);
    const record = useRecordContext();
    const isColumnHidden = hiddenColumns.includes(source);
    if (isColumnHidden)
        return null;
    if (!render && !field && !children && !source) {
        throw new Error("DataTableColumn: Missing at least one of the following props: render, field, children, or source");
    }
    return (_jsx(TableCell, { className: cn("py-1", className, cellClassName, record && conditionalClassName?.(record)), children: children ??
            (render
                ? record && render(record)
                : field
                    ? createElement(field, { source })
                    : get(record, source)) }));
}
export function DataTableNumberColumn(props) {
    const { source, options, locales, className, headerClassName, cellClassName, ...rest } = props;
    return (_jsx(DataTableColumn, { source: source, ...rest, className: className, headerClassName: cn("text-right", headerClassName), cellClassName: cn("text-right", cellClassName), children: _jsx(NumberField, { source: source, options: options, locales: locales }) }));
}
