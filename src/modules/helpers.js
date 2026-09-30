export const debounce = (foo, ms = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      foo.apply(this, args);
    }, ms);
  };
};
