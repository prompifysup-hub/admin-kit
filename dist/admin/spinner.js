import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
const spinnerVariants = cva("flex-col items-center justify-center", {
    variants: {
        show: {
            true: "flex",
            false: "hidden",
        },
    },
    defaultVariants: {
        show: true,
    },
});
const loaderVariants = cva("animate-spin text-primary", {
    variants: {
        size: {
            small: "size-6",
            medium: "size-8",
            large: "size-12",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});
/**
 * Animated spinner component for loading states.
 */
export function Spinner({ size, show, className }) {
    return (_jsx("span", { className: spinnerVariants({ show }), children: _jsx(Loader2, { className: cn(loaderVariants({ size }), className) }) }));
}
