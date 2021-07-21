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

## Usage

The `animate` object that is exported from your `stitches.config.ts` file is fully typed with all the available animation functions. Just be sure to spread the return value of the animation function, like so:

```JSX
const Input = styled("input", {
  ...animate.fadeInDown(1.5),
})

const Button = styled("button", {
  ...animate.bounce(2, "ease-in-out", { iterationCount: "infinite" }),
})
```

## Prior Work

This library is derived from, and inspired by, [animate-styled](https://github.com/CarlosManotas/animate-styled), by Carlos Manotas.
