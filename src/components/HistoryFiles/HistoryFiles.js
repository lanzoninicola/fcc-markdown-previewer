import React from "react";
import "./HistoryFiles.css";
import { connect } from "react-redux";

const HistoryFiles = () => {
  return (
    <div>
      Hello World<div>Hello World</div>
    </div>
  );
};

const mapState = (state) => {
  const { markdownFile } = state;
  const { fileHistory } = markdownFile;

  return {
    fileHistory,
  };
};

export default connect(mapState)(HistoryFiles);

/*
      [
  [
    '0',
    {
      content: 'lorem ipsum idioma',
      name: 'Version_10/09/2020',
      saved_at: ''
    }
  ],
  [
    '1',
    {
      content: 'lorem ipsum idioma addade',
      name: 'Version_10/09/2020',
      saved_at: ''
    }
  ]
]
      */
