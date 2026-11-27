import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { memo } from "react";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { shallowEqual, useListSortContext, useResourceContext, useTranslate, useTranslateLabel, } from "ra-core";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../ui/tooltip";
/**
 * A button that opens a dropdown menu to change list sorting.
 *
 * Displays current sort field and order, and toggles between ASC and DESC when clicking the same field again.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/sortbutton/ SortButton documentation}
 *
 * @example
 * import { SortButton } from './index';
 *
 * const PostList = () => (
 *   <List render={({ data }) => (
 *     <div>
 *       <SortButton fields={["title", "published_at"]} />
 *       <ul>
 *         {data.map(post => (
 *           <li key={post.id}>{post.title}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   )}>
 * );
 */
const SortButtonComponent = (props) => {
    const { fields, label = "ra.sort.sort_by", icon = defaultIcon, resource: _resource, ...rest } = props;
    const resource = useResourceContext(props);
    const { sort, setSort } = useListSortContext();
    const translate = useTranslate();
    const translateLabel = useTranslateLabel();
    const isMobile = useIsMobile();
    const [open, setOpen] = React.useState(false);
    const handleChangeSort = (field) => {
        setSort({
            field,
            order: field === sort.field ? inverseOrder(sort.order) : "ASC",
        });
        setOpen(false);
    };
    const fieldLabel = translateLabel({
        resource,
        source: sort.field,
    });
    const translationOptions = {
        field: fieldLabel,
        field_lower_first: typeof fieldLabel === "string"
            ? fieldLabel.charAt(0).toLowerCase() + fieldLabel.slice(1)
            : undefined,
        order: translate(`ra.sort.${sort.order}`),
    };
    const buttonLabel = translate(`resources.${resource}.action.sort_by`, {
        ...translationOptions,
        _: translate(label, { ...translationOptions, _: label }),
    });
    return (_jsxs(DropdownMenu, { open: open, onOpenChange: setOpen, children: [isMobile ? (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(DropdownMenuTrigger, { render: _jsx(TooltipTrigger, { render: _jsx(Button, { variant: "outline", size: "icon", "aria-label": buttonLabel, ...rest }) }), children: icon }), _jsx(TooltipContent, { children: _jsx("p", { children: buttonLabel }) })] }) })) : (_jsxs(DropdownMenuTrigger, { render: _jsx(Button, { variant: "outline", size: "sm", className: "h-9", ...rest }), children: [icon, _jsx("span", { className: "ml-2", children: buttonLabel }), _jsx(ChevronDown, { className: "ml-2 h-4 w-4" })] })), _jsx(DropdownMenuContent, { align: "start", children: fields.map((field) => (_jsxs(DropdownMenuItem, { onClick: () => handleChangeSort(field), children: [translateLabel({
                            resource,
                            source: field,
                        }), " ", translate(`ra.sort.${sort.field === field ? inverseOrder(sort.order) : "ASC"}`)] }, field))) })] }));
};
const defaultIcon = _jsx(ArrowUpDown, { className: "h-4 w-4" });
const inverseOrder = (sort) => (sort === "ASC" ? "DESC" : "ASC");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const arePropsEqual = (prevProps, nextProps) => shallowEqual(prevProps.fields, nextProps.fields);
export const SortButton = memo(SortButtonComponent, arePropsEqual);
