[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/free-vs-premium?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs&utm_content=banner)

# knoReact Date Inputs Library for React



How to start:

```sh
npm i @progress/kno-react-dateinputs
```

What's in this package:

-   [React Date Inputs Components Library Features](#react-date-inputs-components-library-features)
-   [React Calendar Component ](#react-calendar-component)
-   [React DateInput Component ](#react-dateinput-component)
-   [React DatePicker Component ](#react-datepicker-component)
-   [React DateRangePicker Component ](#react-date-range-picker-component)
-   [React DateTimePicker Component ](#react-datetimepicker-component)
-   [React MultiViewCalendar Component ](#react-multiviewcalendar-component)
-   [React TimePicker Component ](#react-time-picker-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact Date Inputs API](components/dateinputs/api)

## React Date Inputs Components Library Features

Among the many features which the knoReact Date Inputs deliver are:

-   **Setting the default value**&mdash;Easily configure the initial value that the Date Inputs render.
-   **Form validation**&mdash;Validate input values, set validation requirements (such as minimum and maximum date or time) and prevent the submission of forms which are in an invalid state.
-   **Formats and placeholders**&mdash;Control the date and time format and implement placeholders for the input field, including custom formats.
-   **Controlled state**&mdash;Control the date and time value and popup state of the Date Inputs.
-   **Disabled state**&mdash;To disable user input, just change a single property.
-   **JSON integration**&mdash;You can also bind the Date Inputs to dates or times which are serialized as strings.
-   **Custom rendering**&mdash;You can replace the input field, calendar and popup child components with custom ones.
-   **Date limits**&mdash;Enable the user to pick a date or time within a predefined min and max date or time range.
-   **Focused dates and times**&mdash;Configure the initial date or time value the Date Inputs display.
-   **Accessibility support**&mdash;The Date Inputs are compliant with WAI-ARIA and Section 508.
-   [Theme support](components/styling/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)&mdash;The knoReact Date Inputs, as well as all 120+ components in the knoReact suite, are styled in four polished themes (Bootstrap, Material, Fluent, and Default) and can be further customized to match your specific design guidelines.

## React Calendar Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReactReact Calendar component](components/dateinputs/calendar/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs), part of , is a form component representing a Gregorian calendar, allowing users to intuitively select a single date, or date ranges, with a few clicks. The Fast Navigation Bar of the React Calendar provides a shortcut to quickly navigate through years and months without having to leave the context of the main calendar interface of selecting a particular day of the month. The number of the week can be an easy way to discuss upcoming vacations or events.

How to use the Calendar component in your apps:

```tsx
import { Calendar } from '@progress/kno-react-dateinputs';
...
<Calendar />
```

## React DateInput Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact DateInput component](components/dateinputs/dateinput/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs) is a perfect input component for handling quick and efficient date values. The Spin Buttons of the React DateInput, enabled by a single property, quickly increases or decreases the currently selected portion of the date. The React DateInput supports adding floating labels as part of its input.

How to use the DateInput component in your apps:

```tsx
import { DateInput } from '@progress/kno-react-dateinputs';
...
<DateInput />
```

## React DatePicker Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact DatePicker component](components/dateinputs/datepicker/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs) is part of  and offers a highly customizable interface for end users to enter and pick dates supporting different locales. The React DatePicker component supports an input element for manual insertion of a date, the component also features a popup calendar to select dates in a more intuitive and visually pleasing way.

How to use the DatePicker component in your apps:

```tsx
import { DatePicker } from '@progress/kno-react-dateinputs';
...
<DatePicker />
```

## React DateRangePicker Component



[The knoReact DateRangePicker component](components/dateinputs/daterangepicker/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs) is part of knoReact and offers a highly customizable interface for end users to select a range of dates spanning over multiple calendars. There may be several cases where a user would need to select the end date first and then select the start date. For this scenario, the React DateRangePicker features built-in logic to autocorrect the selection of its calendars to ensure that the start value is always before the end value.

How to use the DateRangePicker component in your apps:

```tsx
import { DateRangePicker } from '@progress/kno-react-dateinputs';
...
<DateRangePicker />
```

## React DateTimePicker Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact DateTimePicker component](components/dateinputs/datetimepicker/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs) is part of knoReact and combines the ability to select both a date and a specific time of day through a highly-customizable component. The React DateTimePicker supports adding floating labels as part of its input. The knoReact DateTimePicker can handle the full 24-hour clock and can select from any day in the past or the future, which may be too broad of a range for your application.

How to use the DateTimePicker component in your apps:

```tsx
import { DateTimePicker } from '@progress/kno-react-dateinputs';
...
<DateTimePicker />
```

## React MultiViewCalendar Component



[The knoReact MultiViewCalendar component](components/dateinputs/multiviewcalendar/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs) offers a user interface with multiple calendars side by side to enable end users to select a range of dates spanning over multiple months. With the Multiple Views feature, any number of calendars can be added to the collection of displayed calendars. Thanks to the reverse range selection feature of the React MultiViewCalendar, no matter which order dates are selected, the component will always keep track of the start and end dates.

How to use the MultiViewCalendar component in your apps:

```tsx
import { MultiViewCalendar } from '@progress/kno-react-dateinputs';
...
<MultiViewCalendar />
```

## React Time Picker Component



[The knoReact TimePicker component](components/dateinputs/timepicker/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs) provides an intuitive interface for entering or selecting any time of day. For scenarios that need to limit the time slots that the knoReact TimePicker offers to users, there are min and max configuration options to help limit the range of time slots available. The React TimePicker supports adding floating labels as part of its input.

How to use the TimePicker component in your apps:

```tsx
import { TimePicker } from '@progress/kno-react-dateinputs';
...
<TimePicker />
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

-   [Getting Started with knoReact](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)
-   [Get Started with ]
-   [Getting Started with the knoReact Date Inputs](components/dateinputs/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)
-   [API Reference of the knoReact Date Inputs](components/dateinputs/api/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)
-   [knoReact Roadmap](/support/whats-new/kno-react-ui/roadmap?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)
-   [Blogs](/blogs/tag/knoreact?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)
-   [Demos, documentation, and component reference](components/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)
-   [knoReact pricing and licensing](pricing?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)
-   [Changelog](components/changelogs/ui-for-react/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-dateinputs)

High-level component overview pages

-   [React Calendar Component](calendar)
-   [React DateInput Component](dateinput)
-   [React DataPicker Component](datepicker)
-   [React DateRangePicker Component](daterangepicker)
-   [React DateTimePicker Component](datetimepicker)
-   [React MultiViewCalendar Component](multiviewcalendar)
-   [React TimePicker Component](timepicker)




