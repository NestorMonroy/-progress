/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ButtonProps } from '@progress/kno-react-buttons';
import { SchedulerViewProps } from '../../../models/index.js';
import * as React from 'react';
/** @hidden */
export interface ViewSelectorItemProps extends ButtonProps {
    view: SchedulerViewProps;
}
/** @hidden */
export declare const ViewSelectorItem: (props: ViewSelectorItemProps) => React.JSX.Element;
