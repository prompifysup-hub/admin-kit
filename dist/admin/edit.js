import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { EditBase, LinkBase, Translate, useCreatePath, useEditContext, useGetRecordRepresentation, useGetResourceLabel, useHasDashboard, useResourceContext, useResourceDefinition, } from "ra-core";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, } from "./breadcrumb";
import { cn } from "../lib/utils";
import { ShowButton } from "./show-button";
import { DeleteButton } from "./delete-button";
/**
 * A complete edit page with breadcrumb, title, and default actions.
 *
 * Combines data fetching, form context, and UI layout for editing records. Renders breadcrumb,
 * page title, Show and Delete buttons, and wraps your form components.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/edit/ Edit documentation}
 *
 * @example
 * import { Edit, SimpleForm, BooleanInput, TextInput } from "./index";
 * import { required } from 'ra-core';
 *
 * export const CustomerEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="first_name" validate={required()} />
 *       <TextInput source="last_name" validate={required()} />
 *       <TextInput source="email" validate={required()} />
 *       <BooleanInput source="has_ordered" />
 *       <TextInput multiline source="notes" />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const Edit = ({ actions, children, className, disableBreadcrumb, title, 
// Prompify: write to the database immediately (no 5-second undo window that a reload would lose).
mutationMode = "pessimistic", ...rest }) => (_jsx(EditBase, { mutationMode: mutationMode, ...rest, children: _jsx(EditView, { actions: actions, className: className, disableBreadcrumb: disableBreadcrumb, title: title, children: children }) }));
/**
 * The view component for Edit pages with layout and UI.
 *
 * @internal
 */
export const EditView = ({ disableBreadcrumb, title, actions, className, children, }) => {
    const context = useEditContext();
    const resource = useResourceContext();
    if (!resource) {
        throw new Error("The EditView component must be used within a ResourceContextProvider");
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
    const { hasShow } = useResourceDefinition({ resource });
    const hasDashboard = useHasDashboard();
    if (context.isLoading || !context.record) {
        return null;
    }
    return (_jsxs(_Fragment, { children: [!disableBreadcrumb && (_jsxs(Breadcrumb, { children: [hasDashboard && (_jsx(BreadcrumbItem, { children: _jsx(LinkBase, { to: "/", children: _jsx(Translate, { i18nKey: "ra.page.dashboard", children: "Home" }) }) })), _jsx(BreadcrumbItem, { children: _jsx(LinkBase, { to: listLink, children: listLabel }) }), _jsx(BreadcrumbPage, { children: recordRepresentation })] })), _jsxs("div", { className: cn("flex justify-between items-start flex-wrap gap-2 my-2", className), children: [_jsx("h2", { className: "text-2xl font-bold tracking-tight", children: title !== undefined ? title : context.defaultTitle }), actions ?? (_jsxs("div", { className: "flex justify-end items-center gap-2", children: [hasShow ? _jsx(ShowButton, {}) : null, _jsx(DeleteButton, {})] }))] }), _jsx("div", { className: "my-2", children: children })] }));
};
