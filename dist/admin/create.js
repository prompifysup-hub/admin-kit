import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage, } from "./breadcrumb";
import { LinkBase, CreateBase, Translate, useCreateContext, useCreatePath, useGetResourceLabel, useHasDashboard, useResourceContext, } from "ra-core";
import { cn } from "../lib/utils";
/**
 * A complete create page with breadcrumb, title, and actions.
 *
 * Combines data fetching, form context, and UI layout for creating new records. Renders breadcrumb
 * navigation, page title, and wraps your form components.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/create/ Create documentation}
 *
 * @example
 * import { Create, SimpleForm, TextInput } from './index';
 *
 * export const PostCreate = () => (
 *   <Create>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <TextInput source="body" />
 *     </SimpleForm>
 *   </Create>
 * );
 */
export const Create = ({ actions, children, className, disableBreadcrumb, title, ...rest }) => (_jsx(CreateBase, { ...rest, children: _jsx(CreateView, { actions: actions, className: className, disableBreadcrumb: disableBreadcrumb, title: title, children: children }) }));
/**
 * The view component for Create pages with layout and UI.
 *
 * @internal
 */
export const CreateView = ({ actions, disableBreadcrumb, title, children, className, }) => {
    const context = useCreateContext();
    const resource = useResourceContext();
    if (!resource) {
        throw new Error("The CreateView component must be used within a ResourceContextProvider");
    }
    const getResourceLabel = useGetResourceLabel();
    const listLabel = getResourceLabel(resource, 2);
    const createPath = useCreatePath();
    const listLink = createPath({
        resource,
        type: "list",
    });
    const hasDashboard = useHasDashboard();
    return (_jsxs(_Fragment, { children: [!disableBreadcrumb && (_jsxs(Breadcrumb, { children: [hasDashboard && (_jsx(BreadcrumbItem, { children: _jsx(LinkBase, { to: "/", children: _jsx(Translate, { i18nKey: "ra.page.dashboard", children: "Home" }) }) })), _jsx(BreadcrumbItem, { children: _jsx(LinkBase, { to: listLink, children: listLabel }) }), _jsx(BreadcrumbPage, { children: _jsx(Translate, { i18nKey: "ra.action.create", children: "Create" }) })] })), _jsxs("div", { className: cn("flex justify-between items-start flex-wrap gap-2 my-2", className), children: [_jsx("h2", { className: "text-2xl font-bold tracking-tight", children: title !== undefined ? title : context.defaultTitle }), actions] }), _jsx("div", { className: "my-2", children: children })] }));
};
