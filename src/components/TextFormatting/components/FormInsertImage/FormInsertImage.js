import { checkPropTypes } from "prop-types";
import React, { Fragment } from "react";
import Button from "../../../../design/atoms/Button/index";
import Form from "../../../../design/molecules/Form/Form";

import { connect } from "react-redux";
/* urra */
import {
  setImageDescription,
  setImageURL,
  addingImage,
  closeFormToInsertImage,
} from "../../../../redux/actionsCreators/textFormatting/textFormattingActions";

const FormInsertImage = ({ ...props }) => {
  const {
    url,
    description,
    setImageDescription,
    setImageURL,
    addingImage,
    closeFormToInsertImage,
    fileId,
  } = props;

  return (
    <Fragment>
      <Form
        title={"Insert the following information:"}
        inputs={[
          {
            value: description,
            placeholder: "Type a description",
            label: "Description",
            onChangeEventHandler: setImageDescription,
            required: true,
          },
          {
            value: url,
            placeholder: "Paste the image URL",
            label: "Image URL",
            onChangeEventHandler: setImageURL,
            required: true,
          },
        ]}
      >
        ,
        <Button
          color="primary"
          onClickEventHandler={() =>
            addingImage(
              fileId,
              {
                markdownText: props.markdownText,
                ...props.textSelection,
              },
              {
                url,
                description,
              }
            )
          }
        >
          OK
        </Button>
        <Button
          color="secondary"
          onClickEventHandler={() => closeFormToInsertImage()}
        >
          CLOSE
        </Button>
      </Form>
    </Fragment>
  );
};

const mapState = (state) => {
  const { textSelection, markdownFile, markdownStore } = state;
  const { markdownText } = markdownFile;
  const { fileId } = markdownStore;

  const { markdownImage } = state;
  const { url, description } = markdownImage;

  return {
    url,
    description,
    textSelection,
    markdownText,
    fileId,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setImageDescription: (e) => dispatch(setImageDescription(e)),
    setImageURL: (e) => dispatch(setImageURL(e)),
    addingImage: (fileId, markdownData, imageData) =>
      dispatch(addingImage(fileId, markdownData, imageData)),
    closeFormToInsertImage: () => dispatch(closeFormToInsertImage()),
  };
};

export default connect(mapState, mapDispatch)(FormInsertImage);
