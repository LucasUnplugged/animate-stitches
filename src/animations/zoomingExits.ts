export const zoomOut = {
  "0%": {
    opacity: "1",
  },
  "50%": {
    opacity: "0",
    transform: "scale3d(0.3, 0.3, 0.3)",
  },
  "100%": {
    opacity: "0",
  },
}

export const zoomOutDown = {
  "40%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
    animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  },
  "100%": {
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
    animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  },
}

export const zoomOutLeft = {
  "40%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)",
  },
  "100%": {
    opacity: "0",
    transform: "scale(0.1) translate3d(-2000px, 0, 0)",
  },
}

export const zoomOutRight = {
  "40%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)",
  },
  "100%": {
    opacity: "0",
    transform: "scale(0.1) translate3d(2000px, 0, 0)",
  },
}

export const zoomOutUp = {
  "40%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
    animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  },
  "100%": {
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
    animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  },
}
