/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarItemProps } from '@progress/kendo-react-buttons';
import * as React from 'react';
/**
 * Represents the props of the knoReact [GanttViewSelector](components/gantt/api/ganttviewselector) component.
 */
/** @hidden */
export interface ViewSelectorProps extends ToolbarItemProps {
    children?: React.ReactNode;
}
/**
 * Represents the object which is returned from the `ref` callback of the [GanttViewSelector](components/gantt/api/ganttviewselector).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
/** @hidden */
export interface ViewSelectorHandle {
    element: HTMLSpanElement | null;
    props: ViewSelectorProps;
}
/**
 * Represents the default `viewSelector` component rendered by the [knoReact Gantt component](components/gantt).
 */
/** @hidden */
export declare const ViewSelector: React.ForwardRefExoticComponent<ViewSelectorProps & React.RefAttributes<ViewSelectorHandle>>;
