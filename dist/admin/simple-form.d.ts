import * as React from "react";
import type { ReactNode } from "react";
import type { FormProps } from "ra-core";
/**
 * A simple form layout with vertical stacking, validation, and default toolbar.
 *
 * Automatically includes a toolbar with Cancel and Save buttons unless you provide a custom toolbar.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/simpleform/ SimpleForm documentation}
 *
 * @example
 * import { Create, SimpleForm, TextInput } from './index';
 *
 * const PostCreate = () => (
 *   <Create>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <TextInput source="body" />
 *     </SimpleForm>
 *   </Create>
 * );
 */
export declare const SimpleForm: ({ children, className, toolbar, ...rest }: SimpleFormProps) => React.JSX.Element;
/**
 * A sticky form toolbar with default Cancel and Save buttons.
 *
 * Provides a consistent action bar for forms that sticks to the bottom of the viewport. By default,
 * renders Cancel and Save buttons, but you can provide custom buttons as children.
 *
 * @example
 * import { FormToolbar, CancelButton, SaveButton } from './index';
 *
 * const CustomToolbar = () => (
 *     <FormToolbar>
 *         <CancelButton />
 *         <SaveButton label="Publish" />
 *     </FormToolbar>
 * );
 */
export declare const FormToolbar: ({ children, className, ...rest }: FormToolbarProps) => React.JSX.Element;
export type SimpleFormProps = {
    children: ReactNode;
    className?: string;
    toolbar?: ReactNode;
} & FormProps;
export interface FormToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}
