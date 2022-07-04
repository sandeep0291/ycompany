export const debounce = function (callback, delay) {
    let timeout;
    return function () {
      let that = this;
      let args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback.apply(that, args);
      }, delay);
    };
  };