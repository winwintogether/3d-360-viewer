# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Run Development Server

- First install packages using `npm install` or `yarn install`
- Then start the development server `npm run dev` or `yarn dev`

## How to use the module

- First build the 3D model component using `npm run build` or `yarn build`

To put the component in your document include these script & CSS tags:

```html
<script type="module" src="/dist/model-360-viewer.js"></script>
<link rel="stylesheet" href="/dist/model-360-viewer.css" />
```

Those will let you use the custom tag: `model-360-viewer`. See the example below:

```html
<model-360-viewer
  asset-url="/assets/models/LittlestTokyo.glb"
></model-360-viewer>
```

| #   | Attribute name | Description                                     | Default value     |
| --- | -------------- | ----------------------------------------------- | ----------------- |
| 1   | enableZoom     | If true, it allows the 3D model to be zoomed    | true (boolean)    |
| 2   | enableRotate   | If true, it allows the 3D model to be rotated   | true (boolean)    |
| 3   | assetUrl       | \* required. It holds the value of the 3D model | required (string) |
