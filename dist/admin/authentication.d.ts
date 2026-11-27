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
export declare const AuthCallback: () => import("react").JSX.Element;
export interface AuthErrorProps {
    className?: string;
    title?: string;
    message?: string;
}
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
export declare const AuthError: (props: AuthErrorProps) => import("react").JSX.Element;
