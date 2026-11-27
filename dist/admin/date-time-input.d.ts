import * as React from "react";
import type { InputProps } from "ra-core";
/**
 * Date and time picker input for editing datetime values with timezone support.
 *
 * Use `<DateTimeInput>` for timestamps like "created at", "updated at", or scheduled events.
 * Renders a native browser datetime-local picker. Expects and returns ISO 8601 formatted strings
 * (e.g. '2025-11-17T10:10:32.390Z'), automatically converting other formats like Date objects or timestamps.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/datetimeinput/ DateTimeInput documentation}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local MDN documentation for input type="datetime-local"}
 *
 * @example
 * import {
 *   Edit,
 *   SimpleForm,
 *   DateTimeInput,
 *   TextInput,
 * } from './index';
 *
 * const EventEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <DateTimeInput source="starts_at" />
 *       <DateTimeInput source="ends_at" />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const DateTimeInput: ({ className, defaultValue, format, parse, label, helperText, onBlur, onChange, onFocus, source, resource, validate, disabled, readOnly, ...rest }: DateTimeInputProps) => React.JSX.Element;
export type DateTimeInputProps = Omit<InputProps, "defaultValue"> & {
    defaultValue?: string | number | Date;
} & Omit<React.ComponentProps<"input">, "defaultValue" | "type">;
