import React, { Fragment } from "react";
import FormTitle from "../../../../design/atoms/FormTitle/index";
import TextInput from "../../../../design/atoms/TextInput/index";
import Form from "../../../../design/molecules/Form/Form";
import ButtonSecondary from "../../../../design/atoms/ButtonSecondary/index";
import ButtonPrimary from "../../../../design/atoms/ButtonPrimary/index";

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
      <Form>
        <FormTitle title={"NEW MARKDOWN FILE"} />
        <TextInput
          input={{
            value: fileName,
            placeholder: "Give a unique name to your new file...",
            label: "File name",
            onChangeEventHandler: setFileName,
            required: true,
          }}
        />
        <ButtonPrimary
          onClickEventHandler={() => createNewMarkdownFile(fileName)}
          disabled={!fileName ? true : false}
        >
          OK
        </ButtonPrimary>
        <ButtonSecondary
          onClickEventHandler={() => {
            closeFormToCreateNewFile();
          }}
        >
          CLOSE
        </ButtonSecondary>
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
