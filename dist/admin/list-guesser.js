import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useState, useEffect } from "react";
import { ListBase, getElementsFromRecords, InferredElement, useListContext, useLocation, usePrevious, useResourceContext, } from "ra-core";
import { ListView } from "./list";
import { capitalize, singularize } from "inflection";
import { DataTable } from "./data-table";
import { ArrayField } from "./array-field";
import { BadgeField } from "./badge-field";
import { ReferenceField } from "./reference-field";
import { SingleFieldList } from "./single-field-list";
import { ReferenceArrayField } from "./reference-array-field";
import { GuesserEmpty } from "./guesser-empty";
/**
 * A list page that automatically generates a DataTable from your data.
 *
 * Inspects the first record to infer field types and automatically creates appropriate columns.
 * Useful for rapid prototyping. Logs generated code to console.
 *
 * @see {@link https://marmelab.com/shadcn-admin-kit/docs/list/#scaffolding-a-list-page ListGuesser documentation}
 *
 * @example
 * import { Admin, ListGuesser } from './index';
 * import { Resource } from 'ra-core';
 * import { dataProvider } from './dataProvider';
 *
 * const App = () => (
 *   <Admin dataProvider={dataProvider}>
 *     // ...
 *     <Resource name="posts" list={ListGuesser} />
 *   </Admin>
 * );
 */
export const ListGuesser = (props) => {
    const { debounce, disableAuthentication, disableSyncWithLocation, empty, exporter, filter, filterDefaultValues, perPage, resource, sort, ...rest } = props;
    // force a rerender of this component when any list parameter changes
    // otherwise the ListBase won't be rerendered when the sort changes
    // and the following check won't be performed
    useLocation();
    // keep previous data, unless the resource changes
    const resourceFromContext = useResourceContext(props);
    const previousResource = usePrevious(resourceFromContext);
    const keepPreviousData = previousResource === resourceFromContext;
    return (_jsx(ListBase, { debounce: debounce, disableAuthentication: disableAuthentication, disableSyncWithLocation: disableSyncWithLocation, empty: empty === undefined ? _jsx(GuesserEmpty, {}) : empty, exporter: exporter, filter: filter, filterDefaultValues: filterDefaultValues, perPage: perPage, resource: resource, queryOptions: {
            placeholderData: (previousData) => keepPreviousData ? previousData : undefined,
        }, sort: sort, children: _jsx(ListViewGuesser, { ...rest }) }));
};
const ListViewGuesser = (props) => {
    const { data } = useListContext();
    const resource = useResourceContext();
    const [child, setChild] = useState(null);
    const { enableLog = process.env.NODE_ENV === "development", ...rest } = props;
    useEffect(() => {
        setChild(null);
    }, [resource]);
    useEffect(() => {
        if (data && data.length > 0 && !child) {
            const inferredElements = getElementsFromRecords(data, listFieldTypes);
            const inferredChild = new InferredElement(listFieldTypes.table, null, inferredElements);
            const inferredChildElement = inferredChild.getElement();
            const representation = inferredChild.getRepresentation();
            if (!resource) {
                throw new Error("Cannot use <ListGuesser> outside of a ResourceContext");
            }
            if (!inferredChildElement || !representation) {
                return;
            }
            setChild(inferredChildElement);
            const components = ["List"]
                .concat(Array.from(new Set(Array.from(representation.matchAll(/<([^/\s\\.>]+)/g))
                .map((match) => match[1])
                .filter((component) => component !== "span"))))
                .sort();
            if (enableLog) {
                // eslint-disable-next-line no-console
                console.log(`Guessed List:

${components
                    .map((component) => `import { ${component} } from "./${kebabCase(component)}";`)
                    .join("\n")}

export const ${capitalize(singularize(resource))}List = () => (
    <List>
${inferredChild.getRepresentation()}
    </List>
);`);
            }
        }
    }, [data, child, resource, enableLog]);
    return _jsx(ListView, { ...rest, children: child });
};
const listFieldTypes = {
    table: {
        component: (props) => {
            return _jsx(DataTable, { ...props });
        },
        representation: (_props, children) => `        <DataTable>
${children
            .map((child) => `            ${child.getRepresentation()}`)
            .join("\n")}
        </DataTable>`,
    },
    reference: {
        component: (props) => (_jsx(DataTable.Col, { source: props.source, children: _jsx(ReferenceField, { source: props.source, reference: props.reference }) })),
        representation: (props) => `<DataTable.Col source="${props.source}">
                <ReferenceField source="${props.source}" reference="${props.reference}" />
            </DataTable.Col>`,
    },
    array: {
        component: ({ children, ...props }) => {
            const childrenArray = React.Children.toArray(children);
            return (_jsx(DataTable.Col, { source: props.source, children: _jsx(ArrayField, { source: props.source, children: _jsx(SingleFieldList, { children: _jsx(BadgeField, { source: childrenArray.length > 0 &&
                                React.isValidElement(childrenArray[0]) &&
                                childrenArray[0].props.source }) }) }) }));
        },
        representation: (props, children) => `<DataTable.Col source="${props.source}">
               <ArrayField source="${props.source}">
                    <SingleFieldList>
                        <BadgeField source="${children.length > 0 && children[0].getProps().source}" />
                   </SingleFieldList>
                </ArrayField>
            </DataTable.Col>`,
    },
    referenceArray: {
        component: (props) => (_jsx(DataTable.Col, { ...props, children: _jsx(ReferenceArrayField, { ...props }) })),
        representation: (props) => `<DataTable.Col source="${props.source}">
                <ReferenceArrayField source="${props.source}" reference="${props.reference}" />
            </DataTable.Col>`,
    },
    string: {
        component: DataTable.Col,
        representation: (props) => `<DataTable.Col source="${props.source}" />`,
    },
};
const kebabCase = (name) => {
    return name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
        .toLowerCase();
};
