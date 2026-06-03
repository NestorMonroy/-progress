/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { SchedulerModelFields, DataItem, SchedulerGroup, Item, Slot, Occurrence } from '../models/index.js';
import { ZonedDate } from '@progress/kno-date-math';
import { SchedulerResource } from '../models/SchedulerResource';
import { SchedulerSlotHandle } from '../slots/SchedulerSlot.js';
import { SchedulerItemHandle } from '../items/SchedulerItem.js';
import { IntlService } from '@progress/kno-react-intl';
import { Fields } from '../models/Fields';
import * as React from 'react';
/** @hidden */
export declare const first: <T>(arr: T[]) => T;
/** @hidden */
export declare const last: <T>(arr: T[]) => T;
/** @hidden */
export declare const isMultiDay: (item: DataItem) => boolean;
/** @hidden */
export declare const isGroupped: (resources: any) => boolean;
/**
 * @hidden
 */
export declare function formatEventTime(intl: IntlService, start: Date, end: Date, isAllDay: boolean, allDayText?: string): string;
/**
 * @hidden
 * TODO Move to date-math
 */
export declare const addUTCDays: (date: Date, offset: number) => Date;
/** @hidden */
export declare function dateWithTime(target: Date, time: Date): Date;
/**
 * @hidden
 */
export declare const getToday: () => Date;
/** @hidden */
export declare const slotDive: (x: number, y: number, maxDepth: number, level?: number) => HTMLElement | null;
/**
 * @hidden
 */
export declare const getField: (obj: any, field: any) => any;
/**
 * @hidden
 */
export declare const setField: (obj: any, field: string | undefined, value: any) => any;
/**
 * @hidden
 */
export declare function assignField(target: any, source: any, field: string): any;
/**
 * @hidden
 */
export declare function assignFields(target: any, source: any, ...fields: string[]): any;
/**
 * @hidden
 */
export declare const isPresent: (value: any) => boolean;
/**
 * @hidden
 */
export declare const isRecurringMaster: (event: Item) => boolean | "" | null;
/** @hidden */
export declare function toUTCDate(localDate: Date): Date;
/** @hidden */
export declare function getUTCDate(utcDate: Date): Date;
/** @hidden */
export declare function toUTCDateTime(localDate: Date): Date;
/** @hidden */
export declare function toInvariantTime(date: Date): Date;
/** @hidden */
export declare function isRecurringException(event: Item): boolean;
/**
 * @hidden
 */
export declare const isRecurring: (event: DataItem, fields: SchedulerModelFields) => boolean;
/**
 * @hidden
 */
export declare const groupResources: (group: SchedulerGroup | undefined, resources: any[]) => any[];
/**
 * @hidden
 */
export declare const findMaster: (event: DataItem, fields: SchedulerModelFields, data: DataItem[]) => DataItem | undefined;
/**
 * @hidden
 */
export declare const isMaster: (event: Occurrence, fields: SchedulerModelFields) => boolean;
/**
 * @hidden
 */
export declare const buildException: (event: DataItem, fields: SchedulerModelFields, data: DataItem[]) => DataItem;
/**
 * @hidden
 */
export declare const isException: (event: DataItem, fields: SchedulerModelFields) => boolean;
/** @hidden */
export declare const intersects: (startTime: Date, endTime: Date, periodStart: Date, periodEnd: Date, inclusive?: boolean) => boolean;
/** @hidden */
export declare const roundAllDayEnd: ({ start, end }: any) => ZonedDate;
/**
 * @hidden
 */
export declare const defaultModelFields: {
    id: string;
    start: string;
    startTimezone: string;
    originalStart: string;
    end: string;
    endTimezone: string;
    isAllDay: string;
    title: string;
    description: string;
    recurrenceRule: string;
    recurrenceId: string;
    recurrenceExceptions: string;
};
/** @hidden */
export declare const getModelFields: (modelFields: any) => {
    fields: Fields;
};
/** @hidden */
export declare const isInTimeRange: (date: Date, min: Date, max: Date) => boolean;
/** @hidden */
export declare const isInDaysRange: (date: number, min: number, max: number) => boolean;
/** @hidden */
export declare const toSchedulerGroups: (group?: SchedulerGroup, resources?: any[]) => any[];
/** @hidden */
export declare const toSchedulerResources: (resources?: SchedulerResource[]) => SchedulerResource[];
/** @hidden */
export declare const generateResourceFields: (groups: any[], defaultFields: any) => Object;
/**
 * @hidden
 *
 * TODO: Move to @progress/kno-common
 */
export declare const isBlank: (value: any) => boolean;
/**
 * @hidden
 *
 * TODO: Move to @progress/kno-common
 */
export declare const isNullOrEmptyString: (value?: string) => boolean;
/**
 * @hidden
 */
export declare const setTime: (origin: Date, candidate: Date) => Date;
/** @hidden */
export declare const extractGroups: (dataItem: DataItem, fields: SchedulerModelFields, group: SchedulerGroup, resources: SchedulerResource[]) => any;
/** @hidden */
export declare const extractResourceFields: (dataItem: DataItem, fields: SchedulerModelFields, resources?: SchedulerResource[]) => Object;
/** @hidden */
export declare const extractResources: (dataItem: DataItem, fields: SchedulerModelFields, resources?: SchedulerResource[]) => any[];
/** @hidden */
export declare const shallowCompare: (x: any, y: any) => boolean;
/** @hidden */
export declare const findMissing: (orderNumbers: number[]) => number;
/** @hidden */
export declare const calculateOrder: (current: SchedulerItemHandle, items: SchedulerItemHandle[], slots: React.RefObject<SchedulerSlotHandle | null>[], ignoreIsAllDay?: boolean) => any;
/** @hidden */
export declare const calculateProportionalOrder: (current: SchedulerItemHandle, siblings: SchedulerItemHandle[]) => number;
/** @hidden */
export declare const mapSlotsToItems: (items: Item[], slots: Slot[], ignoreIsAllDay?: boolean) => void;
/** @hidden */
export declare const mapItemsToSlots: (items: Item[], slots: Slot[], ignoreIsAllDay?: boolean) => void;
/** @hidden */
export declare const noop: (..._args: any) => void;
/** @hidden */
export declare const findFirstItem: (current: SchedulerSlotHandle) => SchedulerItemHandle | null;
/** @hidden */
export declare const findNextItem: (ref: React.RefObject<SchedulerItemHandle | null>, all: React.RefObject<SchedulerItemHandle | null>[], ignoreIsAllDay?: boolean | undefined, backwards?: boolean) => React.RefObject<SchedulerItemHandle | null> | null;
/**
 * @hidden
 */
export declare const orderSort: (a: Item, b: Item) => number;
