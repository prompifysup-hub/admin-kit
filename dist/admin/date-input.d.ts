import * as React from "react";
import type { InputProps } from "ra-core";
/**
 * Date picker input for editing date values in "YYYY-MM-DD" format.
 *
 * Use `<DateInput>` for publication dates, deadlines, birthdays, or any date field. Renders
 * a native browser date picker (appearance varies by browser). Automatically handles date parsing
 * from ISO strings, Date objects, or timestamps.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/dateinput/ DateInput documentation}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date MDN documentation for input type="date"}
 *
 * @example
 * import {
 *   Edit,
 *   SimpleForm,
 *   DateInput,
 *   TextInput,
 * } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <DateInput source="published_at" />
 *       <DateInput source="expires_at" />
 *     </SimpleForm>
 *   </Edit>
 * );
 *
 * @example
 * // If the initial value string contains more than a date (e.g. an hour, a timezone),
 * // these details are ignored.
 * <DateInput source="published_at" defaultValue="2021-09-11T20:46:20.000-04:00" />
 * // The input will display '2021-09-11' regardless of the browser timezone.
 *
 * @example
 * // If the initial value is a Date object, DateInput converts it to a string
 * // and ignores the timezone.
 * <DateInput source="published_at" defaultValue={new Date("2021-09-11T20:46:20.000-04:00")} />
 * // The input will display '2021-09-11' regardless of the browser timezone.
 *
 * @example
 * // If you want to manipulate the value from the field to adjust its timezone, use the format prop
 * <DateInput source="published_at" format={value => new Date(value).toISOString().split("T")[0]} />
 * // The input will display the UTC day regardless of the browser timezone.
 *
 * @example
 * // If you want the returned value to be a Date, you must pass a custom parse method
 * // to convert the form value (which is always a date string) back to a Date object.
 * <DateInput source="published_at" parse={val => new Date(val)} />
 */
export declare const DateInput: (props: DateInputProps) => React.JSX.Element;
export type DateInputProps = InputProps & {
    inputClassName?: string;
} & Omit<React.ComponentProps<"input">, "label" | "defaultValue">;
