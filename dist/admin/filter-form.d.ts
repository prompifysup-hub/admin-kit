import * as React from "react";
import type { HtmlHTMLAttributes, ReactNode } from "react";
/**
 * A form for filter inputs with live updates. Included by default in List.
 *
 * To be used in conjunction with FilterButton.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/#filter-button--form-combo FilterForm documentation}
 */
export declare const FilterForm: (inProps: FilterFormProps) => React.JSX.Element;
export interface FilterFormProps extends FilterFormBaseProps {
}
/**
 * @deprecated Use FilterFormBase from `ra-core` once available.
 */
export declare const FilterFormBase: (props: FilterFormBaseProps) => React.JSX.Element;
export type FilterFormBaseProps = Omit<HtmlHTMLAttributes<HTMLFormElement>, "children"> & {
    className?: string;
    resource?: string;
    filters?: ReactNode[];
};
export declare const FilterFormInput: (inProps: FilterFormInputProps) => React.JSX.Element;
export interface FilterFormInputProps {
    filterElement: React.ReactElement<any>;
    handleHide: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
    resource?: string;
}
/**
 * A button that opens a dropdown to add, remove, and manage filters.
 *
 * Displays available filters, saved queries, and options to save or clear current filters.
 * Works with the FilterForm to provide a complete filtering UI.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/#filter-button--form-combo FilterForm documentation}
 */
export declare const FilterButton: (props: FilterButtonProps) => React.JSX.Element | null;
export interface FilterButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    disableSaveQuery?: boolean;
    filters?: ReactNode[];
    resource?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}
export declare const FilterButtonMenuItem: React.ForwardRefExoticComponent<FilterButtonMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export interface FilterButtonMenuItemProps {
    filter: React.ReactElement<any>;
    displayed: boolean;
    onShow: (params: {
        source: string;
        defaultValue: any;
    }) => void;
    onHide: (params: {
        source: string;
    }) => void;
    resource?: string;
    autoFocus?: boolean;
}
