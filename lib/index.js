"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pecker = void 0;
var pecker = {
  work: function work(cb, delay, dieDelay, dieCb) {
    var _this = this;

    this.interval = setInterval(function () {
      try {
        var result = cb();
        if (result) _this.clear();
      } catch (e) {
        console.log('Some error occurred: ', e);
      }
    }, delay);
    setTimeout(function () {
      return _this.clear(dieCb);
    }, dieDelay);
  },
  clear: function clear(dieCb) {
    if (this.interval) clearInterval(this.interval);
    this.interval = null;
    if (typeof dieCb === 'function') dieCb();
  }
};
exports.pecker = pecker;
