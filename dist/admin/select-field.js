import { jsx as _jsx } from "react/jsx-runtime";
import { genericMemo, useChoices, useFieldValue, useTranslate } from "ra-core";
/**
 * Displays a value from an enumeration by mapping it to a human-readable label.
 *
 * Supports custom optionText and optionValue properties, and automatic translation of choice labels.
 * To be used with RecordField or DataTable.Col components, or anywhere a RecordContext is available.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/selectfield/ SelectField documentation}
 *
 * @example
 * import { List, DataTable, SelectField } from './index';
 *
 * const choices = [{ id: 'M', name: 'Male' }, { id: 'F', name: 'Female' }];
 *
 * const UserList = () => (
 *   <List>
 *     <DataTable>
 *       <DataTable.Col source="name" />
 *       <DataTable.Col>
 *         <SelectField source="gender" choices={choices} />
 *       </DataTable.Col>
 *     </DataTable>
 *   </List>
 * );
 *
 * The current choice is translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceField>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <SelectField source="gender" choices={choices} translateChoice={false}/>
 *
 * **Tip**: <ReferenceField> sets `translateChoice` to false by default.
 */
const SelectFieldImpl = (props) => {
    const { className, empty, choices, defaultValue, source, record, optionValue = "id", optionText = "name", translateChoice = true, ...rest } = props;
    const value = useFieldValue({ defaultValue, source, record });
    const { getChoiceText, getChoiceValue } = useChoices({
        optionText,
        optionValue,
        translateChoice,
    });
    const translate = useTranslate();
    const choice = choices
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            choices.find((choice) => getChoiceValue(choice) === value)
        : null;
    if (!choice) {
        if (!empty) {
            return null;
        }
        return (_jsx("span", { className: className, ...rest, children: typeof empty === "string" ? translate(empty, { _: empty }) : empty }));
    }
    const choiceText = getChoiceText(choice);
    return (_jsx("span", { className: className, ...rest, children: choiceText }));
};
SelectFieldImpl.displayName = "SelectFieldImpl";
export const SelectField = genericMemo(SelectFieldImpl);
