[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-datatools&utm_content=banner)

# knoReact Data Tools Library for React


```sh
npm i @progress/kno-react-data-tools
```

What's in this package:

-   [React Data Tools Library Shared Features](#react-data-tools-library-shared-features)
-   [React Pager component](#react-pager-component)
-   [React Filter component](#react-filter-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact Data Tools API](components/datatools/api)

## React Data Tools Library Shared Features

-   **Accessibility support**&mdash;The Data Tools are compliant with WAI-ARIA and Section 508.
-   [**Theme support**](components/styling/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-datatools)&mdash;The knoReact Data Tools, as well as all 120+ components in the knoReact suite, are styled in three polished themes (Bootstrap, Material, Fluent, and Default) and can be further customized to match your specific design guidelines.

## React Pager Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Pager component](components/datatools/pager/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-datatools) provides options for splitting content into pages. It is very customizable, allowing developers to change the type of the pager, the button counts for the pages, the messages and more.

How to use the Pager tool in your apps:

```tsx
import { Pager, PageChangeEvent } from '@progress/kno-react-data-tools';
...
/**
* Handle the logic for changing the page. Note that you need to update the skip and the take props.
*/
<Pager
    skip={skip}
    take={take}
    total={50}
    onPageChange={handlePageChange}
/>
```

## React Filter Component



[The knoReact Filter component](components/datatools/filter/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-datatools) provides an intuitive interface to build out complex filter descriptions. The component can tie into any existing data model and provide an ever-expanding list of parameters to be used as a part of the filter expression. Each filter parameter can be removed as easily as it was added, by simply clicking the delete action item.

```tsx
import { Filter, FilterChangeEvent } from "@progress/kno-react-data-tools";
...
/**
* Provide the data that you want to filter.
* Define the fields for the filter.
* Handle the logic when changing the filter. Note that you need to update the filter value.
*/
<Filter
    fields={fields}
    value={value}
    onChange={handleFilterChange}
/>;
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

-   [Getting Started with knoReact]
-   [Get Started with ]
-   [Getting Started with the knoReact Data Tools]
-   [API Reference of the knoReact Data Tools]
-   [knoReact Roadmap]
-   [Blogs]
-   [Demos, documentation, and component reference]
-   [knoReact pricing and licensing]
-   [Changelog]

High-level component overview pages:

-   [React Filter Component]
-   [React Pager Component]




