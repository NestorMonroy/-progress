/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { BaseEvent } from '@progress/kno-react-common';
import { ListBox } from '../ListBox.js';
import { ListBoxToolbar } from '../ListBoxToolbar.js';
/**
 * The event that is triggered when an item in the ListBox is clicked.
 */
export interface ListBoxItemClickEvent extends BaseEvent<ListBox> {
    /**
     * The data item that was clicked.
     */
    dataItem?: any;
}
/**
 * The event that is triggered when an item in the ListBox is selected.
 */
export interface ListBoxItemSelectEvent extends BaseEvent<ListBox> {
    /**
     * The data item that was selected.
     */
    dataItem?: any;
}
/**
 * The event that is triggered when a keyboard navigation action is performed.
 */
export interface ListBoxItemNavigateEvent extends BaseEvent<ListBox> {
    /**
     * The name of the action that was performed.
     */
    actionName?: string;
}
/**
 * The event that is triggered when a key is pressed down over the ListBox.
 */
export interface ListBoxKeyDownEvent extends BaseEvent<ListBox> {
}
/**
 * The event that is triggered when a dragged element leaves the ListBox.
 */
export interface ListBoxDragLeaveEvent extends BaseEvent<ListBox> {
}
/**
 * The event that is triggered during drag operations on the ListBox.
 */
export interface ListBoxDragEvent extends BaseEvent<ListBox> {
    /**
     * The data item involved in the drag operation.
     */
    dataItem?: any;
}
/**
 * The base event for ListBox operations.
 */
export interface ListBoxEvent extends BaseEvent<ListBox> {
}
/**
 * The event that is triggered when a tool in the ListBoxToolbar is clicked.
 */
export interface ListBoxToolbarClickEvent extends BaseEvent<ListBoxToolbar> {
    /**
     * The name of the tool that was clicked.
     */
    toolName?: string;
}
/**
 * The base event for ListBoxToolbar operations.
 */
export interface ListBoxToolbarEvent extends BaseEvent<ListBoxToolbar> {
}
