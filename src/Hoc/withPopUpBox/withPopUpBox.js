import React from "react";
import "./withPopUpBox.css";
import PopUpBox from "../../components/PopUpBox/PopUpBox";

const withPopUpBox = (PopUpContent, data = []) => (
  WrappedComponent
  //wrappedComponentConfig = {}
) => {
  return class withPopUpBox extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showPopUpBox: false,
        //PopUpBoxStyle: {},
        // wrappedComponentConfig: {},
      };
    }

    // componentDidMount() {
    //   this.setState({
    //     ...this.state,
    //     PopUpBoxStyle: {
    //       ...PopUpBoxStyle,
    //     },
    //     // wrappedComponentConfig: {
    //     //   ...wrappedComponentConfig,
    //     // },
    //   });
    // }

    handleOpenPopUpBox = () => {
      this.setState({ showPopUpBox: !this.state.showPopUpBox });
    };

    render() {
      const { showPopUpBox, wrappedComponentConfig } = this.state;

      return (
        <div id="wrapper-popup-box">
          <WrappedComponent
            handleOnClickEvent={this.handleOpenPopUpBox}
            showPopUpBox={showPopUpBox}
            //config={wrappedComponentConfig}
            data={data}
            {...this.props}
          />
          {showPopUpBox && (
            <PopUpBox {...this.props}>
              {PopUpContent && <PopUpContent {...this.props} />}
            </PopUpBox>
          )}
        </div>
      );
    }
  };
};

export default withPopUpBox;
