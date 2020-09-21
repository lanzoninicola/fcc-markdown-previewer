import validateColorsPalette from "../validation/validateColorsPalette";
import validateComponentColorsPalette from "../validation/validateComponentColorsPalette";

function ValidationInputOf() {
  return {
    colorsPalette: (colorsPalette) => validateColorsPalette(colorsPalette),
    componentColorsPalette: (componentsColorsPalette) =>
      validateComponentColorsPalette(componentsColorsPalette),
  };
}

export default ValidationInputOf;
