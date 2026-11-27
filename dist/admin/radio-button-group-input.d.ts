import * as React from "react";
import type { ChoicesProps, InputProps } from "ra-core";
import { RadioGroup } from "../ui/radio-group";
/**
 * Single-select input rendered as a list of radio buttons, arranged vertically or horizontally.
 *
 * Use `<RadioButtonGroupInput>` when you have a small set of options (2-5) that users should
 * see all at once, like status, priority, or category fields. For longer lists, prefer
 * `<SelectInput>`. Set `row` to `true` for horizontal layout.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/radiobuttongroupinput/ RadioButtonGroupInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextInput, RadioButtonGroupInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <RadioButtonGroupInput
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
export declare const RadioButtonGroupInput: (inProps: RadioButtonGroupInputProps) => React.JSX.Element;
export interface RadioButtonGroupInputProps extends Partial<InputProps>, ChoicesProps, Omit<React.ComponentProps<typeof RadioGroup>, "className" | "defaultValue" | "onBlur" | "onChange" | "type"> {
    className?: string;
    row?: boolean;
}
