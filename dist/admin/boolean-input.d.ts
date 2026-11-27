import React from "react";
import { Switch } from "../ui/switch";
/**
 * Toggle switch for boolean (true/false) values.
 *
 * Use `<BooleanInput>` for binary settings like "is published", "is active", or feature flags.
 * Leverages shadcn's Switch component for a native-looking toggle. Note: this input doesn't
 * support `null` values—use `<SelectInput>` for nullable booleans.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/booleaninput/ BooleanInput documentation}
 * @see {@link https://ui.shadcn.com/docs/components/switch Switch documentation}
 *
 * @example
 * import {
 *   Edit,
 *   SimpleForm,
 *   BooleanInput,
 *   TextInput,
 * } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <BooleanInput source="is_published" />
 *       <BooleanInput source="allow_comments" />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const BooleanInput: (props: BooleanInputProps) => React.JSX.Element;
export interface BooleanInputProps {
    className?: string;
    defaultValue?: boolean;
    format?: (value: any) => any;
    helperText?: React.ReactNode;
    label?: React.ReactNode;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onChange?: (value: any) => void;
    onFocus?: React.ComponentProps<typeof Switch>["onFocus"];
    readOnly?: boolean;
    disabled?: boolean;
    parse?: (value: any) => any;
    resource?: string;
    source: string;
    validate?: any;
}
