import type { AnchorHTMLAttributes } from "react";
import * as React from "react";
import type { FieldProps } from "../lib/field.type.ts";
export declare const UrlField: {
    <RecordType extends Record<string, any> = Record<string, any>>(inProps: UrlFieldProps<RecordType>): React.JSX.Element | null;
    displayName: string;
};
export interface UrlFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends FieldProps<RecordType>, AnchorHTMLAttributes<HTMLAnchorElement> {
}
