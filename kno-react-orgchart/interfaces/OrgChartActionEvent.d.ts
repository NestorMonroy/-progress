/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
/**
 * Represents the OrgChartActionEvent event argument.
 */
export interface OrgChartActionEvent {
    /**
     * Represents the triggered React event.
     */
    event: React.KeyboardEvent | React.MouseEvent | React.FocusEvent;
    /**
     * Item that triggers the event.
     */
    item?: any;
    /**
     * Items that belong to the group that triggers the event.
     */
    items?: any;
    /**
     * @hidden
     */
    containerRef?: React.RefObject<HTMLDivElement | null>;
}
