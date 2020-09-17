import { checkPropTypes } from "prop-types";
import React, { Fragment } from "react";
import Button from "../../../Button/Button";
import Form from "../../../Form/Form";

import { connect } from "react-redux";

import { closeFormToCreateNewFile } from "../../../../redux/actionsCreators/textFormatting/textFormattingActions";

import { createNewMarkdownFile } from "../../../../redux/actionsCreators/globalActions";

import { setFileName } from "../../../../redux/actionsCreators/markdownStore/markdownStoreActions";

const FormNewFile = ({ ...props }) => {
  const {
    fileName,
    setFileName,
    createNewMarkdownFile,
    closeFormToCreateNewFile,
  } = props;

  return (
    <Fragment>
      <Form
        title={"NEW MARKDOWN FILE"}
        inputs={[
          {
            value: fileName,
            placeholder: "Give a unique name to your new file...",
            label: "File name",
            onChangeEventHandler: setFileName,
            required: true,
          },
        ]}
      >
        ,
        <Button
          type="primary"
          eventHandler={() => createNewMarkdownFile(fileName)}
          disabled={!fileName ? true : false}
        >
          OK
        </Button>
        <Button
          type="secondary"
          eventHandler={() => {
            closeFormToCreateNewFile();
          }}
        >
          CLOSE
        </Button>
      </Form>
    </Fragment>
  );
};

const mapState = (state) => {
  const { markdownStore } = state;
  const { fileName } = markdownStore;

  return {
    fileName,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setFileName: (e) => {
      dispatch(setFileName(e));
    },
    createNewMarkdownFile: (fileName) => {
      dispatch(createNewMarkdownFile(fileName));
    },
    closeFormToCreateNewFile: () => {
      dispatch(closeFormToCreateNewFile());
    },
  };
};

export default connect(mapState, mapDispatch)(FormNewFile);
