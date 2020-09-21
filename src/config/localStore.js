import { Activation } from "./activation";

export const MARKDOWN_STORE_CONFIG = (key) => {
  const moduleName = "MARKDOWN_STORE";
  const storeName = "MARKDOWN_EDITOR_STORE";

  const configs = {
    name: () => {
      return storeName;
    },
  };

  if (Activation(moduleName).check()) {
    return configs;
  } else {
    Object.keys(configs).map((config) => {
      configs[config] = () => null;
    });
    Activation().error();
    return configs;
  }
};
