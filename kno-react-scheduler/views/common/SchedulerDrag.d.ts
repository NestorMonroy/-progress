/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../../models/index.js';
import { SchedulerItemProps } from '../../items/SchedulerItem.js';
import { SchedulerViewItemProps } from '../../items/SchedulerViewItem.js';
import * as React from 'react';
/**
 * Represents the props of the knoReact [SchedulerDrag] component.
 */
export interface SchedulerDragProps {
    /** @hidden */
    ignoreIsAllDay?: boolean;
    /**
     * Specifies the `DataItem` to be visualized as a Drag item.
     */
    dataItem: DataItem;
    /**
     * Specifies the orientation of the SchedulerItem inside the Drag.
     */
    vertical?: boolean;
    /**
     * Overrides the default component responsible for visualizing a single item.
     *
     * The default Component is: [SchedulerItem].
     */
    item?: React.ComponentType<SchedulerItemProps>;
    /**
     * Overrides the default component responsible for positioning the item inside the view.
     *
     * The default Component is: [SchedulerViewItem]().
     */
    viewItem?: React.ComponentType<SchedulerViewItemProps>;
}
/**
 * Represents the default `drag` component rendered by the [knoReact SchedulerEditItem component].
 */
export declare const SchedulerDrag: React.FunctionComponent<SchedulerDragProps>;
export declare const schedulerDragDefaultProps: {
    viewItem: React.ForwardRefExoticComponent<SchedulerViewItemProps & React.RefAttributes<import('../../items/SchedulerViewItem.js').SchedulerViewItemHandle>>;
    item: React.ForwardRefExoticComponent<SchedulerItemProps & React.RefAttributes<import('../../items/SchedulerItem.js').SchedulerItemHandle>>;
};
