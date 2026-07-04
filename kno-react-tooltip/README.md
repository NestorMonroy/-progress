[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip&utm_content=banner)

# knoReact Tooltips Library for React

The React Tooltips library, part of knoReact, represents popups with information that is related to a UI element. They get displayed when the user clicks or hovers over this UI element.

How to start:

```sh
npm i @progress/kno-react-tooltip
```

What's in this package:

-   [React Tooltips Components Library Features](#react-tooltips-components-library-features)
-   [React Tooltip component ](#react-tooltip-component)
-   [React Popover component ](#react-popover-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact Tooltips API](components/tooltip/api)

## React Tooltips Components Library Features

Among the features which the knoReact Tooltips are:

-   **Positioning**&mdash;By default, the position of the Tooltip is determined by the available space around it. Additionally, you can set specific position from a property.
-   **Theme support**&mdash;The knoReact Tooltips, as well as all 120+ components in the knoReact suite, are styled in three polished themes (Bootstrap, Material, Fluent, and Default) and can be further customized to match your specific design guidelines.

## React Tooltip

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Tooltip component](components/tooltip/tooltip?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip), part of knoReact, provides a popup with information that is related to a particular UI element. The React Tooltip can be displayed when hovering over or clicking on an element.

Key features:

-   [Controlled mode](components/tooltip/controlled-mode/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)&mdash;Supports both standard tooltip visualization, by hovering and showing it programmatically.
-   [Anchor elements](components/tooltip/anchor-elements/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)&mdash;You can target specific anchor elements which will render a tooltip.
-   [Templates](components/tooltip/templates/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)&mdash;You can provide a custom rendering for the content of the Tooltip.
-   [Multiple tooltips](components/tooltip/multiple-tooltips/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)&mdash;Enables the visualization of multiple tooltips on the same page.
-   [Customization](components/tooltip/tooltip-customization/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)&mdash;You can place the Tooltip in a specific location and attach its handlers there.

How to use the Tooltip component in your apps:

```tsx
import { Tooltip } from '@progress/kno-react-tooltip';
...
<Target
    anchorElement="pointer|target"
    position="auto|right|left|bottom|top"
>
    /**
    * Wrap the Tooltip component around the UI element for which you want to show the Tooltip.
    */
</Target>
```

## React Popover

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Popover component](components/tooltip/popover/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip), part of knoReact, is a popup with rich interactable content, which is displayed when a user clicks or hovers over the related UI element.

How to use the Popover component in your apps:

```tsx
import { Popover, PopoverActionsBar } from '@progress/kno-react-tooltip';
import { Button } from '@progress/kno-react-buttons'; // You can import any other component that allows user interaction within the PopoverActionsBar. You may need to install additional dependencies, if you're not using components from the Buttons package.
...
/** Handle the logic for showing the Popover.
* Handle setting the anchor for the Popover.
*/
<Popover
  show={show}
  anchor={anchor.current && anchor.current.element}
  title={'Title'}
>
  /**
  * Show additional content in the Popover. For example, images or text.
  */
  <PopoverActionsBar>
    /**
    * Provide UI elements for user actions. For example, buttons.
    */
  </PopoverActionsBar>
</Popover>
```

## Using for Free vs 

The following table outlines the key resources available with knoReact and .

|                                  |                                                                                                      | [knoReact](/kno-react-ui)                                                                                                                                                     |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| React components                 | 50+                                                                                                                                                                                                      | 120+                                                                                                                                                                                                     |
| Four professional themes         | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> |
| Four Figma UI Kits               | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> |
| Page Templates & Building Blocks | 1 template                                                                                                                                                                                               | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> |
| ThemeBuilder                     | Free\*                                                                                                                                                                                                   | Ultimate                                                                                                                                                                                                 |
| Source code                      | No                                                                                                                                                                                                       | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> |
| Visual Studio Code extension     | 1 starter template                                                                                                                                                                                       | Full functionality                                                                                                                                                                                       |
| Legendary customer support       | No                                                                                                                                                                                                       | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> |
| AI coding assistant              | No                                                                                                                                                                                                       | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg> |

## Support Options


## Resources

-   [Getting Started with knoReact](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)
-   [Get Started with ]
-   [Get Started with the knoReact Tooltip](components/tooltip/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)
-   [API Reference of the knoReact Tooltip](components/tooltip/api/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)
-   [knoReact Roadmap](/support/whats-new/kno-react-ui/roadmap?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)
-   [Blogs](/blogs/tag/knoreact?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)
-   [Demos, documentation, and component reference](components/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)
-   [knoReact pricing and licensing](pricing?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)
-   [Changelog](components/changelogs/ui-for-react/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-tooltip)

High-level component overview pages:

-   [React Popover Component](popover)
-   [React Tooltip Component](tooltip)




