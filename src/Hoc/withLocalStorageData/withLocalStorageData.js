import React from 'react';
import { GlobalLocalStorage } from '../../helper/LocalStorage'

const withLocalStorageData = (WrappedComponent) => {

    return (
        class withLocalStorageData extends React.PureComponent {
            constructor() {
                super()

                this.state = {
                    globalLocalStorage: new GlobalLocalStorage(),
                    localStorageData: {
                        localStorageSpaceUsedInByte: 0,
                        localStorageFreeSpaceInByte: 0,
                        localStorageFreeSpaceInPercentage: ''
                    }
                }
            }

            componentDidMount() {
                const { globalLocalStorage } = this.state;

                this.setState(
                    {
                        ...this.state,
                        localStorageData: {
                            ...this.state.localStorageData,
                            localStorageSpaceUsedInByte: globalLocalStorage.getSpaceUsedInByte(),
                            localStorageFreeSpaceInByte: globalLocalStorage.getFreeSpaceInByte(),
                            localStorageFreeSpaceInPercentage: globalLocalStorage.getFreeSpaceInPercentage()
                        },

                    }
                )

            }

            loadData = () => {
                if (this.props.showContextMenu) {
                    this.handleStorageData();
                }
            }

            handleStorageData = () => {
                const { globalLocalStorage } = this.state;

                this.setState(
                    {
                        ...this.state,
                        localStorageData: {
                            ...this.state.localStorageData,
                            localStorageSpaceUsedInByte: globalLocalStorage.getSpaceUsedInByte(),
                            localStorageFreeSpaceInByte: globalLocalStorage.getFreeSpaceInByte(),
                            localStorageFreeSpaceInPercentage: globalLocalStorage.getFreeSpaceInPercentage()
                        },

                    }
                )
            }

            render() {
                const {
                    localStorageData
                } = this.state;

                return (
                    <WrappedComponent
                        handleStorageData={this.handleStorageData}
                        data={localStorageData}
                        {...this.props}
                    />
                )
            }
        })

}

export default withLocalStorageData;