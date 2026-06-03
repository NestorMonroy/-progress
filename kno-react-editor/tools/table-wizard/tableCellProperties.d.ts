/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ListItemProps } from '@progress/kno-react-dropdowns';
import { ToolProps } from '../ToolProps';
import * as React from 'react';
/**
 * @hidden
 */
export interface TableCellPropertiesProps extends ToolProps {
}
/**
 * @hidden
 */
export declare const TableCellProperties: React.FunctionComponent<TableCellPropertiesProps>;
/**
 * @hidden
 */
export declare const valueRenderWithIcon: (element: React.ReactElement<HTMLSpanElement>, value: any) => React.JSX.Element;
/**
 * @hidden
 */
export declare const itemRenderWithIcon: (li: React.ReactElement<any>, itemProps: ListItemProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
