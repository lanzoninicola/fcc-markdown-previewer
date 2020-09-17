import { checkPropTypes } from "prop-types";
import React, { Fragment } from "react";
import Button from "../../../Button/Button";
import Form from "../../../Form/Form";

import { connect } from "react-redux";

import {
  setURL,
  addingLink,
  closeFormToInsertLink,
} from "../../../../redux/actionsCreators/textFormatting/textFormattingActions";

const FormInsertLink = ({ ...props }) => {
  const { url, setURL, addingLink, closeFormToInsertLink, fileId } = props;

  return (
    <Fragment>
      <Form
        title={"ADD A LINK TO YOUR CONTENT"}
        inputs={[
          {
            value: url,
            placeholder: "Paste the URL",
            label: "URL",
            onChangeEventHandler: setURL,
            required: true,
          },
        ]}
      >
        ,
        <Button
          type="primary"
          eventHandler={() =>
            addingLink(
              fileId,
              {
                markdownText: props.markdownText,
                ...props.textSelection,
              },
              {
                url,
              }
            )
          }
          disabled={!url ? true : false}
        >
          OK
        </Button>
        <Button type="secondary" eventHandler={() => closeFormToInsertLink()}>
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

  const { markdownLink } = state;
  const { url } = markdownLink;

  return {
    url,
    textSelection,
    markdownText,
    fileId,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setURL: (e) => dispatch(setURL(e)),
    addingLink: (fileId, markdownData, linkData) =>
      dispatch(addingLink(fileId, markdownData, linkData)),
    closeFormToInsertLink: () => dispatch(closeFormToInsertLink()),
  };
};

export default connect(mapState, mapDispatch)(FormInsertLink);
