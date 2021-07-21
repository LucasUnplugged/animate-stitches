export const flip = {
  "0%": {
    transform:
      "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
    animationTimingFunction: "ease-out",
  },
  "40%": {
    transform:
      "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
    animationTimingFunction: "ease-out",
  },
  "50%": {
    transform:
      "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
    animationTimingFunction: "ease-in",
  },
  "80%": {
    transform:
      "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
    animationTimingFunction: "ease-in",
  },
  "100%": {
    transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
    animationTimingFunction: "ease-in",
  },
}

export const flipInX = {
  "0%": {
    transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
    animationTimingFunction: "ease-in",
    opacity: "0",
  },
  "40%": {
    transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
    animationTimingFunction: "ease-in",
  },
  "60%": {
    transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
    opacity: "1",
  },
  "80%": {
    transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)",
  },
  "100%": {
    transform: "perspective(400px)",
  },
}

export const flipInY = {
  "0%": {
    transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
    animationTimingFunction: "ease-in",
    opacity: "0",
  },
  "40%": {
    transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)",
    animationTimingFunction: "ease-in",
  },
  "60%": {
    transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)",
    opacity: "1",
  },
  "80%": {
    transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)",
  },
  "100%": {
    transform: "perspective(400px)",
  },
}

export const flipOutX = {
  "0%": {
    transform: "perspective(400px)",
  },
  "30%": {
    transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
    opacity: "1",
  },
  "100%": {
    transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
    opacity: "0",
  },
}

export const flipOutY = {
  "0%": {
    transform: "perspective(400px)",
  },
  "30%": {
    transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)",
    opacity: "1",
  },
  "100%": {
    transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
    opacity: "0",
  },
}
