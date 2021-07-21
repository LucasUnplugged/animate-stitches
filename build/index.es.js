var animations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get getAnimations () { return getAnimations; }
});

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
