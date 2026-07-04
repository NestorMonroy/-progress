[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns&utm_content=banner)

# knoReact DropDowns Library for React


How to start:

```sh
npm i @progress/kno-react-dropdowns
```

What's in this package:

-   [React DropDowns Components Library Features](#react-dropdowns-components-library-features)
-   [React AutoComplete component ](#react-autocomplete-component)
-   [React ComboBox component ](#react-combobox-component)
-   [React DropDownList component (features)](#react-dropdownlist-component)
-   [React DropDownTree component ](#react-dropdowntree-component)
-   [React MultiColumnComboBox component ](#react-multicolumncombobox-component)
-   [React MultiSelect component (features)](#react-multiselect-component)
-   [React MultiSelectTree component ](#react-multiselecttree-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact DropDowns API](components/dropdowns/api)

## React DropDowns Components Library Features

Among the many features which the knoReact DropDowns deliver are:

-   **Controlled state**&mdash;Control the value and popup state of the DropDowns.
-   **Filtering**&mdash;Filter the data of the DropDowns to easily find any value in a large dataset.
-   **Disabled state**&mdash;To disable user input or selection, just change a single property.
-   **Virtualization support**&mdash;The virtualization helps when displaying large sets of data.
-   **Custom rendering**&mdash;You can replace the value and the popup list item renders with custom ones.
-   **Setting the default value**&mdash;Easily configure the initial value that the DropDowns render.
-   **Form validation**&mdash;Validate the values, set validation requirements, and prevent the submission of forms which are in invalid state.
-   **Accessibility support**&mdash;The DropDowns are compliant with WAI-ARIA, Section 508, and provide keyboard navigation.
-   [Theme support](components/styling/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)&mdash;The knoReact DropDowns, as well as all 120+ components in the knoReact suite, are styled in four polished themes (Bootstrap, Material, Fluent, and Default) and can be further customized to match your specific design guidelines.

## React AutoComplete Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact AutoComplete component](components/dropdowns/autocomplete/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns) is part of  and lets your end users type text into an input element and a list of suggested items will appear in a popup beneath. With suggestions turned on, the React AutoComplete will fill in the input field with suggestions from the underlying data, saving the user a lot of time when selecting data in the AutoComplete.

How to use the AutoComplete component in your apps:

```tsx
import { AutoComplete } from '@progress/kno-react-dropdowns';
...
/**
* Provide the data to populate the list of suggestions.
*/
<Autocomplete
    data={data}
/>
```

## React ComboBox Component



[The knoReact ComboBox component](components/dropdowns/combobox/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns) is part of knoReact and is a form component designed to let end users choose a predefined value from a list, and often is used as a much richer version of the select HTML element. Initially popularized by Material Design, Floating Labels have become so popular that almost any input can take advantage of their sleek look and feel. With the suggestion feature enabled, the knoReact ComboBox will attempt to autofill the input element based on the closest available value.

How to use the ComboBox component in your apps:

```tsx
import { ComboBox } from '@progress/kno-react-dropdowns';
...
/**
* Provide the data to populate the choices in the ComboBox.
*/
<ComboBox
    data={data}
/>
```

## React DropDownList Component

How to use the DropDownList component in your apps:

```tsx
import { DropDownList } from '@progress/kno-react-dropdowns';
...
/**
* Provide the data to populate the choices in the DropDownList.
*/
<DropDownList
    data={data}
/>
```

## React DropDownTree Component



A combination of a TreeView and a DropDown component, [the knoReact DropDownTree component](components/dropdowns/dropdowntree/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns) is perfect for forms that need to display complex data concisely. When users interact with this simple input element, the dropdown opens up to reveal a built-in TreeView with a hierarchical structure.

How to use the DropDownTree component in your apps:

```tsx
import { DropDownTree } from '@progress/kno-react-dropdowns';
...
/**
* Provide the data to populate the choices in the DropDownTree.
*/
<DropDownTree
    data={data}
/>
```

## React MultiColumnComboBox Component



[The knoReact MultiColumnComboBox component](components/dropdowns/multicolumncombobox/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns) provides a dropdown component that displays information about items in multiple fields arranged in columns. The knoReact MultiColumn ComboBox comes with filtering, grouping, virtualization and more handy features. When handling larger sets of data, it is very helpful to organize information in categories. With grouping enabled, the React MultiColumn ComboBox can group all data items by a particular field.

How to use the MultiColumnComboBox component in your apps:

```tsx
import { MultiColumnComboBox } from '@progress/kno-react-dropdowns';
...
/**
* Provide the data to populate the columns in the MultiColumnComboBox.
* Define the columns for the MultiColumnComboBox.
*/
<MultiColumnComboBox
    data={data}
    columns={columns}
/>
```

## React MultiSelect Component


How to use the MultiSelect component in your apps:

```tsx
import { MultiSelect } from '@progress/kno-react-dropdowns';
...
/**
* Provide the data to populate the contents of the MultiSelect.
*/
<MultiSelect
    data={data}
/>
```

## React MultiSelectTree Component



[The knoReact MultiSelectTree component](components/dropdowns/multiselecttree/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns) is a form component that lets you choose multiple predefined values from a hierarchical list and is a richer version of the Select element. The component supports filtering, custom rendering, keyboard navigation, expand and collapse of the hierarchical data items.

How to use the MultiSelect component in your apps:

```tsx
import { MultiSelectTree } from '@progress/kno-react-dropdowns';
...
/**
* Provide the data to populate the contents of the MultiSelectTree.
*/
<MultiSelectTree
    data={data}
/>
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

-   [Getting Started with knoReact](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)
-   [Get Started with ]
-   [Getting Started with the knoReact DropDowns](components/dropdowns/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)
-   [API Reference of the knoReact DropDowns](components/dropdowns/api/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)
-   [knoReact Roadmap](/support/whats-new/kno-react-ui/roadmap?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)
-   [Blogs](/blogs/tag/knoreact?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)
-   [Demos, documentation, and component reference](components/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)
-   [knoReact pricing and licensing](pricing?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)
-   [Changelog](components/changelogs/ui-for-react/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dropdowns)

High-level component overview pages

-   [React AutoComplete Component](autocomplete)
-   [React ComboBox Component](combobox)
-   [React DropDownList Component](dropdownlist)
-   [React DropDownTree Component](dropdowntree)
-   [React MultiColumnComboBox Component](multicolumncombobox)
-   [React MultiSelect Component](multiselect)
-   [React MultiSelectTree Component](multiselecttree)




