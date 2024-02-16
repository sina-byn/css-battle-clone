const debounce = (fn: Function, timeout = 300) => {
  let timerFlag: NodeJS.Timeout;

  return (...args: unknown[]) => {
    clearTimeout(timerFlag);

    timerFlag = setTimeout(() => fn(...args), timeout);
  };
};

export default debounce;
