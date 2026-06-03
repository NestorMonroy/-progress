[![knoReact NPM Banner](https://raw.githubusercontent.com/tlk/kno-react/master/images/knoreact-github-banner.png)](components/getting-started/free-vs-premium?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs&utm_content=banner)

# knoReact Inputs Library for React

How to start:

```sh
npm i @progress/kno-react-inputs
```

What's in this package (ToC):

-   [React Inputs Components Library Features](#react-inputs-components-library-features)
-   [React Checkbox Component ](#react-checkbox-component)
-   [React ColorGradient Component ](#react-colorgradient-component)
-   [React ColorPalette Component ](#react-colorpalette-component)
-   [React ColorPicker Component ](#react-colorpicker-component)
-   [React FlatColorPicker Component ](#react-colorpicker-component)
-   [React Input Component ](#react-input-component)
-   [React MaskedTextBox Component ](#react-maskedtextbox-component)
-   [React NumericTextBox Component ](#react-numerictextbox-component)
-   [React RadioButton Component ](#react-radiobutton-component)
-   [React RadioGroup Component ](#react-radiobuttongroup-component)
-   [React RangeSlider Component ](#react-rangeslider-component)
-   [React Rating Component ](#react-rating-component)
-   [React Signature Component ](#react-signature-component)
-   [React Slider Component ](#react-slider-component)
-   [React Switch Component ](#react-switch-component)
-   [React TextArea Component ](#react-textarea-component)
-   [React TextBox Component ](#react-textbox-component)

Additional information:

-   [Support Options](#support-options)
-   [Resources](#resources)
-   [knoReact Inputs API](#kno-react-inputs-api)

## React Inputs Components Library Features

Among the many features which the knoReact Inputs deliver are:

-   **Labels**&mdash;To make implementing the knoReact Inputs as easy as possible, the React UI components come with a built-in Label property, which can be placed before or after the actual element. For scenarios where the built-in label is not suitable, a custom label can be easily applied.
-   **Setting the default value**&mdash;Easily configure the initial value that the Inputs render.
-   **Form validation**&mdash;Validate input values, set validation requirements (such as minimum and maximum) and prevent the submission of forms which are in an invalid state.
-   **Formats and placeholders**&mdash;Control the placeholders for the input field, including custom formats.
-   **Controlled state**&mdash;Control the value Inputs.
-   **Accessibility support**&mdash;The Inputs are compliant with WAI-ARIA and Section 508.
-   [Theme support](components/styling/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)&mdash;The knoReact Inputs, as well as all 100+ components in the knoReact suite, are styled in three polished themes (Bootstrap, Material, and Default) and can be further customized to match your specific design guidelines.
-   [Unstyled mode](components/unstyled)&mdash;The knoReact Inputs support an unstyled mode, offering complete control over the popup appearance.

## React Checkbox Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Checkbox component](checkbox?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) moves beyond the traditional HTML input element and provides styling that fits with all knoReact themes, allowing users to maintain a consistent look and feel throughout their entire React application.

How to use the Checkbox component in your apps:

```tsx
import { Checkbox } from '@progress/kno-react-inputs';
...
<Checkbox label="Checkbox label" />
```

## React ColorGradient Component



[The knoReact ColorGradient component](colorgradient?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) provides a beautiful and easy-to-use user interface for choosing a gradient color. In some cases, the opacity of the gradient is not required, and you can remove the opacity input to make the component more compact.

How to use the ColorGradient component in your apps:

```tsx
import { ColorGradient } from '@progress/kno-react-inputs';
...
<ColorGradient />
```

## React ColorPalette Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact ColorPalette component](colorpalette?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) can render all colors and color presets, making it ideal when we have to present the user with all available color options. Rendering a specific color preset is available out of the box. This can save time and code by enabling developers to set just the name of the color preset instead of setting each color individually.

How to use the ColorPalette component in your apps:

```tsx
import { ColorPalette } from '@progress/kno-react-inputs';
...
<ColorPalette palette="basic" />
```

## React ColorPicker Component



[The knoReact ColorPicker component](colorpicker?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) provides users with an intuitive way of selecting and submitting color values. The knoReact ColorPicker allows users to pick colors from either a color gradient, which provides an interactive way to select a color by dragging a pointer around a gradient, or a color palette which contains predefined colors in a palette. Primarily serving accessibility enablement, the knoReact ColorPicker will display the current contrast ratio and indicate whether the contrast color is compliant with an AA or AAA contrast ratio.

How to use the ColorPicker component in your apps:

```tsx
import { ColorPicker } from '@progress/kno-react-inputs';
...
<ColorPicker views={['gradient', 'palette']} /> // Shows both views of the ColorPicker and end users can switch between the two.
```

## React FlatColorPicker Component



[The knoReact FlatColorPicker component](flatcolorpicker?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) adds another option for your users to select colors in React applications. It provides a flat view for the React ColorGradient and the React ColorPalette components and adds a header and footer. Unlike the React ColorPicker component, the React FlatColorPicker is not rendered within a popup or dropdown but immediately to the page.

How to use the FlatColorPicker component in your apps:

```tsx
import { FlatColorPicker } from '@progress/kno-react-inputs';
...
<FlatColorPicker views={['gradient', 'palette']} /> // Shows both views of the FlatColorPicker and end users can switch between the two.
```

## React Input Component

> This is a **free React component**&mdash;no sign-up or license required.

[The React Input](input?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) component builds on top of a traditional HTML input element and provides additional knoReact styling to fit with all knoReact themes, as well as the ability to provide a label as a floating label.

How to use the Input component in your apps:

```tsx
import { Input } from '@progress/kno-react-inputs';
...
<Input label={'Floating label for the input field'}/>
```

## React MaskedTextBox Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact MaskedTextBox component](maskedtextbox?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) provide built-in masks to not only indicate to the user what kind of format is expected, but can also enforce this mask as the user is inserting data, then validate data when a form is submitted. The React MaskedTextBox supports a set of built-in masks like requiring digits, letters or special symbols and characters, but custom rules can be applied as well.

How to use the MaskedTextBox component in your apps:

```tsx
import { MaskedTextBox } from '@progress/kno-react-inputs';
...
<MaskedTextBox
    mask="(999) 000-00-00-00" // Sets a phone number mask with a country prefix.
/>
```

## React NumericTextBox Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact NumericTextBox component](numerictextbox?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) allows end users to input or adjust numeric values via typing or spin buttons.

How to use the NumericTextBox component in your apps:

```tsx
import { NumericTextBox } from '@progress/kno-react-inputs';
...
<NumericTextBox />
```

## React RadioButton Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact RadioButton component](radiobutton?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) allows developers to style React RadioButtons to fit the existing knoReact theme and have a uniform look and feel throughout their entire application.

How to use the RadioButton component in your apps:

```tsx
import { RadioButton } from '@progress/kno-react-inputs';
...
<RadioButton label="RadioButton Label" />
```

## React RadioGroup Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact RadioGroup](radiogroup?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) is a component that is used when two or more options need to be available from a RadioButton. Toggling between horizontal and vertical layouts for the knoReact RadionGroup component can be done by interacting with a single property.

How to use the RadioGroup component in your apps:

```tsx
import { RadioGroup } from '@progress/kno-react-inputs';
...
/**
* Provide an array of items for the radio buttons within the group.
*/
<RadioGroup data={data} />
```

## React RangeSlider Component



[The knoReact RangeSlider component](rangeslider?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) enables end users to increase, decrease and select a predefined range of values by dragging left and right handles along a track. The React RangeSlider component has a single configuration option to help set the orientation to either vertical or horizontal orientations.

How to use the RadioGroup component in your apps:

```tsx
import { RangeSlider, SliderLabel } from '@progress/kno-react-inputs';
...
<RangeSlider
  defaultValue={{ start: 30, end: 70 }}
  step={1}
  min={0}
  max={100}
>
  {[0, 25, 50, 75, 100].map((perc, i) => (
    <SliderLabel
      key={i}
      position={perc}
    >
      {perc.toString()}
    </SliderLabel>
  ))}
</RangeSlider>
```

## React Rating Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Rating component](rating?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) lets end users provide visual ratings in React apps. The component supports partial ratings (for example, 4.5 stars) and integrates with other UI components like the knoReact Data Grid.

How to use the Rating component in your apps:

```tsx
import { Rating } from '@progress/kno-react-inputs';
...
<Rating />
```

## React Signature Component



[The knoReact Signature component](signature?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) captures handwritten signatures via mouse or touch and submits them in forms, making it ideal for signing documents like financial forms or receipts.

How to use the Signature component in your apps:

```tsx
import { Signature } from '@progress/kno-react-inputs';
...
<Signature />
```

## React Slider Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact Slider component](slider?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) provides a sleek and intuitive UI interface for increasing, decreasing and selecting predefined values by dragging a handle along a track, or selecting a value by utilizing the provided side arrow buttons. Out of the box, the knoReact Slider can render itself in both horizontal or vertical modes. Switching between the two is as simple as updating a single configuration option.

How to use the Slider component in your apps:

```tsx
import { Slider } from '@progress/kno-react-inputs';
...
<Slider
  step={1}
  min={1}
  max={10}
>
```

## React Switch Component

Popularized by iOS, Android, and other mobile operating systems, [the knoReact Switch component](switch?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) lets users toggle between two values: often checked and unchecked states.

How to use the Slider component in your apps:

```tsx
import { Switch } from '@progress/kno-react-inputs';
...
<Switch />
```

## React TextArea Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact TextArea component](textarea?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) is suitable for any scenario that requires multiple lines of text. The TextArea (also known as Multi-line TextBox) component comes with a built-in character counter, which gives end-users a real-time indication of the number of characters currently typed. The dimensions of the React TextArea component can be defined in multiple ways. This includes setting the initial height of the TextArea component and controlling if the component should automatically resize based on the content entered by the user.

How to use the TextArea component in your apps:

```tsx
import { TextArea } from '@progress/kno-react-inputs';
...
<TextArea />
```

## React TextBox Component

> This is a **free React component**&mdash;no sign-up or license required.

[The knoReact TextBox component](components/inputs/textbox?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs) is a versatile and more refined alternative to the Input, providing multiple additional props.

How to use the TextBox component in your apps:

```tsx
import { TextBox } from '@progress/kno-react-inputs';
...
<TextBox />
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

-   [Getting Started with knoReact](components/getting-started/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)
-   [Get Started with ]
-   [Getting Started with the knoReact Inputs](components/inputs/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)
-   [API Reference of the knoReact Inputs](components/inputs/api/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)
-   [knoReact Roadmap](/support/whats-new/kno-react-ui/roadmap?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)
-   [Blogs](/blogs/tag/knoreact?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)
-   [Demos, documentation, and component reference](components/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)
-   [knoReact pricing and licensing](pricing?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)
-   [Changelog](components/changelogs/ui-for-react/?utm_medium=referral&utm_source=npm&utm_campaign=kno-ui-react-trial-npm-inputs)

High-level component overview pages

-   [React Checkbox Component](checkbox)
-   [React ColorGradient Component](colorgradient)
-   [React ColorPalette Component](colorpalette)
-   [React ColorPicker Component](colorpicker)
-   [React FlatColorPicker Component](flatcolorpicker)
-   [React Input Component](input)
-   [React MaskedTextBox Component](maskedtextbox)
-   [React NumericTextBox Component](numerictextbox)
-   [React RadioButton Component](radiobutton)
-   [React RadioGroup Component](radiogroup)
-   [React RangeSlider Component](rangeslider)
-   [React Rating Component](rating)
-   [React Signature Component](signature)
-   [React Slider Component](slider)
-   [React Switch Component](switch)
-   [React TextArea Component](textarea)




