import React from "react";
/**
 * A button that toggles a specific filter value on/off.
 *
 * Renders a button that applies or removes a filter when clicked. Shows a close icon when the
 * filter is active. Useful for quick filter presets like status or category.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/togglefilterbutton/ ToggleFilterButton documentation}
 *
 * @example
 * import { ToggleFilterButton } from './index';
 *
 * const PostFilters = () => (
 *   <div className="flex flex-row gap-2">
 *     <ToggleFilterButton label="Published" value={{ status: 'published' }} />
 *     <ToggleFilterButton label="Draft" value={{ status: 'draft' }} />
 *   </div>
 * );
 */
export declare const ToggleFilterButton: ({ label, size, value, className, }: {
    label: React.ReactElement | string;
    value: any;
    className?: string;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}) => React.JSX.Element;
