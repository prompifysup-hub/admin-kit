import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from "react";
import { useCanAccess, useCreatePath, useGetResourceLabel, useHasDashboard, useResourceDefinitions, useTranslate, LinkBase, useMatch, useDefaultTitle, } from "ra-core";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar, } from "../ui/sidebar";
import { Skeleton } from "../ui/skeleton";
import { House, List, Shell } from "lucide-react";
/**
 * Navigation sidebar displaying menu items, allowing users to navigate between different sections of the application.
 *
 * The sidebar can collapse to an icon-only view and renders as a collapsible drawer on mobile devices.
 * It automatically includes links to the dashboard (if defined) and all list views defined in Resource components.
 *
 * Included in the default Layout component
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/appsidebar AppSidebar documentation}
 * @see {@link https://ui.shadcn.com/docs/components/sidebar shadcn/ui Sidebar component}
 * @see layout.tsx
 */
export function AppSidebar() {
    // The <Admin title="…"> of the app (Prompify templates set the business name there).
    const title = useDefaultTitle();
    const hasDashboard = useHasDashboard();
    const resources = useResourceDefinitions();
    const { openMobile, setOpenMobile } = useSidebar();
    const handleClick = () => {
        if (openMobile) {
            setOpenMobile(false);
        }
    };
    return (_jsxs(Sidebar, { variant: "floating", collapsible: "icon", children: [_jsx(SidebarHeader, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsxs(SidebarMenuButton, { render: _jsx(LinkBase, { to: "/" }), className: "data-[slot=sidebar-menu-button]:!p-1.5", children: [_jsx(Shell, { className: "!size-5" }), _jsx("span", { className: "text-base font-semibold", children: title })] }) }) }) }), _jsx(SidebarContent, { children: _jsx(SidebarGroup, { children: _jsx(SidebarGroupContent, { children: _jsxs(SidebarMenu, { children: [hasDashboard ? (_jsx(DashboardMenuItem, { onClick: handleClick })) : null, Object.keys(resources)
                                    .filter((name) => resources[name].hasList)
                                    .map((name) => (_jsx(ResourceMenuItem, { name: name, onClick: handleClick }, name)))] }) }) }) }), _jsx(SidebarFooter, {})] }));
}
/**
 * Menu item for the dashboard link in the sidebar.
 *
 * This component renders a sidebar menu item that links to the dashboard page.
 * It displays as active when the user is on the dashboard route.
 *
 * @example
 * <DashboardMenuItem onClick={handleClick} />
 */
export const DashboardMenuItem = ({ onClick }) => {
    const translate = useTranslate();
    const label = translate("ra.page.dashboard", {
        _: "Dashboard",
    });
    const match = useMatch({ path: "/", end: true });
    return (_jsx(SidebarMenuItem, { children: _jsxs(SidebarMenuButton, { render: _jsx(LinkBase, { to: "/", onClick: onClick }), isActive: !!match, children: [_jsx(House, {}), label] }) }));
};
/**
 * Menu item for a resource link in the sidebar.
 *
 * This component renders a sidebar menu item that links to a resource's list view.
 * It checks permissions using canAccess and displays as active when the user is viewing that resource.
 * The component icon and label are derived from the resource definition.
 *
 * @example
 * <ResourceMenuItem key={name} name="posts" onClick={handleClick} />
 */
export const ResourceMenuItem = ({ name, onClick, }) => {
    const { canAccess, isPending } = useCanAccess({
        resource: name,
        action: "list",
    });
    const resources = useResourceDefinitions();
    const getResourceLabel = useGetResourceLabel();
    const createPath = useCreatePath();
    const to = createPath({
        resource: name,
        type: "list",
    });
    const match = useMatch({ path: to, end: false });
    if (isPending) {
        return _jsx(Skeleton, { className: "h-8 w-full" });
    }
    if (!resources || !resources[name] || !canAccess)
        return null;
    return (_jsx(SidebarMenuItem, { children: _jsxs(SidebarMenuButton, { render: _jsx(LinkBase, { to: to, state: { _scrollToTop: true }, onClick: onClick }), isActive: !!match, children: [resources[name].icon ? createElement(resources[name].icon) : _jsx(List, {}), getResourceLabel(name, 2)] }) }));
};
