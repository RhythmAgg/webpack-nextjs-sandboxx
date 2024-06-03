# Webpack-nextjs-bundle Analyzer Sandbox
This sandbox is meant to analyze the webpack bundling performed in nextJS when running `npm run build` and try to resolve the issues with code minification and tree shaking.
/
The code structure includes the main file  `page.js` which imports `./Components.js` module/
`page.js`
```
import styles from "./page.module.css";
import { Rectangle } from "./Components";


export default function Home() {
  return (
    <>
      {/* <Rectangle /> */}
      <h1>This is home</h1>`
    </>
  )
}
```
And `Components.js`
```
"use client"
import styles from './page.module2.css'

export function Cube() {
  retunrn {...}
}

export function Rectangle() {
  return {...}
}

```
I have made sure that nextJS default webpack config in production mode has usedEffects as true and have tried enabling sideEffects property too.

## Current Issues
- **Actual Behavior**
On importing only `Rectangle` into the code but not using it, The entire `Components.js` module is included in the client bundle.
On using `Rectangle` in the code, The `Cube` component gets removed from the bundle.
- **Expected behavior** The components should not be included in the bundle when not used in the code, hence `Cube` should be excluded in both the cases
