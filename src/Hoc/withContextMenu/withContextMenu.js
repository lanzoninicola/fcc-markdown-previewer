import React from 'react';
import './withContextMenu.css'
import ContextMenu from '../../components/ContextMenu/ContextMenu'

const withContextMenu = (
    ContextMenuContent,
    contextMenuConfig = {}
) => (WrappedComponent,
    wrappedComponentConfig = {}
) => {

        return (
            class withContextMenu extends React.PureComponent {
                constructor(props) {
                    super(props)

                    this.state = {
                        showContextMenu: false,
                        contextMenuConfig: {},
                        wrappedComponentConfig: {}
                    }
                }

                componentDidMount() {
                    this.setState({
                        ...this.state,
                        contextMenuConfig: {
                            ...contextMenuConfig
                        },
                        wrappedComponentConfig: {
                            ...wrappedComponentConfig
                        }
                    })
                }

                handleOpenContextMenu = () => {
                    this.setState({ showContextMenu: !this.state.showContextMenu })
                }

                render() {

                    const { showContextMenu, contextMenuConfig, wrappedComponentConfig } = this.state;

                    return (
                        <div id="wrapper-context-menu">
                            <WrappedComponent
                                handleOnClickEvent={this.handleOpenContextMenu}
                                showContextMenu={showContextMenu}
                                config={wrappedComponentConfig}
                                {...this.props} />
                            {showContextMenu &&
                                <ContextMenu
                                    config={contextMenuConfig}
                                    {...this.props}
                                >
                                    {(ContextMenuContent) &&
                                        <ContextMenuContent {...this.props} />}
                                </ContextMenu>}
                        </div>
                    )
                }
            }
        )

    }

export default withContextMenu;




