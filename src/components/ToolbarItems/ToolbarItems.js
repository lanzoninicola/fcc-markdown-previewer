import React from 'react'
import SvgIcon from '../SvgIcon/SvgIcon'
import ToolbarItem from '../ToolbarItem/ToolbarItem'

const ToolbarItems = ({
    editingStatus,
    showBigToolbarOption,
    handleNewmarkdownContent,
    handleAddmarkdownContentToHistory,
    handleClearmarkdownContent,
    handleTextFormatting,
    handleInsertImage
}) => {

    let bigIcon = false;
    if (showBigToolbarOption) {
        bigIcon = true;
    }

    const toolbarItems = [
        {
            label: 'NEW',
            icon: <SvgIcon name={'NEW'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'New markdown content',
            disabled: false,
            eventHandler: handleNewmarkdownContent
        },
        {
            label: 'SNAPSHOT',
            icon: <SvgIcon name={'SNAPSHOT'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Take a snapshot of markdown text',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleAddmarkdownContentToHistory
        },
        {
            label: 'CLEAR',
            icon: <SvgIcon name={'CLEAR'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Remove markdown Content',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleClearmarkdownContent
        },
        {
            label: '',
            icon: <SvgIcon name={'SEPARATOR'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'separator',
            disabled: editingStatus === 'idle' ? true : false
        },
        {
            label: 'H1',
            icon: <SvgIcon name={'H1'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'H1',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H1')
        },
        {
            label: 'H2',
            icon: <SvgIcon name={'H2'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'H2',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H2')
        },
        {
            label: 'H3',
            icon: <SvgIcon name={'H3'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'H3',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H3')
        },
        {
            label: 'BOLD',
            icon: <SvgIcon name={'BOLD'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Bold',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BOLD')
        },
        {
            label: 'ITALIC',
            icon: <SvgIcon name={'ITALIC'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Italic',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('ITALIC')
        },
        {
            label: 'STRIKETROUGH',
            icon: <SvgIcon name={'STRIKETROUGH'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Striketrough',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('STRIKETROUGH')
        },
        {
            label: 'CODE',
            icon: <SvgIcon name={'CODE'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('CODE')
        },
        {
            label: 'BLOCKCODE',
            icon: <SvgIcon name={'CODE'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BLOCKCODE')
        },
        {
            label: 'LINK',
            icon: <SvgIcon name={'LINK'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LINK')
        },
        {
            label: 'LIST',
            icon: <SvgIcon name={'LIST'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'List',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LIST')
        },
        {
            label: 'NUMBERS',
            icon: <SvgIcon name={'NUMBERS'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Numbers',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('NUMBERS')
        },
        {
            label: 'IMAGE',
            icon: <SvgIcon name={'IMAGE'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Image',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleInsertImage
        },
        {
            label: 'TABLE',
            icon: <SvgIcon name={'TABLE'} color={'#ffffff'} bigIcon={bigIcon} />,
            alt: 'Table',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('TABLE')
        }
    ]

    const renderToolbarItems = toolbarItems.map((item, i) => {
        let toolbarItem = null;

        if (item.disabled === false) {
            toolbarItem = <ToolbarItem
                key={i}
                bigIcon={bigIcon}
                label={item.label}
                icon={item.icon}
                disabled={item.disabled}
                eventHandler={item.eventHandler} />
        }

        return toolbarItem;
    })

    return renderToolbarItems

}


export default ToolbarItems;
