export const bounce = {
  "0%, 20%, 53%, 100%": {
    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0)",
  },
  "40%, 43%": {
    animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    transform: "translate3d(0, -30px, 0) scaleY(1.1)",
  },
  "70%": {
    animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    transform: "translate3d(0, -15px, 0) scaleY(1.05)",
  },
  "80%": {
    transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0) scaleY(0.95)",
  },
  "90%": {
    transform: "translate3d(0, -4px, 0) scaleY(1.02)",
  },
}

export const flash = {
  "0%, 50%, 100%": {
    opacity: "1",
  },
  "25%, 75%": {
    opacity: "0",
  },
}

export const headShake = {
  "0%": {
    transform: "translateX(0)",
  },
  "6.5%": {
    transform: "translateX(-6px) rotateY(-9deg)",
  },
  "18.5%": {
    transform: "translateX(5px) rotateY(7deg)",
  },
  "31.5%": {
    transform: "translateX(-3px) rotateY(-5deg)",
  },
  "43.5%": {
    transform: "translateX(2px) rotateY(3deg)",
  },
  "50%": {
    transform: "translateX(0)",
  },
}

export const heartBeat = {
  "0%": {
    transform: "scale(1)",
  },
  "14%": {
    transform: "scale(1.3)",
  },
  "28%": {
    transform: "scale(1)",
  },
  "42%": {
    transform: "scale(1.3)",
  },
  "70%": {
    transform: "scale(1)",
  },
}

export const jello = {
  "0%, 11.1%, 100%": {
    transform: "none",
  },
  "22.2%": {
    transform: "skewX(-12.5deg) skewY(-12.5deg)",
  },
  "33.3%": {
    transform: "skewX(6.25deg) skewY(6.25deg)",
  },
  "44.4%": {
    transform: "skewX(-3.125deg) skewY(-3.125deg)",
  },
  "55.5%": {
    transform: "skewX(1.5625deg) skewY(1.5625deg)",
  },
  "66.6%": {
    transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
  },
  "77.7%": {
    transform: "skewX(0.390625deg) skewY(0.390625deg)",
  },
  "88.8%": {
    transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
  },
}

export const pulse = {
  "0%": {
    transform: "scale3d(1, 1, 1)",
  },
  "50%": {
    transform: "scale3d(1.05, 1.05, 1.05)",
  },
  "100%": {
    transform: "scale3d(1, 1, 1)",
  },
}

export const rubberBand = {
  "0%": {
    transform: "scale3d(1, 1, 1)",
  },
  "30%": {
    transform: "scale3d(1.25, 0.75, 1)",
  },
  "40%": {
    transform: "scale3d(0.75, 1.25, 1)",
  },
  "50%": {
    transform: "scale3d(1.15, 0.85, 1)",
  },
  "65%": {
    transform: "scale3d(.95, 1.05, 1)",
  },
  "75%": {
    transform: "scale3d(1.05, .95, 1)",
  },
  "100%": {
    transform: "scale3d(1, 1, 1)",
  },
}

export const shake = {
  "0%, 100%": {
    transform: "translate3d(0, 0, 0)",
  },
  "10%, 30%, 50%, 70%, 90%": {
    transform: "translate3d(-10px, 0, 0)",
  },
  "20%, 40%, 60%, 80%": {
    transform: "translate3d(10px, 0, 0)",
  },
}

export const shakeX = {
  "0%, 100%": {
    transform: "translate3d(0, 0, 0)",
  },
  "10%, 30%, 50%, 70%, 90%": {
    transform: "translate3d(-10px, 0, 0)",
  },
  "20%, 40%, 60%, 80%": {
    transform: "translate3d(10px, 0, 0)",
  },
}

export const shakeY = {
  "0%, 100%": {
    transform: "translate3d(0, 0, 0)",
  },
  "10%, 30%, 50%, 70%, 90%": {
    transform: "translate3d(0, -10px, 0)",
  },
  "20%, 40%, 60%, 80%": {
    transform: "translate3d(0, 10px, 0)",
  },
}

export const swing = {
  "20%": {
    transform: "rotate3d(0, 0, 1, 15deg)",
  },
  "40%": {
    transform: "rotate3d(0, 0, 1, -10deg)",
  },
  "60%": {
    transform: "rotate3d(0, 0, 1, 5deg)",
  },
  "80%": {
    transform: "rotate3d(0, 0, 1, -5deg)",
  },
  "100%": {
    transform: "rotate3d(0, 0, 1, 0deg)",
  },
}

export const tada = {
  "0%": {
    transform: "scale3d(1, 1, 1)",
  },
  "10%, 20%": {
    transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
  },
  "30%, 50%, 70%, 90%": {
    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
  },
  "40%, 60%, 80%": {
    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
  },
  "100%": {
    transform: "scale3d(1, 1, 1)",
  },
}

export const wobble = {
  "0%": {
    transform: "translate3d(0, 0, 0)",
  },
  "15%": {
    transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
  },
  "30%": {
    transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
  },
  "45%": {
    transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
  },
  "60%": {
    transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
  },
  "75%": {
    transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
  },
}
