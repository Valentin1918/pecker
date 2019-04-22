export const pecker = {
  work: function (cb, delay, dieDelay, dieCb) {
    this.interval = setInterval(() => {
      try {
        const result = cb();
        if (result) this.clear();
      } catch (e) {
        console.log('Some error occurred: ', e);
    }}, delay);
    setTimeout(() => this.clear(dieCb), dieDelay);
  },
  clear: function (dieCb) {
    if (this.interval) clearInterval(this.interval);
    this.interval = null;
    if (typeof dieCb === 'function') dieCb();
  }
};
