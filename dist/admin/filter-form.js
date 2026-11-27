import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useCallback, useEffect, useState, isValidElement } from "react";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import queryString from "query-string";
import { extractValidSavedQueries, FieldTitle, FilterLiveForm, useFilterContext, useListContext, useNavigate, useResourceContext, useSavedQueries, useTranslate, } from "ra-core";
import { Bookmark, BookmarkMinus, BookmarkPlus, Check, Filter, MinusCircle, X, } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { AddSavedQueryDialog, RemoveSavedQueryDialog, } from "./saved-queries";
/**
 * A form for filter inputs with live updates. Included by default in List.
 *
 * To be used in conjunction with FilterButton.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/#filter-button--form-combo FilterForm documentation}
 */
export const FilterForm = (inProps) => {
    const { filters: filtersProps, ...rest } = inProps;
    const filters = useFilterContext() || filtersProps;
    return (_jsx(FilterLiveForm, { formComponent: StyledForm, ...sanitizeRestProps(rest), children: _jsx(FilterFormBase, { filters: filters }) }));
};
/**
 * @deprecated Use FilterFormBase from `ra-core` once available.
 */
export const FilterFormBase = (props) => {
    const { filters } = props;
    const resource = useResourceContext(props);
    const { displayedFilters = {}, filterValues, hideFilter } = useListContext();
    useEffect(() => {
        if (!filters)
            return;
        filters
            .filter((filterElement) => isValidElement(filterElement))
            .forEach((filter) => {
            if (filter.props.alwaysOn &&
                filter.props.defaultValue) {
                throw new Error("Cannot use alwaysOn and defaultValue on a filter input. Please set the filterDefaultValues props on the <List> element instead.");
            }
        });
    }, [filters]);
    const getShownFilters = () => {
        if (!filters)
            return [];
        const values = filterValues;
        return filters
            .filter((filterElement) => isValidElement(filterElement))
            .filter((filterElement) => {
            const filterValue = get(values, filterElement.props.source);
            return (filterElement.props.alwaysOn ||
                displayedFilters[filterElement.props.source] ||
                !isEmptyValue(filterValue));
        });
    };
    const handleHide = useCallback((event) => hideFilter(event.currentTarget.dataset.key), [hideFilter]);
    return (_jsx(_Fragment, { children: getShownFilters().map((filterElement) => (_jsx(FilterFormInput, { filterElement: filterElement, handleHide: handleHide, resource: resource }, filterElement.key || filterElement.props.source))) }));
};
const sanitizeRestProps = ({ hasCreate: _hasCreate, resource: _resource, ...props }) => props;
const StyledForm = (props) => {
    return (_jsx("form", { ...props, className: cn("flex flex-row justify-start items-end gap-x-2 gap-y-3 pointer-events-none flex-wrap", "[&_.form-helper-text]:hidden", props.className) }));
};
const isEmptyValue = (filterValue) => {
    if (filterValue === "" || filterValue == null)
        return true;
    // If one of the value leaf is not empty
    // the value is considered not empty
    if (typeof filterValue === "object") {
        return Object.keys(filterValue).every((key) => isEmptyValue(filterValue[key]));
    }
    return false;
};
export const FilterFormInput = (inProps) => {
    const { filterElement, handleHide, className } = inProps;
    const resource = useResourceContext(inProps);
    const translate = useTranslate();
    const { alwaysOn: _, ...filterElementProps } = filterElement.props;
    const filterElementType = typeof filterElement === "string" ? filterElement : filterElement.type;
    return (_jsxs("div", { "data-source": filterElement.props.source, className: cn("filter-field flex flex-row pointer-events-auto gap-2 relative", className), children: [React.createElement(filterElementType, {
                ...filterElementProps,
                resource,
                record: emptyRecord,
                size: filterElement.props.size ?? "small",
                helperText: false,
                // ignore defaultValue in Field because it was already set in Form (via mergedInitialValuesWithDefaultValues)
                defaultValue: undefined,
            }), !filterElement.props.alwaysOn && (_jsx(Button, { type: "button", variant: "ghost", size: "sm", className: "hide-filter h-9 w-9 cursor-pointer mt-auto", onClick: handleHide, "data-key": filterElement.props.source, title: translate("ra.action.remove_filter"), children: _jsx(MinusCircle, { className: "h-4 w-4" }) }))] }));
};
const emptyRecord = {};
/**
 * A button that opens a dropdown to add, remove, and manage filters.
 *
 * Displays available filters, saved queries, and options to save or clear current filters.
 * Works with the FilterForm to provide a complete filtering UI.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/#filter-button--form-combo FilterForm documentation}
 */
export const FilterButton = (props) => {
    const { filters: filtersProp, className, disableSaveQuery, size, variant = "outline", ...rest } = props;
    const filters = useFilterContext() || filtersProp;
    const resource = useResourceContext(props);
    const translate = useTranslate();
    if (!resource && !disableSaveQuery) {
        throw new Error("<FilterButton> must be called inside a ResourceContextProvider, or must provide a resource prop");
    }
    const [savedQueries] = useSavedQueries(resource || "");
    const navigate = useNavigate();
    const { displayedFilters = {}, filterValues, perPage, setFilters, showFilter, hideFilter, sort, } = useListContext();
    const hasFilterValues = !isEqual(filterValues, {});
    const validSavedQueries = extractValidSavedQueries(savedQueries);
    const hasSavedCurrentQuery = validSavedQueries.some((savedQuery) => isEqual(savedQuery.value, {
        filter: filterValues,
        sort,
        perPage,
        displayedFilters,
    }));
    const [open, setOpen] = useState(false);
    if (filters === undefined) {
        throw new Error("The <FilterButton> component requires the <List filters> prop to be set");
    }
    const allTogglableFilters = filters.filter((filterElement) => isValidElement(filterElement) && !filterElement.props.alwaysOn);
    const handleShow = useCallback(({ source, defaultValue }) => {
        showFilter(source, defaultValue === "" ? undefined : defaultValue);
        // We have to fallback to imperative code because the new FilterFormInput
        // has no way of knowing it has just been displayed (and thus that it should focus its input)
        setTimeout(() => {
            const inputElement = document.querySelector(`input[name='${source}']`);
            if (inputElement) {
                inputElement.focus();
            }
        }, 50);
        setOpen(false);
    }, [showFilter, setOpen]);
    const handleRemove = useCallback(({ source }) => {
        hideFilter(source);
        setOpen(false);
    }, [hideFilter, setOpen]);
    // add query dialog state
    const [addSavedQueryDialogOpen, setAddSavedQueryDialogOpen] = useState(false);
    const hideAddSavedQueryDialog = () => {
        setAddSavedQueryDialogOpen(false);
    };
    const showAddSavedQueryDialog = () => {
        setOpen(false);
        setAddSavedQueryDialogOpen(true);
    };
    // remove query dialog state
    const [removeSavedQueryDialogOpen, setRemoveSavedQueryDialogOpen] = useState(false);
    const hideRemoveSavedQueryDialog = () => {
        setRemoveSavedQueryDialogOpen(false);
    };
    const showRemoveSavedQueryDialog = () => {
        setOpen(false);
        setRemoveSavedQueryDialogOpen(true);
    };
    if (allTogglableFilters.length === 0 &&
        validSavedQueries.length === 0 &&
        !hasFilterValues) {
        return null;
    }
    return (_jsxs("div", { className: cn("inline-block", className), ...rest, children: [_jsxs(DropdownMenu, { open: open, onOpenChange: setOpen, children: [_jsxs(DropdownMenuTrigger, { render: _jsx(Button, { type: "button", className: "add-filter", variant: variant, size: size, "aria-haspopup": "true" }), children: [_jsx(Filter, { className: "h-4 w-4" }), translate("ra.action.add_filter")] }), _jsxs(DropdownMenuContent, { align: "start", className: "w-56", children: [allTogglableFilters
                                .filter((filterElement) => isValidElement(filterElement))
                                .map((filterElement, index) => (_jsx(FilterButtonMenuItem, { filter: filterElement, displayed: !!displayedFilters[filterElement.props.source], resource: resource, onShow: handleShow, onHide: handleRemove, autoFocus: index === 0 }, filterElement.props.source))), (hasFilterValues || validSavedQueries.length > 0) && (_jsx(DropdownMenuSeparator, {})), validSavedQueries.map((savedQuery, index) => isEqual(savedQuery.value, {
                                filter: filterValues,
                                sort,
                                perPage,
                                displayedFilters,
                            }) ? (_jsxs(DropdownMenuItem, { onClick: showRemoveSavedQueryDialog, children: [_jsx(BookmarkMinus, { className: "h-4 w-4 mr-2" }), translate("ra.saved_queries.remove_label_with_name", {
                                        _: 'Remove query "%{name}"',
                                        name: savedQuery.label,
                                    })] }, index)) : (_jsxs(DropdownMenuItem, { onClick: () => {
                                    navigate({
                                        search: queryString.stringify({
                                            filter: JSON.stringify(savedQuery.value.filter),
                                            sort: savedQuery.value.sort?.field,
                                            order: savedQuery.value.sort?.order,
                                            page: 1,
                                            perPage: savedQuery.value.perPage,
                                            displayedFilters: JSON.stringify(savedQuery.value.displayedFilters),
                                        }),
                                    });
                                    setOpen(false);
                                }, children: [_jsx(Bookmark, { className: "h-4 w-4 mr-2" }), savedQuery.label] }, index))), hasFilterValues && !hasSavedCurrentQuery && !disableSaveQuery && (_jsxs(DropdownMenuItem, { onClick: showAddSavedQueryDialog, children: [_jsx(BookmarkPlus, { className: "h-4 w-4 mr-2" }), translate("ra.saved_queries.new_label", {
                                        _: "Save current query...",
                                    })] })), hasFilterValues && (_jsxs(DropdownMenuItem, { onClick: () => {
                                    setFilters({}, {});
                                    setOpen(false);
                                }, children: [_jsx(X, { className: "h-4 w-4 mr-2" }), translate("ra.action.remove_all_filters", {
                                        _: "Remove all filters",
                                    })] }))] })] }), !disableSaveQuery && (_jsxs(_Fragment, { children: [_jsx(AddSavedQueryDialog, { open: addSavedQueryDialogOpen, onClose: hideAddSavedQueryDialog }), _jsx(RemoveSavedQueryDialog, { open: removeSavedQueryDialogOpen, onClose: hideRemoveSavedQueryDialog })] }))] }));
};
export const FilterButtonMenuItem = React.forwardRef((props, ref) => {
    const { filter, onShow, onHide, displayed } = props;
    const resource = useResourceContext(props);
    const handleShow = useCallback(() => {
        onShow({
            source: filter.props.source,
            defaultValue: filter.props.defaultValue,
        });
    }, [filter.props.defaultValue, filter.props.source, onShow]);
    const handleHide = useCallback(() => {
        onHide({
            source: filter.props.source,
        });
    }, [filter.props.source, onHide]);
    return (_jsxs("div", { className: cn("new-filter-item flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-accent rounded-sm", filter.props.disabled && "opacity-50 cursor-not-allowed"), "data-key": filter.props.source, "data-default-value": filter.props.defaultValue, onClick: filter.props.disabled ? undefined : displayed ? handleHide : handleShow, ref: ref, role: "menuitemcheckbox", "aria-checked": displayed, children: [_jsx("div", { className: "flex items-center justify-center w-4 h-4 mr-2", children: displayed && _jsx(Check, { className: "h-3 w-3" }) }), _jsx("div", { children: _jsx(FieldTitle, { label: filter.props.label, source: filter.props.source, resource: resource }) })] }));
});
