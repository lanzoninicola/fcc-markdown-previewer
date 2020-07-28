import React from 'react'
import SvgIcons from '../ToolbarConfig/SvgIcons'

export const getToolbarConfig = ({
    editingStatus,
    handleNewMarkupContent,
    handleAddMarkupContentToHistory,
    handleClearMarkupContent,
    handleTextFormatting,
}) => {
    const toolbarItems = [
        {
            label: 'NEW',
            icon: <SvgIcons iconType={'NEW'} />,
            alt: 'New markup content',
            disabled: false,
            eventHandler: handleNewMarkupContent
        },
        {
            label: 'SNAPSHOT',
            icon: <SvgIcons iconType={'SNAPSHOT'} />,
            alt: 'Take a snapshot of markup text',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleAddMarkupContentToHistory
        },
        {
            label: 'CLEAR',
            icon: <SvgIcons iconType={'CLEAR'} />,
            alt: 'Remove Markup Content',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleClearMarkupContent
        },
        {
            label: '',
            icon: <SvgIcons iconType={'SEPARATOR'} />,
            alt: 'separator',
            disabled: editingStatus === 'idle' ? true : false
        },
        {
            label: 'H1',
            icon: <SvgIcons iconType={'H1'} />,
            alt: 'H1',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H1')
        },
        {
            label: 'H2',
            icon: <SvgIcons iconType={'H2'} />,
            alt: 'H2',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H2')
        },
        {
            label: 'H3',
            icon: <SvgIcons iconType={'H3'} />,
            alt: 'H3',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H3')
        },
        {
            label: 'BOLD',
            icon: <SvgIcons iconType={'BOLD'} />,
            alt: 'Bold',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BOLD')
        },
        {
            label: 'ITALIC',
            icon: <SvgIcons iconType={'ITALIC'} />,
            alt: 'Italic',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('ITALIC')
        },
        {
            label: 'STRIKETROUGH',
            icon: <SvgIcons iconType={'STRIKETROUGH'} />,
            alt: 'Striketrough',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('STRIKETROUGH')
        },
        {
            label: 'CODE',
            icon: <SvgIcons iconType={'CODE'} />,
            alt: 'Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('CODE')
        },
        {
            label: 'BLOCKCODE',
            icon: <SvgIcons iconType={'CODE'} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BLOCKCODE')
        },
        {
            label: 'LINK',
            icon: <SvgIcons iconType={'LINK'} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LINK')
        },
        {
            label: 'LIST',
            icon: <SvgIcons iconType={'LIST'} />,
            alt: 'List',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LIST')
        },
        {
            label: 'NUMBERS',
            icon: <SvgIcons iconType={'NUMBERS'} />,
            alt: 'Numbers',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('NUMBERS')
        },
        {
            label: 'IMAGE',
            icon: <SvgIcons iconType={'IMAGE'} />,
            alt: 'Image',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('IMAGE')
        },
        {
            label: 'TABLE',
            icon: <SvgIcons iconType={'TABLE'} />,
            alt: 'Table',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('TABLE')
        }
    ]

    return toolbarItems;

}


