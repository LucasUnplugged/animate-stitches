# animate-stitches

Library for bringing Animate.css animations to Stitches (CSS-in-JS library with near-zero runtime).

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
import type * as S from "@stitches/react"

// Make sure you destructure `config` from your base theme creation
export const { config, ... } = createStitches({ ... })

// As per the Stitches docs, create a `CSS` type
export type CSS = S.CSS<typeof config>

// Then bring it all together and export the `animate` helper object
export const animate = getAnimations<{ [k: string]: CSS }, typeof keyframes>(keyframes)
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

## Prior Art

This library is derived from, and inspired by, [animate-styled](https://github.com/CarlosManotas/animate-styled), by Carlos Manotas.
