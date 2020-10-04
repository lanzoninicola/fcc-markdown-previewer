const Debugger = function (gState, klass) {
  this.debug = {};
  if (!window.console) return function () {};
  if (gState && klass.isDebug) {
    for (let m in console)
      if (typeof console[m] == "function")
        this.debug[m] = console[m].bind(
          window.console,
          klass.toString() + ": "
        );
  } else {
    for (let m in console)
      if (typeof console[m] == "function") this.debug[m] = function () {};
  }
  return this.debug;
};

export default Debugger;
