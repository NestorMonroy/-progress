/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * @hidden
 */
export interface DefaultItemProps {
    defaultItem?: any;
    textField?: string;
    selected: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
/**
 * @hidden
 */
declare const ListDefaultItem: (props: DefaultItemProps) => React.JSX.Element;
export default ListDefaultItem;
