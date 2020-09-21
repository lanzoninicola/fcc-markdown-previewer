export const Activation = (module) => {
  let enabled = true;
  let appModule = module;
  return {
    error: () => console.log("Product is not activated"),
    check: (key) => {
      if (true) {
        enabled = true;
        return enabled;
      } else {
        enabled = false;
        return enabled;
      }
    },
  };
};
