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
export declare const ShowGuesser: (props: ShowGuesserProps) => import("react").JSX.Element;
interface ShowGuesserProps {
    enableLog?: boolean;
}
export {};
