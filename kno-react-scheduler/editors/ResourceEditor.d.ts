/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { FieldRenderProps } from '@progress/kno-react-form';
import { SchedulerResource } from '../models/index.js';
import * as React from 'react';
/** @hidden */
export interface ResourceEditorProps extends FieldRenderProps {
    resource: SchedulerResource;
    data: any[];
    textField: string;
    valueField: string;
    colorField?: string;
    multiple?: boolean;
    validationMessage: string;
}
/** @hidden */
export declare const ResourceEditor: (props: ResourceEditorProps) => React.JSX.Element;
