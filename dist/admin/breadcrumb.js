import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { createPortal } from "react-dom";
import { Separator } from "../ui/separator";
import { Breadcrumb as BaseBreadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbPage, BreadcrumbList, BreadcrumbSeparator, } from "../ui/breadcrumb";
import { buttonVariants } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, } from "../ui/drawer";
import { useIsMobile } from "../hooks/use-mobile";
import { Translate } from "ra-core";
import { cn } from "../lib/utils";
/**
 * A breadcrumb navigation component with mobile drawer support.
 *
 * Renders breadcrumb navigation in the app header via portal. On mobile, shows a drawer with
 * ellipsis for long breadcrumb trails. Use Breadcrumb.Item and Breadcrumb.PageItem as children.
 *
 * CRUD pages already include a Breadcrumb by default; set `disableBreadcrumb` to hide the
 * breadcrumb and/or provide your own.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/breadcrumb/ Breadcrumb documentation}
 * @see {@link https://ui.shadcn.com/docs/components/breadcrumb Breadcrumb UI documentation}
 *
 * @example
 * import { Edit, Breadcrumb, SimpleForm } from "./index";
 * import { LinkBase, RecordRepresentation } from 'ra-core';
 *
 * const PostEdit = () => (
 *   <Edit disableBreadcrumb>
 *     <Breadcrumb>
 *       <Breadcrumb.Item><LinkBase to="/">Home</LinkBase></Breadcrumb.Item>
 *       <Breadcrumb.Item><LinkBase to="/posts">Articles</LinkBase></Breadcrumb.Item>
 *       <Breadcrumb.PageItem>
 *         Edit Article "<RecordRepresentation />"
 *       </Breadcrumb.PageItem>
 *     </Breadcrumb>
 *     <SimpleForm>
 *       ...
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const Breadcrumb = ({ children, ref }) => {
    const breadcrumbPortal = document.getElementById("breadcrumb");
    const isMobile = useIsMobile();
    const [open, setOpen] = React.useState(false);
    if (!breadcrumbPortal)
        return null;
    return createPortal(_jsxs(_Fragment, { children: [_jsx(Separator, { orientation: "vertical", className: "data-[orientation=vertical]:h-4 mr-4" }), _jsx(BaseBreadcrumb, { ref: ref, children: _jsx(BreadcrumbList, { children: isMobile && React.Children.count(children) > 2 ? (_jsxs(React.Fragment, { children: [_jsx(BreadcrumbItem, { children: _jsxs(Drawer, { open: open, onOpenChange: setOpen, children: [_jsx(DrawerTrigger, { "aria-label": "Toggle Menu", children: _jsx(BreadcrumbEllipsis, { className: "h-4 w-4" }) }), _jsxs(DrawerContent, { children: [_jsxs(DrawerHeader, { className: "text-left", children: [_jsx(DrawerTitle, { children: _jsx(Translate, { i18nKey: "ra.navigation.breadcrumb_drawer_title", children: "Navigate to" }) }), _jsx(DrawerDescription, { children: _jsx(Translate, { i18nKey: "ra.navigation.breadcrumb_drawer_instructions", children: "Select a page to navigate to." }) })] }), _jsx("ol", { className: "grid gap-1 px-4", children: React.Children.toArray(children)
                                                        .slice(0, -1)
                                                        .map((item) => item) }), _jsx(DrawerFooter, { className: "pt-4", children: _jsx(DrawerClose, { className: cn(buttonVariants({ variant: "outline" })), children: _jsx(Translate, { i18nKey: "ra.action.close", children: "Close" }) }) })] })] }) }), _jsx(BreadcrumbSeparator, {}), React.Children.toArray(children).slice(-1)] })) : (React.Children.map(children, (child, index) => child && (_jsxs(React.Fragment, { children: [child, index < React.Children.count(children) - 1 ? (_jsx(BreadcrumbSeparator, {})) : null] }, index)))) }) })] }), breadcrumbPortal);
};
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.PageItem = BreadcrumbPage;
export { BreadcrumbItem, BreadcrumbPage };
