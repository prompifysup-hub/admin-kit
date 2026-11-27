import type { FallbackProps } from "react-error-boundary";
import type { HtmlHTMLAttributes, ErrorInfo } from "react";
/**
 * App-wide error component for displaying error boundaries.
 *
 * Displays the error message and a back button.
 * In development mode, also shows the component stack trace in an expandable accordion.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/error Error documentation}
 */
export declare const Error: (props: InternalErrorProps & {}) => import("react").JSX.Element;
interface InternalErrorProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "title">, FallbackProps {
    className?: string;
    errorInfo?: ErrorInfo;
}
export interface ErrorProps extends Pick<FallbackProps, "error"> {
    errorInfo?: ErrorInfo;
}
export {};
