export const pecker = {
  work: function (cb, delay, dieDelay) {
    this.interval = setInterval(() => {
      try {
        const result = cb();
        if (result) this.clear();
      } catch (e) {
        console.log('Some error occurred: ', e);
    }}, delay);
    setTimeout(() => this.clear(), dieDelay);
  },
  clear: function () {
    if (this.interval) clearInterval(this.interval);
    this.interval = null;
  }
};
