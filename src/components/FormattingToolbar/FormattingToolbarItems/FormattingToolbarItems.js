import React from 'react'
import SvgIcon from '../../SvgIcon/SvgIcon'
import FormattingToolbarItem from '../FormattingToolbarItem/FormattingToolbarItem'

import { setH1 } from '../../../redux/actionsCreators/globalActions';
import { connect } from 'react-redux';
import { markdownFile } from '../../../redux/reducers/reducers';

const FormattingToolbarItems = ({
    editingStatus,
    focusMode,
    handleNewmarkdownContent,
    handleAddmarkdownContentToHistory,
    handleClearmarkdownContent,
    handleTextFormatting,
    handleInsertImage,
    ...props
}) => {

    console.log('FormattingToolbarItems - props', props)

    const toolbarItems = [
        {
            label: 'NEW',
            icon: <SvgIcon name={'NEW'} iconColor={'#006d77'} />,
            alt: 'New markdown content',
            disabled: (focusMode === false ? false : true) || false,
            eventHandler: handleNewmarkdownContent
        },
        {
            label: 'SAVE',
            icon: <SvgIcon name={'SAVE'} iconColor={'#006d77'} />,
            alt: 'Save a version of markdown text',
            disabled: (focusMode === false ? true : false) || (editingStatus === 'idle' ? true : false),
            eventHandler: handleAddmarkdownContentToHistory
        },
        {
            label: 'TIME MACHINE',
            icon: <SvgIcon name={'TIMEMACHINE'} iconColor={'#006d77'} />,
            alt: 'Get a version of markdown text',
            disabled: (focusMode === false ? true : false) || (editingStatus === 'idle' ? true : false),
            eventHandler: handleAddmarkdownContentToHistory
        },
        {
            label: 'CLEAR',
            icon: <SvgIcon name={'CLEAR'} iconColor={'#006d77'} />,
            alt: 'Remove markdown Content',
            disabled: (focusMode === false ? true : false) || (editingStatus === 'idle' ? true : false),
            eventHandler: handleClearmarkdownContent
        },
        {
            label: '',
            icon: <SvgIcon name={'SEPARATOR'} iconColor={'#006d77'} />,
            alt: 'separator',
            disabled: (focusMode === false ? true : false) || (editingStatus === 'idle' ? true : false),
        },
        {
            label: 'H1',
            icon: <SvgIcon name={'H1'} iconColor={'#006d77'} />,
            alt: 'H1',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => props.setH1({
                markdownText: props.markdownText,
                textSelection: props.textSelection
            })
        },
        {
            label: 'H2',
            icon: <SvgIcon name={'H2'} iconColor={'#006d77'} />,
            alt: 'H2',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H2')
        },
        {
            label: 'H3',
            icon: <SvgIcon name={'H3'} iconColor={'#006d77'} />,
            alt: 'H3',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H3')
        },
        {
            label: 'BOLD',
            icon: <SvgIcon name={'BOLD'} iconColor={'#006d77'} />,
            alt: 'Bold',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BOLD')
        },
        {
            label: 'ITALIC',
            icon: <SvgIcon name={'ITALIC'} iconColor={'#006d77'} />,
            alt: 'Italic',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('ITALIC')
        },
        {
            label: 'STRIKETROUGH',
            icon: <SvgIcon name={'STRIKETROUGH'} iconColor={'#006d77'} />,
            alt: 'Striketrough',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('STRIKETROUGH')
        },
        {
            label: 'CODE',
            icon: <SvgIcon name={'CODE'} iconColor={'#006d77'} />,
            alt: 'Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('CODE')
        },
        {
            label: 'BLOCKCODE',
            icon: <SvgIcon name={'CODE'} iconColor={'#006d77'} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BLOCKCODE')
        },
        {
            label: 'LINK',
            icon: <SvgIcon name={'LINK'} iconColor={'#006d77'} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LINK')
        },
        {
            label: 'LIST',
            icon: <SvgIcon name={'LIST'} iconColor={'#006d77'} />,
            alt: 'List',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LIST')
        },
        {
            label: 'NUMBERS',
            icon: <SvgIcon name={'NUMBERS'} iconColor={'#006d77'} />,
            alt: 'Numbers',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('NUMBERS')
        },
        {
            label: 'IMAGE',
            icon: <SvgIcon name={'IMAGE'} iconColor={'#006d77'} />,
            alt: 'Image',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleInsertImage
        },
        {
            label: 'TABLE',
            icon: <SvgIcon name={'TABLE'} iconColor={'#006d77'} />,
            alt: 'Table',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('TABLE')
        }
    ]

    const renderToolbarItems = toolbarItems.map((item, i) => {
        let toolbarItem = null;

        if (item.disabled === false) {
            toolbarItem = <FormattingToolbarItem
                key={i}

                label={item.label}
                icon={item.icon}
                disabled={item.disabled}
                eventHandler={item.eventHandler} />
        }

        return toolbarItem;
    })

    console.log('FormattingToolbarItems - renderToolbarItems', renderToolbarItems)

    return renderToolbarItems
}


const mapDispatch = dispatch => {
    return {
        setH1: (data) => dispatch(setH1(data))
    }

}

const mapState = state => {


    const { textSelection, markdownFile } = state;
    const { markdownText } = markdownFile;

    console.log('formattinToolbarItems - mapState - state', textSelection, markdownText)

    return {
        markdownText,
        textSelection
    }
}


//export default React.memo(FormattingToolbarItems);

export default connect(mapState, mapDispatch)(FormattingToolbarItems)

