(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

TweenLite.defaultEase = Power2.easeInOut;

function start() {
    var lineWidth = 154;
    var lineHeight = 137;
    var tl = new TimelineMax();
    tl.set('.frame1', { opacity: 1 });

    tl.from(['.t1', '.logo'], .3, { opacity: 0 });

    tl.add('lines', '+=1');
    tl.from('.line.right', .6, { opacity: 0, x: '+=' + lineWidth, y: '+=' + lineHeight }, 'lines');
    tl.from('.line.left', .6, { opacity: 0, x: '-=' + lineWidth, y: '-=' + lineHeight }, 'lines');

    tl.from('.house', .3, { opacity: 0, ease: Sine.easeInOut }, 'lines+=.5');
    tl.from('.car', .3, { opacity: 0, scale: .6, ease: Sine.easeInOut }, 'lines+=.8');
    tl.from('.car', .6, { x: '-=30' });

    tl.add('f2', '+=2.5');
    tl.to('.t1', .3, { opacity: 0 }, 'f2');
    tl.to('.line.right', .6, { opacity: 0, x: '+=' + lineWidth, y: '+=' + lineHeight }, 'f2');
    tl.to('.line.left', .6, { opacity: 0, x: '-=' + lineWidth, y: '-=' + lineHeight }, 'f2');

    tl.set('.frame2', { opacity: 1 });
    tl.from('.t2', .3, { opacity: 0 });
    tl.from('.cta', .3, { opacity: 0 }, '+=.3');
}

var bannerbtn = document.getElementById('bannerbtn');
var cta = document.getElementById('cta');

bannerbtn.addEventListener('mouseover', function () {
    cta.style.backgroundColor = '#009657';
});

bannerbtn.addEventListener('mouseout', function () {
    cta.style.backgroundColor = '#383838';
});

start();

},{}]},{},[1])


//# sourceMappingURL=main.js.map
