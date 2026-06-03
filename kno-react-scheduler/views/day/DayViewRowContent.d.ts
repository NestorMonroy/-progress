/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Slot } from '../../models/index.js';
import { TimeHeaderCellProps } from '../../components/TimeHeaderCell.js';
import * as React from 'react';
/** @hidden */
export interface DayViewRowContentArgs {
    children?: React.ReactNode;
    slot: Slot;
    isMaster?: boolean;
    isLast?: boolean;
    timeHeaderCell?: React.ComponentType<TimeHeaderCellProps>;
}
/** @hidden */
export declare const DayViewRowContent: (props: DayViewRowContentArgs) => React.JSX.Element;
