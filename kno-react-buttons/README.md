[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/free-vs-premium?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons&utm_content=banner)

# knoReact Buttons Library for React



How to start:

```sh
npm i @progress/kno-react-buttons
```

What's in this package:

-   [React Buttons Components Libray Features](#react-buttons-components-library-features)
-   [React Button component ](#react-button-component)
-   [React ButtonGroup component ](#react-buttongroup-component)
-   [React Chip component ](#react-chip-component)
-   [React ChipList component ](#react-chiplist-component)
-   [React DropDownButton component ](#react-dropdownbutton-component)
-   [React FloatingActionButton component ](#react-floatingactionbutton-component)
-   [React SpeechToTextButton component ](#react-speechtotextbutton-component)
-   [React SplitButton component ](#react-splitbutton-component)
-   [React Toolbar component ](#react-toolbar-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact Buttons API](components/buttons/api)

## React Buttons Components Library Features

Here are some of the features shared across all components included in the package (this is not an exhaustive list):

-   **Disabled state**&mdash;To disable user interaction, just change a single property.
-   **Custom rendering**&mdash;You can replace the content of the buttons with custom icons, text and elements.
-   **Keyboard navigation**&mdash;You can interact with the buttons using only the keyboard.
-   **Accessibility support**&mdash;The Buttons are compliant with WAI-ARIA and Section 508.
-   [**Theme support**](components/styling/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)&mdash;The knoReact Buttons, as well as all 100+ components in the knoReact suite, are styled in three polished themes (Bootstrap, Material, and Default) and can be further customized to match your specific design guidelines.

## React Button Component


Key features:

-   [Primary Button](components/buttons/button/appearance#theme-colors)&mdash;As a part of several built-in styles for the knoReact Button, the Primary Button provides a unique highlighted look and feel to the React Button component.
-   [Toggleable Button](components/buttons/button/toggleable)&mdash;A knoReact Button that can be toggled showcases a clear representation between the default rendering of the Button and when the Button has been pressed.
-   [Unstyled mode](components/unstyled)&mdash;The knoReact Button supports an unstyled mode, offering complete control over the Button appearance.

How to use the Button component in your apps:

```tsx
import { Button } from '@progress/kno-react-buttons';
...
<Button>
    Button Label
</Button>
```

## React ButtonGroup Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact ButtonGroup](components/buttons/buttongroup/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons) is a container for two or more React Button components which can be separately configured to display only textual content, or show predefined icons, images and custom icons.

How to use the ButtonGroup component in your apps:

```tsx
import { Button, ButtonGroup } from '@progress/kno-react-buttons';
...
<ButtonGroup>
    /**
    * Insert the <Button> components that you want to display as a group here.
    */
</ButtonGroup>
```

## React Chip Component

> This is a **free React component**&mdash;no sign-up or license required.

[The React Chip component](components/buttons/chip/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons) is responsible for a single Chip (also called React Pill) and can contain text, an image or avatar (optional) and a built-in icon, such as an "X," to indicate that an action can be taken.

Key features:

-   [Removable Chip](components/buttons/chip/remove)&mdash;Through the removable property, React developers can configure whether the knoReact Chip component should provide a built-in “X” icon to allow users to remove the Chip.
-   [Avatars and icons](components/buttons/chip/appearance#chip-with-avatars)&mdash;The React Chip component lets you add avatars and font or SVG icons to create more compelling and user-friendly interfaces.
-   [Appearance](components/buttons/chip/appearance)&mdash;The knoReact Chip component provides the `size`, `fillMode`, `rounded`, and `themeColor` properties to let you control its look and feel.

How to use the Chip component in your apps:

```tsx
import { Chip } from '@progress/kno-react-buttons';
...
<Chip
    text={'Chip Label'}
/>
```

## React ChipList Component

> This is a **free React component**&mdash;no sign-up or license required.

[The React ChipList component](components/buttons/chiplist/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons) takes the React Chip and provides additional functionality related to managing a collection of knoReact Chip components.

Key features:

-   [Selection mode](components/buttons/chiplist/selection-mode)&mdash;To ensure flexibility, the knoReact ChipList component provides several selection modes.The default mode is “none”, which means no chips can be selected, yet you can enable single and multiple selection to help users manage their items individually or in bulk.
-   [Data Binding](components/buttons/chiplist/data-binding)&mdash;As the knoReact ChipList component deals with displaying and manipulating a collection of items, you can bind it to different data sources.

How to use the ChipList component in your apps:

```tsx
import { ChipList } from '@progress/kno-react-buttons';
...
/**
* Introduce the data that you will use to populate the ChipList with chips.
*/
<ChipList
    data={data}
/>
```

## React DropDown Button Component


Key features:

-   [Icon DropDownButton](components/buttons/dropdownbutton/icons)&mdash;The knoReact DropDownButton can be displayed as just an icon or with a mix of text and icons as a part of its main content.
-   [Data Binding](components/buttons/dropdownbutton/data-binding)&mdash;Beyond being declaratively built, the knoReact DropDownButton component can be data bound to an array of strings or an array of objects.
-   [Unstyled mode](components/unstyled)&mdash;The knoReact DropDownButton supports an unstyled mode, offering complete control over its appearance.

How to use the DropDownButton with hardcoded data:

```tsx
import { DropDownButton, DropDownButtonItem } from '@progress/kno-react-buttons';
...
<DropDownButton text="DropDownButton Label">
    <DropDownButtonItem text="Item 1 Label" />
    <DropDownButtonItem text="Item 2 Label" />
</DropDownButton>
```

How to use the DropDownButton with simple data binding:

```tsx
import { DropDownButton } from '@progress/kno-react-buttons';
...
/**
* Provide an array of items for the drop-down here.
*/
<DropDownButton
    items={items}
    text="DropDownButton Label"
/>
```

## React FloatingActionButton Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Floating Action Button](components/buttons/floatingactionbutton/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons) is a button that appears to “float” above the content of any React application, usually serving as a shortcut to a single, common action like adding an item or composing a new email.

Key features:

-   [Content Types](components/buttons/floatingactionbutton/content-types)&mdash;The content within the knoReact Floating Action Button can be completely customized through the available properties. Access the `icon`, `iconClass` and `text` properties to define the React Floating Action Button icon, apply a custom CSS class to control the style of the button, and set text displayed within the component.
-   [Speed Dial](components/buttons/floatingactionbutton/speed-dial)&mdash;If additional action items should be available to users, the speed dial feature of the knoReact Floating Action Button is the perfect solution.
-   [Positioning](components/buttons/floatingactionbutton/positioning)&mdash;The knoReact Floating Action Button provides several configuration options to assist with defining where the React component should be displayed within the application. The position can be set through easy-to-remember options like “start”, “center”, “end”, “top”, “middle” and “bottom”.

How to use a simple text FloatingActionButton component in your apps:

```tsx
import { FloatingActionButton } from '@progress/kno-react-buttons';
...
<FloatingActionButton text={'FloatingActionButtonLabel'} />
```

## React SpeechToTextButton Component

[The knoReact SpeechToTextButton component](components/buttons/speechtotextbutton/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons) is a component for converting spoken input into text using speech recognition.

Key features:

-   [Speech configurations](components/buttons/speechtotextbutton/speech-configs)&mdash;The knoReact SpeechToTextButton provides various configuration options for controlling speech recognition settings.
-   [Appearance](components/buttons/speechtotextbutton/appearance)&mdash;The knoReact SpeechToTextButton provides the ability to customize its appearance.
-   [Integration](components/buttons/speechtotextbutton/integration)&mdash;The knoReact SpeechToTextButton can be seamlessly integrated with other knoReact components or with external speech recognition services.

How to use a simple text SpeechToTextButton component in your apps:

```tsx
import { SpeechToTextButton } from '@progress/kno-react-buttons';
...
<SpeechToTextButton>
    Button label
</SpeechToTextButton>
```

## React SplitButton Component

[The knoReact SplitButton component](components/buttons/splitbutton/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons) allows the user to execute a default action which is bound to a Button or to choose a predefined action from a drop-down list.

Key features:

-   [Icon SplitButton](components/buttons/splitbutton/icons)&mdash;Each item within the knoReact SplitButton can be rendered as just text, text along with an icon, or just as an icon.
-   [Data Binding](components/buttons/splitbutton/data-binding)&mdash;The React SplitButton can be defined declaratively and can also be bound to an array of strings, or an array of objects.

How to use the SplitButtonComponent with hardcoded data:

```tsx
import { SplitButton, SplitButtonItem } from '@progress/kno-react-buttons';
...
<SplitButton text="SplitButton Label">
    <SplitButtonItem text="Item 1 Label" />
    <SplitButtonItem text="Item 2 Label" />
</SplitButton>
```

How to use the SplitButtonComponent with simple data binding:

```tsx
import { SplitButton } from '@progress/kno-react-buttons';
...
/**
* Provide an array of items for the drop-down here.
*/
<SplitButton
    items={items}
    text="SplitButton Label"
/>
```

## React Toolbar Component

> This is a **free React component**&mdash;no sign-up or license required.

[The React Toolbar component](components/buttons/toolbar/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons) provides an intuitive component akin to the minimal toolbars found within traditional desktop applications like Word and Excel.

Key features:

-   [Tools](components/buttons/toolbar/tools)&mdash;Within the knoReact Toolbar, the Tools can be rendered as a Button, ButtonGroup, DropDownButton and SplitButtons. Of course, custom buttons can also be added.
-   [Globalization](components/buttons/globalization)&mdash;The React Toolbar fully supports right-to-left (RTL) scenarios, ensuring that the component can be added in to any application, no matter what requirements for layout your applications have.

How to add a simple Toolbar component in your apps:

```tsx
import { Toolbar, Button, ButtonGroup } from '@progress/kno-react-buttons'; // You need to install and import all knoReact components that you want to render within your Toolbar.
...
<Toolbar>
    <ButtonGroup>
        <Button>Item 1</Button>
        <Button>Item 2</Button>
    </ButtonGroup>
</Toolbar>
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

-   [Getting Started with knoReact](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)
-   [Get Started with ]
-   [Getting Started with the knoReact Buttons](components/buttons/get-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)
-   [API Reference of the knoReact Buttons](components/buttons/api/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)
-   [knoReact Roadmap](/support/whats-new/kno-react-ui/roadmap?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)
-   [Blogs](/blogs/tag/knoreact?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)
-   [Demos, documentation, and component reference](components/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)
-   [knoReact pricing and licensing](pricing?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)
-   [Changelog](components/changelogs/ui-for-react/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-buttons)

High-level component overview pages

-   [React Button Component](button)
-   [React ButtonGroup Component](buttongroup)
-   [React Chip Component](chip)
-   [React ChipList Component](chiplist)
-   [React DropDownButton Component](dropdownbutton)
-   [React FloatingActionButton Component](floatingactionbutton)
-   [React SpeechToTextButton Component](speechtotextbutton)
-   [React SplitButton Component](splitbutton)
-   [React Toolbar Component](toolbar)




