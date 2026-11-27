import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LinkBase, Translate, useHandleAuthCallback, useTranslate, } from "ra-core";
import { CircleAlert, LockIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../ui/button";
import { Loading } from "./loading";
/**
 * A standalone page to be used as a redirection target for external authentication services (e.g. OAuth)
 *
 * It displays a loading indicator while processing the authentication response,
 * then redirects to the admin app or shows an error message if authentication fails.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/security/ Security documentation}
 *
 * @example
 * import { Admin } from "./index";
 * import MyAuthCallbackPage from './MyAuthCallbackPage';
 * const App = () => (
 *     <Admin authCallbackPage={MyAuthCallbackPage} authProvider={authProvider}>
 *         ...
 *     </Admin>
 * );
 */
export const AuthCallback = () => {
    const { error } = useHandleAuthCallback();
    if (error) {
        return (_jsx(AuthError, { message: error ? error.message : undefined }));
    }
    return _jsx(Loading, {});
};
/**
 * Authentication error page displayed when authentication fails.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/security/ Security documentation}
 *
 * @example
 * import { Admin } from "./index";
 * import MyAuthErrorPage from './MyAuthErrorPage';
 * const App = () => (
 *   <Admin authenticationError={MyAuthErrorPage} authProvider={authProvider}>
 *     ...
 *   </Admin>
 * );
 */
export const AuthError = (props) => {
    const { className, title = "ra.page.error", message = "ra.message.auth_error", ...rest } = props;
    const translate = useTranslate();
    return (_jsxs("div", { className: cn("flex flex-col justify-center items-center h-full", className), ...rest, children: [_jsxs("h1", { className: "flex items-center text-3xl my-5 gap-3", role: "alert", children: [_jsx(CircleAlert, { className: "w-2em h-2em" }), _jsx(Translate, { i18nKey: title })] }), _jsx("p", { className: "my-5", children: translate(message, { _: message }) }), _jsxs(Button, { render: _jsx(LinkBase, { to: "/login" }), nativeButton: false, children: [_jsx(LockIcon, {}), " ", translate("ra.auth.sign_in", { _: "Sign in" })] })] }));
};
