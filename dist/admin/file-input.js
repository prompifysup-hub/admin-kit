import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement, useEffect } from "react";
import { FieldTitle, RecordContextProvider, shallowEqual, useInput, useTranslate, } from "ra-core";
import { useDropzone } from "react-dropzone";
import { XCircle } from "lucide-react";
import { cn } from "../lib/utils";
import { FormError, FormField, FormLabel } from "./form";
import { InputHelperText } from "./input-helper-text";
import { Button } from "../ui/button.js";
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
export const FileInput = (props) => {
    const { alwaysOn, defaultValue, format, label, helperText, name: nameProp, onBlur: onBlurProp, onChange: onChangeProp, parse, resource, source, validate, readOnly, disabled, accept, maxSize, minSize, multiple = false, options = {}, children, className, inputProps: inputPropsOptions, onRemove: onRemoveProp, validateFileRemoval, placeholder, labelMultiple = "ra.input.file.upload_several", labelSingle = "ra.input.file.upload_single", removeIcon, ...rest } = props;
    const { onDrop: onDropProp } = options;
    const translate = useTranslate();
    // turn a browser dropped file structure into expected structure
    const transformFile = (file) => {
        if (!(file instanceof File)) {
            return file;
        }
        const preview = URL.createObjectURL(file);
        const transformedFile = {
            rawFile: file,
            src: preview,
            title: file.name,
        };
        return transformedFile;
    };
    const transformFiles = (files) => {
        if (!files) {
            return multiple ? [] : null;
        }
        if (Array.isArray(files)) {
            return files.map(transformFile);
        }
        return transformFile(files);
    };
    const { id, field: { onChange, onBlur, value, name }, isRequired, } = useInput({
        alwaysOn,
        defaultValue,
        format: format || transformFiles,
        label,
        helperText,
        name: nameProp,
        onBlur: onBlurProp,
        onChange: onChangeProp,
        parse: parse || transformFiles,
        resource,
        source,
        validate,
        readOnly,
        disabled,
    });
    const files = value ? (Array.isArray(value) ? value : [value]) : [];
    const onDrop = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newFiles, rejectedFiles, event) => {
        const updatedFiles = multiple ? [...files, ...newFiles] : [...newFiles];
        if (multiple) {
            onChange(updatedFiles);
            onBlur();
        }
        else {
            onChange(updatedFiles[0]);
            onBlur();
        }
        if (onDropProp) {
            onDropProp(newFiles, rejectedFiles, event);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onRemove = (file) => async () => {
        if (validateFileRemoval) {
            try {
                await validateFileRemoval(file);
            }
            catch {
                return;
            }
        }
        if (multiple) {
            const filteredFiles = files.filter((stateFile) => !shallowEqual(stateFile, file));
            onChange(filteredFiles);
            onBlur();
        }
        else {
            onChange(null);
            onBlur();
        }
        if (onRemoveProp) {
            onRemoveProp(file);
        }
    };
    const childrenElement = children && isValidElement(Children.only(children))
        ? Children.only(children)
        : undefined;
    const { getRootProps, getInputProps } = useDropzone({
        accept,
        maxSize,
        minSize,
        multiple,
        disabled: disabled || readOnly,
        ...options,
        onDrop,
    });
    return (_jsxs(FormField, { id: id, name: name, className: cn("w-full", className), ...rest, children: [_jsx(FormLabel, { htmlFor: id, className: disabled || readOnly ? "cursor-default" : "cursor-pointer", children: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) }), _jsxs("div", { ...getRootProps({
                    className: cn("border-2 border-dashed border-muted rounded-lg p-6 text-center transition-colors", "hover:border-sidebar-ring focus:outline-none", disabled || readOnly
                        ? "bg-muted cursor-not-allowed"
                        : "bg-muted text-muted-foreground cursor-pointer"),
                }), children: [_jsx("input", { id: id, name: name, ...getInputProps({
                            ...inputPropsOptions,
                        }) }), placeholder ? (placeholder) : multiple ? (_jsx("p", { className: "text-sm", children: translate(labelMultiple) })) : (_jsx("p", { className: "text-sm", children: translate(labelSingle) }))] }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {}), children && (_jsx("div", { className: "previews flex flex-col gap-1", children: 
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                files.map((file, index) => (_jsx(FileInputPreview, { file: file, onRemove: onRemove(file), removeIcon: removeIcon, children: _jsx(RecordContextProvider, { value: file, children: childrenElement }) }, index))) }))] }));
};
/**
 * Preview container for uploaded files in `<FileInput>`, with a remove button.
 *
 * @internal
 */
export const FileInputPreview = (props) => {
    const { className, children, file, onRemove, removeIcon: RemoveIcon = XCircle, ...rest } = props;
    const translate = useTranslate();
    useEffect(() => {
        return () => {
            const preview = file.rawFile ? file.rawFile.preview : file.preview;
            if (preview) {
                window.URL.revokeObjectURL(preview);
            }
        };
    }, [file]);
    return (_jsxs("div", { className: cn("flex flex-row gap-1", className), ...rest, children: [_jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-6 w-6 rounded-full shadow-sm cursor-pointer", onClick: onRemove, "aria-label": translate("ra.action.delete"), title: translate("ra.action.delete"), children: _jsx(RemoveIcon, { className: "h-4 w-4" }) }), children] }));
};
