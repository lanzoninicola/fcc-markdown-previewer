import catalog from "./catalog";

import { input as createThemeInput } from "./requirements/createTheme";
import { output as colorPalettesOutput } from "./requirements/colorPalettes";
import {
  input as componentColorPalettesInput,
  output as componentColorPalettesOutput,
} from "./requirements/componentsColorPalettes";

function buildCatalog(catalog) {
  let validationCatalog = { input: {}, output: {} };

  //new Function('a', 'b', 'return a + b');

  catalog.forEach((item) => {
    validationCatalog = {
      ...validationCatalog,
      input: {
        ...input,
        [item]: (args) => [item](args),
      },
    };
  });

  console.log(catalog);
}

/*
return {
  input: {
    createTheme: (args) => createThemeInput(args),
    componentsColorPalettes: (args) => componentColorPalettesInput(args),
    getGlobalPalette: (args) => getGlobalPalette(args),
  },
  output: {
    createTheme: () => createThemeOutput(),
    colorPalettes: (outputData) => colorPalettesOutput(outputData),
    componentsColorPalettes: (outputData) =>
      componentColorPalettesOutput(outputData),
  },
};
*/

function validate(fnName) {
  const catalog = catalog();

  if (
    catalog["input"][fnName] === undefined &&
    catalog["output"][fnName] === undefined
  ) {
    throw new Error(
      `validate: Function ${fnName} does not exist in the catalog.`
    );
  }

  if (typeof fnName !== "string") {
    throw new Error(
      `validate: Parameter must be a string. Give the name of function and not the function itself. Eg. validate("function_name").`
    );
  }

  /***  input validation function ***/
  function validateInputs() {
    function checkInputRequirements(args) {
      catalog["input"][fnName](args);
    }

    return {
      args: (args) => checkInputRequirements(args),
    };
  }

  /***  output validation function ***/
  function validateOutputs() {
    function checkOutputRequirements(outputData) {
      catalog["output"][fnName](outputData);
    }

    return {
      currentOutput: (outputData) => checkOutputRequirements(outputData),
    };
  }

  return {
    input: () => validateInputs(),
    output: () => validateOutputs(),
  };
}

export default validate;
