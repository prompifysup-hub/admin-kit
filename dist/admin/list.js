import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, } from "./breadcrumb";
import { FilterContext, LinkBase, ListBase, Translate, useGetResourceLabel, useHasDashboard, useResourceContext, useResourceDefinition, useTranslate, } from "ra-core";
import { cn } from "../lib/utils";
import { CreateButton } from "./create-button";
import { ExportButton } from "./export-button";
import { ListPagination } from "./list-pagination";
import { FilterButton, FilterForm } from "./filter-form";
/**
 * A complete list page with breadcrumb, title, filters, and pagination.
 *
 * It fetches a list of records from the data provider (via ra-core hooks),
 * puts them in a ListContext, renders a default layout (breadcrumb, title,
 * action buttons, inline filters, pagination), then renders its children
 * (usually a <DataTable>).
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/ List documentation}
 *
 * @example
 * import { DataTable, List } from "./index";
 *
 * export const UserList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="id" />
 *       <DataTable.Col source="name" />
 *       <DataTable.Col source="username" />
 *       <DataTable.Col source="email" />
 *       <DataTable.Col source="address.street" />
 *       <DataTable.Col source="phone" />
 *       <DataTable.Col source="website" />
 *       <DataTable.Col source="company.name" />
 *     </DataTable>
 *   </List>
 * );
 */
export const List = (props) => {
    const { debounce, disableAuthentication, disableSyncWithLocation, exporter, filter, filterDefaultValues, loading, perPage, queryOptions, resource, sort, storeKey, ...rest } = props;
    return (_jsx(ListBase, { debounce: debounce, disableAuthentication: disableAuthentication, disableSyncWithLocation: disableSyncWithLocation, exporter: exporter, filter: filter, filterDefaultValues: filterDefaultValues, loading: loading, perPage: perPage, queryOptions: queryOptions, resource: resource, sort: sort, storeKey: storeKey, children: _jsx(ListView, { ...rest }) }));
};
/**
 * The view component for List pages with layout and UI.
 *
 * @internal
 */
export const ListView = (props) => {
    const { disableBreadcrumb, filters, pagination = defaultPagination, title, children, actions, } = props;
    const translate = useTranslate();
    const resource = useResourceContext();
    if (!resource) {
        throw new Error("The ListView component must be used within a ResourceContextProvider");
    }
    const getResourceLabel = useGetResourceLabel();
    const resourceLabel = getResourceLabel(resource, 2);
    const finalTitle = title !== undefined
        ? title
        : translate("ra.page.list", {
            name: resourceLabel,
        });
    const { hasCreate } = useResourceDefinition({ resource });
    const hasDashboard = useHasDashboard();
    return (_jsxs(_Fragment, { children: [!disableBreadcrumb && (_jsxs(Breadcrumb, { children: [hasDashboard && (_jsx(BreadcrumbItem, { children: _jsx(LinkBase, { to: "/", children: _jsx(Translate, { i18nKey: "ra.page.dashboard", children: "Home" }) }) })), _jsx(BreadcrumbPage, { children: resourceLabel })] })), _jsxs(FilterContext.Provider, { value: filters, children: [_jsxs("div", { className: "flex justify-between items-start flex-wrap gap-2 my-2", children: [_jsx("h2", { className: "text-2xl font-bold tracking-tight mb-2", children: finalTitle }), actions ?? (_jsxs("div", { className: "flex items-center gap-2", children: [filters && filters.length > 0 ? _jsx(FilterButton, {}) : null, hasCreate ? _jsx(CreateButton, {}) : null, _jsx(ExportButton, {})] }))] }), _jsx(FilterForm, {}), _jsx("div", { className: cn("my-2", props.className), children: children }), pagination] })] }));
};
const defaultPagination = _jsx(ListPagination, {});
export const Empty = () => {
    const translate = useTranslate();
    const resource = useResourceContext();
    const getResourceLabel = useGetResourceLabel();
    const { hasCreate } = useResourceDefinition({ resource });
    if (!resource) {
        return null;
    }
    const resourceName = translate(`resources.${resource}.forcedCaseName`, {
        smart_count: 0,
        _: resource ? getResourceLabel(resource, 0) : undefined,
    });
    const emptyMessage = translate("ra.page.empty", { name: resourceName });
    const inviteMessage = translate("ra.page.invite");
    return (_jsxs("div", { className: "flex min-h-[50vh] flex-col items-center justify-center gap-2 text-center", children: [_jsx("h2", { className: "text-2xl font-semibold", children: translate(`resources.${resource}.empty`, {
                    _: emptyMessage,
                }) }), hasCreate ? (_jsxs(_Fragment, { children: [_jsx("p", { className: "text-muted-foreground", children: translate(`resources.${resource}.invite`, {
                            _: inviteMessage,
                        }) }), _jsx(CreateButton, {})] })) : null] }));
};
