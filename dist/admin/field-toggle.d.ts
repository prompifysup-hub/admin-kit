import * as React from "react";
/**
 * A toggleable field item with drag-and-drop reordering, used by ColumnsSelector
 *
 * @internal
 */
export declare const FieldToggle: (props: FieldToggleProps) => React.JSX.Element;
export interface FieldToggleProps {
    selected: boolean;
    label: React.ReactNode;
    onToggle?: (event: boolean) => void;
    onMove?: (dragIndex: string | number, dropIndex: string | number | null) => void;
    source: string;
    index: number | string;
}
