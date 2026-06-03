/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarProps as KendoToolbarProps } from '@progress/kendo-react-buttons';
import * as React from 'react';
/** @hidden */
export interface ToolbarProps extends KendoToolbarProps {
    children?: React.ReactNode;
}
/**
 * Represents the object which is returned from the `ref` callback of the [GanttToolbar](components/gantt/api/gantttoolbar).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
/** @hidden */
export interface GanttToolbarHandle {
    element: HTMLDivElement | null;
    props: ToolbarProps;
}
/**
 * Represents the default `toolbar` component rendered by the [knoReact Gantt component](components/gantt).
 */
/** @hidden */
export declare const Toolbar: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<GanttToolbarHandle>>;
