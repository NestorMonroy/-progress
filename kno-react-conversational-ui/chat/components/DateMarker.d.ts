/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DateMarker as DateMarkerModel } from './../ViewItem.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface DateMarkerProps {
    item: DateMarkerModel;
    timestampTemplate?: React.ComponentType<{
        item: DateMarkerModel;
    }>;
}
/**
 * @hidden
 */
declare const DateMarker: React.FC<DateMarkerProps>;
export default DateMarker;
