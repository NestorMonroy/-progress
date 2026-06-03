/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem, SchedulerItemDragEvent, SchedulerItemMouseEvent, SchedulerItemKeyboardEvent, SchedulerItemFocusEvent } from '../models/index.js';
import { SchedulerOccurrenceDialogProps, SchedulerOccurrenceDialogStateChangeEvent } from '../components/SchedulerOccurrenceDialog.js';
import { SchedulerFormProps, SchedulerFormStateChangeEvent } from '../components/SchedulerForm.js';
import { SchedulerRemoveDialogProps, SchedulerRemoveDialogStateChangeEvent } from '../components/SchedulerRemoveDialog.js';
import { DataAction } from '../Scheduler.js';
import { SchedulerDragProps } from '../views/common/SchedulerDrag.js';
import { SchedulerResizeProps } from '../views/common/SchedulerResize.js';
import { SchedulerViewItemProps } from './SchedulerViewItem.js';
import { SchedulerItemsFocusAction, SchedulerSlotsFocusAction } from '../hooks/index.js';
import { FORM_ITEM_ACTION, SchedulerItemFormItemAction } from './hooks/use-form-item.js';
import { SchedulerItemShowOccurrenceDialogAction, SHOW_OCCURRENCE_DIALOG_ACTION } from './hooks/use-show-occurrence-dialog.js';
import { REMOVE_ITEM_ACTION, SchedulerItemRemoveItemAction } from './hooks/use-remove-item.js';
import { SchedulerItemShowRemoveDialogAction, SHOW_REMOVE_DIALOG_ACTION } from './hooks/use-show-remove-item-dialog.js';
import { DRAG_ITEM_ACTION, SchedulerItemDragItemAction } from './hooks/use-drag-item.js';
import { RESIZE_ITEM_ACTION, SchedulerItemResizeItemAction } from './hooks/use-resize-item.js';
import { SchedulerItemSeriesAction } from './hooks/use-series.js';
import { SchedulerItemsSelectAction } from '../hooks/use-items-selection.js';
import { SchedulerSlotsSelectAction } from '../hooks/use-slots-selection.js';
import * as React from 'react';
export interface SchedulerEditItemStateChangeEvent<T> {
    /**
     * The value associated with the state change event.
     */
    value: T;
}
/**
 * Represents the available SchedulerEditItem` actions.
 *
 * Can be one of:
 * - [SchedulerItemDragItemAction](components/scheduler/api/scheduleritemdragitemaction)
 * - [SchedulerItemResizeItemAction](components/scheduler/api/scheduleritemresizeitemaction)
 * - [SchedulerItemRemoveItemAction](components/scheduler/api/scheduleritemremoveitemaction)
 * - [SchedulerItemShowRemoveDialogAction](components/scheduler/api/scheduleritemshowremovedialogaction)
 * - [SchedulerItemShowOccurrenceDialogAction](components/scheduler/api/scheduleritemshowoccurrencedialogaction)
 * - [SchedulerItemSeriesAction](components/scheduler/api/scheduleritemseriesaction)
 * - [SchedulerItemsFocusAction](components/scheduler/api/scheduleritemsfocusaction)
 * - [SchedulerItemsSelectAction](components/scheduler/api/scheduleritemsselectaction)
 * - [SchedulerSlotsFocusAction](components/scheduler/api/schedulerslotsfocusaction)
 * - [SchedulerSlotsSelectAction](components/scheduler/api/schedulerslotsselectaction)
 *
 * The following `falsy` values will be ignored:
 * - `null`
 * - `false`
 * - `undefined`
 */
export type SchedulerEditItemAction = SchedulerItemFormItemAction | SchedulerItemDragItemAction | SchedulerItemResizeItemAction | SchedulerItemRemoveItemAction | SchedulerItemShowRemoveDialogAction | SchedulerItemShowOccurrenceDialogAction | SchedulerItemSeriesAction | SchedulerItemsFocusAction | SchedulerItemsSelectAction | SchedulerSlotsFocusAction | SchedulerSlotsSelectAction | null | false | undefined;
/**
 * Represents the props of the knoReact [SchedulerEditItem]() component.
 */
export interface SchedulerEditItemProps extends SchedulerViewItemProps {
    /**
     * Overrides the default component responsible for positioning the item inside the view.
     *
     * The default Component is: [SchedulerViewItem](components/scheduler/api/schedulerviewitem).
     */
    viewItem?: React.ComponentType<SchedulerViewItemProps>;
    /**
     * Overrides the default component responsible for visualizing the `dragItem`.
     *
     * The default Component is: [SchedulerDrag](components/scheduler/api/schedulerdrag).
     */
    drag?: React.ComponentType<SchedulerDragProps>;
    /**
     * Overrides the default component responsible for visualizing the `resizeItem`.
     *
     * The default Component is: [SchedulerResize](components/scheduler/api/schedulerresize).
     */
    resize?: React.ComponentType<SchedulerResizeProps>;
    /**
     * Overrides the default component responsible for visualizing the `formItem`.
     *
     * The default Component is: [SchedulerForm](components/scheduler/api/schedulerform).
     */
    form?: React.ComponentType<SchedulerFormProps>;
    /**
     * Overrides the default component responsible for visualizing the `removeItem` and confirming the `remove` action.
     *
     * The default Component is: [SchedulerRemoveDialog](components/scheduler/api/schedulerremovedialog).
     */
    removeDialog?: React.ComponentType<SchedulerRemoveDialogProps>;
    /**
     * Overrides the default component responsible for the selection between `occurrence` and `series` edit.
     *
     * The default Component is: [SchedulerOccurrenceDialog](components/scheduler/api/scheduleroccurrencedialog).
     */
    occurrenceDialog?: React.ComponentType<SchedulerOccurrenceDialogProps>;
    /**
     * Fires when the item has been removed or manipulated through dragging, resizing, or an external form.
     */
    onDataAction?: (action: DataAction, event?: any) => void;
    /**
     * Setting this property will force the `formItem` to be in controlled state, allowing further customization.
     */
    formItem?: DataItem | null;
    /**
     * Fires every time the `formItem` changes.
     */
    onFormItemChange?: (event: SchedulerEditItemStateChangeEvent<DataItem | null>) => void;
    /**
     * Setting this property will force the `dragItem` to be in controlled state, allowing further customization.
     */
    dragItem?: DataItem | null;
    /**
     * Fires every time the `dragItem` changes.
     */
    onDragItemChange?: (event: SchedulerEditItemStateChangeEvent<DataItem | null>) => void;
    /**
     * Setting this property will force the `resizeItem` to be in controlled state, allowing further customization.
     */
    resizeItem?: DataItem | null;
    /**
     * Fires every time the `resizeItem` changes.
     */
    onResizeItemChange?: (event: SchedulerEditItemStateChangeEvent<DataItem | null>) => void;
    /**
     * Setting this property will force the `removeItem` to be in controlled state, allowing further customization.
     *
     * Specifies the DataItem which should be removed from the `data` set.
     * The `removeItem` is passed as property to the `removeDialog` and `occurrenceDialog` component;
     */
    removeItem?: DataItem | null;
    /**
     * Fires every time the `removeItem` changes.
     */
    onRemoveItemChange?: (event: SchedulerEditItemStateChangeEvent<DataItem | null>) => void;
    /**
     * Setting this property will force the `showOccurrenceDialog` to be in controlled state, allowing further control over the display of the `occurrenceDialog` component.
     */
    showOccurrenceDialog?: boolean;
    /**
     * Fires every time the `showOccurrenceDialog` changes.
     */
    onShowOccurrenceDialogChange?: (event: SchedulerEditItemStateChangeEvent<boolean>) => void;
    /**
     * Setting this property will force the `showRemoveDialog` to be in controlled state, allowing further control over the display of the `removeDialog` component.
     */
    showRemoveDialog?: boolean;
    /**
     * Fires every time the `showRemoveDialog` changes.
     */
    onShowRemoveDialogChange?: (event: SchedulerEditItemStateChangeEvent<boolean>) => void;
    /**
     * Indicates if the editing should be applied to the whole `series` or to a single `occurrence` when the item is recurring.
     *
     * By default, the `series` prop is set to `null` and additional selection is done through the `occurrence` dialog.
     * If set ot either `true` or `false`:
     * - `true` &mdash; indicates that the editing should always be applied to the whole `series`
     * - `false` &mdash; indicates that the editing should always be applied to a single `occurrence`.
     */
    series?: boolean | null;
    /**
     * Fires every time the `series` changes.
     */
    onSeriesChange?: (event: SchedulerEditItemStateChangeEvent<boolean | null>) => void;
    /**
     * Fires whenever you select the `occurrence` option from the `OccurrenceDialog`.
     */
    onOccurrenceClick?: (event: SchedulerOccurrenceDialogStateChangeEvent<any>) => void;
    /**
     * An action callback. Used to define the component behavior on occurrence click.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onOccurrenceClickAction?: (event: SchedulerOccurrenceDialogStateChangeEvent<any>, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * Fires whenever you select the `series` option from the `OccurrenceDialog`.
     */
    onSeriesClick?: (event: SchedulerOccurrenceDialogStateChangeEvent<any>) => void;
    /**
     * An action callback. Used to define the component behavior on series click.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onSeriesClickAction?: (event: SchedulerOccurrenceDialogStateChangeEvent<any>, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * Fires whenever you select the `confirm` option from the `RemoveDialog`.
     */
    onRemoveConfirm?: (event: SchedulerRemoveDialogStateChangeEvent<any>) => void;
    /**
     * An action callback. Used to define the component behavior on remove confirm click.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onRemoveConfirmAction?: (event: SchedulerRemoveDialogStateChangeEvent<any>, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * Fires whenever you submit the `form`.
     */
    onFormSubmit?: (event: SchedulerFormStateChangeEvent<DataItem | null>) => void;
    /**
     * An action callback. Used to define the component behavior on form submit.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onFormSubmitAction?: (event: SchedulerFormStateChangeEvent<DataItem | null>, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * Fires whenever you cancel the current edit.
     */
    onCancel?: (event: SchedulerFormStateChangeEvent<null> | SchedulerOccurrenceDialogStateChangeEvent<null>) => void;
    /**
     * An action callback. Used to define the component behavior on cancel.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onCancelAction?: (event: SchedulerFormStateChangeEvent<null> | SchedulerOccurrenceDialogStateChangeEvent<null>, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on click.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onClickAction?: (event: SchedulerItemMouseEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on mouse down.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onMouseDownAction?: (event: SchedulerItemMouseEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on mouse up.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onMouseUpAction?: (event: SchedulerItemMouseEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on double click.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onDoubleClickAction?: (event: SchedulerItemMouseEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on remove click.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onRemoveClickAction?: (event: SchedulerItemMouseEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on key down.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onKeyDownAction?: (event: SchedulerItemKeyboardEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on key up.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onKeyUpAction?: (event: SchedulerItemKeyboardEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on focus.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onFocusAction?: (event: SchedulerItemFocusEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on blur.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onBlurAction?: (event: SchedulerItemFocusEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on press.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onPressAction?: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on drag.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onDragAction?: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on release.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onReleaseAction?: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on resize press.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onResizePressAction?: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on resize start drag.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onResizeStartDragAction?: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on resize end drag.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onResizeEndDragAction?: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
    /**
     * An action callback. Used to define the component behavior on resize release.
     *
     * Internal state change will be triggered depending on the specific action types.
     */
    onResizeReleaseAction?: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction | SchedulerEditItemAction[];
}
/**
 * Represents the internal `state` of the `SchedulerEditItem`.
 */
export interface SchedulerEditItemState {
    /**
     * Whether the item is currently selected.
     */
    selected: boolean;
    /**
     * Whether the action applies to a series or single occurrence.
     */
    series: boolean | null;
    /**
     * The data item being edited in the form.
     */
    formItem: DataItem | null;
    /**
     * The data item being dragged.
     */
    dragItem: DataItem | null;
    /**
     * The data item being resized.
     */
    resizeItem: DataItem | null;
    /**
     * The data item scheduled for removal.
     */
    removeItem: DataItem | null;
    /**
     * The data item for which the remove dialog is shown.
     */
    showRemoveDialog: DataItem | null;
    /**
     * The data item for which the occurrence dialog is shown.
     */
    showOccurrenceDialog: DataItem | null;
}
/**
 * Represents the object which is returned from the `ref` callback of the [SchedulerEditItem](components/scheduler/api/scheduleredititem).
 *
 * For more information about Refs, refer to the [React Refs & Dom](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) article.
 */
export interface SchedulerEditItemHandle {
    /**
     * The HTML element of the SchedulerEditItem component.
     */
    element: HTMLDivElement | null;
    /**
     * The props of the SchedulerEditItem component.
     */
    props: SchedulerEditItemProps;
}
/**
 * Represents the default `editItem` component rendered by the [knoReact Scheduler component](components/scheduler).
 *
 * This is a composite component of the [`SchedulerViewItem`](components/scheduler/api/schedulerviewitem), extending it to provide editing through drag, resize and external form.
 */
export declare const SchedulerEditItem: React.ForwardRefExoticComponent<SchedulerEditItemProps & React.RefAttributes<SchedulerEditItemHandle>>;
export declare const schedulerEditItemDefaultProps: {
    viewItem: React.ForwardRefExoticComponent<SchedulerViewItemProps & React.RefAttributes<import('./SchedulerViewItem.js').SchedulerViewItemHandle>>;
    drag: React.FunctionComponent<SchedulerDragProps>;
    resize: React.FunctionComponent<SchedulerResizeProps>;
    form: React.ForwardRefExoticComponent<SchedulerFormProps & React.RefAttributes<import('../components/SchedulerForm.js').SchedulerFormHandle | null>>;
    occurrenceDialog: React.ForwardRefExoticComponent<SchedulerOccurrenceDialogProps & React.RefAttributes<import('../components/SchedulerOccurrenceDialog.js').SchedulerOccurrenceDialogHandle | null>>;
    removeDialog: React.ForwardRefExoticComponent<SchedulerRemoveDialogProps & React.RefAttributes<import('../components/SchedulerRemoveDialog.js').SchedulerRemoveDialogHandle | null>>;
    onClickAction: (event: SchedulerItemMouseEvent, _: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction[];
    onDoubleClickAction: (_: any, props: SchedulerEditItemProps) => (false | {
        type: FORM_ITEM_ACTION;
        payload: any;
    } | {
        type: SHOW_OCCURRENCE_DIALOG_ACTION;
        payload?: undefined;
    })[];
    onRemoveClickAction: (_: any, props: SchedulerEditItemProps) => ({
        type: REMOVE_ITEM_ACTION;
        payload: any;
    } | {
        type: SHOW_OCCURRENCE_DIALOG_ACTION;
        payload?: undefined;
    } | {
        type: SHOW_REMOVE_DIALOG_ACTION;
        payload?: undefined;
    })[];
    onPressAction: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps) => never[] | {
        type: DRAG_ITEM_ACTION;
        payload: {
            x: number;
            y: number;
        };
    };
    onDragAction: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps) => never[] | {
        type: DRAG_ITEM_ACTION;
        payload: {
            x: number;
            y: number;
        };
    };
    onReleaseAction: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => never[] | {
        type: SHOW_OCCURRENCE_DIALOG_ACTION;
        payload?: undefined;
    } | {
        type: DRAG_ITEM_ACTION;
        payload: {
            x: number;
            y: number;
        };
    };
    onResizePressAction: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps) => never[] | {
        type: RESIZE_ITEM_ACTION;
        payload: {
            x: number;
            y: number;
        };
    };
    onResizeStartDragAction: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps) => never[] | {
        type: RESIZE_ITEM_ACTION;
        payload: {
            x: number;
            y: number;
        };
    };
    onResizeEndDragAction: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps) => never[] | {
        type: RESIZE_ITEM_ACTION;
        payload: {
            x: number;
            y: number;
        };
    };
    onResizeReleaseAction: (event: SchedulerItemDragEvent, props: SchedulerEditItemProps, state: SchedulerEditItemState) => never[] | {
        type: SHOW_OCCURRENCE_DIALOG_ACTION;
        payload?: undefined;
    } | {
        type: RESIZE_ITEM_ACTION;
        payload: {
            x: number;
            y: number;
        };
    };
    onOccurrenceClickAction: (_event: SchedulerOccurrenceDialogStateChangeEvent<any>, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction[];
    onSeriesClickAction: (_event: SchedulerOccurrenceDialogStateChangeEvent<any>, props: SchedulerEditItemProps, state: SchedulerEditItemState) => SchedulerEditItemAction[];
    onKeyDownAction: (event: SchedulerItemKeyboardEvent, props: SchedulerEditItemProps) => SchedulerEditItemAction | SchedulerEditItemAction[];
    onFormSubmitAction: (event: SchedulerFormStateChangeEvent<DataItem | null>) => SchedulerEditItemAction[];
    onRemoveConfirmAction: () => SchedulerEditItemAction[];
    onCancelAction: () => SchedulerEditItemAction[];
};
