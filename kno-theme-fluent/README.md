# Kno UI Fluent Theme

The Kno UI Fluent Theme is a SCSS-based theme for the Kno UI components which is based on the [Fluent Design System](https://www.microsoft.com/design/fluent/#/).

* [Quick start](#quick-start)
* [Customizing](#customizing)
* [Bug reports and feature requests](#bug-reports-and-feature-requests)
* [Versioning](#versioning)
* [License](#license)

## Quick start

Kno UI Fluent Theme is available as an npm package.

If you don't need to apply any [customization](#customizing) to the theme, you can can reference the precompiled CSS directly from unpkg CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@progress/kno-theme-fluent/dist/all.css" />
```

While using the pre-compiled CSS file is faster than compiling the theme from the source code, the approach has the two drawbacks: it includes CSS for all components; it does not provide options for theme customization through SCSS variables (which is possible when you build the theme from the source code) because the theme is already compiled.

If you prefer, or you need to customize the theme, you can install it:

```sh
npm install --save @progress/kno-theme-fluent
```

and then import it in your project styles:

```scss
// Import the entire theme
@use "@progress/kno-theme-fluent/scss/all.scss" as *;
```

## Importing

In your custom scss file, you can import the entirety of the theme, by importing `scss/all.scss` or pick just the styles for the components you need. The files for individual components:

```scss
// Import only Button and Grid styles
@use "@progress/kno-theme-default/scss/index.scss" as *;

@include kno-button--styles();
@include kno-grid--styles();
```

## SCSS Variables Customization

The Kno UI Fluent theme enables customization through SCSS variables as follows:

```scss
@use "@progress/kno-theme-fluent/scss/all.scss" as kno-theme with (
    $kno-body-bg: beige,
    $kno-font-size: 1rem
);
```

or:

```scss
@use "@progress/kno-theme-fluent/scss/all.scss" as kno-theme;

kno-theme.$kno-body-bg: beige;
kno-theme.$kno-font-size: 30px;
```

## CSS Variables Customization

The theme is also making use of CSS custom properties in its compiled output for runtime customization. This eliminates the need to recompile the theme from the source.

### Root variables

The theme exposes global [root variables]-themes/blob/develop/packages/fluent/scss/core/_variables.scss#L106-L133) that can be used anywhere on the page to dynamically customize the theme:

```css
body {
    --kno-font-size: 1.2rem;
}
```

### Component variables

The theme also exposes CSS variables for all components and allows dynamic restyling:

```css
.k-button-solid-primary {
    --kno-button-text: #fff;
    --kno-button-bg: #28a745;
    --kno-button-border: #28a745;

    --kno-button-hover-text: #fff;
    --kno-button-hover-bg: #218838;
    --kno-button-hover-border: #218838;

    --kno-button-focus-text: #fff;
    --kno-button-focus-bg: #28a745;
    --kno-button-focus-border: #28a745;

    --kno-button-active-text: #fff;
    --kno-button-active-bg: #1e7e34;
    --kno-button-active-border: #1e7e34;
}
```

## Bug reports and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, please open a new [bug report]-themes/issues/new?labels=bug,T:Fluent&template=bug_report.md) or [feature request]-themes/issues/new?labels=Enhancement,T:Fluent&template=feature_request.md).

## Versioning

To ensure version predictability, we use [Semantic Versioning](https://semver.org/): we try to add only features for minor versions and bugfixes (or smaller features) for patch version.

## License

This package is part of the following suites:

* [Kno UI for Angular]
* [knoReact]
* [Kno UI for Vue]








