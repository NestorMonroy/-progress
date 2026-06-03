/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem, DateRange, SchedulerView, Group } from '../models/index.js';
import { DataAction, SchedulerProps } from '../Scheduler.js';
import { Fields } from '../models/Fields';
import { Orientation } from '../models/Orientation';
import * as React from 'react';
/** @hidden */
export interface SchedulerContextProps {
    children?: React.ReactNode;
    element: SchedulerElementContextType;
    props: SchedulerPropsContextType;
    views: SchedulerViewsContextType;
    fields: SchedulerFieldsContextType;
    groups: SchedulerGroupsContextType;
    dateRange: SchedulerDateRangeContextType;
    dateFormat: SchedulerDateFormatContextType;
    orientation: SchedulerOrientationContextType;
    date: SchedulerDateContextType;
    activeView: SchedulerActiveViewContextType;
    selection: SchedulerItemSelectionContextType;
    data: SchedulerDataContextType;
}
/** @hidden */
export type SchedulerElementContextType = React.RefObject<HTMLElement | null>;
/** @hidden */
export declare const SchedulerElementContext: React.Context<SchedulerElementContextType>;
/** @hidden */
export declare const useSchedulerElementContext: () => SchedulerElementContextType;
/**
 * Specifies the result of the [useSchedulerPropsContext](components/scheduler/api/useschedulerpropscontext) and [SchedulerPropsContext](components/scheduler/api/schedulerpropscontext).
 */
export type SchedulerPropsContextType = SchedulerProps;
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the [Scheduler](components/scheduler/api/scheduler) props.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerPropsContext: React.Context<SchedulerProps>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the [Scheduler](components/scheduler/api/scheduler) props.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerPropsContext: () => SchedulerPropsContextType;
/**
 * Specifies the result of the [useSchedulerViewsContext](components/scheduler/api/useschedulerviewscontext) and [SchedulerViewsContext](components/scheduler/api/schedulerviewscontext).
 */
export type SchedulerViewsContextType = SchedulerView[];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the available Scheduler [views](components/scheduler/views).
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerViewsContext: React.Context<SchedulerViewsContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the available Scheduler [views](components/scheduler/views).
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerViewsContext: () => SchedulerViewsContextType;
/**
 * Specifies the result of the [useSchedulerFieldsContext](components/scheduler/api/useschedulerfieldscontext) and [SchedulerFieldsContext](components/scheduler/api/schedulerfieldscontext).
 */
export type SchedulerFieldsContextType = Fields;
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the combined default and custom [modelFields](components/scheduler/api/schedulerprops#toc-modelfields) of the Scheduler.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerFieldsContext: React.Context<Fields>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the combined default and custom [modelFields](components/scheduler/api/schedulerprops#toc-modelfields) of the Scheduler.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerFieldsContext: () => SchedulerFieldsContextType;
/**
 * Specifies the result of the [useSchedulerFieldsContext](components/scheduler/api/useschedulerfieldscontext) and [SchedulerFieldsContext](components/scheduler/api/schedulerfieldscontext).
 */
export type SchedulerDateFormatContextType = {
    dateFormat: string;
    shortDateFormat: string;
};
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the combined default and custom [modelFields](components/scheduler/api/schedulerprops#toc-modelfields) of the Scheduler.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerDateFormatContext: React.Context<SchedulerDateFormatContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the combined default and custom [modelFields](components/scheduler/api/schedulerprops#toc-modelfields) of the Scheduler.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerDateFormatContext: () => SchedulerDateFormatContextType;
/**
 * Specifies the result of the [useSchedulerGroupsContext](components/scheduler/api/useschedulergroupscontext) and [SchedulerGroupsContext](components/scheduler/api/schedulergroupscontext).
 */
export type SchedulerGroupsContextType = Group[];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the Scheduler `Group` object, calculated based on the [group](components/scheduler/api/schedulerprops#toc-group) and [resources](components/scheduler/api/schedulerprops#toc-resources).
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerGroupsContext: React.Context<SchedulerGroupsContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the Scheduler `Group` object, calculated based on the [group](components/scheduler/api/schedulerprops#toc-group) and [resources](components/scheduler/api/schedulerprops#toc-resources).
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerGroupsContext: () => SchedulerGroupsContextType;
/**
 * Specifies the result of the [useSchedulerDateRangeContext](components/scheduler/api/useschedulerdaterangecontext) and [SchedulerDateRangeContext](components/scheduler/api/schedulerdaterangecontext).
 */
export type SchedulerDateRangeContextType = DateRange;
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the `dateRange` of the current view.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerDateRangeContext: React.Context<DateRange>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the `dateRange` of the current view.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerDateRangeContext: () => SchedulerDateRangeContextType;
/**
 * Specifies the result of the [useSchedulerOrientationContext](components/scheduler/api/useschedulerorientationcontext) and [SchedulerOrientationContext](components/scheduler/api/schedulerorientationcontext).
 */
export type SchedulerOrientationContextType = Orientation;
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the grouping orientation of the Scheduler.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerOrientationContext: React.Context<Orientation>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the grouping orientation of the Scheduler.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerOrientationContext: () => SchedulerOrientationContextType;
/**
 * Specifies the result of the [useSchedulerDateContext](components/scheduler/api/useschedulerdatecontext) and [SchedulerDateContext](components/scheduler/api/schedulerdatecontext).
 */
export type SchedulerDateContextType = [Date, (date: Date, event?: any) => void];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the Scheduler internal `date` state.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerDateContext: React.Context<SchedulerDateContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the Scheduler internal `date` state.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerDateContext: () => SchedulerDateContextType;
/**
 * Specifies the result of the [useSchedulerDataContext](components/scheduler/api/useschedulerdatacontext) and [SchedulerDataContext](components/scheduler/api/schedulerdatacontext).
 */
export type SchedulerDataContextType = [DataItem[], (action: DataAction, event?: any) => void];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the Scheduler internal `data` reducer.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerDataContext: React.Context<SchedulerDataContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the Scheduler internal `data` reducer.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerDataContext: () => SchedulerDataContextType;
/**
 * Specifies the result of the [useSchedulerActiveViewContext](components/scheduler/api/usescheduleractiveviewcontext) and [SchedulerActiveViewContext](components/scheduler/api/scheduleractiveviewcontext).
 */
export type SchedulerActiveViewContextType = [string, (activeView: string, event?: any) => void];
/**
 * A [React Context](https://react.dev/reference/react/hooks#context-hooks) providing access to the Scheduler internal `activeView` state.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 */
export declare const SchedulerActiveViewContext: React.Context<SchedulerActiveViewContextType>;
/**
 * A custom [React Hook](https://react.dev/reference/react/hooks) providing access to the Scheduler internal `activeView` state.
 *
 * For more information, refer to the [Scheduler Context](components/scheduler/context) article.
 *
 * @returns
 */
export declare const useSchedulerActiveViewContext: () => SchedulerActiveViewContextType;
/**
 * @hidden
 */
export type SchedulerItemSelectionContextType = [any, any];
/**
 * @hidden
 */
export declare const SchedulerItemSelectionContext: React.Context<SchedulerItemSelectionContextType>;
/**
 * @hidden
 */
export declare const useSchedulerItemSelectionContext: () => SchedulerItemSelectionContextType;
/**
 *
 */
/** @hidden */
export declare const SchedulerContext: ({ children, element, props, views, fields, groups, dateRange, dateFormat, orientation, date, data, activeView, selection }: SchedulerContextProps) => React.JSX.Element;
