const Debounce = (fn, wait, immediate) => {
  let timeout;
  return (e) => {
    let later = function() {
      timeout = null;
      if (immediate !== true) {
        fn(e);
      }
    };
    if (immediate === true && !timeout) {
      fn(e);
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}

export {
  Debounce
}
