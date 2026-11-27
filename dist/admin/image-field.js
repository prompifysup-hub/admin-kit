import { jsx as _jsx } from "react/jsx-runtime";
import get from "lodash/get.js";
import { useFieldValue, useTranslate } from "ra-core";
import { cn } from "../lib/utils";
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
export const ImageField = (props) => {
    const { src, defaultValue, source, record, empty, title, ...rest } = props;
    const value = useFieldValue({ defaultValue, source, record });
    const titleValue = useFieldValue({
        ...props,
        // @ts-expect-error We ignore here because title might be a custom label or undefined instead of a field name
        source: title,
    })?.toString() ?? title;
    const translate = useTranslate();
    // the field may render either an empty element, an image, or a ul.
    // We choose to always apply the rest props to an enclosing span
    // to allow styling each case.
    if (value == null) {
        if (!empty) {
            return null;
        }
        return (_jsx("span", { ...rest, className: cn("image-empty", rest.className), children: typeof empty === "string" ? translate(empty, { _: empty }) : empty }));
    }
    if (Array.isArray(value)) {
        return (_jsx("span", { ...rest, className: cn("image-list", rest.className), children: _jsx("ul", { children: value.map((file, index) => {
                    const fileTitleValue = title ? get(file, title, title) : title;
                    const srcValue = src ? get(file, src, title) : title;
                    return (_jsx("li", { children: _jsx("img", { alt: fileTitleValue, title: fileTitleValue, src: srcValue }) }, index));
                }) }) }));
    }
    return (_jsx("span", { ...rest, className: cn("image-single", rest.className), children: _jsx("img", { title: titleValue, alt: titleValue, src: value?.toString() }) }));
};
// What? TypeScript loses the displayName if we don't set it explicitly
ImageField.displayName = "ImageField";
