export const pecker = {
  work: function (cb, delay, dieDelay, dieCb) {
    this.interval = setInterval(() => {
      try {
        const result = cb();
        if (result) this.clear();
      } catch (e) {
        console.log('Some error occurred: ', e);
    }}, delay);
    this.timeout = setTimeout(() => this.clear(dieCb), dieDelay);
  },
  clear: function (dieCb) {
    if (this.interval) clearInterval(this.interval);
    if (this.timeout) clearTimeout(this.timeout);
    this.interval = null;
    this.timeout = null;
    if (typeof dieCb === 'function') dieCb();
  }
};
