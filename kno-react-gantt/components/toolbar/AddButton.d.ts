/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DataItem } from '../../interfaces/DataItem';
import { AddDirection } from '../../interfaces/AddDirection';
import * as React from 'react';
/** @hidden */
export declare const AddButton: React.ForwardRefExoticComponent<{
    selectedTask: DataItem | null;
    onClick: (options: {
        nativeEvent: any;
        syntheticEvent: any;
        direction: AddDirection;
    }) => void;
} & React.RefAttributes<unknown>>;
