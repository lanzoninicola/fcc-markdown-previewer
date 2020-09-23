function validate(fnName) {
  import(`../requirements/${fnName}.js`).then((module) => {});

  if (typeof fnName !== "string") {
    throw new Error(
      `validate: Parameter must be a string. Give the name of function and not the function itself. Eg. validate("function_name").`
    );
  }

  /***  input validation function ***/
  function validateInputs() {
    async function checkInputRequirements(...params) {
      const requirementsOf = await import(`../requirements/${fnName}.js`);

      if (!requirementsOf["input"]) {
        throw new Error(
          `validate: There is no requirements for ${fnName} inputs.`
        );
      }

      requirementsOf["input"](...params);
    }

    return {
      args: (...args) => checkInputRequirements(...args),
    };
  }

  /***  output validation function ***/
  function validateOutputs() {
    async function checkOutputRequirements(outputData) {
      const requirementsOf = await import(`../requirements/${fnName}.js`);

      if (!requirementsOf["output"]) {
        throw new Error(
          `validate: There is no requirements for ${fnName} inputs.`
        );
      }

      requirementsOf["output"](outputData);
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
