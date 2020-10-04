import React from "react";
import { GlobalLocalStorage } from "../../factories/localStorage/LocalStorage";

const withLocalStorageData = (WrappedComponent) => {
  return class withLocalStorageData extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        globalLocalStorage: new GlobalLocalStorage(),
        localStorageData: {
          spaceUsedInByte: 0,
          freeSpaceInByte: 0,
          freeSpaceInPercentage: "",
        },
        lastRefreshedDate: null,
      };
    }

    componentDidMount() {
      const { globalLocalStorage } = this.state;

      this.setState({
        ...this.state,
        localStorageData: {
          ...this.state.localStorageData,
          spaceUsedInByte: globalLocalStorage.getSpaceUsedInByte(),
          freeSpaceInByte: globalLocalStorage.getFreeSpaceInByte(),
          freeSpaceInPercentage: globalLocalStorage.getFreeSpaceInPercentage(),
        },
      });
    }

    loadData = () => {
      if (this.props.showContextMenu) {
        this.handleStorageData();
      }
    };

    handleStorageData = () => {
      const { globalLocalStorage } = this.state;

      this.setState({
        ...this.state,
        localStorageData: {
          ...this.state.localStorageData,
          spaceUsedInByte: globalLocalStorage.getSpaceUsedInByte(),
          freeSpaceInByte: globalLocalStorage.getFreeSpaceInByte(),
          freeSpaceInPercentage: globalLocalStorage.getFreeSpaceInPercentage(),
        },
        lastRefreshedDate: new Date(),
      });
    };

    render() {
      const { localStorageData, lastRefreshedDate } = this.state;

      let dateOfLastRefresh = null;

      if (lastRefreshedDate) {
        dateOfLastRefresh = `${lastRefreshedDate.toLocaleDateString()} ${lastRefreshedDate.toLocaleTimeString()}`;
      }

      return (
        <WrappedComponent
          handleStorageData={this.handleStorageData}
          data={localStorageData}
          lastRefreshedDate={dateOfLastRefresh}
          {...this.props}
        />
      );
    }
  };
};

export default withLocalStorageData;
