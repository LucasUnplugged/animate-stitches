/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var bounce = {
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
};
var flash = {
    "0%, 50%, 100%": {
        opacity: "1",
    },
    "25%, 75%": {
        opacity: "0",
    },
};
var headShake = {
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
};
var heartBeat = {
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
};
var jello = {
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
};
var pulse = {
    "0%": {
        transform: "scale3d(1, 1, 1)",
    },
    "50%": {
        transform: "scale3d(1.05, 1.05, 1.05)",
    },
    "100%": {
        transform: "scale3d(1, 1, 1)",
    },
};
var rubberBand = {
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
};
var shake = {
    "0%, 100%": {
        transform: "translate3d(0, 0, 0)",
    },
    "10%, 30%, 50%, 70%, 90%": {
        transform: "translate3d(-10px, 0, 0)",
    },
    "20%, 40%, 60%, 80%": {
        transform: "translate3d(10px, 0, 0)",
    },
};
var shakeX = {
    "0%, 100%": {
        transform: "translate3d(0, 0, 0)",
    },
    "10%, 30%, 50%, 70%, 90%": {
        transform: "translate3d(-10px, 0, 0)",
    },
    "20%, 40%, 60%, 80%": {
        transform: "translate3d(10px, 0, 0)",
    },
};
var shakeY = {
    "0%, 100%": {
        transform: "translate3d(0, 0, 0)",
    },
    "10%, 30%, 50%, 70%, 90%": {
        transform: "translate3d(0, -10px, 0)",
    },
    "20%, 40%, 60%, 80%": {
        transform: "translate3d(0, 10px, 0)",
    },
};
var swing = {
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
};
var tada = {
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
};
var wobble = {
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
};

var backInDown = {
    "0%": {
        transform: "translateY(-1200px) scale(0.7)",
        opacity: "0.7",
    },
    "80%": {
        transform: "translateY(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "scale(1)",
        opacity: "1",
    },
};
var backInLeft = {
    "0%": {
        transform: "translateX(-2000px) scale(0.7)",
        opacity: "0.7",
    },
    "80%": {
        transform: "translateX(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "scale(1)",
        opacity: "1",
    },
};
var backInRight = {
    "0%": {
        transform: "translateX(2000px) scale(0.7)",
        opacity: "0.7",
    },
    "80%": {
        transform: "translateX(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "scale(1)",
        opacity: "1",
    },
};
var backInUp = {
    "0%": {
        transform: "translateY(1200px) scale(0.7)",
        opacity: "0.7",
    },
    "80%": {
        transform: "translateY(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "scale(1)",
        opacity: "1",
    },
};

var backOutDown = {
    "0%": {
        transform: "scale(1)",
        opacity: "1",
    },
    "20%": {
        transform: "translateY(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "translateY(700px) scale(0.7)",
        opacity: "0.7",
    },
};
var backOutLeft = {
    "0%": {
        transform: "scale(1)",
        opacity: "1",
    },
    "20%": {
        transform: "translateX(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "translateX(-2000px) scale(0.7)",
        opacity: "0.7",
    },
};
var backOutRight = {
    "0%": {
        transform: "scale(1)",
        opacity: "1",
    },
    "20%": {
        transform: "translateX(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "translateX(2000px) scale(0.7)",
        opacity: "0.7",
    },
};
var backOutUp = {
    "0%": {
        transform: "scale(1)",
        opacity: "1",
    },
    "20%": {
        transform: "translateY(0px) scale(0.7)",
        opacity: "0.7",
    },
    "100%": {
        transform: "translateY(-700px) scale(0.7)",
        opacity: "0.7",
    },
};

var bounceIn = {
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
};
var bounceInDown = {
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
};
var bounceInLeft = {
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
};
var bounceInRight = {
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
};
var bounceInUp = {
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
};

var bounceOut = {
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
};
var bounceOutDown = {
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
};
var bounceOutLeft = {
    "20%": {
        opacity: "1",
        transform: "translate3d(20px, 0, 0) scaleX(0.9)",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(-2000px, 0, 0) scaleX(2)",
    },
};
var bounceOutRight = {
    "20%": {
        opacity: "1",
        transform: "translate3d(-20px, 0, 0) scaleX(0.9)",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(2000px, 0, 0) scaleX(2)",
    },
};
var bounceOutUp = {
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
};

var fadeIn = {
    "0%": {
        opacity: "0",
    },
    "100%": {
        opacity: "1",
    },
};
var fadeInBottomLeft = {
    "0%": {
        opacity: "0",
        transform: "translate3d(-100%, 100%, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInBottomRight = {
    "0%": {
        opacity: "0",
        transform: "translate3d(100%, 100%, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInDown = {
    "0%": {
        opacity: "0",
        transform: "translate3d(0, -100%, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInDownBig = {
    "0%": {
        opacity: "0",
        transform: "translate3d(0, -2000px, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInLeft = {
    "0%": {
        opacity: "0",
        transform: "translate3d(-100%, 0, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInLeftBig = {
    "0%": {
        opacity: "0",
        transform: "translate3d(-2000px, 0, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInRight = {
    "0%": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInRightBig = {
    "0%": {
        opacity: "0",
        transform: "translate3d(2000px, 0, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInTopLeft = {
    "0%": {
        opacity: "0",
        transform: "translate3d(-100%, -100%, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInTopRight = {
    "0%": {
        opacity: "0",
        transform: "translate3d(100%, -100%, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInUp = {
    "0%": {
        opacity: "0",
        transform: "translate3d(0, 100%, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var fadeInUpBig = {
    "0%": {
        opacity: "0",
        transform: "translate3d(0, 2000px, 0)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};

var fadeOut = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
    },
};
var fadeOutBottomLeft = {
    "0%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(-100%, 100%, 0)",
    },
};
var fadeOutBottomRight = {
    "0%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(100%, 100%, 0)",
    },
};
var fadeOutDown = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(0, 100%, 0)",
    },
};
var fadeOutDownBig = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(0, 2000px, 0)",
    },
};
var fadeOutLeft = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(-100%, 0, 0)",
    },
};
var fadeOutLeftBig = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(-2000px, 0, 0)",
    },
};
var fadeOutRight = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0)",
    },
};
var fadeOutRightBig = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(2000px, 0, 0)",
    },
};
var fadeOutTopLeft = {
    "0%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(-100%, -100%, 0)",
    },
};
var fadeOutTopRight = {
    "0%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(100%, -100%, 0)",
    },
};
var fadeOutUp = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(0, -100%, 0)",
    },
};
var fadeOutUpBig = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(0, -2000px, 0)",
    },
};

var flip = {
    "0%": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
        animationTimingFunction: "ease-out",
    },
    "40%": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
        animationTimingFunction: "ease-out",
    },
    "50%": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
        animationTimingFunction: "ease-in",
    },
    "80%": {
        transform: "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        animationTimingFunction: "ease-in",
    },
    "100%": {
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        animationTimingFunction: "ease-in",
    },
};
var flipInX = {
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
};
var flipInY = {
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
};
var flipOutX = {
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
};
var flipOutY = {
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
};

var lightSpeedInLeft = {
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
};
var lightSpeedInRight = {
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
};
var lightSpeedOutLeft = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        transform: "translate3d(-100%, 0, 0) skewX(-30deg)",
        opacity: "0",
    },
};
var lightSpeedOutRight = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        transform: "translate3d(100%, 0, 0) skewX(30deg)",
        opacity: "0",
    },
};

var rotateIn = {
    "0%": {
        transform: "rotate3d(0, 0, 1, -200deg)",
        opacity: "0",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
        opacity: "1",
    },
};
var rotateInDownLeft = {
    "0%": {
        transform: "rotate3d(0, 0, 1, -45deg)",
        opacity: "0",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
        opacity: "1",
    },
};
var rotateInDownRight = {
    "0%": {
        transform: "rotate3d(0, 0, 1, 45deg)",
        opacity: "0",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
        opacity: "1",
    },
};
var rotateInUpLeft = {
    "0%": {
        transform: "rotate3d(0, 0, 1, 45deg)",
        opacity: "0",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
        opacity: "1",
    },
};
var rotateInUpRight = {
    "0%": {
        transform: "rotate3d(0, 0, 1, -90deg)",
        opacity: "0",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
        opacity: "1",
    },
};

var rotateOut = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        transform: "rotate3d(0, 0, 1, 200deg)",
        opacity: "0",
    },
};
var rotateOutDownLeft = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        transform: "rotate3d(0, 0, 1, 45deg)",
        opacity: "0",
    },
};
var rotateOutDownRight = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        transform: "rotate3d(0, 0, 1, -45deg)",
        opacity: "0",
    },
};
var rotateOutUpLeft = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        transform: "rotate3d(0, 0, 1, -45deg)",
        opacity: "0",
    },
};
var rotateOutUpRight = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        transform: "rotate3d(0, 0, 1, 90deg)",
        opacity: "0",
    },
};

var slideInDown = {
    "0%": {
        transform: "translate3d(0, -100%, 0)",
        visibility: "visible",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
    },
};
var slideInLeft = {
    "0%": {
        transform: "translate3d(-100%, 0, 0)",
        visibility: "visible",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
    },
};
var slideInRight = {
    "0%": {
        transform: "translate3d(100%, 0, 0)",
        visibility: "visible",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
    },
};
var slideInUp = {
    "0%": {
        transform: "translate3d(0, 100%, 0)",
        visibility: "visible",
    },
    "100%": {
        transform: "translate3d(0, 0, 0)",
    },
};

var slideOutDown = {
    "0%": {
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        visibility: "hidden",
        transform: "translate3d(0, 100%, 0)",
    },
};
var slideOutLeft = {
    "0%": {
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        visibility: "hidden",
        transform: "translate3d(-100%, 0, 0)",
    },
};
var slideOutRight = {
    "0%": {
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        visibility: "hidden",
        transform: "translate3d(100%, 0, 0)",
    },
};
var slideOutUp = {
    "0%": {
        transform: "translate3d(0, 0, 0)",
    },
    "100%": {
        visibility: "hidden",
        transform: "translate3d(0, -100%, 0)",
    },
};

var rollIn = {
    "0%": {
        opacity: "0",
        transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
    },
    "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0)",
    },
};
var rollOut = {
    "0%": {
        opacity: "1",
    },
    "100%": {
        opacity: "0",
        transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",
    },
};
var hinge = {
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
};
var jackInTheBox = {
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
};

var zoomIn = {
    "0%": {
        opacity: "0",
        transform: "scale3d(0.3, 0.3, 0.3)",
    },
    "50%": {
        opacity: "1",
    },
};
var zoomInDown = {
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
};
var zoomInLeft = {
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
};
var zoomInRight = {
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
};
var zoomInUp = {
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
};

var zoomOut = {
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
};
var zoomOutDown = {
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
};
var zoomOutLeft = {
    "40%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)",
    },
    "100%": {
        opacity: "0",
        transform: "scale(0.1) translate3d(-2000px, 0, 0)",
    },
};
var zoomOutRight = {
    "40%": {
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)",
    },
    "100%": {
        opacity: "0",
        transform: "scale(0.1) translate3d(2000px, 0, 0)",
    },
};
var zoomOutUp = {
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
};

var animations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    bounce: bounce,
    flash: flash,
    headShake: headShake,
    heartBeat: heartBeat,
    jello: jello,
    pulse: pulse,
    rubberBand: rubberBand,
    shake: shake,
    shakeX: shakeX,
    shakeY: shakeY,
    swing: swing,
    tada: tada,
    wobble: wobble,
    backInDown: backInDown,
    backInLeft: backInLeft,
    backInRight: backInRight,
    backInUp: backInUp,
    backOutDown: backOutDown,
    backOutLeft: backOutLeft,
    backOutRight: backOutRight,
    backOutUp: backOutUp,
    bounceIn: bounceIn,
    bounceInDown: bounceInDown,
    bounceInLeft: bounceInLeft,
    bounceInRight: bounceInRight,
    bounceInUp: bounceInUp,
    bounceOut: bounceOut,
    bounceOutDown: bounceOutDown,
    bounceOutLeft: bounceOutLeft,
    bounceOutRight: bounceOutRight,
    bounceOutUp: bounceOutUp,
    fadeIn: fadeIn,
    fadeInBottomLeft: fadeInBottomLeft,
    fadeInBottomRight: fadeInBottomRight,
    fadeInDown: fadeInDown,
    fadeInDownBig: fadeInDownBig,
    fadeInLeft: fadeInLeft,
    fadeInLeftBig: fadeInLeftBig,
    fadeInRight: fadeInRight,
    fadeInRightBig: fadeInRightBig,
    fadeInTopLeft: fadeInTopLeft,
    fadeInTopRight: fadeInTopRight,
    fadeInUp: fadeInUp,
    fadeInUpBig: fadeInUpBig,
    fadeOut: fadeOut,
    fadeOutBottomLeft: fadeOutBottomLeft,
    fadeOutBottomRight: fadeOutBottomRight,
    fadeOutDown: fadeOutDown,
    fadeOutDownBig: fadeOutDownBig,
    fadeOutLeft: fadeOutLeft,
    fadeOutLeftBig: fadeOutLeftBig,
    fadeOutRight: fadeOutRight,
    fadeOutRightBig: fadeOutRightBig,
    fadeOutTopLeft: fadeOutTopLeft,
    fadeOutTopRight: fadeOutTopRight,
    fadeOutUp: fadeOutUp,
    fadeOutUpBig: fadeOutUpBig,
    flip: flip,
    flipInX: flipInX,
    flipInY: flipInY,
    flipOutX: flipOutX,
    flipOutY: flipOutY,
    lightSpeedInLeft: lightSpeedInLeft,
    lightSpeedInRight: lightSpeedInRight,
    lightSpeedOutLeft: lightSpeedOutLeft,
    lightSpeedOutRight: lightSpeedOutRight,
    rotateIn: rotateIn,
    rotateInDownLeft: rotateInDownLeft,
    rotateInDownRight: rotateInDownRight,
    rotateInUpLeft: rotateInUpLeft,
    rotateInUpRight: rotateInUpRight,
    rotateOut: rotateOut,
    rotateOutDownLeft: rotateOutDownLeft,
    rotateOutDownRight: rotateOutDownRight,
    rotateOutUpLeft: rotateOutUpLeft,
    rotateOutUpRight: rotateOutUpRight,
    slideInDown: slideInDown,
    slideInLeft: slideInLeft,
    slideInRight: slideInRight,
    slideInUp: slideInUp,
    slideOutDown: slideOutDown,
    slideOutLeft: slideOutLeft,
    slideOutRight: slideOutRight,
    slideOutUp: slideOutUp,
    rollIn: rollIn,
    rollOut: rollOut,
    hinge: hinge,
    jackInTheBox: jackInTheBox,
    zoomIn: zoomIn,
    zoomInDown: zoomInDown,
    zoomInLeft: zoomInLeft,
    zoomInRight: zoomInRight,
    zoomInUp: zoomInUp,
    zoomOut: zoomOut,
    zoomOutDown: zoomOutDown,
    zoomOutLeft: zoomOutLeft,
    zoomOutRight: zoomOutRight,
    zoomOutUp: zoomOutUp
});

var isNumber = function (n) { return !isNaN(+n); };
var getTime = function (time) { return (isNumber(time) ? time + "s" : String(time)); };
var getAnimationStyles = function (target) {
    return function (duration, timingFunction, options) {
        if (timingFunction === void 0) { timingFunction = "ease"; }
        var _a = options || {}, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.iterationCount, iterationCount = _c === void 0 ? 1 : _c, _d = _a.direction, direction = _d === void 0 ? "normal" : _d, _e = _a.fillMode, fillMode = _e === void 0 ? "none" : _e, _f = _a.playState, playState = _f === void 0 ? "running" : _f, _g = _a.transformOrigin, transformOrigin = _g === void 0 ? "center" : _g;
        return __assign({ animation: getTime(duration) + " " + timingFunction + " " + getTime(delay) + " " + iterationCount + "\n      " + direction + " " + fillMode + " " + playState + " " + target }, (transformOrigin ? { transformOrigin: transformOrigin } : {}));
    };
};
var getAnimations = function (keyframes) {
    return Object.entries(animations).reduce(function (output, _a) {
        var key = _a[0], animation = _a[1];
        var target = keyframes(animation);
        output[key] = getAnimationStyles(target.toString());
        return output;
    }, {});
};

export { getAnimations };
//# sourceMappingURL=index.es.js.map
