/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { DrawerItemHandle } from './interfaces/DrawerItemHandle';
import { DrawerItemProps } from './interfaces/DrawerItemProps';
import * as React from 'react';
/**
 * Represents the [knoReact Drawer component](components/layout/drawer).
 *
 * @example
 * ```jsx
 *    const App = () => {
 *      const [stateVisible, setStateVisible] = React.useState(true);
 *      const handleClick = () => { setStateVisible(prevState => !prevState); };
 *
 *      return (
 *        <Drawer expanded={stateVisible} mode={'push'}>
 *            <DrawerNavigation>
 *                <DrawerItem text="Inbox" icon="k-i-inbox" />
 *                <DrawerItem separator={true} />
 *                <DrawerItem text="Notifications" icon="k-i-bell" disabled={true}/>
 *                <DrawerItem text="Calendar" icon="k-i-calendar"/>
 *                <DrawerItem separator={true} />
 *                <DrawerItem text="Attachments" icon="k-i-hyperlink-email" selected={true}/>
 *                <DrawerItem text="Favourites" icon="k-i-star"/>
 *            </DrawerNavigation>
 *            <DrawerContent><Button onClick={handleClick}>Toggle the drawer state</Button></DrawerContent>
 *        </Drawer>
 *      );
 *    };
 * ```
 */
export declare const DrawerItem: React.ForwardRefExoticComponent<Omit<DrawerItemProps, "ref"> & React.RefAttributes<DrawerItemHandle | null>>;
