export const bounceIn = {
  "0%, 20%, 40%, 60%, 80%, 100%": {
    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  "0%": {
    opacity: "0",
    transform: "scale3d(0.3, 0.3, 0.3)",
  },
  "20%": {
    transform: "scale3d(1.1, 1.1, 1.1)",
  },
  "40%": {
    transform: "scale3d(0.9, 0.9, 0.9)",
  },
  "60%": {
    opacity: "1",
    transform: "scale3d(1.03, 1.03, 1.03)",
  },
  "80%": {
    transform: "scale3d(0.97, 0.97, 0.97)",
  },
  "100%": {
    opacity: "1",
    transform: "scale3d(1, 1, 1)",
  },
}

export const bounceInDown = {
  "0%, 60%, 75%, 90%, 100%": {
    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  "0%": {
    opacity: "0",
    transform: "translate3d(0, -3000px, 0) scaleY(3)",
  },
  "60%": {
    opacity: "1",
    transform: "translate3d(0, 25px, 0) scaleY(0.9)",
  },
  "75%": {
    transform: "translate3d(0, -10px, 0) scaleY(0.95)",
  },
  "90%": {
    transform: "translate3d(0, 5px, 0) scaleY(0.985)",
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
  },
}

export const bounceInLeft = {
  "0%, 60%, 75%, 90%, 100%": {
    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  "0%": {
    opacity: "0",
    transform: "translate3d(-3000px, 0, 0) scaleX(3)",
  },
  "60%": {
    opacity: "1",
    transform: "translate3d(25px, 0, 0) scaleX(1)",
  },
  "75%": {
    transform: "translate3d(-10px, 0, 0) scaleX(0.98)",
  },
  "90%": {
    transform: "translate3d(5px, 0, 0) scaleX(0.995)",
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
  },
}

export const bounceInRight = {
  "0%, 60%, 75%, 90%, 100%": {
    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  "0%": {
    opacity: "0",
    transform: "translate3d(3000px, 0, 0) scaleX(3)",
  },
  "60%": {
    opacity: "1",
    transform: "translate3d(-25px, 0, 0) scaleX(1)",
  },
  "75%": {
    transform: "translate3d(10px, 0, 0) scaleX(0.98)",
  },
  "90%": {
    transform: "translate3d(-5px, 0, 0) scaleX(0.995)",
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
  },
}

export const bounceInUp = {
  "0%, 60%, 75%, 90%, 100%": {
    animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  "0%": {
    opacity: "0",
    transform: "translate3d(0, 3000px, 0) scaleY(5)",
  },
  "60%": {
    opacity: "1",
    transform: "translate3d(0, -20px, 0) scaleY(0.9)",
  },
  "75%": {
    transform: "translate3d(0, 10px, 0) scaleY(0.95)",
  },
  "90%": {
    transform: "translate3d(0, -5px, 0) scaleY(0.985)",
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
  },
}
