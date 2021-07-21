type AttentionSeekers =
  | "bounce"
  | "flash"
  | "headShake"
  | "heartBeat"
  | "jello"
  | "pulse"
  | "rubberBand"
  | "shake"
  | "shakeX"
  | "shakeY"
  | "swing"
  | "tada"
  | "wobble"

type BackEntrances = "backInDown" | "backInLeft" | "backInRight" | "backInUp"

type BackExits = "backOutDown" | "backOutLeft" | "backOutRight" | "backOutUp"

type BouncingEntrances =
  | "bounceIn"
  | "bounceInDown"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceInUp"

type BouncingExits =
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "bounceOutUp"

type FadingEntrances =
  | "fadeIn"
  | "fadeInBottomLeft"
  | "fadeInBottomRight"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeInTopLeft"
  | "fadeInTopRight"
  | "fadeInUp"
  | "fadeInUpBig"

type FadingExits =
  | "fadeOut"
  | "fadeOutBottomLeft"
  | "fadeOutBottomRight"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "fadeOutTopLeft"
  | "fadeOutTopRight"
  | "fadeOutUp"
  | "fadeOutUpBig"

type Flippers = "flip" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY"

type LightSpeed =
  | "lightSpeedInLeft"
  | "lightSpeedInRight"
  | "lightSpeedOutLeft"
  | "lightSpeedOutRight"

type RotatingEntrances =
  | "rotateIn"
  | "rotateInDownLeft"
  | "rotateInDownRight"
  | "rotateInUpLeft"
  | "rotateInUpRight"

type RotatingExits =
  | "rotateOut"
  | "rotateOutDownLeft"
  | "rotateOutDownRight"
  | "rotateOutUpLeft"
  | "rotateOutUpRight"

type SlidingEntrances = "slideInDown" | "slideInLeft" | "slideInRight" | "slideInUp"

type SlidingExits = "slideOutDown" | "slideOutLeft" | "slideOutRight" | "slideOutUp"

type Specials = "hinge" | "jackInTheBox" | "rollIn" | "rollOut"

type ZoomingEntrances = "zoomIn" | "zoomInDown" | "zoomInLeft" | "zoomInRight" | "zoomInUp"

type ZoomingExits = "zoomOut" | "zoomOutDown" | "zoomOutLeft" | "zoomOutRight" | "zoomOutUp"

export type NamesAnimation =
  | AttentionSeekers
  | BackEntrances
  | BackExits
  | BouncingEntrances
  | BouncingExits
  | FadingEntrances
  | FadingExits
  | Flippers
  | LightSpeed
  | RotatingEntrances
  | RotatingExits
  | SlidingEntrances
  | SlidingExits
  | Specials
  | ZoomingEntrances
  | ZoomingExits

export type TimingFuctionValues =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear"
  | "step-start"
  | "step-end"

export interface AnimationOptions {
  delay?: number | string
  direction?: string
  fillMode?: string
  iterationCount?: number | "infinite"
  playState?: string
  transformOrigin?: string
}

export interface AnimationStyles {
  animation: string
  transformOrigin?: string
}

export type Animate = {
  [k in NamesAnimation]: (
    duration: number | string,
    timingFunction?: TimingFuctionValues | string,
    options?: AnimationOptions
  ) => AnimationStyles
}

export type Keyframes = { [k: string]: unknown }
