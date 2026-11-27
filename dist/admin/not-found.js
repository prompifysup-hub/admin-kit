import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { History, SearchX } from "lucide-react";
import { Translate, useAuthenticated } from "ra-core";
import { Button } from "../ui/button";
import { Loading } from "./loading";
/**
 * Fallback page displayed when no route matches the current URL.
 */
export const NotFound = () => {
    const { isPending } = useAuthenticated();
    if (isPending) {
        return _jsx(Loading, {});
    }
    return (_jsxs("div", { className: "flex min-h-[50vh] flex-1 flex-col items-center justify-center gap-2 text-center", children: [_jsx(SearchX, { className: "h-16 w-16 text-muted-foreground" }), _jsx("h1", { className: "text-2xl font-semibold", children: _jsx(Translate, { i18nKey: "ra.page.not_found" }) }), _jsx("p", { className: "max-w-xl text-muted-foreground", children: _jsx(Translate, { i18nKey: "ra.message.not_found" }) }), _jsxs(Button, { className: "mt-3 cursor-pointer", onClick: goBack, children: [_jsx(History, {}), _jsx(Translate, { i18nKey: "ra.action.back" })] })] }));
};
function goBack() {
    window.history.go(-1);
}
