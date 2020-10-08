/**
 * Thanks to Facebook, Inc. and its affiliates for part of this code
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory Facebook React's source tree.
 */

const uppercasePattern = /([A-Z])/g;
const msPattern = /^ms-/;

export default function hyphenateStyleName(name) {
  if (typeof name !== "string") {
    throw new Error(
      `Styling property must be a string and not a "${typeof name}"`
    );
  }

  return name
    .replace(uppercasePattern, "-$1")
    .toLowerCase()
    .replace(msPattern, "-ms-");
}

/**
 *
 * See also this link to build warnings message
 * https://github.com/facebook/react/blob/0cf22a56a18790ef34c71bef14f64695c0498619/packages/react-dom/src/shared/warnValidStyle.js
 *
 */
