import React from "react";
import PropTypes from "prop-types";
import "./DotChart.css";
import SvgIcon from "../../atoms/SvgIcon/index";

import appTheme from "../../UI/index";

// const cssFlexColumnCenter = () => {
//   return {
//     flexColumnCenter: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   };
// };

const Container = (props) => {
  const css = {
    p: {
      marginTop: "100px",
      color: "red",
    },
    // flexColumnCenter: {
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   backgroundColor: "red", //color("primary", "main"),
    //   _hover: {
    //     // backgroundColor: color("secondary"),
    //   },
    // },
    // relative: {
    //   position: "relative",
    // },
  };

  return appTheme.style(css, props);
};

/*

<Container></Container>

*/

// const cssRelative = () => {
//   const relative = appTheme.style({
//     relative: { position: "relative" },
//   });

//   console.log("cssRelative()", relative);

//   return relative;
// };

// const cssDotSize = (props) => {
//   const { size } = props;

//   return {
//     dotChartItem: {
//       width:
//         size === "small"
//           ? "15px"
//           : size === "medium"
//           ? "30px"
//           : size === "large"
//           ? "60px"
//           : 0,
//       height:
//         size === "small"
//           ? "15px"
//           : size === "medium"
//           ? "30px"
//           : size === "large"
//           ? "60px"
//           : 0,
//       marginLeft:
//         size === "small"
//           ? "3px"
//           : size === "medium"
//           ? "6px"
//           : size === "large"
//           ? "12px"
//           : 0,
//     },
//   };
// };

// USING PROPS // IF ELSE(lo puoi usare dentro la funzione che gestisce la css class)

const DotChart = ({ title, data, size, ...props }) => {
  let graphTitle = title ? title.toUpperCase() : DotChart.defaultProps.title;

  // const { flexColumnCenter, relative, dotSize } = appTheme.style([
  //   cssFlexColumnCenter,
  //   cssRelative,
  //   (size) => cssDotSize(size),
  // ]);

  // console.log("dotChart", StyleSheet);

  console.log(<Container />);

  return (
    //    <div id="dotchart" className={"relative flex-column-center"}>
    // <div id="dotchart" className={`foo  ${relative} ${flexColumnCenter}`}>
    // <div id="dotchart">

    <Container htag="p" className={"foo"}>
      <p id="dotchart-title">{graphTitle}</p>

      {/* provare a colorare input tag da div select-input
      <div class="Select-input">
        <input type="text" name="style-me" />
      </div> */}

      <div id="dotchart-bar" className={"flex-row-center"}>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 0 ? "rgb(72, 235, 211)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 1000000 ? "rgb(34, 193, 195)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 3000000 ? "rgb(34, 193, 195)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 3500000 ? "rgb(252, 176, 69)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 4000000 ? "rgb(253, 29, 29)" : null}
          />
        </span>
        <span className={`dotchart-item-${size}`}>
          <SvgIcon
            name={"filledcircle"}
            color={data > 4300000 ? "rgb(131, 58, 180)" : null}
          />
        </span>
      </div>
    </Container>
  );
};

export default DotChart;

DotChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.number,
  handleClickEventHandler: PropTypes.func,
};

DotChart.defaultProps = {
  title: "DOT GRAPH",
  data: 0,
};

// }= ({ title, data }) => {

/*

StyleSheet {options: {…}, deployed: true, attached: true, rules: RuleList, renderer: DomRenderer, …}
attached: true
class: {flexColumnCenter: "flexColumnCenter-0-1-1", relative: "relative-0-1-2"}
deployed: true
keyframes: {}
options: {jss: Jss, insertionPoint: undefined, index: 0, generateId: ƒ, Renderer: ƒ, …}
queue: undefined
renderer: DomRenderer {element: style, getPropertyValue: ƒ, setProperty: ƒ, removeProperty: ƒ, setSelector: ƒ, …}
rules: RuleList {map: {…}, raw: {…}, index: Array(2), counter: 0, options: {…}, …}
__proto__: Object
*/
