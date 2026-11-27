import type { HTMLAttributes } from "react";
import type { ChoicesProps } from "ra-core";
import type { FieldProps } from "../lib/field.type.ts";
export declare const SelectField: {
    <RecordType extends Record<string, any> = Record<string, any>>(props: SelectFieldProps<RecordType>): import("react").JSX.Element | null;
    displayName: string;
};
export interface SelectFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends Omit<ChoicesProps, "disableValue" | "createValue" | "createHintValue">, FieldProps<RecordType>, HTMLAttributes<HTMLSpanElement> {
}
