import type { ChoicesProps, InputProps, SupportCreateSuggestionOptions } from "ra-core";
import type { ComponentProps, ReactElement } from "react";
import { FormField } from "./form";
/**
 * Dropdown select input for choosing a single value from a list of options.
 *
 * Use `<SelectInput>` for fields with many possible values (5+) like categories, statuses, or
 * countries. Supports creating new options on the fly with the `create` or `onCreate` props.
 * Wrap in `<ReferenceInput>` to select from related resources.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/selectinput/ SelectInput documentation}
 * @see {@link https://ui.shadcn.com/docs/components/select Select documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextInput, SelectInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <SelectInput
 *         source="category"
 *         choices={[
 *           { id: 'tech', name: 'Tech' },
 *           { id: 'lifestyle', name: 'Lifestyle' },
 *           { id: 'people', name: 'People' },
 *         ]}
 *       />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const SelectInput: (props: SelectInputProps) => import("react").JSX.Element;
export type SelectInputProps = ChoicesProps & Partial<InputProps> & Omit<SupportCreateSuggestionOptions, "handleChange"> & {
    emptyText?: string | ReactElement;
    emptyValue?: any;
    onChange?: (value: string) => void;
} & Omit<ComponentProps<typeof FormField>, "id" | "name" | "children">;
