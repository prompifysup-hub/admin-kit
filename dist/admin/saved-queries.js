import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { extractValidSavedQueries, useListContext, useSavedQueries, useTranslate, } from "ra-core";
import { useState } from "react";
import isEqual from "lodash/isEqual";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
/**
 * Dialog for saving the current list view query (filters, sort, pagination) as a named saved query.
 *
 * Used by FilterButton in the List view.
 *
 * @internal
 */
export const AddSavedQueryDialog = ({ open, onClose, }) => {
    const translate = useTranslate();
    const { resource, filterValues, displayedFilters, sort, perPage } = useListContext();
    const [savedQueries, setSavedQueries] = useSavedQueries(resource);
    // input state
    const [queryName, setQueryName] = useState("");
    const handleQueryNameChange = (event) => {
        setQueryName(event.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addQuery();
    };
    const addQuery = () => {
        const newSavedQuery = {
            label: queryName,
            value: {
                filter: filterValues,
                sort,
                perPage,
                displayedFilters,
            },
        };
        const newSavedQueries = extractValidSavedQueries(savedQueries);
        setSavedQueries(newSavedQueries.concat(newSavedQuery));
        setQueryName("");
        onClose();
    };
    return (_jsx(Dialog, { open: open, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: translate("ra.saved_queries.new_dialog_title", {
                            _: "Save current query as",
                        }) }) }), _jsx("form", { onSubmit: handleFormSubmit, className: "space-y-4", children: _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: translate("ra.saved_queries.query_name", {
                                    _: "Query name",
                                }) }), _jsx(Input, { id: "name", value: queryName, onChange: handleQueryNameChange, autoFocus: true })] }) }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: onClose, children: translate("ra.action.cancel") }), _jsx(Button, { onClick: addQuery, children: translate("ra.action.save") })] })] }) }));
};
/**
 * Dialog for removing a saved query from the user's list.
 *
 * @internal
 */
export const RemoveSavedQueryDialog = ({ open, onClose, }) => {
    const translate = useTranslate();
    const { resource, filterValues, sort, perPage, displayedFilters } = useListContext();
    const [savedQueries, setSavedQueries] = useSavedQueries(resource);
    const removeQuery = () => {
        const savedQueryToRemove = {
            filter: filterValues,
            sort,
            perPage,
            displayedFilters,
        };
        const newSavedQueries = extractValidSavedQueries(savedQueries);
        const index = newSavedQueries.findIndex((savedFilter) => isEqual(savedFilter.value, savedQueryToRemove));
        setSavedQueries([
            ...newSavedQueries.slice(0, index),
            ...newSavedQueries.slice(index + 1),
        ]);
        onClose();
    };
    return (_jsx(Dialog, { open: open, onOpenChange: onClose, children: _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: translate("ra.saved_queries.remove_dialog_title", {
                                _: "Remove saved query?",
                            }) }), _jsx(DialogDescription, { children: translate("ra.saved_queries.remove_message", {
                                _: "Are you sure you want to remove that item from your list of saved queries?",
                            }) })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: onClose, children: translate("ra.action.cancel") }), _jsx(Button, { onClick: removeQuery, autoFocus: true, children: translate("ra.action.confirm") })] })] }) }));
};
