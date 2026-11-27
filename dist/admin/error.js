import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useResetErrorBoundaryOnLocationChange, Translate } from "ra-core";
import { CircleAlert, History } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../ui/accordion";
import { Button } from "../ui/button";
/**
 * App-wide error component for displaying error boundaries.
 *
 * Displays the error message and a back button.
 * In development mode, also shows the component stack trace in an expandable accordion.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/error Error documentation}
 */
export const Error = (props) => {
    const { error, errorInfo, resetErrorBoundary, ...rest } = props;
    useResetErrorBoundaryOnLocationChange(resetErrorBoundary);
    const errorMessage = typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string"
        ? (error.message ?? "")
        : typeof error === "string"
            ? error
            : String(error ?? "Unknown error");
    return (_jsxs("div", { className: "flex flex-col items-center md:p-16 gap-5", ...rest, children: [_jsxs("h1", { className: "flex items-center text-3xl mt-5 mb-5 gap-3", role: "alert", children: [_jsx(CircleAlert, { className: "w-2em h-2em" }), _jsx(Translate, { i18nKey: "ra.page.error" })] }), _jsx("div", { children: _jsx(Translate, { i18nKey: "ra.message.error" }) }), process.env.NODE_ENV !== "production" && (_jsxs(_Fragment, { children: [_jsx(Accordion, { multiple: true, className: "mt-1 p-2 bg-secondary w-full lg:w-150", children: _jsxs(AccordionItem, { value: "error", children: [_jsx(AccordionTrigger, { className: "py-2", children: _jsx(Translate, { i18nKey: errorMessage, children: errorMessage }) }), _jsx(AccordionContent, { className: "whitespace-pre-wrap pt-1", children: _jsx("pre", { className: "text-xls", children: errorInfo?.componentStack }) })] }) }), _jsx("p", { className: "text-center ", children: "Need help with this error? Try the following:" }), _jsx("div", { children: _jsxs("ul", { className: "list-disc", children: [_jsxs("li", { children: ["Check the", " ", _jsx("a", { className: "text-primary underline-offset-4 hover:underline", href: "https://marmelab.com/shadcn-admin-kit/docs", children: "shadcn-admin-kit documentation" })] }), _jsxs("li", { children: ["Search on", " ", _jsx("a", { className: "text-primary underline-offset-4 hover:underline", href: "https://stackoverflow.com/questions/tagged/shadcn-admin-kit", children: "StackOverflow" }), " ", "for community answers"] }), _jsxs("li", { children: ["Get help from the core team via", " ", _jsx("a", { className: "text-primary underline-offset-4 hover:underline", href: "https://marmelab.com/shadcn-admin-kit/", children: "Shadcn Enterprise Edition" })] })] }) })] })), _jsx("div", { className: "mt-8", children: _jsxs(Button, { onClick: goBack, children: [_jsx(History, {}), _jsx(Translate, { i18nKey: "ra.action.back" })] }) })] }));
};
function goBack() {
    window.history.go(-1);
}
