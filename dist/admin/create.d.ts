import type { CreateBaseProps } from "ra-core";
import type { ReactNode } from "react";
export type CreateProps = CreateViewProps & CreateBaseProps;
/**
 * A complete create page with breadcrumb, title, and actions.
 *
 * Combines data fetching, form context, and UI layout for creating new records. Renders breadcrumb
 * navigation, page title, and wraps your form components.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/create/ Create documentation}
 *
 * @example
 * import { Create, SimpleForm, TextInput } from './index';
 *
 * export const PostCreate = () => (
 *   <Create>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <TextInput source="body" />
 *     </SimpleForm>
 *   </Create>
 * );
 */
export declare const Create: ({ actions, children, className, disableBreadcrumb, title, ...rest }: CreateProps) => import("react").JSX.Element;
export type CreateViewProps = {
    actions?: ReactNode;
    disableBreadcrumb?: boolean;
    children: ReactNode;
    className?: string;
    title?: ReactNode | string | false;
};
/**
 * The view component for Create pages with layout and UI.
 *
 * @internal
 */
export declare const CreateView: ({ actions, disableBreadcrumb, title, children, className, }: CreateViewProps) => import("react").JSX.Element;
