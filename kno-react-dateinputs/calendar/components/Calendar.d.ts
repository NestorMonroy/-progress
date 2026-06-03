/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateInputsClassStructure, WebMcpProps } from '@progress/kno-react-common';
import { CalendarViewEnum, ActiveView, CalendarSettings } from '../models/index.js';
import * as React from 'react';
/**
 * The arguments for the `change` event of the Calendar. The generic argument sets the target type of the event. Defaults to `Calendar`.
 */
export interface CalendarChangeEvent<T = CalendarHandle> {
    /**
     * A native DOM event.
     */
    nativeEvent?: any;
    /**
     * A React Synthetic Event.
     */
    syntheticEvent: React.SyntheticEvent<any>;
    /**
     * The new value.
     */
    value: Date;
    /**
     * The Calendar element.
     */
    target: T;
}
/**
 * Represents the props of the [knoReact Calendar component](components/dateinputs/calendar). The generic argument is passed to the `onChange` property and is used as a target in the [`CalendarChangeEvent`](components/dateinputs/api/calendarchangeevent) interface.
 */
export interface CalendarProps<T = any> extends CalendarSettings {
    /** @hidden */
    _ref?: (instance: {
        element: HTMLDivElement | null;
    }) => void;
    /**
     * Sets the default value of the Calendar.
     */
    defaultValue?: Date | null;
    /**
     * An event that is called after the value of the Calendar has changed.
     */
    onChange?: (event: CalendarChangeEvent<T>) => void;
    /**
     * Sets the value of the Calendar.
     */
    value?: Date | null;
    /**
     * @hidden
     */
    mobileMode?: boolean;
    /**
     * @hidden
     */
    unstyled?: DateInputsClassStructure;
    /**
     * Enables Web MCP tool registration for this component.
     * Requires a parent `WebMcpProvider` from `@progress/kno-react-webmcp`.
     */
    webMcp?: boolean | WebMcpProps;
}
/**
 * @hidden
 */
export interface CalendarState {
    value: Date | null;
    activeView: CalendarViewEnum;
    focusedDate: Date;
}
/**
 * Represent the `ref` of the Calendar component.
 */
export interface CalendarHandle {
    /**
     * Returns the HTML element of the Calendar component.
     */
    element: HTMLDivElement | null;
    /**
     * Returns the `value` of the Calendar component.
     */
    value: Date | null;
    /**
     * Returns the props of the Calendar component.
     */
    readonly props: CalendarProps;
    /**
     * @hidden
     * Focuses the Calendar component.
     */
    focus(): void;
}
/**
 * @hidden
 * The default props of the Calendar component.
 */
export declare const calendarDefaultProps: {
    disabled: boolean;
    min: Date;
    max: Date;
    weekDaysFormat: "short";
    navigation: boolean;
    defaultActiveView: ActiveView;
    defaultValue: Date | null;
    topView: ActiveView;
    bottomView: ActiveView;
    showOtherMonthDays: boolean;
};
/**
 * Represents the PropsContext of the `Calendar` component.
 * Used for global configuration of all `Calendar` instances.
 *
 * For more information, refer to the [DateInputs Props Context](components/dateinputs/props-context) article.
 */
export declare const CalendarPropsContext: React.Context<(p: CalendarProps<any>) => CalendarProps<any>>;
/**
 * @hidden
 * @deprecated Use CalendarHandle directly.
 */
export declare const CalendarWithoutContext: React.ForwardRefExoticComponent<CalendarProps<any> & React.RefAttributes<CalendarHandle | null>>;
/**
 * Represents the knoReact Calendar Component.
 *
 * Accepts properties of type [CalendarProps](components/dateinputs/api/calendarprops).
 * Obtaining the `ref` returns an object of type [CalendarHandle](components/dateinputs/api/calendarhandle).
 */
export declare const Calendar: React.ForwardRefExoticComponent<CalendarProps<any> & React.RefAttributes<CalendarHandle | null>>;
/** @deprecated Use CalendarHandle directly. */
export type Calendar = CalendarHandle;
