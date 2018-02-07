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

const ParseJson = data => {
  if (data instanceof Object === true) {
    return data;
  }
  try {
    return JSON.parse(data || '{}');
  } catch (e) {
    return {};
  }
}

export {
  Debounce,
  ParseJson
}
