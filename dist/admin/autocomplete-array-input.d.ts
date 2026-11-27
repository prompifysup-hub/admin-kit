import * as React from "react";
import type { ChoicesProps, InputProps, SupportCreateSuggestionOptions } from "ra-core";
/**
 * Form control that lets users choose multiple values from a list using a dropdown with autocompletion.
 *
 * This input allows editing array values with a searchable dropdown interface and displays selected items as removable badges.
 * Works seamlessly inside ReferenceArrayInput for creating and editing many-to-many relationships.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/autocompletearrayinput/ AutocompleteArrayInput documentation}
 *
 * @example
 * import {
 *   Create,
 *   SimpleForm,
 *   AutocompleteArrayInput,
 *   ReferenceArrayInput,
 * } from './index';
 *
 * const PostCreate = () => (
 *   <Create>
 *     <SimpleForm>
 *       <AutocompleteArrayInput
 *         source="tags"
 *         choices={[
 *           { id: 'tech', name: 'Tech' },
 *           { id: 'news', name: 'News' },
 *           { id: 'lifestyle', name: 'Lifestyle' },
 *         ]}
 *       />
 *       <ReferenceArrayInput source="tag_ids" reference="tags">
 *         <AutocompleteArrayInput />
 *       </ReferenceArrayInput>
 *     </SimpleForm>
 *   </Create>
 * );
 */
export declare const AutocompleteArrayInput: (props: Omit<InputProps, "source"> & Omit<SupportCreateSuggestionOptions, "handleChange" | "filter"> & Partial<Pick<InputProps, "source">> & ChoicesProps & {
    className?: string;
    disableValue?: string;
    filterToQuery?: (searchText: string) => any;
    translateChoice?: boolean;
    placeholder?: string;
    inputText?: React.ReactNode | ((option: any | undefined) => React.ReactNode);
}) => React.JSX.Element;
