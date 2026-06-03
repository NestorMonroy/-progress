/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { EventDataProps } from './TimelineCard.js';
import { TimelineDirectionsProps } from './Timeline.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface TimelineVerticalProps extends TimelineDirectionsProps {
    alterMode?: boolean;
    collapsibleEvents?: boolean;
    onChange?: (event: EventDataProps) => void;
}
export declare const TimelineVertical: React.FunctionComponent<TimelineVerticalProps>;
