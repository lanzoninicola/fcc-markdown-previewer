import React from 'react';
import { GlobalLocalStorage } from '../helper/LocalStorage'


const withLocalStorageData = (WrappedComponent) => {

    return class extends React.Component {
        constructor() {
            super()

            this.state = {
                globalLocalStorage: new GlobalLocalStorage(),
                localStorageData: {
                    localStorageSpaceUsedInByte: 0,
                    localStorageFreeSpaceInByte: 0,
                    localStorageFreeSpaceInPercentage: 0
                }

            }
        }

        handleStorageData = () => {
            const { globalLocalStorage } = this.state;

            this.setState(
                {
                    ...this.state,
                    localStorageData: {
                        localStorageSpaceUsedInByte: globalLocalStorage.getSpaceUsedInByte(),
                        localStorageFreeSpaceInByte: globalLocalStorage.getFreeSpaceInByte(),
                        localStorageFreeSpaceInPercentage: globalLocalStorage.getFreeSpaceInPercentage()
                    },

                }
            )
        }

        render() {
            const {
                localStorageSpaceUsedInByte,
                localStorageFreeSpaceInByte,
                localStorageFreeSpaceInPercentage,
                localStorageData
            } = this.state;

            return (
                <WrappedComponent
                    handleData={this.handleStorageData}
                    data={localStorageData}
                    // spaceUsedInByte={localStorageSpaceUsedInByte}
                    // storageFreeSpaceInByte={localStorageFreeSpaceInByte}
                    // storageFreeSpaceInPercentage={localStorageFreeSpaceInPercentage}
                    {...this.props}
                />
            )
        }
    }

}

export default withLocalStorageData;