import { checkPropTypes } from "prop-types";
import React, { Fragment } from "react";
import Button from "../../../Button/Button";
import Form from "../../../Form/Form";

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
          type="primary"
          eventHandler={() =>
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
        <Button type="secondary" eventHandler={() => closeFormToInsertImage()}>
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

/*


  setImage = () => {
    const { markdownText } = this.state;
    const { startSelection, endSelection } = this.state.textSelection;

    let textToFormat = [];
    textToFormat.push(...markdownText.split(""))
    let markdownTextPostFormatting = '';

    let imagemarkdownText = `![${this.state.markdownImageDescription}](${this.state.markdownImageURL})`;

    textToFormat.splice(endSelection, 0, "");
    textToFormat.splice(startSelection, 0, imagemarkdownText);
    markdownTextPostFormatting = textToFormat.join("");

    setmarkdownTextLog(markdownTextPostFormatting);

    this.setState(
      {
        markdownText: markdownTextPostFormatting,
        showFormInsertImage: false
      }
    )
  }
  
*/
