(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// import common from '../../_common/js/Simple'
// common()

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
TweenLite.defaultEase = Power2.easeInOut;

function start() {
    var tl = new TimelineMax();
    tl.set('.frame1', { opacity: 1 });
    tl.from('.line.left', .7, { clip: 'rect(0px,0px,133px,0px)', ease: Power2.easeOut });
    tl.from('.t1', .3, { opacity: 0 });
    tl.to('.t1', .3, { opacity: 0 }, '+=3');

    tl.from('.t2', .3, { opacity: 0 });
    tl.to('.t2', .3, { opacity: 0 }, '+=2');
    if (document.querySelector('.t3')) {
        tl.from('.t3', .3, { opacity: 0 });
        tl.to('.t3', .3, { opacity: 0 }, '+=2');
    }

    tl.to('.line', .3, { opacity: 0 });

    // tl.to(['.t3'], .3, {opacity:0})
    tl.set('.frame2', { opacity: 1 });
    tl.from(['.cta'], .3, { opacity: 0 }, '+=.2');
    tl.from(['.arrow'], .3, { opacity: 0 }, '+=.2');
}

exports['default'] = start;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsMobile = require('../../_common/js/Mobile');

var _commonJsMobile2 = _interopRequireDefault(_commonJsMobile);

(0, _commonJsMobile2['default'])();

},{"../../_common/js/Mobile":1}]},{},[2])


//# sourceMappingURL=main.js.map
