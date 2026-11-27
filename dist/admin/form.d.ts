import * as React from "react";
import type { CreateParams, RaRecord, TransformData, UpdateParams } from "ra-core";
import type { UseMutationOptions } from "@tanstack/react-query";
import { Label } from "../ui/label";
declare const Form: <TFieldValues extends import("react-hook-form").FieldValues, TContext = any, TTransformedValues = TFieldValues>({ children, watch, getValues, getErrors, getFieldState, setError, clearErrors, setValue, setValues, trigger, formState, resetField, reset, resetDefaultValues, handleSubmit, unregister, control, register, setFocus, subscribe, }: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import("react-hook-form").FieldError | undefined;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare function FormField({ className, id, name, ...props }: FormItemProps): React.JSX.Element;
type FormItemProps = Omit<React.ComponentProps<"div">, "id"> & {
    id: string;
    name: string;
};
declare function FormLabel({ className, ...props }: React.ComponentProps<typeof Label>): React.JSX.Element;
/**
 * Wires the field's id and aria attributes onto its single child input.
 *
 * `aria-describedby` is the exception: the child's value is kept and the
 * field's ids are appended to it, which Slot would have overwritten.
 */
declare function FormControl({ children, ...props }: React.HTMLAttributes<HTMLElement> & {
    children: React.ReactElement;
}): React.ReactElement<Record<string, unknown>, string | React.JSXElementConstructor<any>>;
declare function FormDescription({ className, ...props }: React.ComponentProps<"p">): React.JSX.Element;
declare const FormError: ({ className, ...props }: React.ComponentProps<"p">) => React.JSX.Element | null;
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
declare const SaveButton: <RecordType extends RaRecord = RaRecord<import("ra-core").Identifier>>(props: SaveButtonProps<RecordType>) => React.JSX.Element;
interface Props<RecordType extends RaRecord = RaRecord, MutationOptionsError = unknown> {
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    label?: string;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, CreateParams<RecordType> | UpdateParams<RecordType>>;
    transform?: TransformData;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}
export type SaveButtonProps<RecordType extends RaRecord = RaRecord> = Props<RecordType> & React.ComponentProps<"button">;
export { useFormField, Form, FormField, FormLabel, FormControl, FormDescription, FormError, SaveButton, };
