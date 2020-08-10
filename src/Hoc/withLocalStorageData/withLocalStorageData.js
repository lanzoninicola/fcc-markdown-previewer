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
                    },
                    lastRefreshedDate: null
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
                        lastRefreshedDate: new Date()
                    }
                )
            }

            render() {
                const {
                    localStorageData,
                    lastRefreshedDate
                } = this.state;

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
                )
            }
        })

}

export default withLocalStorageData;