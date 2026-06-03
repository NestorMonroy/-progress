/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { Attachment as AttachmentModel } from '../../index.js';
import * as React from 'react';
/**
 * @hidden
 */
export interface AttachmentProps {
    item: AttachmentModel;
    template?: any;
    tabbable?: boolean;
    onClick?: any;
    /**
     * Sets the `selected` state of the component.
     */
    selected: boolean;
}
/**
 * @hidden
 */
declare const Attachment: React.FC<AttachmentProps>;
export default Attachment;
