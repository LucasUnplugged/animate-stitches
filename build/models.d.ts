declare type AttentionSeekers = "bounce" | "flash" | "headShake" | "heartBeat" | "jello" | "pulse" | "rubberBand" | "shake" | "shakeX" | "shakeY" | "swing" | "tada" | "wobble";
declare type BackEntrances = "backInDown" | "backInLeft" | "backInRight" | "backInUp";
declare type BackExits = "backOutDown" | "backOutLeft" | "backOutRight" | "backOutUp";
declare type BouncingEntrances = "bounceIn" | "bounceInDown" | "bounceInLeft" | "bounceInRight" | "bounceInUp";
declare type BouncingExits = "bounceOut" | "bounceOutDown" | "bounceOutLeft" | "bounceOutRight" | "bounceOutUp";
declare type FadingEntrances = "fadeIn" | "fadeInBottomLeft" | "fadeInBottomRight" | "fadeInDown" | "fadeInDownBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "fadeInTopLeft" | "fadeInTopRight" | "fadeInUp" | "fadeInUpBig";
declare type FadingExits = "fadeOut" | "fadeOutBottomLeft" | "fadeOutBottomRight" | "fadeOutDown" | "fadeOutDownBig" | "fadeOutLeft" | "fadeOutLeftBig" | "fadeOutRight" | "fadeOutRightBig" | "fadeOutTopLeft" | "fadeOutTopRight" | "fadeOutUp" | "fadeOutUpBig";
declare type Flippers = "flip" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY";
declare type LightSpeed = "lightSpeedInLeft" | "lightSpeedInRight" | "lightSpeedOutLeft" | "lightSpeedOutRight";
declare type RotatingEntrances = "rotateIn" | "rotateInDownLeft" | "rotateInDownRight" | "rotateInUpLeft" | "rotateInUpRight";
declare type RotatingExits = "rotateOut" | "rotateOutDownLeft" | "rotateOutDownRight" | "rotateOutUpLeft" | "rotateOutUpRight";
declare type SlidingEntrances = "slideInDown" | "slideInLeft" | "slideInRight" | "slideInUp";
declare type SlidingExits = "slideOutDown" | "slideOutLeft" | "slideOutRight" | "slideOutUp";
declare type Specials = "hinge" | "jackInTheBox" | "rollIn" | "rollOut";
declare type ZoomingEntrances = "zoomIn" | "zoomInDown" | "zoomInLeft" | "zoomInRight" | "zoomInUp";
declare type ZoomingExits = "zoomOut" | "zoomOutDown" | "zoomOutLeft" | "zoomOutRight" | "zoomOutUp";
export declare type NamesAnimation = AttentionSeekers | BackEntrances | BackExits | BouncingEntrances | BouncingExits | FadingEntrances | FadingExits | Flippers | LightSpeed | RotatingEntrances | RotatingExits | SlidingEntrances | SlidingExits | Specials | ZoomingEntrances | ZoomingExits;
export declare type TimingFuctionValues = "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end";
export interface AnimationOptions {
    delay?: number | string;
    direction?: string;
    fillMode?: string;
    iterationCount?: number | "infinite";
    playState?: string;
    transformOrigin?: string;
}
export interface AnimationStyles {
    animation: string;
    transformOrigin?: string;
}
export declare type Animate = {
    [k in NamesAnimation]: (duration: number | string, timingFunction?: TimingFuctionValues | string, options?: AnimationOptions) => AnimationStyles;
};
export declare type Keyframes = {
    [k: string]: unknown;
};
export {};
