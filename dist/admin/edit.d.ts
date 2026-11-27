import type { EditBaseProps } from "ra-core";
import type { ReactNode } from "react";
export interface EditProps extends EditViewProps, EditBaseProps {
}
/**
 * A complete edit page with breadcrumb, title, and default actions.
 *
 * Combines data fetching, form context, and UI layout for editing records. Renders breadcrumb,
 * page title, Show and Delete buttons, and wraps your form components.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/edit/ Edit documentation}
 *
 * @example
 * import { Edit, SimpleForm, BooleanInput, TextInput } from "./index";
 * import { required } from 'ra-core';
 *
 * export const CustomerEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="first_name" validate={required()} />
 *       <TextInput source="last_name" validate={required()} />
 *       <TextInput source="email" validate={required()} />
 *       <BooleanInput source="has_ordered" />
 *       <TextInput multiline source="notes" />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const Edit: ({ actions, children, className, disableBreadcrumb, title, mutationMode, ...rest }: EditProps) => import("react").JSX.Element;
export interface EditViewProps {
    disableBreadcrumb?: boolean;
    title?: ReactNode | string | false;
    actions?: ReactNode;
    children?: ReactNode;
    className?: string;
}
/**
 * The view component for Edit pages with layout and UI.
 *
 * @internal
 */
export declare const EditView: ({ disableBreadcrumb, title, actions, className, children, }: EditViewProps) => import("react").JSX.Element | null;
