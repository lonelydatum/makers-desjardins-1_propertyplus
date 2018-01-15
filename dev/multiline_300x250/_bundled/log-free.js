(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
TweenLite.defaultEase = Power2.easeInOut;

function start() {
    var f2Delay = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
    var heroGone = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    var line = {
        dom: document.getElementById('line1')
    };

    line.w = line.dom.offsetWidth;
    line.h = line.dom.offsetHeight;

    var tl = new TimelineMax();
    tl.set('.frame1', { opacity: 1 });

    tl.add('lines');
    tl.from('.line.right', .6, { clip: 'rect(0px,' + line.w + 'px,137px,' + line.w + 'px)', ease: Power2.easeOut }, 'lines');
    tl.from('.line.left', .6, { clip: 'rect(0px,' + 0 + 'px,137px,' + 0 + 'px)', ease: Power2.easeOut }, 'lines');
    tl.from('.house', .3, { opacity: 0, ease: Sine.easeInOut }, '-=.2');
    if (document.querySelector('.car')) {
        tl.from('.car', .3, { opacity: 0, scale: .6, ease: Sine.easeInOut });
        tl.from('.car', .6, { x: '-=30' });
    }

    tl.from('.t1', .3, { opacity: 0 }, '-=.1');

    tl.add('f2', '+=' + f2Delay);
    tl.to('.line.right', .4, { clip: 'rect(0px,' + line.w + 'px,137px,' + line.w + 'px)' }, 'f2');
    tl.to('.line.left', .4, { clip: 'rect(0px,' + 0 + 'px,137px,' + 0 + 'px)' }, 'f2');
    if (heroGone) {
        tl.to(['.house', '.car'], .4, { opacity: 0 }, 'f2');
    }

    tl.to('.t1', .3, { opacity: 0 }, 'f2+=.2');

    tl.set('.frame2', { opacity: 1 });
    tl.from('.t2', .3, { opacity: 0 });
    tl.from('.cta', .3, { opacity: 0 }, '+=.5');
}

var bannerbtn = document.getElementById('bannerbtn');
var cta = document.getElementById('cta');

bannerbtn.addEventListener('mouseover', function () {
    cta.style.backgroundColor = '#009657';
});

bannerbtn.addEventListener('mouseout', function () {
    cta.style.backgroundColor = '#383838';
});

exports['default'] = start;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsF1F2 = require('../../_common/js/F1F2');

var _commonJsF1F22 = _interopRequireDefault(_commonJsF1F2);

(0, _commonJsF1F22['default'])(2.5);

},{"../../_common/js/F1F2":1}]},{},[2])


//# sourceMappingURL=main.js.map
