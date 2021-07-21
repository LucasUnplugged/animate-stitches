export const bounceOut = {
  "20%": {
    transform: "scale3d(0.9, 0.9, 0.9)",
  },
  "50%, 55%": {
    opacity: "1",
    transform: "scale3d(1.1, 1.1, 1.1)",
  },
  "100%": {
    opacity: "0",
    transform: "scale3d(0.3, 0.3, 0.3)",
  },
}

export const bounceOutDown = {
  "20%": {
    transform: "translate3d(0, 10px, 0) scaleY(0.985)",
  },
  "40%, 45%": {
    opacity: "1",
    transform: "translate3d(0, -20px, 0) scaleY(0.9)",
  },
  "100%": {
    opacity: "0",
    transform: "translate3d(0, 2000px, 0) scaleY(3)",
  },
}

export const bounceOutLeft = {
  "20%": {
    opacity: "1",
    transform: "translate3d(20px, 0, 0) scaleX(0.9)",
  },
  "100%": {
    opacity: "0",
    transform: "translate3d(-2000px, 0, 0) scaleX(2)",
  },
}

export const bounceOutRight = {
  "20%": {
    opacity: "1",
    transform: "translate3d(-20px, 0, 0) scaleX(0.9)",
  },
  "100%": {
    opacity: "0",
    transform: "translate3d(2000px, 0, 0) scaleX(2)",
  },
}

export const bounceOutUp = {
  "20%": {
    transform: "translate3d(0, -10px, 0) scaleY(0.985)",
  },
  "40%, 45%": {
    opacity: "1",
    transform: "translate3d(0, 20px, 0) scaleY(0.9)",
  },
  "100%": {
    opacity: "0",
    transform: "translate3d(0, -2000px, 0) scaleY(3)",
  },
}
