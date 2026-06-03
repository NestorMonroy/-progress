/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarItemProps } from '@progress/kno-react-buttons';
import * as React from 'react';
/** @hidden */
export interface BusinessHoursProps extends ToolbarItemProps {
    children?: React.ReactNode;
}
/** @hidden */
export interface BusinessHoursHandle {
    element: HTMLSpanElement | null;
    props: BusinessHoursProps;
}
/** @hidden */
export declare const BusinessHours: React.ForwardRefExoticComponent<BusinessHoursProps & React.RefAttributes<BusinessHoursHandle>>;
