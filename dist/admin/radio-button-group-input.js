import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FieldTitle, useChoices, useChoicesContext, useInput } from "ra-core";
import { cn } from "../lib/utils";
import { FormField, FormControl, FormLabel, FormError, } from "./form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Skeleton } from "../ui/skeleton";
import { InputHelperText } from "./input-helper-text";
/**
 * Single-select input rendered as a list of radio buttons, arranged vertically or horizontally.
 *
 * Use `<RadioButtonGroupInput>` when you have a small set of options (2-5) that users should
 * see all at once, like status, priority, or category fields. For longer lists, prefer
 * `<SelectInput>`. Set `row` to `true` for horizontal layout.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/radiobuttongroupinput/ RadioButtonGroupInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextInput, RadioButtonGroupInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <RadioButtonGroupInput
 *         source="category"
 *         choices={[
 *           { id: 'tech', name: 'Tech' },
 *           { id: 'lifestyle', name: 'Lifestyle' },
 *           { id: 'people', name: 'People' },
 *         ]}
 *       />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const RadioButtonGroupInput = (inProps) => {
    const { choices: choicesProp, isFetching: isFetchingProp, isLoading: isLoadingProp, isPending: isPendingProp, resource: resourceProp, source: sourceProp, format, onBlur, onChange, parse, validate, disabled, readOnly, optionText, optionValue = "id", translateChoice, disableValue = "disabled", className, helperText, label, row, ...rest } = inProps;
    const { allChoices, isPending, error: fetchError, resource, source, } = useChoicesContext({
        choices: choicesProp,
        isFetching: isFetchingProp,
        isLoading: isLoadingProp,
        isPending: isPendingProp,
        resource: resourceProp,
        source: sourceProp,
    });
    if (source === undefined) {
        throw new Error(`If you're not wrapping the RadioButtonGroupInput inside a ReferenceArrayInput, you must provide the source prop`);
    }
    if (!isPending && !fetchError && allChoices === undefined) {
        throw new Error(`If you're not wrapping the RadioButtonGroupInput inside a ReferenceArrayInput, you must provide the choices prop`);
    }
    const { id, field, isRequired } = useInput({
        format,
        onBlur,
        onChange,
        parse,
        resource,
        source,
        validate,
        disabled,
        readOnly,
        ...rest,
    });
    const { getChoiceText, getChoiceValue, getDisableValue } = useChoices({
        optionText,
        optionValue,
        translateChoice,
        disableValue,
    });
    if (isPending) {
        return _jsx(Skeleton, { className: "w-full h-9" });
    }
    return (_jsxs(FormField, { id: id, className: className, name: field.name, children: [label && (_jsx(FormLabel, { children: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) })), _jsx(FormControl, { children: _jsx(RadioGroup, { ...rest, value: field.value || "", onValueChange: field.onChange, className: cn("flex", row ? "flex-row gap-4" : "flex-col gap-2"), disabled: disabled || readOnly, children: allChoices?.map((choice) => {
                        const value = getChoiceValue(choice);
                        const isDisabled = disabled || readOnly || getDisableValue(choice);
                        return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: value, id: `${id}-${value}`, disabled: isDisabled }), _jsx(Label, { htmlFor: `${id}-${value}`, className: cn("text-sm font-normal cursor-pointer", isDisabled && "opacity-50 cursor-not-allowed"), children: getChoiceText(choice) })] }, value));
                    }) }) }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {})] }));
};
