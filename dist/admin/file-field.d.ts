import type { HTMLAttributes } from "react";
import type { ExtractRecordPaths, HintedString } from "ra-core";
import type { FieldProps } from "../lib/field.type.ts";
/**
 * Displays a downloadable file link with customizable title and target.
 *
 * This field renders file URLs as clickable links that can open in new tabs or trigger downloads.
 * It supports arrays of files and prevents click bubbling in DataTable rows.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/filefield/ FileField documentation}
 *
 * @example
 * import { FileField } from './file-field';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
export declare const FileField: <RecordType extends Record<string, any> = Record<string, any>>(props: FileFieldProps<RecordType>) => import("react").JSX.Element | null;
export interface FileFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends FieldProps<RecordType>, HTMLAttributes<HTMLElement> {
    /**
     * The source of the link to the file, for an array of files.
     */
    src?: string;
    title?: HintedString<ExtractRecordPaths<RecordType>>;
    target?: HTMLAnchorElement["target"];
    download?: HTMLAnchorElement["download"];
}
