#TV Shows app

The app was build with [create-react-app](https://github.com/facebookincubator/create-react-app) and then ejected to be customizes.


## Dependencies
* [immutable](https://facebook.github.io/immutable-js/)
* [react](https://facebook.github.io/react/)
* [react-router-dom](https://github.com/ReactTraining/react-router/)
* [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html)
* [redux](http://redux.js.org/)
* [redux-thunk](https://github.com/gaearon/redux-thunk/)
* [classnames](https://github.com/JedWatson/classnames/)
* [spritesh](https://github.com/edenspiekermann/sprite.sh)
* [svgo](https://github.com/svg/svgo)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm sprite`

Generate sprite file from files in `static/media/icons`.


## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.


## Adding a Stylesheet

This project setup uses [Webpack](https://webpack.github.io/) for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**.
It uses CSS Modules to have local scoped CSS and postcss pluggins.

### PostCSS pluggins

* [autoprefixer](https://github.com/postcss/autoprefixer/)
* [postcss-simple_vars](https://github.com/postcss/postcss-simple-vars/)
* [postcss-simple_vars](https://github.com/postcss/postcss-simple-vars/)

### Variables
Variables are set in `config/variables`. Then it can be used in CSS files :
```css
.root {
  color: $brand;
}
.active {
  background: $active;
}
.regular {
  padding: 6px 12px;
}
.big {
  padding: 8px 16px;
}
```

### Multiple and optional classes
An element can have multiple class names using `classnames`. Classes can be applied depending on state or props.

#### Simple use
In most cases you just have to import classnames :
```js
import React from 'react';
import styles from './Button.css'; // import style
import cx from 'classnames'; // import classnames

class Button extends React.Component {
  render() {
    return <div className={cx(styles.root, styles.regular)} />;
  }
}
```

#### Conditional use
For conditional classes you need to bind classnames width styles to keep local classnames.
```js
import React from 'react';
import styles from './Button.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Button extends React.Component {
  render() {
    const {
      isActive,
      size,
    } = this.props;

    return <div className={
      cx(
        styles.root,
        {
          active: isActive, // apply class `active` if prop isActive is true
          [size]: true, // apply class named after `size` prop
        }
      )
    } />;
  }
}

Button.propTypes = {
  isActive: React.PropTypes.bool,
  size: React.PropTypes.oneOf(['regular', 'big']),
};

Button.defaultProps = {
  isActive: false,
  size: 'regular',
};
```
