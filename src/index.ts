import { Animate, AnimationOptions, AnimationStyles, TimingFuctionValues } from "./models"
import * as animations from "./"

const isNumber = (n: number | string) => !isNaN(+n)
const getTime = (time: number | string): string => (isNumber(time) ? `${time}s` : String(time))

const getAnimationStyles =
  (target: string) =>
  (
    duration: number | string,
    timingFunction: TimingFuctionValues | string = "ease",
    options?: AnimationOptions
  ): AnimationStyles => {
    const {
      delay = 0,
      iterationCount = 1,
      direction = "normal",
      fillMode = "none",
      playState = "running",
      transformOrigin = "center",
    } = options || {}
    return {
      animation: `${getTime(duration)} ${timingFunction} ${getTime(delay)} ${iterationCount}
      ${direction} ${fillMode} ${playState} ${target}`,
      ...(transformOrigin ? { transformOrigin } : {}),
    }
  }

export const getAnimations = <T extends object, O extends Function>(keyframes: O) =>
  Object.entries(animations).reduce<Animate>(
    (output: Animate, [key, animation]: [string, (keyframes: O) => unknown]): Animate => {
      const target = keyframes(animation as T)
      output[key] = getAnimationStyles(target.toString())
      return output
    },
    {} as Animate
  )
