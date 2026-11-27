import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Translate, useTimeout } from "ra-core";
import { Spinner } from "./spinner";
/**
 * Loading indicator used for slow element or page loads.
 *
 * Displays a spinner and customizable loading messages.
 * Automatically shown by the default Layout when page loading takes more than 1 second.
 * Works as a fallback for React Suspense boundaries.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/loading/ Loading documentation}
 */
export const Loading = (props) => {
    const { loadingPrimary = "ra.page.loading", loadingSecondary = "ra.message.loading", delay = 1000, ...rest } = props;
    const oneSecondHasPassed = useTimeout(delay);
    return oneSecondHasPassed ? (_jsx("div", { className: "flex flex-col justify-center items-center h-full", ...rest, children: _jsxs("div", { className: "text-center font-sans color-muted pt-1 pb-1", children: [_jsx(Spinner, { size: "large", className: "width-9 height-9" }), _jsx("h5", { className: "mt-3 text-2xl text-secondary-foreground", children: _jsx(Translate, { i18nKey: loadingPrimary, children: loadingPrimary }) }), _jsx("p", { className: "text-primary", children: _jsx(Translate, { i18nKey: loadingSecondary, children: loadingSecondary }) })] }) })) : null;
};
