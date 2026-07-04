[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout&utm_content=banner)

# knoReact Layout Library for React


The React Layout components, part of knoReact, enable you to create a perceptive and intuitive layout of web projects and provide an easier navigation.

How to start:

```sh
npm i @progress/kno-react-layout
```

What's in this package:

-   [React Layout Components Library Features](#react-layout-library-shared-features)
-   [React ActionSheet component ](#react-actionsheet-component)
-   [React AppBar component ](#react-appbar-component)
-   [React Avatar component ](#react-avatar-component)
-   [React BottomNavigation component ](#react-bottomnavigation-component)
-   [React Breadcrumb component ](#react-breadcrumb-component)
-   [React Card component ](#react-card-component)
-   [React ContextMenu component ](#react-contextmenu-component)
-   [React Drawer component ](#react-drawer-component)
-   [React ExpansionPanel component ](#react-expansionpanel-component)
-   [React GridLayout component ](#react-gridlayout-component)
-   [React Menu component ](#react-menu-component)
-   [React PanelBar component ](#react-panelbar-component)
-   [React Splitter component ](#react-splitter-component)
-   [React StackLayout component ](#react-stacklayout-component)
-   [React Stepper component ](#react-stepper-component)
-   [React TabStrip component ](#react-tabstrip-component)
-   [React TileLayout component ](#react-tilelayout-component)
-   [React TimeLine component ](#react-timeline-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact Layout API](components/layout/api)

## React Layout Components Library Features

Among the many features which the knoReact Layout deliver are:

-   **Routing**&mdash;You can use most of the Layout components as a navigational component by wiring it with the React router.
-   **Data binding**&mdash;The layout components enables you to bind a data collection to them.
-   **Keyboard navigation**&mdash;You can interact with the layout components using only the keyboard.
-   **Custom Rendering**&mdash;You can replace the content of the layout components with custom elements.
-   **Accessibility support**&mdash;The Layout are compliant with WAI-ARIA and Section 508.
-   [Theme support](components/styling/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)&mdash;The knoReact Layout, as well as all 100+ components in the knoReact suite, are styled in three polished themes (Bootstrap, Material, and Default) and can be further customized to match your specific design guidelines.

## React ActionSheet Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact ActionSheet component](components/layout/actionsheet?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) lets you display a

The ActionSheet component allows you to display a mobile-friendly quick menu with user actions. The options display in a modal view.

Key features:

-   **Items**&mdash;The ActionSheet enables you to configure the items based on specific project requirements.
-   **Animation**&mdash;You can add opening and closing animations to the ActionSheet.

How to use the ActionSheet layout in your apps (no data binding):

```tsx
import { ActionSheet, ActionSheetItem } from '@progress/kno-react-layout';
...
/**
* Handle the open and close logic. Handle item selection.
*/
<ActionSheet open={open}>
    <ActionSheetItem text="Option 1" onClick={handleItemClick} />
    /**
    * Add as many ActionSheetItems as needed.
    */
</ActionSheet>
```

How to use the ActionSheet layout in your apps (simple data binding):

```tsx
import { ActionSheet, ActionSheetItemProps } from '@progress/kno-react-layout';
...
/**
* Provide a list of actions to show in the ActionSheet. These must be provided in a format that matches ActionSheetItemProps.
* Handle the open and close logic. Handle item selection.
*/
<ActionSheet
    open={open}
    items={items}
/>
```

## React AppBar Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact AppBar component](components/layout/appbar/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) serves as the main navigation of your application, containing navigation elements and the title of the application or current page.

Key features:

-   **Positioning**&mdash;The AppBar can be positioned either at the top or bottom of any React application.
-   **Content Arrangement**&mdash;To assist with arranging the content of the React AppBar, there are several layout components like the Section, Spacing and Separator, which can be used to make the knoReact AppBar fit any design.
-   **Responsive Design**&mdash;The knoReact AppBar component can adhere to any responsive design rules provided by the React application.

How to use the AppBar layout in your apps:

```tsx
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
} from '@progress/kno-react-layout';
...
<AppBar themeColor={color}>
    <AppBarSection>
      /**
      * Implement the sections in your AppBar. Add as many buttons or other elements as you need.
      */
    </AppBarSection>
    <AppBarSpacer/>
    /**
    * Implement as many sections, separated with AppBarSpacers as you need.
    */
</AppBar>
```

## React Avatar Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Avatar component](components/layout/avatar/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) is a perfect for displaying images, icons or initials to represent people or other entities within your React applications.

How to use the Avatar layout in your apps:

```tsx
import { Avatar } from '@progress/kno-react-layout';
...
<Avatar type="text|icon|image">
	/**
    * Wrap the Avatar around the image, icon, or text that you will want to display as an Avatar.
    */
</Avatar>
```

## React BottomNavigation Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact BottomNavigation component](components/layout/bottomnavigation/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) is the perfect navigation UI element for responsive web and mobile applications. Each navigation item within the React component features the ability to define a combination of icons and text to best illustrate where it leads.

Key features:

-   **Content Types**&mdash;Through a few simple configuration options, the items of the knoReact Bottom Navigation component can be set up to show icons, text or a mix of both.
-   **Positioning**&mdash;Positioning HTML elements can be tricky, but the React Bottom Navigation component can be easily positioned through a single configuration option.
-   **Appearance**&mdash;Options like filling in each item with a solid color or just rendering an outline, as well as appearance options associated with success, warning, error, primary and more common scenarios let React developers make the React Bottom Navigation component fit any design requirements.

How to use the BottomNavigation layout in your apps:

```tsx
import { BottomNavigation } from '@progress/kno-react-layout';
...
/**
* Provide a list of items to show in the BottomNavigation.
*/
<BottomNavigation
    items={items}
/>
```

## React Breadcrumb Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Breadcrumb component](components/layout/breadcrumb/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) allows you to navigate within a folder structure or web page. It provides an easy way to navigate backwards by one or multiple steps.

How to use the Breadcrumb layout in your apps:

```tsx
import { Breadcrumb } from "@progress/kno-react-layout";
...
/**
* Provide a list of items to show in the Breadcrumb.
*/
<Breadcrumb
    data={items}
/>
```

## React Card Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Card component](components/layout/card/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) represents a common layout item in many modern design languages. The React Card component contains content and actions about a single subject and can work well on its own, as well as when combined with components like the knoReact ListView to display a collection of cards.

Key features:

-   **Card Types**&mdash;While the knoReact Card component has a default look -and -feel which can be customized to fit any UX requirements, it does also come with several built-in styles to cut down on the number of customizations needed.
-   **Action Buttons**&mdash;Every React Card has a dedicated area for action buttons related to the content.
-   **Layouts**&mdash;When rendering multiple knoReact Card components, there are several built-in layouts to help display cards in various ways, including building a list from top to bottom as well as rendering the cards side-by-side.

How to use the Card layout in your apps:

```tsx
import {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardActions
} from '@progress/kno-react-layout';
...
/**
* Provide an image for the CardImage part of the Card.
*/
<Card>
    <CardImage src={image} />
    <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardSubtitle>Subtitle</CardSubtitle>
    </CardHeader>
    <CardBody>
        /**
        * The contens of the CardBody.
        */
    </CardBody>
    <CardActions>
        /**
        * The contens of the actions related to the Card.
        */
    </CardActions>
</Card>
```

## React ContextMenu Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact ContextMenu component](components/layout/contextmenu?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) delivers a context menu that pops when a user right-clicks within the UI. It’s best used when you want to add common or advanced commands for the user to execute while preserving screen space for more important information.

How to use the ContextMenu layout in your apps:

```tsx
import {
    ContextMenu,
    MenuItem
} from '@progress/kno-react-layout';
...
/**
* Handle the logic for showing the menu and item selection.
*/
<ContextMenu
    onSelect={handleOnSelect}
    show={show}
>
    <MenuItem text="Option" />
    /**
    * Provide as many menu items as needed.
    */
</ContextMenu>
```

## React Drawer Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Drawer component](components/layout/drawer/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) offers a navigation that can be permanently displayed, shown and hidden on command, and offers various styles for presenting navigation items.

Key features:

-   **Display Modes**&mdash;The knoReact Drawer component offers several display modes. This includes controlling if the React Drawer pushes content to the side as it expands or if it is displayed as an overlay on top of the content.
-   **Positioning**&mdash;Thanks to its position property, the knoReact Drawer can be specified to be rendered in any position in relation to the page content.

How to use the Drawer layout in your apps:

```tsx
import {
    Drawer,
    DrawerContent
} from '@progress/kno-react-layout';
...
/**
* Provide a list of items to show when the Drawer is expanded.
* Handle the logic for showing the menu and item selection.
*/
<Drawer
  expanded={expanded}
  position='end|start'
  mode='push|overlay'
  items={items}
  onSelect={handleSelect}
  >
  <DrawerContent>
    /**
    * Render the drawer content.
    */
  </DrawerContent>
</Drawer>
```

## React ExpansionPanel Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact ExpansionPanel component](components/layout/expansionpanel?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) delivers an easy way for implementing what’s usually a tedious process—a context menu that pops when a user right-clicks on your UI. It’s best used when you want to add common or advanced commands for the user to execute while preserving screen space for more important information.

How to use the ExpansionPanel layout in your apps:

```tsx
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kno-react-layout';
...
<ExpansionPanel
  title="Expansion Panel Title"
  subtitle="Subtitle"
>
    <ExpansionPanelContent>
        /**
        * Render the content that shows when the panel is expanded.
        * You can also wrap the entire ExpansionPanelContent component in an animation.
        */
    </ExpansionPanelContent>
</ExpansionPanel>
```

## React GridLayout Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact GridLayout component](components/layout/gridlayout/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) allows you to easily arrange the contents of the component in rows and columns in a grid structure.

How to use the GridLayout layout in your apps:

```tsx
import { GridLayout, GridLayoutItem } from '@progress/kno-react-layout';
...
<GridLayout
    cols={[{width: 150}, {width: 150}]}
    gap={10}
>
    <GridLayoutItem>Item </GridLayoutItem>
    <GridLayoutItem>Item</GridLayoutItem>
</GridLayout>
```

## React Menu Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Menu component](components/layout/menu/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) is great to provide nice navigation for the web application. The component can have many sub-menu options making it very easy to navigate through applications with multiple levels of pages.

Key features:

-   **Menu Items**&mdash;The knoReact Menu Items provide many customization options, making it easy to add additional elements like icons, images and more.
-   **Vertical Menu**&mdash;The knoReact Menu is rendered horizontally by default, but it can render vertically by setting just a single property.
-   **Context Menu**&mdash;The ContextMenu gives the user a beautifully styled list of options for navigation or executing commands like, copy, paste, download etc.

How to use the Menu layout in your apps:

```tsx
import { Menu, MenuItem } from '@progress/kno-react-layout';
...
<Menu>
    <MenuItem text="Item 1" />
    <MenuItem text="Item 2" />
</Menu>
```

## React PanelBar Component



[The knoReact PanelBar component](components/layout/panelbar/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) is a great choice when we must show hierarchical expandable data.

Key features:

-   **Expand Modes**&mdash;The component provides two built-in expand modes, allowing the user to expand multiple elements at once, or only one.
-   **Animations**&mdash;The React PanelBar component comes with a wide variety of eye catching and slick animations. These result in more fluent transitions between sections.

How to use the PanelBar layout in your apps:

```tsx
import { PanelBar, PanelBarItem } from '@progress/kno-react-layout';
...
<PanelBar>
  <PanelBarItem title="Item 1">
    /**
    * Render the contens shown within the panel.
    */
  </PanelBarItem>
  /**
  * Add as many PanelBarItems as needed.
  */
</PanelBar>
```

## React Splitter Component



[The knoReact Splitter component](components/layout/splitter/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) enables developers to define sections of a page in a column and row structure.

Key features:

-   **Panes**&mdash;Each content area of the React Splitter is a Pane, and each Pane has options to help define dimensions and allow for resizing, collapsing or scrolling on a pane-by-pane basis.
-   **Orientation**&mdash;The knoReact Splitter allows for each Pane to be arranged either horizontally or vertically.

How to use the Splitter layout in your apps:

```tsx
import { Splitter, SplitterOnChangeEvent } from '@progress/kno-react-layout';
...
/**
* Define your panes and their initial state.
* Handle the logic for pane resizing when the end user interacts with the Splitter.
*/
<Splitter
  panes={panes}
  onChange={onHorizontalChange}
>
  /**
  * Provide the content that will be used to populate the panes. For example: <h> or <div> elements. The number of provided elements must match the number of panes.
  */
</Splitter>
```

## React StackLayout Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact StackLayout component](components/layout/stacklayout/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) allows you to easily align vertically or horizontally multiple elements in a stack.

How to use the StackLayout in your apps:

```tsx
import { StackLayout } from '@progress/kno-react-layout';
...
<StackLayout>
    /**
    * Wrap the content that you need to show with the StackLayout component.
    */
</StackLayout>
```

## React Stepper Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Stepper component](components/layout/stepper/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) enables developers to create a set of logical steps in sequential order and visualizes the progress throughout the steps.

Key features:

-   **Display Modes**&mdash;With the knoReact Stepper component there are several ways to display each step. This includes simple steps numbered in sequential order, to using icons or custom text within each step, as well as providing labels underneath each step.
-   **Linear Mode**&mdash;There may be requirements that enforce a progression from the first to the last step in order, and this is where the linear mode of the knoReact Stepper comes in to play.
-   **Orientation**&mdash;The knoReact Stepper supports both horizontal and vertical orientations and can dynamically switch between them with a single configuration option.

How to use the Stepper layout in your apps:

```tsx
import { Stepper, StepperChangeEvent } from '@progress/kno-react-layout';
...
/**
* Provide the items that you want to show in the Stepper.
* Handle the logic for step selection.
*/
<Stepper items={items} />
```

## React TabStrip Component

> This is a **free React component**&mdash;no sign-up or license required.

With [the knoReact TabStrip component](components/layout/tabstrip/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) you can display a collection of tabs each with its own associated content. Each tab within the knoReact TabStrip component comes with multiple configuration options. This includes setting the text of the tabs, displaying or not displaying tabs on initial loading, setting the tab position, as well as implementing closable tabs.

How to use the TabStrip layout in your apps:

```tsx
import {
    TabStrip,
    TabStripSelectEventArguments,
    TabStripTab
    } from '@progress/kno-react-layout';
...
/**
* Handle the logic for tab selection.
*/
<TabStrip onSelect={handleSelect}>
    <TabStripItem></TabStripItem>
    /**
    * Show as many TabStripItems as needed.
    */
   </TabStripItem>
</TabStrip>
```

## React TileLayout Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact TileLayout component](components/layout/tilelayout/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) is perfect for creating interactive dashboards using a single UI component with a flexible set of configuration options.

Key features:

-   **Tile Interactions**&mdash;With end-user interactivity being the primary driver of the component, the knoReact TileLayout component gives users the flexibility of rearranging and resizing the available tiles.
-   **Tile Configuration Options**&mdash;The Tiles can be static, resized with a resize handler, dragged & dropped to change their location, as well as edited. The layout of the React TileLayout component is defined through a set number of columns and then the available Tile collection will auto-populate the available columns and rows within the TileLayout component.
-   **Auto Flows**&mdash;The knoReact TileLayout component provides out-of-the-box defaults for how tiles should behave when they are placed within the component. In addition to the default AutoFlow, React developers can also customize the flow to their liking, based on the industry-standard CSS grid-auto-flow property.

How to use the TabStrip layout in your apps:

```tsx
import { TileLayout, TileLayoutRepositionEvent } from '@progress/kno-react-layout';
...
/**
* Handle the logic for tile repositioning.
* Provide the content for the tiles that you want to show.
*/
<TileLayout
    columns={4}
    rowHeight={255}
    positions={data}
    gap={{ rows: 10, columns: 10 }}
    items={tiles}
    onReposition={handleReposition}
/>
```

## React Timeline Component



[The knoReact Timeline component](components/layout/timeline?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout) enables you to display events in chronological order, making it suitable for showcasing company history or visualizing significant milestones. The component offers a horizontal and a vertical mode in which the events can be collapsed for a neat and structured view.

How to use the Timeline layout in your apps:

```tsx
import { Timeline } from '@progress/kno-react-layout';
...
/**
* Provide the list of events that you want to show on the Timeline.
*/
<Timeline events={events} />
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

-   [Getting Started with knoReact](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)
-   [Get Started with ]
-   [Getting Started with the knoReact Layout](components/layout/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)
-   [API Reference of the knoReact Layout](components/layout/api/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)
-   [knoReact Roadmap](/support/whats-new/kno-react-ui/roadmap?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)
-   [Blogs](/blogs/tag/knoreact?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)
-   [Demos, documentation, and component reference](components/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)
-   [knoReact pricing and licensing](pricing?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)
-   [Changelog](components/changelogs/ui-for-react/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-layout)

High-level component overview pages:

-   [React AppBar Component](appbar)
-   [React Avatar Component](avatar)
-   [React BottomNavigation Component](bottomnavigation)
-   [React BreadCrumb Component](breadcrumb)
-   [React Card Component](card)
-   [React ContextMenu Component](contextmenu)
-   [React Drawer Component](drawer)
-   [React ExpansionPanel Component](expansionpanel)
-   [React Grid Layout Component](gridlayout)
-   [React Menu Component](menu)
-   [React PanelBar Component](panelbar)
-   [React Splitter Component](splitter)
-   [React StackLayout Component](stacklayout)
-   [React Stepper Component](stepper)
-   [React TabStrip Component](tabstrip)
-   [React TileLayout Component](tilelayout)
-   [React Timeline Component](timeline)




