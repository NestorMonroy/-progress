/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
type CurrentTimeMarkerProps = {
    updateInterval?: number;
    groupIndex?: number | null;
    vertical?: boolean;
    attachArrow?: React.RefObject<HTMLElement | null>;
};
/** @hidden */
export declare const CurrentTimeMarker: (props: CurrentTimeMarkerProps) => React.JSX.Element;
export {};
