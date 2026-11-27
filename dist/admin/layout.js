import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useState } from "react";
import { cn } from "../lib/utils";
import { ErrorBoundary } from "react-error-boundary";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { UserMenu } from "./user-menu";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Notification } from "./notification";
import { AppSidebar } from "./app-sidebar";
import { RefreshButton } from "./refresh-button";
import { LocalesMenuButton } from "./locales-menu-button";
import { Error } from "./error";
import { Loading } from "./loading";
/**
 * The main application layout with sidebar, header, and content area.
 *
 * Renders the app structure with a collapsible sidebar, header with breadcrumb navigation,
 * theme toggle, user menu, and main content area. Includes error boundary and loading states.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/layout/ Layout documentation}
 */
export const Layout = (props) => {
    const [errorInfo, setErrorInfo] = useState(undefined);
    const handleError = (_, info) => {
        setErrorInfo(info);
    };
    return (_jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsxs("main", { className: cn("ml-auto w-full max-w-full", "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]", "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]", "sm:transition-[width] sm:duration-200 sm:ease-linear", "flex h-svh flex-col", "group-data-[scroll-locked=1]/body:h-full", "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"), children: [_jsxs("header", { className: "flex h-16 md:h-12 shrink-0 items-center gap-2 px-4", children: [_jsx(SidebarTrigger, { className: "scale-125 sm:scale-100" }), _jsx("div", { className: "flex-1 flex items-center", id: "breadcrumb" }), _jsx(LocalesMenuButton, {}), _jsx(ThemeModeToggle, {}), _jsx(RefreshButton, {}), _jsx(UserMenu, {})] }), _jsx(ErrorBoundary, { onError: handleError, fallbackRender: ({ error, resetErrorBoundary }) => (_jsx(Error, { error: error, errorInfo: errorInfo, resetErrorBoundary: resetErrorBoundary })), children: _jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx("div", { className: "flex flex-1 flex-col px-4 ", children: props.children }) }) })] }), _jsx(Notification, {})] }));
};
