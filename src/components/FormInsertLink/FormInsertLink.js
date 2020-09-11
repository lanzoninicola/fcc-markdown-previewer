import { checkPropTypes } from "prop-types";
import React, { Fragment } from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";

import { connect } from "react-redux";

import {
  setURL,
  addingLink,
  closeFormToInsertLink,
} from "../../redux/actionsCreators/globalActions";

const FormInsertLink = ({ ...props }) => {
  const { url, setURL, addingLink, closeFormToInsertLink } = props;

  return (
    <Fragment>
      <Form
        title={"Insert the following information:"}
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
              {
                markdownText: props.markdownText,
                ...props.textSelection,
              },
              {
                url,
              }
            )
          }
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
  const { textSelection, markdownFile } = state;
  const { markdownText } = markdownFile;

  const { markdownLink } = state;
  const { url } = markdownLink;

  return {
    url,
    textSelection,
    markdownText,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setURL: (e) => dispatch(setURL(e)),
    addingLink: (markdownData, linkData) =>
      dispatch(addingLink(markdownData, linkData)),
    closeFormToInsertLink: () => dispatch(closeFormToInsertLink()),
  };
};

export default connect(mapState, mapDispatch)(FormInsertLink);
