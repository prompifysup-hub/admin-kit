import * as React from "react";
import type { InputProps } from "ra-core";
/**
 * Input component for numeric values (integers and floats) with parsing and formatting support.
 *
 * Use `<NumberInput>` for prices, quantities, counts, or any numeric field. Manages a local string
 * state internally so users can type incomplete numbers (e.g. '-' or '0.') before the value is parsed.
 * Supports min/max constraints and step increments.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/numberinput/ NumberInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, NumberInput, TextInput } from './index';
 *
 * const ProductEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="name" />
 *       <NumberInput source="price" step={0.01} min={0} />
 *       <NumberInput source="quantity" min={0} />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const NumberInput: (props: NumberInputProps) => React.JSX.Element;
export interface NumberInputProps extends InputProps, Omit<React.ComponentProps<"input">, "defaultValue" | "onBlur" | "onChange" | "type"> {
    parse?: (value: string) => number;
}
