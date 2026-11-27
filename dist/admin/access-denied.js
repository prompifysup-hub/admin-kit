import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Lock } from "lucide-react";
import { Translate } from "ra-core";
/**
 * Page displayed when the current user doesn't have the permissions to access a page.
 *
 * Used by default by `<Admin accessDenied>`, and can be passed to `<CanAccess accessDenied>`.
 */
export const AccessDenied = () => (_jsxs("div", { className: "flex min-h-[50vh] flex-1 flex-col items-center justify-center gap-2 text-center", children: [_jsx(Lock, { className: "h-16 w-16 text-muted-foreground" }), _jsx("h1", { className: "text-2xl font-semibold", children: _jsx(Translate, { i18nKey: "ra.page.access_denied" }) }), _jsx("p", { className: "max-w-xl text-muted-foreground", children: _jsx(Translate, { i18nKey: "ra.message.access_denied" }) })] }));
