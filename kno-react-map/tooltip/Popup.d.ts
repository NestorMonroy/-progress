/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { InstanceObserver } from '@progress/kno-charts';
import { DomEvent } from './../events/dom-event.js';
import { Align, Offset } from '@progress/kno-react-popup';
import { MapContext } from '../MapContext.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface TooltipPopupProps {
    className?: string | undefined;
    popupShown: boolean;
    popupAlign?: Align;
    popupOffset?: Offset;
    popupStyles?: any;
    popupContent: Function;
}
/**
 * @hidden
 */
export declare class TooltipPopup extends React.Component<TooltipPopupProps, {}> {
    static contextType: React.Context<import('../MapContext').MapContextType | null>;
    context: React.ContextType<typeof MapContext>;
    mapObserver: InstanceObserver;
    element: HTMLDivElement | null;
    constructor(props: TooltipPopupProps);
    componentDidMount(): void;
    render(): React.JSX.Element;
    componentWillUnmount(): void;
    onMapMouseLeave: (e: DomEvent<React.MouseEvent<HTMLDivElement>>) => boolean;
}
