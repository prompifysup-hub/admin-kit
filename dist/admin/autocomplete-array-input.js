import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "../ui/badge";
import { Command, CommandGroup, CommandItem, CommandList, } from "../ui/command";
import { FormControl, FormError, FormField, FormLabel, } from "./form";
import { Command as CommandPrimitive } from "cmdk";
import { useChoices, useChoicesContext, useGetRecordRepresentation, useInput, useTranslate, FieldTitle, useEvent, useSupportCreateSuggestion, } from "ra-core";
import { InputHelperText } from "./input-helper-text";
import { useCallback } from "react";
/**
 * Form control that lets users choose multiple values from a list using a dropdown with autocompletion.
 *
 * This input allows editing array values with a searchable dropdown interface and displays selected items as removable badges.
 * Works seamlessly inside ReferenceArrayInput for creating and editing many-to-many relationships.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/autocompletearrayinput/ AutocompleteArrayInput documentation}
 *
 * @example
 * import {
 *   Create,
 *   SimpleForm,
 *   AutocompleteArrayInput,
 *   ReferenceArrayInput,
 * } from './index';
 *
 * const PostCreate = () => (
 *   <Create>
 *     <SimpleForm>
 *       <AutocompleteArrayInput
 *         source="tags"
 *         choices={[
 *           { id: 'tech', name: 'Tech' },
 *           { id: 'news', name: 'News' },
 *           { id: 'lifestyle', name: 'Lifestyle' },
 *         ]}
 *       />
 *       <ReferenceArrayInput source="tag_ids" reference="tags">
 *         <AutocompleteArrayInput />
 *       </ReferenceArrayInput>
 *     </SimpleForm>
 *   </Create>
 * );
 */
export const AutocompleteArrayInput = (props) => {
    const { filterToQuery = DefaultFilterToQuery, inputText, create, createValue, createLabel, createHintValue, createItemLabel, onCreate, optionText, } = props;
    const { allChoices = [], source, resource, isFromReference, setFilters, } = useChoicesContext(props);
    const { id, field, isRequired } = useInput({ ...props, source });
    const translate = useTranslate();
    const { placeholder = translate("ra.action.search", { _: "Search..." }) } = props;
    const getRecordRepresentation = useGetRecordRepresentation(resource);
    const { getChoiceText, getChoiceValue } = useChoices({
        optionText: props.optionText ?? (isFromReference ? getRecordRepresentation : "name"),
        optionValue: props.optionValue ?? "id",
        disableValue: props.disableValue,
        translateChoice: props.translateChoice ?? !isFromReference,
        createValue,
        createHintValue,
    });
    const inputRef = React.useRef(null);
    const listRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const handleUnselect = useEvent((choice) => {
        field.onChange(field.value.filter((v) => v !== getChoiceValue(choice)));
    });
    const handleKeyDown = useEvent((e) => {
        const input = inputRef.current;
        if (input) {
            if (e.key === "Delete" || e.key === "Backspace") {
                if (input.value === "") {
                    field.onChange(field.value.slice(0, -1));
                }
            }
            // This is not a default behavior of the <input /> field
            if (e.key === "Escape") {
                input.blur();
            }
        }
    });
    const availableChoices = allChoices.filter((choice) => !field.value.includes(getChoiceValue(choice)));
    const selectedChoices = allChoices.filter((choice) => field.value.includes(getChoiceValue(choice)));
    const [filterValue, setFilterValue] = React.useState("");
    const getInputText = useCallback((selectedChoice) => {
        if (typeof inputText === "function") {
            return inputText(selectedChoice);
        }
        if (inputText !== undefined) {
            return inputText;
        }
        return getChoiceText(selectedChoice);
    }, [inputText, getChoiceText]);
    const handleChange = useEvent((choice) => {
        setFilterValue("");
        if (isFromReference) {
            setFilters(filterToQuery(""));
        }
        const value = getChoiceValue(choice);
        // a newly created choice may already be selected
        if (field.value.includes(value)) {
            return;
        }
        field.onChange([...field.value, value]);
    });
    const { getCreateItem, handleChange: handleChangeWithCreateSupport, createElement, getOptionDisabled, } = useSupportCreateSuggestion({
        create,
        createLabel,
        createValue,
        createHintValue,
        createItemLabel,
        onCreate,
        handleChange,
        optionText,
        filter: filterValue,
    });
    const createItem = (create || onCreate) && (filterValue !== "" || createLabel)
        ? getCreateItem(filterValue)
        : null;
    const finalChoices = createItem
        ? [...availableChoices, createItem]
        : availableChoices;
    return (_jsxs(_Fragment, { children: [_jsxs(FormField, { className: props.className, id: id, name: field.name, children: [props.label !== false && (_jsx(FormLabel, { children: _jsx(FieldTitle, { label: props.label, source: props.source ?? source, resource: resource, isRequired: isRequired }) })), _jsx(FormControl, { children: _jsxs(Command, { onKeyDown: handleKeyDown, shouldFilter: !isFromReference, className: "overflow-visible bg-transparent", children: [_jsx("div", { className: "group rounded-md bg-transparent dark:bg-input/30 border border-input px-3 py-1.75 text-sm transition-all ring-offset-background focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", children: _jsxs("div", { className: "flex flex-wrap gap-1", children: [selectedChoices.map((choice) => (_jsxs(Badge, { variant: "outline", children: [getInputText(choice), _jsxs("button", { className: "ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2", onKeyDown: (e) => {
                                                            if (e.key === "Enter") {
                                                                handleUnselect(choice);
                                                            }
                                                        }, onMouseDown: (e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                        }, onClick: (e) => {
                                                            e.preventDefault();
                                                            handleUnselect(choice);
                                                        }, children: [_jsx("span", { className: "sr-only", children: translate("ra.action.remove", {
                                                                    _: "Remove",
                                                                }) }), _jsx(X, { className: "h-3 w-3" })] })] }, getChoiceValue(choice)))), _jsx(CommandPrimitive.Input, { ref: inputRef, value: filterValue, onValueChange: (filter) => {
                                                    setFilterValue(filter);
                                                    requestAnimationFrame(() => {
                                                        listRef.current?.scrollTo(0, 0);
                                                    });
                                                    // We don't want the ChoicesContext to filter the choices if the input
                                                    // is not from a reference as it would also filter out the selected values
                                                    if (isFromReference) {
                                                        setFilters(filterToQuery(filter), undefined, true);
                                                    }
                                                }, onBlur: () => setOpen(false), onFocus: () => setOpen(true), placeholder: placeholder, className: "ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground" })] }) }), _jsx("div", { className: "relative", children: _jsx(CommandList, { ref: listRef, children: open && finalChoices.length > 0 ? (_jsx("div", { className: "absolute top-2 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in", children: _jsx(CommandGroup, { className: "h-full overflow-auto", children: finalChoices.map((choice) => {
                                                    const isCreateItem = !!createItem && choice?.id === createItem.id;
                                                    const choiceText = getChoiceText(choice);
                                                    return (_jsx(CommandItem, { value: isCreateItem
                                                            ? `?${filterValue}?`
                                                            : getChoiceValue(choice), keywords: isCreateItem || React.isValidElement(choiceText)
                                                            ? undefined
                                                            : [choiceText], disabled: getOptionDisabled(choice), onMouseDown: (e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                        }, onSelect: () => handleChangeWithCreateSupport(choice), className: "cursor-pointer", children: choiceText }, getChoiceValue(choice)));
                                                }) }) })) : null }) })] }) }), _jsx(InputHelperText, { helperText: props.helperText }), _jsx(FormError, {})] }), createElement] }));
};
const DefaultFilterToQuery = (searchText) => ({ q: searchText });
