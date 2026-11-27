import * as React from "react";
import type { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import type { ChoicesProps, InputProps, SupportCreateSuggestionOptions } from "ra-core";
/**
 * Form control that lets users choose a value from a list using a dropdown with autocompletion.
 *
 * This input allows editing scalar values with a searchable dropdown interface. It supports creating
 * new choices on the fly and works seamlessly inside ReferenceInput for editing foreign key relationships.
 * Unless the input is required, users can empty it with the clear button next to the dropdown arrow.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/autocompleteinput/ AutocompleteInput documentation}
 *
 * @example
 * import {
 *   Create,
 *   SimpleForm,
 *   AutocompleteInput,
 *   ReferenceInput,
 * } from './index';
 *
 * const PostCreate = () => (
 *   <Create>
 *     <SimpleForm>
 *       <AutocompleteInput
 *         source="category"
 *         choices={[
 *           { id: 'tech', name: 'Tech' },
 *           { id: 'lifestyle', name: 'Lifestyle' },
 *           { id: 'people', name: 'People' },
 *         ]}
 *       />
 *       <ReferenceInput label="Author" source="author_id" reference="authors">
 *         <AutocompleteInput />
 *       </ReferenceInput>
 *     </SimpleForm>
 *   </Create>
 * );
 */
export declare const AutocompleteInput: (props: Omit<InputProps, "source"> & Omit<SupportCreateSuggestionOptions, "handleChange" | "filter"> & Partial<Pick<InputProps, "source">> & ChoicesProps & {
    className?: string;
    disableValue?: string;
    filterToQuery?: (searchText: string) => any;
    translateChoice?: boolean;
    placeholder?: string;
    inputText?: React.ReactNode | ((option: any | undefined) => React.ReactNode);
} & Pick<PopoverPrimitive.Root.Props, "modal">) => React.JSX.Element;
