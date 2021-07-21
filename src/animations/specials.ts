export const rollIn = {
  "0%": {
    opacity: "0",
    transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
  },
  "100%": {
    opacity: "1",
    transform: "translate3d(0, 0, 0)",
  },
}

export const rollOut = {
  "0%": {
    opacity: "1",
  },
  "100%": {
    opacity: "0",
    transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",
  },
}

export const hinge = {
  "0%": {
    animationTimingFunction: "ease-in-out",
  },
  "20%, 60%": {
    transform: "rotate3d(0, 0, 1, 80deg)",
    animationTimingFunction: "ease-in-out",
  },
  "40%, 80%": {
    transform: "rotate3d(0, 0, 1, 60deg)",
    animationTimingFunction: "ease-in-out",
    opacity: "1",
  },
  "100%": {
    transform: "translate3d(0, 700px, 0)",
    opacity: "0",
  },
}

export const jackInTheBox = {
  "0%": {
    opacity: "0",
    transform: "scale(0.1) rotate(30deg)",
    transformOrigin: "center bottom",
  },
  "50%": {
    transform: "rotate(-10deg)",
  },
  "70%": {
    transform: "rotate(3deg)",
  },
  "100%": {
    opacity: "1",
    transform: "scale(1)",
  },
}
