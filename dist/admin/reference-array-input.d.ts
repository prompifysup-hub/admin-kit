import * as React from "react";
import type { ReactElement } from "react";
import type { InputProps, UseReferenceArrayInputParams } from "ra-core";
/**
 * Form input for editing arrays of foreign key relationships with autocompletion.
 *
 * This component fetches related records from a reference resource and displays them
 * in a searchable multi-select interface using AutocompleteArrayInput.
 * Use it to edit one-to-many or many-to-many relationships, where the current record
 * has an array of foreign keys to another resource.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referencearrayinput/ ReferenceArrayInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextInput, ReferenceArrayInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <ReferenceArrayInput source="tag_ids" reference="tags" />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const ReferenceArrayInput: (props: ReferenceArrayInputProps) => React.JSX.Element;
export interface ReferenceArrayInputProps extends InputProps, UseReferenceArrayInputParams {
    children?: ReactElement;
}
