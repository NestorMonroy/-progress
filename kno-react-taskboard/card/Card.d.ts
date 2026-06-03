/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { CardProps, CardHandle, MenuSelectEvent } from '@progress/kno-react-layout';
import { TaskBoardConfirmDialogProps } from '../TaskBoardConfirmDialog.js';
import { TaskBoardCardHeaderProps } from './CardHeader.js';
import { TaskBoardCardBodyProps } from './CardBody.js';
import { TaskBoardPreviewDialogProps } from './PreviewDialog.js';
import { TaskBoardTaskModel } from '../TaskBoard.js';
import { PopupHandle } from '@progress/kno-react-popup';
import * as React from 'react';
/**
 * Represents the props of the TaskBoardCard component.
 */
export interface TaskBoardCardProps {
    /**
     * The rendered task.
     */
    task: TaskBoardTaskModel;
    /**
     * The applied styles.
     */
    style?: React.CSSProperties;
    /**
     * Specifies the `tabIndex` that will be added to the TaskBoard Card element.
     */
    tabIndex?: number;
    /**
     * The disabled state.
     */
    disabled?: boolean;
    /**
     * Specifies the CardHandle reference.
     */
    elementRef?: React.RefObject<CardHandle | null>;
    /**
     * Determines the menu visibility.
     */
    showMenu: boolean;
    /**
     * Determines the visibility of the task's delete confirmation dialog.
     */
    showDeleteConfirm: boolean;
    /**
     * Determines the visibility of the task's preview pane.
     */
    showTaskPreviewPane: boolean;
    /**
     * Represents the menu items.
     */
    menuItems: any[];
    /**
     * Represents the popup reference.
     */
    popupRef: React.RefObject<PopupHandle | null>;
    /**
     * Represents the content of the TaskBoardConfirmDialog component.
     */
    confirmDialogMessage: React.ReactNode;
    /**
     * Represents the title of the TaskBoardConfirmDialog component.
     */
    confirmDialogTitle: string;
    /**
     * Represents the content of the confirm button of the TaskBoardConfirmDialog component.
     */
    confirmDialogConfirmButton: React.ReactNode;
    /**
     * Represents the content of the cancel button of the TaskBoardConfirmDialog component.
     */
    confirmDialogCancelButton: React.ReactNode;
    /**
     * Represents the priority label in the preview dialog.
     */
    previewDialogPriorityLabel: string;
    /**
     * Represents the preview dialog delete node.
     */
    previewDialogDelete: React.ReactNode;
    /**
     * Represents the preview dialog edit node.
     */
    previewDialogEdit: React.ReactNode;
    /**
     * Fires when the preview pane needs to be shown.
     */
    onShowPreviewPane: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Fires when the preview pane needs to be closed.
     */
    onClosePreviewPane: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Fires on menu item selection.
     */
    onMenuItemSelect: (event: MenuSelectEvent) => void;
    /**
     * Fires when the menu needs to be shown.
     */
    onShowMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Fires when the menu needs to be hidden.
     */
    onHideMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Fires on blur of the menu button.
     */
    onMenuButtonBlur: (event: React.FocusEvent<HTMLButtonElement>) => void;
    /**
     * Fires when task's delete button is clicked.
     */
    onTaskDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Fires when task's edit button is clicked.
     */
    onTaskEdit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * The Close Button click event handler of the TaskBoardConfirmDialog component.
     */
    onCloseConfirmDialog: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Represents the Card component.
     */
    card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<CardHandle | null>>;
    /**
     * Represents the TaskBoardCardHeader component.
     */
    cardHeader: React.ComponentType<TaskBoardCardHeaderProps>;
    /**
     * Represents the TaskBoardCardBody component.
     */
    cardBody: React.ComponentType<TaskBoardCardBodyProps>;
    /**
     * Represents the TaskBoardConfirmDialog component.
     */
    confirmDialog: React.ComponentType<TaskBoardConfirmDialogProps>;
    /**
     * Represents the TaskBoardPreviewDialog component.
     */
    previewDialog: React.ComponentType<TaskBoardPreviewDialogProps>;
}
/**
 * Represents the TaskBoardCard component.
 */
export declare const TaskBoardCard: React.FunctionComponent<TaskBoardCardProps>;
