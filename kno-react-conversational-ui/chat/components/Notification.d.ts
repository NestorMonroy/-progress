/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import * as React from 'react';
/**
 * @hidden
 */
export interface ChatNotificationProps {
    /**
     * Determines whether the notification should be visible.
     */
    show: boolean;
    /**
     * The text content to display in the notification.
     */
    text: string;
}
/**
 * @hidden
 */
declare const ChatNotification: React.FC<ChatNotificationProps>;
export default ChatNotification;
