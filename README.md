# animate-stitches

Library for bringing Animate.css animations to Stitches (CSS-in-JS).

## Installation

```
npm i --save animate-stitches
```

Or

```
yarn add animate-stitches
```

## Setup

Simply add the following to your `stitches.config.ts` file:

```TS
import { getAnimations } from "animate-stitches"
...
export const animate = getAnimations<{ [k: string]: FlatInternalCSS }, typeof keyframes>(keyframes)
```

## Prior Work

This library is derived from, and inspired by, [animate-styled](https://github.com/CarlosManotas/animate-styled), by Carlos Manotas.
