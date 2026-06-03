/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem, SchedulerView, EditableProp, SchedulerGroup, SchedulerResource, SchedulerModelFields } from './models/index.js';
import { SchedulerHandle } from './models/SchedulerHandle.js';
import { SchedulerHeaderProps } from './components/header/SchedulerHeader.js';
import { SchedulerTaskProps } from './tasks/SchedulerTask.js';
import { SchedulerSlotProps } from './slots/SchedulerSlot.js';
import { SchedulerItemProps } from './items/SchedulerItem.js';
import { SchedulerEditItemProps } from './items/SchedulerEditItem.js';
import { SchedulerViewItemProps } from './items/SchedulerViewItem.js';
import { SchedulerViewSlotProps } from './slots/SchedulerViewSlot.js';
import { SchedulerEditSlotProps } from './slots/SchedulerEditSlot.js';
import { SchedulerFooterProps } from './components/footer/SchedulerFooter.js';
import { SchedulerFormProps } from './components/SchedulerForm.js';
import { DATA_ACTION } from './constants/index.js';
import { WebMcpProps } from '@progress/kno-react-common';
import * as React from 'react';
/**
 * Represents the props of the [knoReact Scheduler component](components/scheduler).
 */
export interface SchedulerProps {
    /**
     * Specifies the `id` of the wrapping element of the Scheduler.
     *
     * @example
     * ```jsx
     * <Scheduler id="my-scheduler" />
     * ```
     */
    id?: string;
    /**
     * Specifies the `tabIndex` attribute of the wrapping element of the Scheduler.
     *
     * @default -1
     *
     * @example
     * ```jsx
     * <Scheduler tabIndex={0} />
     * ```
     */
    tabIndex?: number;
    /**
     * Specifies the `role` attribute of the Scheduler wrapping element.
     *
     * For more information, refer to the [Scheduler Accessibility Compliance](components/scheduler/accessibility/wai-aria-support) article.
     *
     * @example
     * ```jsx
     * <Scheduler role="application" />
     * ```
     *
     * @remarks
     * This property is related to accessibility.
     */
    role?: string;
    /**
     * The `aria-labelledby` attribute to be applied to the Scheduler component.
     *
     * For more information, refer to the [Scheduler Accessibility Compliance](components/scheduler/accessibility/wai-aria-support) article.
     *
     * @example
     * ```jsx
     * <Scheduler ariaLabelledby="scheduler-label" />
     * ```
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabelledby?: string;
    /**
     * The `aria-label` attribute to be applied to the Scheduler component.
     *
     * For more information, refer to the [Scheduler Accessibility Compliance](components/scheduler/accessibility/wai-aria-support) article.
     *
     * @example
     * ```jsx
     * <Scheduler ariaLabel="Scheduler component" />
     * ```
     *
     * @remarks
     * This property is related to accessibility.
     */
    ariaLabel?: string;
    /**
     * Specifies the `style` object of the wrapping element of the Scheduler.
     *
     * @example
     * ```jsx
     * <Scheduler style={{ height: '500px' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Specifies the `className` attribute of the wrapping element of the Scheduler.
     *
     * @example
     * ```jsx
     * <Scheduler className="custom-scheduler" />
     * ```
     */
    className?: string;
    /**
     * Overrides the default item. If you specify the `item` property of a specific view, it overrides this property.
     *
     * The default component is: [SchedulerItem](components/scheduler/api/scheduleritem).
     *
     * For more information on customizing the scheduler items, refer to the [Item Customization](components/scheduler/customization/items) article.
     *
     * @example
     * ```jsx
     * const CustomItem = (props) => <div>{props.title}</div>;
     * <Scheduler item={CustomItem} />
     * ```
     */
    item?: React.ComponentType<SchedulerItemProps>;
    /**
     * Overrides the default viewItem. If you specify the `viewItem` property of a specific view, it overrides this property.
     *
     * The default component is: [SchedulerViewItem](components/scheduler/api/schedulerviewitem).
     *
     * For more information on customizing the scheduler items, refer to the [Item Customization](components/scheduler/customization/items) article.
     *
     * @example
     * ```jsx
     * const CustomViewItem = (props) => <div>{props.title}</div>;
     * <Scheduler viewItem={CustomViewItem} />
     * ```
     */
    viewItem?: React.ComponentType<SchedulerViewItemProps>;
    /**
     * Overrides the default editItem. Specifying the `editItem` property of a specific view will override this property.
     *
     * The default component is: [SchedulerEditItem](components/scheduler/api/scheduleredititem).
     *
     * For more information on customizing the scheduler items, refer to the [Item Customization](components/scheduler/customization/items) article.
     *
     * @example
     * ```jsx
     * const CustomEditItem = (props) => <div>{props.title}</div>;
     * <Scheduler editItem={CustomEditItem} />
     * ```
     */
    editItem?: React.ComponentType<SchedulerEditItemProps>;
    /**
     * Overrides the default task. Specifying the `task` property of a specific view will override this property.
     * Currently, only the [AgendaView](components/scheduler/views/agenda) uses the `task`.
     *
     * The default component is: [SchedulerTask](components/scheduler/api/schedulertask).
     *
     * For more information on customizing the scheduler tasks, refer to the [Task Customization](components/scheduler/customization/tasks) article.
     *
     * @example
     * ```jsx
     * const CustomTask = (props) => <div>{props.title}</div>;
     * <Scheduler task={CustomTask} />
     * ```
     */
    task?: React.ComponentType<SchedulerTaskProps>;
    /**
     * Overrides the default viewTask. Specifying the `viewTask` property of a specific view will override this property.
     * Currently, only the [AgendaView](components/scheduler/views/agenda) uses the `viewTask`.
     *
     * The default component is: [SchedulerViewTask](components/scheduler/api/schedulerviewtask).
     *
     * For more information on customizing the scheduler tasks, refer to the [Task Customization](components/scheduler/customization/tasks) article.
     *
     * @example
     * ```jsx
     * const CustomViewTask = (props) => <div>{props.title}</div>;
     * <Scheduler viewTask={CustomViewTask} />
     * ```
     */
    viewTask?: React.ComponentType<SchedulerTaskProps>;
    /**
     * Overrides the default editTask. Specifying the `editTask` property of a specific view will override this property.
     * Currently, only the [AgendaView](components/scheduler/views/agenda) uses the `editTask`.
     *
     * The default component is: [SchedulerEditTask](components/scheduler/api/scheduleredittask).
     *
     * For more information on customizing the scheduler tasks, refer to the [Task Customization](components/scheduler/customization/tasks) article.
     *
     * @example
     * ```jsx
     * const CustomEditTask = (props) => <div>{props.title}</div>;
     * <Scheduler editTask={CustomEditTask} />
     * ```
     */
    editTask?: React.ComponentType<SchedulerTaskProps>;
    /**
     * Overrides the default header component of the Scheduler.
     *
     * The default component is: [SchedulerHeader](components/scheduler/api/schedulerheader).
     *
     * For more information on customizing the scheduler header, refer to the [Header Customization](components/scheduler/customization/header-footer) article.
     *
     * @example
     * ```jsx
     * const CustomHeader = (props) => <div>Custom Header</div>;
     * <Scheduler header={CustomHeader} />
     * ```
     */
    header?: React.ComponentType<SchedulerHeaderProps>;
    /**
     * Overrides the default footer component of the Scheduler.
     *
     * The default component is: [SchedulerFooter](components/scheduler/api/schedulerfooter).
     *
     * For more information on customizing the scheduler footer, refer to the [Footer Customization](components/scheduler/customization/header-footer) article.
     *
     * @example
     * ```jsx
     * const CustomFooter = (props) => <div>Custom Footer</div>;
     * <Scheduler footer={CustomFooter} />
     * ```
     */
    footer?: React.ComponentType<SchedulerFooterProps>;
    /**
     * Overrides the default slot component. Specifying the `slot` property of a specific view will override this property.
     *
     * The default component is: [SchedulerSlot](components/scheduler/api/schedulerslot).
     *
     * For more information on customizing the scheduler slots, refer to the [Slot Customization](components/scheduler/customization/slots) article.
     *
     * @example
     * ```jsx
     * const CustomSlot = (props) => <div>{props.title}</div>;
     * <Scheduler slot={CustomSlot} />
     * ```
     */
    slot?: React.ComponentType<SchedulerSlotProps>;
    /**
     * Overrides the default viewSlot component. Specifying the `viewSlot` property of a specific view will override this property.
     *
     * The default component is: [SchedulerViewSlot](components/scheduler/api/schedulerviewslot).
     *
     * For more information on customizing the scheduler slots, refer to the [Slot Customization](components/scheduler/customization/slots) article.
     *
     * @example
     * ```jsx
     * const CustomViewSlot = (props) => <div>{props.title}</div>;
     * <Scheduler viewSlot={CustomViewSlot} />
     * ```
     */
    viewSlot?: React.ComponentType<SchedulerViewSlotProps>;
    /**
     * Overrides the default editSlot component. Specifying the `editSlot` property of a specific view will override this property.
     *
     * The default component is: [SchedulerEditSlot](components/scheduler/api/schedulereditslot).
     *
     * For more information on customizing the scheduler slots, refer to the [Slot Customization](components/scheduler/customization/slots) article.
     *
     * @example
     * ```jsx
     * const CustomEditSlot = (props) => <div>{props.title}</div>;
     * <Scheduler editSlot={CustomEditSlot} />
     * ```
     */
    editSlot?: React.ComponentType<SchedulerEditSlotProps>;
    /** @hidden */
    form?: React.ComponentType<SchedulerFormProps>;
    /**
     * Sets the currently selected view. The value is matched with the `name` property of the view.
     *
     * Sets the initially selected view. The available values are:
     * * `day`
     * * `week`
     * * `month`
     * * `agenda`
     * * `timeline`
     *
     * @example
     * ```jsx
     * <Scheduler view="day" />
     * ```
     */
    view?: string;
    /**
     * Sets the data of the Scheduler component. The data is then parsed and rendered as visual Scheduler items.
     *
     * @example
     * ```jsx
     * const data = [{ id: 1, title: 'Event', start: new Date(), end: new Date() }];
     * <Scheduler data={data} />
     * ```
     */
    data?: DataItem[];
    /**
     * Sets if the Scheduler component is editable. The value can be either a `boolean` or an Object to specify different types of editing.
     *
     * @default false
     *
     * @example
     * ```jsx
     * <Scheduler editable={true} />
     * ```
     */
    editable?: EditableProp | boolean;
    /**
     * Sets the initially selected view.
     *
     * For more information refer to the [Scheduler Views](components/scheduler/views) article.
     *
     * Sets the initially selected view. The available values are:
     * * `day`
     * * `week`
     * * `month`
     * * `agenda`
     * * `timeline`
     *
     * @example
     * ```jsx
     * <Scheduler defaultView="week" />
     * ```
     */
    defaultView?: string;
    /**
     * Sets the current selected `Date`. The current selected date is passed to the selected view and transformed into a range.
     *
     * @example
     * ```jsx
     * <Scheduler date={new Date()} />
     * ```
     */
    date?: Date;
    /**
     * Sets a default selected `Date`. Use the `defaultDate` property to specify the initial rendered date while remaining in an uncontrolled mode.
     *
     * @example
     * ```jsx
     * <Scheduler defaultDate={new Date()} />
     * ```
     */
    defaultDate?: Date;
    /**
     * Forces RTL mode. For more information refer to [RTL Support](components/scheduler/globalization#toc-right-to-left-support).
     *
     * @example
     * ```jsx
     * <Scheduler rtl={true} />
     * ```
     */
    rtl?: boolean;
    /**
     * Sets the `height` of the Scheduler.
     *
     * @default 600
     *
     * @example
     * ```jsx
     * <Scheduler height={600} />
     * ```
     */
    height?: number | string;
    /**
     * Specifies the available `view` components as `children`. The Scheduler matches the currently selected view and renders it.
     *
     * @example
     * ```jsx
     * <Scheduler>
     *   <DayView />
     *   <WeekView />
     * </Scheduler>
     * ```
     */
    children?: SchedulerView[] | SchedulerView;
    /**
     * Specifies the id of the timezone that the Scheduler displays.
     * For example, `Europe/Sofia`.
     *
     * @default "Etc/UTC"
     *
     * @example
     * ```jsx
     * <Scheduler timezone="Europe/Sofia" />
     * ```
     */
    timezone?: string;
    /**
     * Specifies the groups of the Scheduler.
     *
     * @example
     * ```jsx
     * const group = { resources: ['Rooms'], orientation: 'horizontal' };
     * <Scheduler group={group} />
     * ```
     */
    group?: SchedulerGroup;
    /**
     * Specifies the resources of the Scheduler.
     *
     * @example
     * ```jsx
     * const resources = [{ name: 'Rooms', data: [{ text: 'Room 1', value: 1 }] }];
     * <Scheduler resources={resources} />
     * ```
     */
    resources?: SchedulerResource[];
    /**
     * Specifies the names of the model fields from which the Scheduler reads its data
     * ([see example](components/scheduler/data-binding)).
     *
     * @example
     * ```jsx
     * const modelFields = { id: 'TaskID', start: 'Start', end: 'End' };
     * <Scheduler modelFields={modelFields} />
     * ```
     */
    modelFields?: SchedulerModelFields;
    /**
     * Fires when the user selects a new `date`.
     *
     * @example
     * ```jsx
     * const handleDateChange = (args) => console.log(args.value);
     * <Scheduler onDateChange={handleDateChange} />
     * ```
     */
    onDateChange?: (args: SchedulerDateChangeEvent) => void;
    /**
     * Fires when the user selects a new `view`. [(see example)](components/scheduler/views#toc-controlling-the-selected-view).
     *
     * @example
     * ```jsx
     * const handleViewChange = (args) => console.log(args.value);
     * <Scheduler onViewChange={handleViewChange} />
     * ```
     */
    onViewChange?: (args: SchedulerViewChangeEvent) => void;
    /**
     * Fires each time editing occurs.
     * To enable editing set the `editable` property to `true` or an [`EditableProp`](components/scheduler/api/editableprop).
     *
     * For more information refer to the [Scheduler Editing](components/scheduler/editing) article.
     *
     * @example
     * ```jsx
     * const handleDataChange = (event) => console.log(event);
     * <Scheduler onDataChange={handleDataChange} />
     * ```
     */
    onDataChange?: (event: SchedulerDataChangeEvent) => void;
    /**
     * Enables browser-native AI agent tools via Web MCP (Chrome 146+).
     *
     * Pass `true` for defaults or an object for fine-grained control.
     * AI agents are multilingual — `dataName` accepts any language.
     *
     * @example
     * ```tsx
     * // Boolean: generic "scheduler" label
     * <Scheduler webMcp data={events} onDataChange={handleDataChange} />
     *
     * // Config object: explicit name
     * <Scheduler webMcp={{ dataName: 'appointments' }} data={events} onDataChange={handleDataChange} />
     * ```
     */
    webMcp?: boolean | WebMcpProps;
}
/**
 * Specifies the action which can be dispatched through the [SchedulerDataContext](components/scheduler/api/schedulerdatacontext).
 *
 * For more information refer to the [Scheduler Context](components/scheduler/context) article.
 */
export interface DataAction {
    /**
     * The `type` of the action. The available types are:
     * - `create`
     * - `update`
     * - `remove`
     */
    type: DATA_ACTION;
    /**
     * Specifies if the action should be applied to the whole series of a recurring item. If the item is not recurring, set `series` to `false`.
     */
    series: boolean;
    /**
     * Specifies the `dataItem` being edited.
     */
    dataItem: DataItem;
}
/** @hidden */
export interface DateChangeEvent {
    target: any;
    syntheticEvent: React.SyntheticEvent;
}
/**
 * Fires every time the user changes the selected `date`.
 * The value is a JavaScript `Date` object.
 * For more information, refer to the article on
 * [date selection](components/scheduler/date-selection).
 */
export interface SchedulerDateChangeEvent {
    /**
     * The new date value selected by the user.
     */
    value: Date;
}
/**
 * Fires every time the user changes the provided `data`.
 *
 * For more information, refer to the [Scheduler Data Binding](components/scheduler/data-binding) article.
 */
export interface SchedulerDataChangeEvent {
    /**
     * Contains the newly created data items.
     */
    created: DataItem[];
    /**
     * Contains the updated data items.
     */
    updated: DataItem[];
    /**
     * Contains the deleted data items.
     */
    deleted: DataItem[];
}
/** @hidden */
export interface ActiveViewNameChangeEvent {
    syntheticEvent: React.SyntheticEvent;
    target: any;
}
/**
 * Fires every time the user changes the active `view`.
 *
 * For more information, refer to the [Scheduler Views](components/scheduler/views) article.
 */
export interface SchedulerViewChangeEvent {
    /**
     * The name of the selected view.
     */
    value: string;
}
/**
 * Represents the [knoReact Scheduler component](components/scheduler)
 *
 * @remarks
 * Supported children components are: {@link TimelineView}, {@link DayView}, {@link WeekView}, {@link MonthView}, {@link AgendaView}.
 *
 * @example
 * ```jsx
 *   const currentYear = new Date().getFullYear();
 *   const parseAdjust = (eventDate) => {
 *   const date = new Date(eventDate);
 *   date.setFullYear(currentYear);
 *   return date;
 *   };
 *
 *   const baseData = [
 *   {
 *   TaskID: 4,
 *   OwnerID: 2,
 *   Title: 'Bowling tournament',
 *   Description: '',
 *   StartTimezone: null,
 *   Start: '2013-06-09T21:00:00.000Z',
 *   End: '2013-06-10T00:00:00.000Z',
 *   EndTimezone: null,
 *   RecurrenceRule: null,
 *   RecurrenceID: null,
 *   RecurrenceException: null,
 *   isAllDay: false,
 *   },
 *   {
 *   TaskID: 5,
 *   OwnerID: 2,
 *   Title: 'Take the dog to the vet',
 *   Description: '',
 *   StartTimezone: null,
 *   Start: '2013-06-10T07:00:00.000Z',
 *   End: '2013-06-10T08:00:00.000Z',
 *   EndTimezone: null,
 *   RecurrenceRule: null,
 *   RecurrenceID: null,
 *   RecurrenceException: null,
 *   isAllDay: false,
 *    },
 *  ];
 *
 *   const sampleData = baseData.map((dataItem) => ({
 *   id: dataItem.TaskID,
 *   start: parseAdjust(dataItem.Start),
 *   startTimezone: dataItem.startTimezone,
 *   end: parseAdjust(dataItem.End),
 *   endTimezone: dataItem.endTimezone,
 *   isAllDay: dataItem.isAllDay,
 *   title: dataItem.Title,
 *   description: dataItem.Description,
 *   recurrenceRule: dataItem.RecurrenceRule,
 *   recurrenceExceptions: dataItem.RecurrenceException,
 *   roomId: dataItem.RoomID,
 *   ownerID: dataItem.OwnerID,
 *   personId: dataItem.OwnerID,
 *   }));
 *
 *   const App = () => {
 *   return (
 *   <Scheduler data={sampleData}>
 *   <AgendaView />
 *   <DayView />
 *   <WeekView />
 *   <MonthView />
 *   </Scheduler>
 *    );
 *   };
 * ```
 */
export declare const Scheduler: React.ForwardRefExoticComponent<SchedulerProps & React.RefAttributes<SchedulerHandle | null>>;
export declare const schedulerDefaultProps: {
    data: never[];
    height: number;
    tabIndex: number;
    editable: boolean;
    defaultDate: Date;
    header: React.ForwardRefExoticComponent<SchedulerHeaderProps & React.RefAttributes<import('./components/header/SchedulerHeader.js').SchedulerHeaderHandle>>;
    footer: React.ForwardRefExoticComponent<SchedulerFooterProps & React.RefAttributes<import('./components/footer/SchedulerFooter.js').SchedulerFooterHandle>>;
    navigation: React.ForwardRefExoticComponent<import('./components/header/navigation/SchedulerNavigation.js').SchedulerNavigationProps & React.RefAttributes<import('./components/header/navigation/SchedulerNavigation.js').SchedulerNavigationHandle>>;
    viewSelector: React.ForwardRefExoticComponent<import('./components/header/view-selector/SchedulerViewSelector.js').SchedulerViewSelectorProps & React.RefAttributes<import('./components/header/view-selector/SchedulerViewSelector.js').SchedulerViewSelectorHandle>>;
};
