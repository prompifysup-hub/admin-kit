import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { createContext, useCallback, useContext, useMemo } from "react";
import { setSubmissionErrors, useSaveContext, useTranslate, ValidationError, warning, } from "ra-core";
import { Loader2, Save } from "lucide-react";
import { FormProvider, useFormContext, useFormState } from "react-hook-form";
import { cn } from "../lib/utils";
import { Label } from "../ui/label";
import { Button } from "../ui/button.js";
const Form = FormProvider;
const FormItemContext = createContext({});
const useFormField = () => {
    const { getFieldState, formState } = useFormContext();
    const { id, name } = useContext(FormItemContext);
    const fieldState = getFieldState(name, formState);
    return useMemo(() => ({
        formItemId: id,
        formDescriptionId: `${id}-description`,
        formMessageId: `${id}-message`,
        ...fieldState,
    }), [id, fieldState]);
};
function FormField({ className, id, name, ...props }) {
    const contextValue = useMemo(() => ({
        id,
        name,
    }), [id, name]);
    return (_jsx(FormItemContext.Provider, { value: contextValue, children: _jsx("div", { "data-slot": "form-item", className: cn("grid gap-2", className), role: "group", ...props }) }));
}
function FormLabel({ className, ...props }) {
    const { error, formItemId } = useFormField();
    return (_jsx(Label, { "data-slot": "form-label", "data-error": !!error, className: cn("data-[error=true]:text-destructive", className), htmlFor: formItemId, ...props }));
}
/**
 * Wires the field's id and aria attributes onto its single child input.
 *
 * `aria-describedby` is the exception: the child's value is kept and the
 * field's ids are appended to it, which Slot would have overwritten.
 */
function FormControl({ children, ...props }) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    const fieldDescribedBy = !error
        ? formDescriptionId
        : `${formDescriptionId} ${formMessageId}`;
    if (!React.isValidElement(children)) {
        return children;
    }
    const child = children;
    const childDescribedBy = typeof child.props["aria-describedby"] === "string"
        ? child.props["aria-describedby"]
        : undefined;
    const describedBy = [childDescribedBy, fieldDescribedBy]
        .filter(Boolean)
        .join(" ");
    return React.cloneElement(child, {
        ...props,
        "data-slot": "form-control",
        id: formItemId,
        "aria-describedby": describedBy,
        "aria-invalid": !!error,
    });
}
function FormDescription({ className, ...props }) {
    const { formDescriptionId } = useFormField();
    return (_jsx("div", { "data-slot": "form-description", id: formDescriptionId, className: cn("text-muted-foreground text-sm", className), ...props }));
}
const FormError = ({ className, ...props }) => {
    const { invalid, error, formMessageId } = useFormField();
    const err = error?.root?.message ?? error?.message;
    if (!invalid || !err) {
        return null;
    }
    return (_jsx("p", { "data-slot": "form-message", id: formMessageId, className: cn("text-destructive text-sm", className), ...props, children: _jsx(ValidationError, { error: err }) }));
};
/**
 * A button that saves form data with loading state and validation.
 *
 * Automatically handles form submission, validation, and loading states. Shows a spinner during
 * save operations and can be disabled when the form is pristine or invalid.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/savebutton/ SaveButton documentation}
 *
 * @example
 * import { SimpleForm, SaveButton } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm toolbar={<SaveButton />}>
 *       // form inputs here
 *     </SimpleForm>
 *   </Edit>
 * )
 */
const SaveButton = (props) => {
    const { className, icon = defaultIcon, label = "ra.action.save", onClick, mutationOptions, disabled: disabledProp, type = "submit", transform, variant = "default", ...rest } = props;
    const translate = useTranslate();
    const form = useFormContext();
    const saveContext = useSaveContext();
    const { isValidating, isSubmitting, disabled: formDisabled } = useFormState();
    const disabled = disabledProp || isValidating || isSubmitting || formDisabled;
    warning(type === "submit" &&
        ((mutationOptions &&
            (mutationOptions.onSuccess || mutationOptions.onError)) ||
            transform), 'Cannot use <SaveButton mutationOptions> props on a button of type "submit". To override the default mutation options on a particular save button, set the <SaveButton type="button"> prop, or set mutationOptions in the main view component (<Create> or <Edit>).');
    const handleSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (values) => {
        let errors;
        if (saveContext?.save) {
            errors = await saveContext.save(values, {
                ...mutationOptions,
                transform,
            });
        }
        if (errors != null) {
            setSubmissionErrors(errors, form.setError);
        }
    }, [form.setError, saveContext, mutationOptions, transform]);
    const handleClick = useCallback(async (event) => {
        if (onClick) {
            onClick(event);
        }
        if (event.defaultPrevented) {
            return;
        }
        if (type === "button") {
            // this button doesn't submit the form, so it doesn't trigger useIsFormInvalid in <FormContent>
            // therefore we need to check for errors manually
            event.stopPropagation();
            await form.handleSubmit(handleSubmit)(event);
        }
    }, [onClick, type, form, handleSubmit]);
    const displayedLabel = label && translate(label, { _: label });
    return (_jsxs(Button, { variant: variant, type: type, disabled: disabled, onClick: handleClick, className: cn(disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer", className), ...rest, children: [isSubmitting ? _jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }) : icon, displayedLabel] }));
};
const defaultIcon = _jsx(Save, { className: "h-4 w-4" });
export { 
// eslint-disable-next-line react-refresh/only-export-components
useFormField, Form, FormField, FormLabel, FormControl, FormDescription, FormError, SaveButton, };
