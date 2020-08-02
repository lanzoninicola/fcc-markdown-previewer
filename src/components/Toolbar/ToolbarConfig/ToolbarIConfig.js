import React from 'react'
import SvgIcons from '../ToolbarConfig/SvgIcons'

export const getToolbarConfig = ({
    screenWidth,
    editingStatus,
    handleNewmarkdownContent,
    handleAddmarkdownContentToHistory,
    handleClearmarkdownContent,
    handleTextFormatting,
    handleInsertImage
}) => {
    const toolbarItems = [
        {
            label: 'NEW',
            icon: <SvgIcons iconType={'NEW'} screenWidth={screenWidth} />,
            alt: 'New markdown content',
            disabled: false,
            eventHandler: handleNewmarkdownContent
        },
        {
            label: 'SNAPSHOT',
            icon: <SvgIcons iconType={'SNAPSHOT'} screenWidth={screenWidth} />,
            alt: 'Take a snapshot of markdown text',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleAddmarkdownContentToHistory
        },
        {
            label: 'CLEAR',
            icon: <SvgIcons iconType={'CLEAR'} screenWidth={screenWidth} />,
            alt: 'Remove markdown Content',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleClearmarkdownContent
        },
        {
            label: '',
            icon: <SvgIcons iconType={'SEPARATOR'} screenWidth={screenWidth} />,
            alt: 'separator',
            disabled: editingStatus === 'idle' ? true : false
        },
        {
            label: 'H1',
            icon: <SvgIcons iconType={'H1'} screenWidth={screenWidth} />,
            alt: 'H1',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H1')
        },
        {
            label: 'H2',
            icon: <SvgIcons iconType={'H2'} screenWidth={screenWidth} />,
            alt: 'H2',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H2')
        },
        {
            label: 'H3',
            icon: <SvgIcons iconType={'H3'} screenWidth={screenWidth} />,
            alt: 'H3',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H3')
        },
        {
            label: 'BOLD',
            icon: <SvgIcons iconType={'BOLD'} screenWidth={screenWidth} />,
            alt: 'Bold',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BOLD')
        },
        {
            label: 'ITALIC',
            icon: <SvgIcons iconType={'ITALIC'} screenWidth={screenWidth} />,
            alt: 'Italic',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('ITALIC')
        },
        {
            label: 'STRIKETROUGH',
            icon: <SvgIcons iconType={'STRIKETROUGH'} screenWidth={screenWidth} />,
            alt: 'Striketrough',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('STRIKETROUGH')
        },
        {
            label: 'CODE',
            icon: <SvgIcons iconType={'CODE'} screenWidth={screenWidth} />,
            alt: 'Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('CODE')
        },
        {
            label: 'BLOCKCODE',
            icon: <SvgIcons iconType={'CODE'} screenWidth={screenWidth} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BLOCKCODE')
        },
        {
            label: 'LINK',
            icon: <SvgIcons iconType={'LINK'} screenWidth={screenWidth} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LINK')
        },
        {
            label: 'LIST',
            icon: <SvgIcons iconType={'LIST'} screenWidth={screenWidth} />,
            alt: 'List',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LIST')
        },
        {
            label: 'NUMBERS',
            icon: <SvgIcons iconType={'NUMBERS'} screenWidth={screenWidth} />,
            alt: 'Numbers',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('NUMBERS')
        },
        {
            label: 'IMAGE',
            icon: <SvgIcons iconType={'IMAGE'} screenWidth={screenWidth} />,
            alt: 'Image',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleInsertImage
        },
        {
            label: 'TABLE',
            icon: <SvgIcons iconType={'TABLE'} screenWidth={screenWidth} />,
            alt: 'Table',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('TABLE')
        }
    ]

    return toolbarItems;

}


