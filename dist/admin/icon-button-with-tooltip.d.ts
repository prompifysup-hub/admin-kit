import * as React from "react";
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
export declare const IconButtonWithTooltip: ({ label, onClick, children, disabled, ...props }: IconButtonWithTooltipProps) => React.JSX.Element;
export interface IconButtonWithTooltipProps extends React.ComponentProps<"button"> {
    label: React.ReactNode;
    children: React.ReactNode;
}
