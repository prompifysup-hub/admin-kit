import type { VariantProps } from "class-variance-authority";
declare const spinnerVariants: (props?: ({
    show?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const loaderVariants: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface SpinnerContentProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
    className?: string;
}
/**
 * Animated spinner component for loading states.
 */
export declare function Spinner({ size, show, className }: SpinnerContentProps): import("react").JSX.Element;
export {};
