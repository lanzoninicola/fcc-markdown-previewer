import React from 'react';
import { GlobalLocalStorage } from '../helper/LocalStorage'
import ContextMenu from '../components/ContextMenu/ContextMenu'


const withLocalStorageData = (WrappedComponent) => {

    return class extends React.PureComponent {
        constructor() {
            super()

            this.state = {
                showContextMenu: false,
                globalLocalStorage: new GlobalLocalStorage(),
                localStorageData: {
                    localStorageSpaceUsedInByte: 0,
                    localStorageFreeSpaceInByte: 0,
                    localStorageFreeSpaceInPercentage: 0
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
                    },

                }
            )

        }

        handleContextMenuAppearance = () => {
            this.setState({ showContextMenu: !this.state.showContextMenu }, this.loadData)
        }

        loadData = () => {
            if (this.state.showContextMenu) {
                this.handleStorageData();
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
                localStorageData,
                showContextMenu
            } = this.state;

            console.log('render', localStorageData)

            return (
                <WrappedComponent
                    handleData={this.handleStorageData}
                    handleClickEventHandler={this.handleContextMenuAppearance}
                    data={localStorageData.localStorageSpaceUsedInByte}
                    {...this.props}
                >
                    {showContextMenu &&
                        <ContextMenu spaceBetween={'large'} >
                            <p>{`Space Used ${localStorageData.localStorageSpaceUsedInByte}`}</p>
                            <p>{`Free Space In Percentage ${localStorageData.localStorageFreeSpaceInPercentage}`}</p>
                        </ContextMenu>}
                </WrappedComponent>
            )
        }
    }

}

export default withLocalStorageData;