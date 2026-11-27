import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, } from "./breadcrumb";
import { LinkBase, ShowBase, Translate, useCreatePath, useHasDashboard, useShowContext, useGetRecordRepresentation, useGetResourceLabel, useResourceContext, useResourceDefinition, } from "ra-core";
import { cn } from "../lib/utils";
import { EditButton } from "./edit-button";
/**
 * A complete show page with breadcrumb, title, and default actions.
 *
 * Combines data fetching and UI layout for displaying record details. Inside, use
 * RecordField to display individual fields with labels.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/show/ Show documentation}
 *
 * @example
 * import { RecordField, NumberField, ReferenceField, Show } from "./index";
 *
 * export const ProductShow = () => (
 *   <Show>
 *     <div className="flex flex-col gap-4">
 *       <RecordField source="reference" />
 *       <RecordField source="category_id">
 *         <ReferenceField source="category_id" reference="categories" />
 *       </RecordField>
 *       <RecordField
 *         source="price"
 *         render={(record) => Intl.NumberFormat().format(record.price)}
 *       />
 *       <RecordField source="size" field={NumberField} />
 *     </div>
 *   </Show>
 * );
 */
export const Show = ({ actions, children, className, disableAuthentication, disableBreadcrumb, id, loading, queryOptions, render, resource, title, }) => (_jsx(ShowBase, { id: id, resource: resource, queryOptions: queryOptions, disableAuthentication: disableAuthentication, render: render, loading: loading, children: _jsx(ShowView, { title: title, actions: actions, className: className, disableBreadcrumb: disableBreadcrumb, children: children }) }));
/**
 * The view component for Show pages with layout and UI.
 *
 * Renders breadcrumb, title, and default actions for show pages. Use Show instead unless you need
 * custom data fetching logic with ShowBase.
 *
 * @example
 * import { ShowBase, ShowView, SimpleShowLayout } from './index';
 *
 * export const PostShow = () => (
 *     <ShowBase>
 *         <ShowView>
 *             <SimpleShowLayout>...</SimpleShowLayout>
 *         </ShowView>
 *     </ShowBase>
 * );
 */
export const ShowView = ({ actions, children, className, disableBreadcrumb, emptyWhileLoading, title, }) => {
    const context = useShowContext();
    const resource = useResourceContext();
    if (!resource) {
        throw new Error("The ShowView component must be used within a ResourceContextProvider");
    }
    const getResourceLabel = useGetResourceLabel();
    const listLabel = getResourceLabel(resource, 2);
    const createPath = useCreatePath();
    const listLink = createPath({
        resource,
        type: "list",
    });
    const getRecordRepresentation = useGetRecordRepresentation(resource);
    const recordRepresentation = getRecordRepresentation(context.record);
    const { hasEdit } = useResourceDefinition({ resource });
    const hasDashboard = useHasDashboard();
    if (context.isLoading || !context.record) {
        return null;
    }
    if (!context.record && emptyWhileLoading) {
        return null;
    }
    return (_jsxs(_Fragment, { children: [!disableBreadcrumb && (_jsxs(Breadcrumb, { children: [hasDashboard && (_jsx(BreadcrumbItem, { children: _jsx(LinkBase, { to: "/", children: _jsx(Translate, { i18nKey: "ra.page.dashboard", children: "Home" }) }) })), _jsx(BreadcrumbItem, { children: _jsx(LinkBase, { to: listLink, children: listLabel }) }), _jsx(BreadcrumbPage, { children: recordRepresentation })] })), _jsxs("div", { className: cn("flex justify-between items-start flex-wrap gap-2 my-2", className), children: [_jsx("h2", { className: "text-2xl font-bold tracking-tight", children: title !== undefined ? title : context.defaultTitle }), actions ?? (_jsx("div", { className: "flex justify-end items-center", children: hasEdit ? _jsx(EditButton, {}) : null }))] }), _jsx("div", { className: "my-2", children: children })] }));
};
