export const zoomIn = {
  "0%": {
    opacity: "0",
    transform: "scale3d(0.3, 0.3, 0.3)",
  },
  "50%": {
    opacity: "1",
  },
}

export const zoomInDown = {
  "0%": {
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
    animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  },
  "60%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
    animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  },
}

export const zoomInLeft = {
  "0%": {
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
    animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  },
  "60%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
    animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  },
}

export const zoomInRight = {
  "0%": {
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
    animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  },
  "60%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
    animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  },
}

export const zoomInUp = {
  "0%": {
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
    animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  },
  "60%": {
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
    animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  },
}
