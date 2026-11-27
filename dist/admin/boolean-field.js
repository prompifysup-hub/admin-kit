import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Check, X } from "lucide-react";
import { useFieldValue, useTranslate } from "ra-core";
import { cn } from "../lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../ui/tooltip";
/**
 * Displays a boolean value as a colored check or close icon.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/booleanfield/ BooleanField documentation}
 *
 * @example
 * import { Show, SimpleShowLayout, BooleanField } from './index';
 *
 * const PostShow = () => (
 *   <Show>
 *     <SimpleShowLayout>
 *       <BooleanField source="is_published" />
 *       <BooleanField source="allow_comments" />
 *     </SimpleShowLayout>
 *   </Show>
 * );
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BooleanField = ({ source, record, defaultValue, className, TrueIcon = Check, FalseIcon = X, valueLabelFalse, valueLabelTrue, looseValue = false, empty = null, }) => {
    const value = useFieldValue({ source, record, defaultValue });
    const isTruthyValue = value === true || (looseValue && value);
    const baseClassName = "size-5 text-foreground";
    if (looseValue || typeof value === "boolean") {
        const icon = isTruthyValue ? (TrueIcon ? (_jsx(TrueIcon, { className: cn(baseClassName, className) })) : (_jsx("div", {}))) : FalseIcon ? (_jsx(FalseIcon, { className: cn(baseClassName, className) })) : (_jsx("div", {}));
        return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { render: icon }), _jsx(TooltipContent, { children: _jsx(RenderLabel, { value: !!value, valueLabelFalse: valueLabelFalse, valueLabelTrue: valueLabelTrue }) })] }) }));
    }
    return _jsx(_Fragment, { children: empty });
};
function RenderLabel({ value, valueLabelTrue, valueLabelFalse, }) {
    const translate = useTranslate();
    let label = value ? valueLabelTrue : valueLabelFalse;
    if (!label) {
        label = value ? "ra.boolean.true" : "ra.boolean.false";
    }
    if (typeof label === "string") {
        label = translate(label, { _: label });
    }
    return _jsx("p", { children: label });
}
