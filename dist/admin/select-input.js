import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { X } from "lucide-react";
import { FieldTitle, useChoices, useChoicesContext, useGetRecordRepresentation, useInput, useSupportCreateSuggestion, useTranslate, } from "ra-core";
import { useCallback, useEffect, useId } from "react";
import { FormError, FormField, FormLabel } from "./form";
import { InputHelperText } from "./input-helper-text";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../ui/select";
import { Skeleton } from "../ui/skeleton";
import { cn } from "../lib/utils";
/**
 * Dropdown select input for choosing a single value from a list of options.
 *
 * Use `<SelectInput>` for fields with many possible values (5+) like categories, statuses, or
 * countries. Supports creating new options on the fly with the `create` or `onCreate` props.
 * Wrap in `<ReferenceInput>` to select from related resources.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/selectinput/ SelectInput documentation}
 * @see {@link https://ui.shadcn.com/docs/components/select Select documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextInput, SelectInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <SelectInput
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
export const SelectInput = (props) => {
    const { choices: choicesProp, isLoading: isLoadingProp, isFetching: isFetchingProp, isPending: isPendingProp, resource: resourceProp, source: sourceProp, optionText, optionValue, disableValue = "disabled", translateChoice, createValue, createHintValue, alwaysOn, defaultValue, format, label, helperText, name, onBlur, onChange, parse, validate, readOnly, disabled, className, emptyText = "", emptyValue = "", filter: _filter, create, createLabel, onCreate, ...rest } = props;
    const translate = useTranslate();
    useEffect(() => {
        if (emptyValue == null) {
            throw new Error(`emptyValue being set to null or undefined is not supported. Use parse to turn the empty string into null.`);
        }
    }, [emptyValue]);
    const { allChoices, isPending, error: fetchError, source, resource, isFromReference, } = useChoicesContext({
        choices: choicesProp,
        isLoading: isLoadingProp,
        isFetching: isFetchingProp,
        isPending: isPendingProp,
        resource: resourceProp,
        source: sourceProp,
    });
    if (source === undefined) {
        throw new Error(`If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the source prop`);
    }
    if (!isPending && !fetchError && allChoices === undefined) {
        throw new Error(`If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the choices prop`);
    }
    const getRecordRepresentation = useGetRecordRepresentation(resource);
    const { getChoiceText, getChoiceValue, getDisableValue } = useChoices({
        optionText: optionText ?? (isFromReference ? getRecordRepresentation : undefined),
        optionValue,
        disableValue,
        translateChoice: translateChoice ?? !isFromReference,
        createValue,
        createHintValue,
    });
    const labelId = useId();
    const { id, field, isRequired } = useInput({
        alwaysOn,
        defaultValue,
        format,
        label,
        helperText,
        name,
        onBlur,
        onChange,
        parse,
        resource,
        source,
        validate,
        readOnly,
        disabled,
    });
    const hasLabel = label !== "" && label !== false;
    const accessibleName = !hasLabel && typeof emptyText === "string" && emptyText !== ""
        ? translate(emptyText, { _: emptyText })
        : undefined;
    const renderEmptyItemOption = useCallback(() => {
        return typeof emptyText === "string"
            ? emptyText === ""
                ? " " // em space, forces the display of an empty line of normal height
                : translate(emptyText, { _: emptyText })
            : emptyText;
    }, [emptyText, translate]);
    const renderMenuItemOption = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (choice) => getChoiceText(choice), [getChoiceText]);
    const handleChange = useCallback(async (value) => {
        if (value === emptyValue) {
            field.onChange(emptyValue);
        }
        else {
            // Find the choice by value and pass it to field.onChange
            const choice = allChoices?.find((choice) => getChoiceValue(choice) === value);
            field.onChange(choice ? getChoiceValue(choice) : value);
        }
    }, [field, getChoiceValue, emptyValue, allChoices]);
    const { getCreateItem, handleChange: handleChangeWithCreateSupport, createElement, } = useSupportCreateSuggestion({
        create,
        createLabel,
        createValue,
        createHintValue,
        onCreate,
        handleChange,
        optionText,
    });
    if (isPending) {
        return (_jsxs(FormField, { id: id, name: field.name, className: cn("w-full min-w-20", className), children: [hasLabel && (_jsx(FormLabel, { id: labelId, children: _jsx(FieldTitle, { label: label, source: source, resource: resourceProp, isRequired: isRequired }) })), _jsx("div", { className: "relative", children: _jsx(Skeleton, { className: "w-full h-9" }) }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {})] }));
    }
    const createItem = create || onCreate ? getCreateItem() : null;
    let finalChoices = fetchError ? [] : allChoices;
    if (create || onCreate) {
        finalChoices = [...finalChoices, createItem];
    }
    // Handle reset functionality
    const handleReset = (e) => {
        e.stopPropagation();
        field.onChange(emptyValue);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(FormField, { id: id, name: field.name, className: cn("w-full min-w-20", className), ...rest, children: [hasLabel && (_jsx(FormLabel, { id: labelId, children: _jsx(FieldTitle, { label: label, source: source, resource: resourceProp, isRequired: isRequired }) })), _jsx("div", { className: "relative", children: _jsxs(Select
                        // Re-mounting the select when the controlled value changes avoids a stale
                        // internal state edge case where onValueChange can briefly receive "".
                        , { value: field.value?.toString() || emptyValue, onValueChange: handleChangeWithCreateSupport, children: [_jsxs(SelectTrigger, { className: cn("w-full transition-all hover:bg-accent"), disabled: field.disabled, "aria-label": accessibleName, "aria-labelledby": hasLabel ? labelId : undefined, children: [_jsx(SelectValue, { placeholder: renderEmptyItemOption(), children: (value) => {
                                                if (!value || value === emptyValue) {
                                                    return renderEmptyItemOption();
                                                }
                                                const choice = finalChoices?.find((choice) => choice && getChoiceValue(choice)?.toString() === value);
                                                return choice ? renderMenuItemOption(choice) : value;
                                            } }), field.value && field.value !== emptyValue ? (_jsx("div", { role: "button", className: "p-0 ml-auto pointer-events-auto hover:bg-transparent text-muted-foreground opacity-50 hover:opacity-100", onClick: handleReset, children: _jsx(X, { className: "h-4 w-4" }) })) : null] }), _jsx(SelectContent, { children: finalChoices?.map((choice) => {
                                        if (!choice)
                                            return null;
                                        const value = getChoiceValue(choice);
                                        const isDisabled = getDisableValue(choice);
                                        return (_jsx(SelectItem, { value: value?.toString(), disabled: isDisabled, children: renderMenuItemOption(!!createItem && choice?.id === createItem.id
                                                ? createItem
                                                : choice) }, value));
                                    }) })] }, `select:${field.value?.toString() ?? emptyValue}`) }), _jsx(InputHelperText, { helperText: helperText })] }), createElement] }));
};
