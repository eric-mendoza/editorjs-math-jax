# EditorJS - MathJax Plugin (Not published yet)
MathJax Block for the [Editor.js](https://editorjs.io). 


## Installation

### Install via NPM or Yarn

Get the package

```shell
npm i --save-dev editorjs-math-jax
```
or
```shell
yarn add editorjs-math-jax --dev
```

Include module in your application

```javascript
const Table = require('editorjs-math-jax');
```

### Upload to your project's source dir
1. Download folder `dist` from repository
2. Add `dist/bundle.js` file to your page.


## Usage
Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    formula: {
      class: Formula,
    }
  }
  
  ...
});
```

Or init Table Tool with additional settings

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    formula: {
      class: Formula,
      inlineToolbar: true,
      config: {},
    },
  },
  
  ...
});
```
