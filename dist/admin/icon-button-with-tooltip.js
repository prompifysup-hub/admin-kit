import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslate } from "ra-core";
import * as React from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../ui/tooltip";
/**
 * A button with a tooltip that ensures the tooltip is closed on click to avoid ghost tooltips.
 *
 * Prevents ghost tooltips that can appear when the button position changes after interaction.
 * Supports internationalization for the label text.
 *
 * @example
 * // Basic usage with icon and label
 * <IconButtonWithTooltip label="Delete">
 *   <Trash2 />
 * </IconButtonWithTooltip>
 */
export const IconButtonWithTooltip = ({ label, onClick, children, disabled, ...props }) => {
    const translate = useTranslate();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    let translatedLabel = label;
    if (typeof label === "string") {
        translatedLabel = translate(label, { _: label });
    }
    const handleClick = (event) => {
        handleClose();
        onClick?.(event);
    };
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { open: open, onOpenChange: setOpen, children: [_jsx(TooltipTrigger, { render: _jsx(Button, { type: "button", variant: "ghost", size: "icon", "aria-label": typeof translatedLabel === "string"
                            ? translatedLabel
                            : undefined, onClick: handleClick, disabled: disabled, onMouseEnter: handleOpen, onMouseLeave: handleClose, ...props }), children: children }), _jsx(TooltipContent, { children: _jsx("p", { children: translatedLabel }) })] }) }));
};
