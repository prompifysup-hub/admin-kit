import * as React from "react";
import type { InputProps } from "ra-core";
/**
 * Creates a list of sub-forms for editing arrays of data embedded inside a record.
 *
 * Use `<ArrayInput>` when you need to edit array fields like order items, tags, or any
 * repeatable embedded data. Requires a form iterator child (typically `<SimpleFormIterator>`)
 * to render and manage individual array items.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/arrayinput/ ArrayInput documentation}
 *
 * @example
 * import {
 *   Edit,
 *   SimpleForm,
 *   TextInput,
 *   NumberInput,
 *   ArrayInput,
 *   SimpleFormIterator,
 * } from './index';
 *
 * const OrderEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="customer" />
 *       <TextInput source="date" type="date" />
 *       <ArrayInput source="items">
 *         <SimpleFormIterator inline>
 *           <TextInput source="name" />
 *           <NumberInput source="price" />
 *           <NumberInput source="quantity" />
 *         </SimpleFormIterator>
 *       </ArrayInput>
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const ArrayInput: (props: ArrayInputProps) => React.JSX.Element;
export interface ArrayInputProps extends Omit<InputProps, "disabled" | "readOnly"> {
    className?: string;
    children: React.ReactNode;
    isFetching?: boolean;
    isLoading?: boolean;
    isPending?: boolean;
}
