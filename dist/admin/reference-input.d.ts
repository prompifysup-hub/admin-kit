import type { ReferenceInputBaseProps } from "ra-core";
/**
 * Form input for editing foreign key relationships with autocompletion.
 *
 * This component fetches related records from a reference resource and displays them in a searchable dropdown using AutocompleteInput.
 * Use it to edit many-to-one relationships, where the current record has a foreign key to another resource.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/referenceinput/ ReferenceInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextInput, ReferenceInput } from './index';
 *
 * const ContactEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="first_name" />
 *       <TextInput source="last_name" />
 *       <TextInput source="title" />
 *       <ReferenceInput source="company_id" reference="companies" />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const ReferenceInput: (props: ReferenceInputProps) => import("react").JSX.Element;
export interface ReferenceInputProps extends ReferenceInputBaseProps {
    /**
     * Call validate on the child component instead
     */
    validate?: never;
}
