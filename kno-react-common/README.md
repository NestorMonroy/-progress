[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/free-vs-premium?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common&utm_content=banner)

# knoReact Common Library for React

How to start:

```sh
npm i @progress/kno-react-common
```

What's in this package:

-   [React Draggable component ](#react-draggable-component)
-   [React Icon component ](#react-icon-component)
-   [React SvgIcon component ](#react-svgicon-component)
-   [React Typography component ](#react-typography-component)
-   [React AdaptiveModeContext ](#react-typography-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact Common API](components/common/api)

## React Draggable Component


How to use the Draggable component in your apps:

```tsx
import { DragAndDrop, useDroppable, NormalizedDragEvent } from '@progress/kno-react-common';
...
<DragAndDrop>
    /**
    * Handle drag-and-drop logic and containers.
    */
</DragAndDrop>
```

## React Icon Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Icon component](components/utils/icon/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common) is used to display font icons to ensure React developers can use icons in any scenario. [All Kno UI Icons](components/styling/icons/#list-of-font-icons/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common) are supported.

How to use the Icon component in your apps:

```tsx
import { Icon } from '@progress/kno-react-common';
...
<link rel="stylesheet" href="https://unpkg.com/@progress/kno-font-icons@5/dist/index.css" />
<Icon name="home"/>
```

## React SvgIcon Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact SvgIcon component](components/utils/svgicon/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common) is used to display SVG icons. knoReact delivers more than 500 SVG icons. The size, color and orientation of the knoReact SvgIcon component can be easily customized through the available properties.

How to use the SvgIcon component in your apps:

```tsx
import { SvgIcon } from '@progress/kno-react-common';
import { homeIcon } from '@progress/kno-svg-icons'; // This dependency is not automatically installed.
...
<SvgIcon icon={homeIcon} />
```

## React Typography Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Typography component](components/utils/typography/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common) is a reusable component that helps presenting text in a React application. It could trim down a lot of time as the application grows. You can quickly add additional Typography styles by choosing from the predefined options.

How to use the SvgIcon component in your apps:

```tsx
import { Typography } from '@progress/kno-react-common';
...
<Typography.p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper.
</Typography.p>
```

## React AdaptiveModeContext

> This is a **free React utility**&mdash;no sign-up or license required.

[The knoReact AdaptiveModeContext utility](components/common/adaptive-mode?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common) is a React context that provides a global configuration for adaptive rendering across various components. It lets you define breakpoints for small and medium screen sizes. This context is essential for implementing responsive layouts, where UI components such as DatePicker, DropDownList, ComboBox, and others may need to adapt.

How to use AdaptiveModeContext in your apps:

```tsx
import { AdaptiveModeContext } from '@progress/kno-react-common';
...
<AdaptiveModeContext.Provider value={{ small: 320, medium: 1024 }}>
    /**
    * Place the UI component that needs to be adaptive here.
    */
</AdaptiveModeContext.Provider>
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

For any issues you might encounter while working with the knoReact Common package, use any of the available support channels:



## Resources

General resources:

-   [Getting Started with knoReact](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common)
-   [Get Started with ]
-   [knoReact Roadmap](roadmap/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common)
-   [Blogs](/blogs/tag/knoreact?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common)
-   [Demos, documentation, and component reference](components/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common)
-   [knoReact pricing and licensing](pricing?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common)
-   [Changelog](components/changelogs/ui-for-react/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-common)

High-level component overview pages:

-   [React Drag & Drop Utilities](drag-and-drop)
-   [React Icon & SvgIcon Components](icon-svgicon)
-   [React Typography Component](typography)




