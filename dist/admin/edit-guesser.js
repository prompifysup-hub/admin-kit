import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { EditBase, InferredElement, useResourceContext, useEditContext, getElementsFromRecords, } from "ra-core";
import { capitalize, singularize } from "inflection";
import { EditView } from "./edit";
import { SimpleForm } from "./simple-form";
import { TextInput } from "./text-input";
import { BooleanInput } from "./boolean-input";
import { ReferenceInput } from "./reference-input";
import { AutocompleteInput } from "./autocomplete-input";
import { ReferenceArrayInput } from "./reference-array-input";
/**
 * An edit page that automatically generates a form from your data.
 *
 * Inspects the record to infer field types and automatically creates appropriate inputs.
 * Useful for rapid prototyping. Logs generated code to console.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/edit/#scaffolding-an-edit-page EditGuesser documentation}
 *
 * @example
 * import { Admin, EditGuesser } from './index';
 * import { Resource } from 'ra-core';
 * import dataProvider from './dataProvider';
 *
 * const App = () => (
 *   <Admin dataProvider={dataProvider}>
 *     ...
 *     <Resource name="customers" edit={EditGuesser} />
 *   </Admin>
 * );
 */
export const EditGuesser = (props) => {
    return (_jsx(EditBase, { children: _jsx(EditViewGuesser, { ...props }) }));
};
const EditViewGuesser = (props) => {
    const resource = useResourceContext();
    if (!resource) {
        throw new Error(`Cannot use <EditGuesser> outside of a ResourceContext`);
    }
    const { record } = useEditContext();
    const [child, setChild] = useState(null);
    const { enableLog = process.env.NODE_ENV === "development", ...rest } = props;
    useEffect(() => {
        setChild(null);
    }, [resource]);
    useEffect(() => {
        if (record && !child) {
            const inferredElements = getElementsFromRecords([record], editFieldTypes);
            const inferredChild = new InferredElement(editFieldTypes.form, null, inferredElements);
            setChild(inferredChild.getElement());
            if (!enableLog)
                return;
            const representation = inferredChild.getRepresentation();
            const components = ["Edit"]
                .concat(Array.from(new Set(Array.from(representation.matchAll(/<([^/\s>]+)/g))
                .map((match) => match[1])
                .filter((component) => component !== "span"))))
                .sort();
            // eslint-disable-next-line no-console
            console.log(`Guessed Edit:

${components
                .map((component) => `import { ${component} } from "./${kebabCase(component)}";`)
                .join("\n")}

export const ${capitalize(singularize(resource))}Edit = () => (
    <Edit>
${representation}
    </Edit>
);`);
        }
    }, [record, child, resource, enableLog]);
    return _jsx(EditView, { ...rest, children: child });
};
const editFieldTypes = {
    form: {
        component: (props) => _jsx(SimpleForm, { ...props }),
        representation: (_props, children) => `        <SimpleForm>
${children
            .map((child) => `            ${child.getRepresentation()}`)
            .join("\n")}
        </SimpleForm>`,
    },
    reference: {
        component: (props) => (_jsx(ReferenceInput, { source: props.source, reference: props.reference, children: _jsx(AutocompleteInput, {}) })),
        representation: (props) => `<ReferenceInput source="${props.source}" reference="${props.reference}">
                  <AutocompleteInput />
              </ReferenceInput>`,
    },
    referenceArray: {
        component: (props) => _jsx(ReferenceArrayInput, { ...props }),
        representation: (props) => `<ReferenceArrayInput source="${props.source}" reference="${props.reference}" />`,
    },
    boolean: {
        component: (props) => _jsx(BooleanInput, { ...props }),
        representation: (props) => `<BooleanInput source="${props.source}" />`,
    },
    string: {
        component: (props) => _jsx(TextInput, { ...props }),
        representation: (props) => `<TextInput source="${props.source}" />`,
    },
};
const kebabCase = (name) => {
    return name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
        .toLowerCase();
};
