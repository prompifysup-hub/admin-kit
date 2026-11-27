import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useInput, useResourceContext, FieldTitle } from "ra-core";
import { FormControl, FormError, FormField, FormLabel, } from "./form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InputHelperText } from "./input-helper-text";
/**
 * Single-line or multiline text input for string values.
 *
 * Use `<TextInput>` for short text fields like titles or names. Set `multiline` to `true`
 * for longer content like descriptions or comments. Wraps shadcn's `<Input>` or `<Textarea>`
 * component depending on the `multiline` prop.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/textinput/ TextInput documentation}
 *
 * @example
 * import { Edit, SimpleForm, TextInput } from './index';
 *
 * const PostEdit = () => (
 *   <Edit>
 *     <SimpleForm>
 *       <TextInput source="title" />
 *       <TextInput source="description" multiline rows={4} />
 *     </SimpleForm>
 *   </Edit>
 * );
 */
export const TextInput = (props) => {
    const resource = useResourceContext(props);
    const { label, source, multiline, className, inputClassName, helperText, validate: _validateProp, format: _formatProp, ...rest } = props;
    const { id, field, isRequired } = useInput(props);
    return (_jsxs(FormField, { id: id, className: className, name: field.name, children: [label !== false && (_jsx(FormLabel, { children: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) })), _jsx(FormControl, { children: multiline ? (_jsx(Textarea, { ...rest, ...field, className: inputClassName })) : (_jsx(Input, { ...rest, ...field, className: inputClassName })) }), _jsx(InputHelperText, { helperText: helperText }), _jsx(FormError, {})] }));
};
