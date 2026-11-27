import * as React from "react";
import type { InputProps } from "ra-core";
export type TextArrayInputProps = InputProps & {
    className?: string;
    placeholder?: string;
};
/**
 * Form input for editing an array of strings, like tags or email addresses.
 *
 * Renders a text input where values are displayed as removable badges.
 * Users type text and press Enter to add items, or press Backspace
 * when the input is empty to remove the last item.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/textarrayinput/ TextArrayInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextArrayInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextArrayInput source="tags" />
 *       <TextArrayInput source="emails" placeholder="Add an email..." />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const TextArrayInput: (props: TextArrayInputProps) => React.JSX.Element;
