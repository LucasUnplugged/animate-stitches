export const lightSpeedInLeft = {
  "0%": {
    transform: "translate3d(-100%, 0, 0) skewX(30deg)",
    opacity: "0",
  },
  "60%": {
    transform: "skewX(-20deg)",
    opacity: "1",
  },
  "80%": {
    transform: "skewX(5deg)",
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
  },
}

export const lightSpeedInRight = {
  "0%": {
    transform: "translate3d(100%, 0, 0) skewX(-30deg)",
    opacity: "0",
  },
  "60%": {
    transform: "skewX(20deg)",
    opacity: "1",
  },
  "80%": {
    transform: "skewX(-5deg)",
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
  },
}

export const lightSpeedOutLeft = {
  "0%": {
    opacity: "1",
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0) skewX(-30deg)",
    opacity: "0",
  },
}

export const lightSpeedOutRight = {
  "0%": {
    opacity: "1",
  },
  "100%": {
    transform: "translate3d(100%, 0, 0) skewX(30deg)",
    opacity: "0",
  },
}
