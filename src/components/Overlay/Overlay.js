import React from "react";
import FormNewFile from "../TextFormatting/components/FormNewFile/index";
import FormInsertImage from "../TextFormatting/components/FormInsertImage/index";
import FormInsertLink from "../TextFormatting/components/FormInsertLink/index";
import "./Overlay.css";

import { connect } from "react-redux";
import { getColorFromPalette } from "../../config/theme";

const Overlay = ({ ...props }) => {
  const { showFormInsertFile, showFormInsertImage, showFormInsertLink } = props;

  const backgroundColor = getColorFromPalette("primary-light");

  return (
    <div
      id="overlay"
      style={{
        display:
          showFormInsertFile || showFormInsertImage || showFormInsertLink
            ? null
            : "none",
        backgroundColor: backgroundColor,
      }}
    >
      {showFormInsertFile && <FormNewFile />}
      {showFormInsertImage && <FormInsertImage />}
      {showFormInsertLink && <FormInsertLink />}
    </div>
  );
};

const mapState = (state) => {
  const { markdownFile, markdownStore, markdownImage, markdownLink } = state;
  const { showFormInsertImage } = markdownImage;
  const { showFormInsertLink } = markdownLink;
  const { showFormInsertFile } = markdownStore;

  return {
    showFormInsertImage,
    showFormInsertLink,
    showFormInsertFile,
  };
};

export default connect(mapState)(Overlay);
