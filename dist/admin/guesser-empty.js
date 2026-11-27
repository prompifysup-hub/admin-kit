import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileQuestion } from "lucide-react";
import { useTranslate } from "ra-core";
export const GuesserEmpty = ({ title = "ra.guesser.empty.title", message = "ra.guesser.empty.message", }) => {
    const translate = useTranslate();
    const resolvedTitle = typeof title === "string" ? translate(title, { _: title }) : title;
    const resolvedMessage = typeof message === "string" ? translate(message, { _: message }) : message;
    return (_jsxs("div", { className: "flex min-h-[50vh] flex-col items-center justify-center gap-2 text-center", children: [_jsx(FileQuestion, { className: "h-16 w-16 text-muted-foreground" }), _jsx("h2", { className: "text-2xl font-semibold", children: resolvedTitle }), _jsx("p", { className: "text-muted-foreground", children: resolvedMessage })] }));
};
