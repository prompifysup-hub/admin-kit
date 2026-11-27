import * as React from "react";
import { Button } from "../ui/button";
type ButtonProps = React.ComponentProps<typeof Button>;
export interface SortButtonProps extends ButtonProps {
    fields: string[];
    icon?: React.ReactNode;
    label?: string;
    resource?: string;
}
export declare const SortButton: React.MemoExoticComponent<(props: SortButtonProps) => React.JSX.Element>;
export {};
