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
    this.timeout = setTimeout(function () {
      return _this.clear(dieCb);
    }, dieDelay);
  },
  clear: function clear(dieCb) {
    if (this.interval) clearInterval(this.interval);
    if (this.timeout) clearTimeout(this.timeout);
    this.interval = null;
    this.timeout = null;
    if (typeof dieCb === 'function') dieCb();
  }
};
exports.pecker = pecker;