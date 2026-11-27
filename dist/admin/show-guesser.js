import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, isValidElement, Children } from "react";
import { ShowBase, InferredElement, getElementsFromRecords, useResourceContext, useShowContext, } from "ra-core";
import { capitalize, singularize } from "inflection";
import { ShowView } from "./show";
import { RecordField } from "./record-field";
import { DateField } from "./date-field";
import { ReferenceField } from "./reference-field";
import { NumberField } from "./number-field";
import { ArrayField } from "./array-field";
import { BadgeField } from "./badge-field";
import { SingleFieldList } from "./single-field-list";
import { ReferenceArrayField } from "./reference-array-field";
/**
 * A show page that automatically generates fields from your data.
 *
 * Inspects the record to infer field types and automatically creates appropriate display fields.
 * Useful for rapid prototyping. Logs generated code to console when enableLog is true.
 *
 * @example
 * import { ShowGuesser } from './index';
 *
 * export const PostShow = () => <ShowGuesser enableLog />;
 */
export const ShowGuesser = (props) => {
    return (_jsx(ShowBase, { children: _jsx(ShowViewGuesser, { ...props }) }));
};
const ShowViewGuesser = (props) => {
    const resource = useResourceContext();
    if (!resource) {
        throw new Error(`Cannot use <ShowGuesser> outside of a ResourceContext`);
    }
    const { record } = useShowContext();
    const [child, setChild] = useState(null);
    const { enableLog = process.env.NODE_ENV === "development", ...rest } = props;
    useEffect(() => {
        setChild(null);
    }, [resource]);
    useEffect(() => {
        if (record && !child) {
            const inferredElements = getElementsFromRecords([record], showFieldTypes);
            const inferredChild = new InferredElement(showFieldTypes.show, null, inferredElements);
            setChild(inferredChild.getElement());
            if (!enableLog)
                return;
            const representation = inferredChild.getRepresentation();
            const components = ["Show"]
                .concat(Array.from(new Set(Array.from(representation.matchAll(/<([^/\s>]+)/g))
                .map((match) => match[1])
                .filter((component) => component !== "span" && component !== "div"))))
                .sort();
            // eslint-disable-next-line no-console
            console.log(`Guessed Show:

${components
                .map((component) => `import { ${component} } from "./${kebabCase(component)}";`)
                .join("\n")}

export const ${capitalize(singularize(resource))}Show = () => (
    <Show>
${inferredChild.getRepresentation()}
    </Show>
);`);
        }
    }, [record, child, resource, enableLog]);
    return _jsx(ShowView, { ...rest, children: child });
};
const showFieldTypes = {
    show: {
        component: (props) => (_jsx("div", { className: "flex flex-col gap-4", children: props.children })),
        representation: (_props, children) => `        <div className="flex flex-col gap-4">
${children
            .map((child) => `            ${child.getRepresentation()}`)
            .join("\n")}
        </div>`,
    },
    reference: {
        component: (props) => (_jsx(RecordField, { source: props.source, children: _jsx(ReferenceField, { source: props.source, reference: props.reference }) })),
        representation: (props) => `<RecordField source="${props.source}">
                <ReferenceField source="${props.source}" reference="${props.reference}" />
            </RecordField>`,
    },
    array: {
        component: ({ children, ...props }) => {
            const childrenArray = Children.toArray(children);
            return (_jsx(RecordField, { source: props.source, children: _jsx(ArrayField, { source: props.source, children: _jsx(SingleFieldList, { children: _jsx(BadgeField, { source: childrenArray.length > 0 &&
                                isValidElement(childrenArray[0]) &&
                                childrenArray[0].props.source }) }) }) }));
        },
        representation: (props, children) => `<RecordField source="${props.source}">
                <ArrayField source="${props.source}">
                    <SingleFieldList>
                        <BadgeField source="${children.length > 0 && children[0].getProps().source}" />
                    </SingleFieldList>
                </ArrayField>
            </RecordField>`,
    },
    referenceArray: {
        component: (props) => (_jsx(RecordField, { source: props.source, children: _jsx(ReferenceArrayField, { ...props }) })),
        representation: (props) => `<RecordField source="${props.source}">
                <ReferenceArrayField source="${props.source}" reference="${props.reference}" />
            </RecordField>`,
    },
    boolean: {
        component: (props) => (_jsx(RecordField, { source: props.source, render: (record) => (record[props.source] ? "Yes" : "No") })),
        representation: (props) => `<RecordField source="${props.source}" render={record => record[${props.source}] ? 'Yes' : 'No'} />`,
    },
    date: {
        component: (props) => (_jsx(RecordField, { source: props.source, children: _jsx(DateField, { source: props.source }) })),
        representation: (props) => `<RecordField source="${props.source}">
                <DateField source="${props.source}" />
            </RecordField>`,
    },
    number: {
        component: (props) => (_jsx(RecordField, { source: props.source, children: _jsx(NumberField, { source: props.source }) })),
        representation: (props) => `<RecordField source="${props.source}">
                <NumberField source="${props.source}" />
            </RecordField>`,
    },
    string: {
        component: (props) => _jsx(RecordField, { source: props.source }),
        representation: (props) => `<RecordField source="${props.source}" />`,
    },
};
const kebabCase = (name) => {
    return name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
        .toLowerCase();
};
