/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the OrgChartExpandChangeEvent event argument.
 */
export interface OrgChartExpandChangeEvent {
    /**
     * Represents the triggered React event.
     */
    event: React.MouseEvent | React.KeyboardEvent;
    /**
     * Represents expand value of the item or group.
     */
    expand: boolean;
    /**
     * Item that triggers the event.
     */
    item?: any;
    /**
     * Items that belong to the group that triggers the event.
     */
    items?: any[];
}
