import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { Toggle, toggleVariants } from "./toggle";
declare function ToggleGroup({ className, variant, size, spacing, children, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive> & VariantProps<typeof toggleVariants> & {
    spacing?: number;
}): React.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React.ComponentProps<typeof Toggle> & VariantProps<typeof toggleVariants>): React.JSX.Element;
export { ToggleGroup, ToggleGroupItem };
