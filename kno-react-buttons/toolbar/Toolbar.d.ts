/**
 * @license
 *-------------------------------------------------------------------------------------------
 * 
 *  See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
import { ToolbarProps } from './interfaces/ToolbarProps';
import { ToolbarHandle } from './interfaces/ToolbarHandle';
import * as React from 'react';
/**
 * Represents the [knoReact Toolbar component](components/buttons/toolbar).
 *
 * @example
 * ```jsx
 * const App = () => {
 *       return (
 *          <Toolbar>
 *              <ToolbarItem>
 *                  <ButtonGroup>
 *                      <Button togglable={true} icon="bold" />
 *                      <Button togglable={true} icon="italic" />
 *                      <Button togglable={true} icon="underline" />
 *                  </ButtonGroup>
 *              </ToolbarItem>
 *              <ToolbarItem>
 *                  <ButtonGroup>
 *                      <Button icon="hyperlink">Insert Link</Button>
 *                      <Button icon="image">Insert Image</Button>
 *                      <Button icon="table">Insert Table</Button>
 *                  </ButtonGroup>
 *              </ToolbarItem>
 *          </Toolbar>
 *       );
 * }
 * ```
 */
export declare const Toolbar: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<ToolbarHandle>>;
