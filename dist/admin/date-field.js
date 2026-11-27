import { jsx as _jsx } from "react/jsx-runtime";
import { genericMemo, useFieldValue, useTranslate } from "ra-core";
const DateFieldImpl = (inProps) => {
    const { empty, locales, options, showTime = false, showDate = true, transform = defaultTransform, source, record, defaultValue, ...rest } = inProps;
    const translate = useTranslate();
    if (!showTime && !showDate) {
        throw new Error("<DateField> cannot have showTime and showDate false at the same time");
    }
    const value = useFieldValue({ source, record, defaultValue });
    if (value == null || value === "") {
        if (!empty) {
            return null;
        }
        return (_jsx("span", { ...rest, children: typeof empty === "string" ? translate(empty, { _: empty }) : empty }));
    }
    const date = transform(value);
    let dateString = "";
    if (date) {
        if (showTime && showDate) {
            dateString = toLocaleStringSupportsLocales
                ? date.toLocaleString(locales, options)
                : date.toLocaleString();
        }
        else if (showDate) {
            // If input is a date string (e.g. '2022-02-15') without time and time zone,
            // force timezone to UTC to fix issue with people in negative time zones
            // who may see a different date when calling toLocaleDateString().
            const dateOptions = options ??
                (typeof value === "string" && value.length <= 10
                    ? { timeZone: "UTC" }
                    : undefined);
            dateString = toLocaleStringSupportsLocales
                ? date.toLocaleDateString(locales, dateOptions)
                : date.toLocaleDateString();
        }
        else if (showTime) {
            dateString = toLocaleStringSupportsLocales
                ? date.toLocaleTimeString(locales, options)
                : date.toLocaleTimeString();
        }
    }
    return _jsx("span", { ...rest, children: dateString });
};
DateFieldImpl.displayName = "DateFieldImpl";
/**
 * Displays a date value with locale-specific formatting.
 *
 * This field automatically formats dates according to the user's locale using Intl.DateTimeFormat.
 * It supports showing date only, time only, or both, with custom locales and formatting options.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/datefield/ DateField documentation}
 *
 * @example
 * import {
 *   List,
 *   DataTable,
 *   DateField,
 * } from './index';
 *
 * const PostList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="title" />
 *       <DataTable.Col>
 *         <DateField source="published_at" />
 *       </DataTable.Col>
 *       <DataTable.Col>
 *         <DateField source="updated_at" showTime />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 */
export const DateField = genericMemo(DateFieldImpl);
const defaultTransform = (value) => value instanceof Date
    ? value
    : typeof value === "string" || typeof value === "number"
        ? new Date(value)
        : undefined;
const toLocaleStringSupportsLocales = (() => {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    try {
        new Date().toLocaleString("i");
    }
    catch (error) {
        return error instanceof RangeError;
    }
    return false;
})();
