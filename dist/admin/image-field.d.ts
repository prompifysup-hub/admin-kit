import type { HTMLAttributes } from "react";
import type { ExtractRecordPaths, HintedString } from "ra-core";
import type { FieldProps } from "../lib/field.type.ts";
/**
 * Displays an image or a list of images from a record field inside an img element or a ul of img elements.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/imagefield/ ImageField documentation}
 *
 * @example
 * import { ImageField } from './index';
 *
 * <ImageField
 *     source="avatar_url"
 *     className="[&_img]:w-8 [&_img]:h-8 [&_img]:rounded-full"
 *     empty={
 *         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
 *           👤
 *         </div>
 *     }
 * />
 */
export declare const ImageField: {
    <RecordType extends Record<string, any> = Record<string, any>>(props: ImageFieldProps<RecordType>): import("react").JSX.Element | null;
    displayName: string;
};
export interface ImageFieldProps<RecordType extends Record<string, any> = Record<string, any>> extends FieldProps<RecordType>, HTMLAttributes<HTMLSpanElement> {
    defaultValue?: any;
    src?: string;
    title?: HintedString<ExtractRecordPaths<RecordType>>;
}
