import * as React from "react";
import type { ComponentType, ReactNode, HTMLAttributes } from "react";
import type { InputProps } from "ra-core";
import type { DropzoneOptions, DropzoneInputProps } from "react-dropzone";
/**
 * File upload input with drag-and-drop support and preview capabilities.
 *
 * Use `<FileInput>` for document uploads, images, PDFs, CSV files, or any file attachment field.
 * Powered by react-dropzone with support for multiple files, file type restrictions (accept), and
 * size constraints. Pass a child component (typically `<FileField>`) to render file previews.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/fileinput/ FileInput documentation}
 * @see {@link https://react-dropzone.js.org/ React Dropzone documentation}
 *
 * @example
 * import {
 *   Edit,
 *   SimpleForm,
 *   TextInput,
 *   FileInput,
 *   FileField,
 * } from './index';
 *
 * const DocumentEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <FileInput source="attachments" multiple accept={{ 'image/*': [], 'application/pdf': [] }}>
 *         <FileField source="src" title="title" />
 *       </FileInput>
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export declare const FileInput: (props: FileInputProps) => React.JSX.Element;
export type FileInputProps = Omit<InputProps, "type"> & {
    accept?: DropzoneOptions["accept"];
    className?: string;
    children?: ReactNode;
    labelMultiple?: string;
    labelSingle?: string;
    maxSize?: DropzoneOptions["maxSize"];
    minSize?: DropzoneOptions["minSize"];
    multiple?: DropzoneOptions["multiple"];
    options?: DropzoneOptions;
    onRemove?: (file: any) => void;
    placeholder?: ReactNode;
    removeIcon?: ComponentType<{
        className?: string;
    }>;
    inputProps?: DropzoneInputProps & React.ComponentProps<"input">;
    validateFileRemoval?(file: any): boolean | Promise<boolean>;
};
export interface TransformedFile {
    rawFile: File;
    src: string;
    title: string;
}
/**
 * Preview container for uploaded files in `<FileInput>`, with a remove button.
 *
 * @internal
 */
export declare const FileInputPreview: (props: FileInputPreviewProps) => React.JSX.Element;
export interface FileInputPreviewProps extends HTMLAttributes<HTMLDivElement> {
    file: any;
    onRemove: () => void;
    removeIcon?: React.ComponentType<{
        className?: string;
    }>;
}
