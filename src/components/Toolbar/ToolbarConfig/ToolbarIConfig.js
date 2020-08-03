import React from 'react'
import SvgIconController from '../../../containers/SvgIconController/SvgIconController'

export const getToolbarConfig = ({
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
            icon: <SvgIconController name={'NEW'} color={'#ffffff'} />,
            alt: 'New markdown content',
            disabled: false,
            eventHandler: handleNewmarkdownContent
        },
        {
            label: 'SNAPSHOT',
            icon: <SvgIconController name={'SNAPSHOT'} color={'#ffffff'} />,
            alt: 'Take a snapshot of markdown text',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleAddmarkdownContentToHistory
        },
        {
            label: 'CLEAR',
            icon: <SvgIconController name={'CLEAR'} color={'#ffffff'} />,
            alt: 'Remove markdown Content',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleClearmarkdownContent
        },
        {
            label: '',
            icon: <SvgIconController name={'SEPARATOR'} color={'#ffffff'} />,
            alt: 'separator',
            disabled: editingStatus === 'idle' ? true : false
        },
        {
            label: 'H1',
            icon: <SvgIconController name={'H1'} color={'#ffffff'} />,
            alt: 'H1',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H1')
        },
        {
            label: 'H2',
            icon: <SvgIconController name={'H2'} color={'#ffffff'} />,
            alt: 'H2',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H2')
        },
        {
            label: 'H3',
            icon: <SvgIconController name={'H3'} color={'#ffffff'} />,
            alt: 'H3',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('H3')
        },
        {
            label: 'BOLD',
            icon: <SvgIconController name={'BOLD'} color={'#ffffff'} />,
            alt: 'Bold',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BOLD')
        },
        {
            label: 'ITALIC',
            icon: <SvgIconController name={'ITALIC'} color={'#ffffff'} />,
            alt: 'Italic',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('ITALIC')
        },
        {
            label: 'STRIKETROUGH',
            icon: <SvgIconController name={'STRIKETROUGH'} color={'#ffffff'} />,
            alt: 'Striketrough',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('STRIKETROUGH')
        },
        {
            label: 'CODE',
            icon: <SvgIconController name={'CODE'} color={'#ffffff'} />,
            alt: 'Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('CODE')
        },
        {
            label: 'BLOCKCODE',
            icon: <SvgIconController name={'CODE'} color={'#ffffff'} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('BLOCKCODE')
        },
        {
            label: 'LINK',
            icon: <SvgIconController name={'LINK'} color={'#ffffff'} />,
            alt: 'Block Code',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LINK')
        },
        {
            label: 'LIST',
            icon: <SvgIconController name={'LIST'} color={'#ffffff'} />,
            alt: 'List',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('LIST')
        },
        {
            label: 'NUMBERS',
            icon: <SvgIconController name={'NUMBERS'} color={'#ffffff'} />,
            alt: 'Numbers',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('NUMBERS')
        },
        {
            label: 'IMAGE',
            icon: <SvgIconController name={'IMAGE'} color={'#ffffff'} />,
            alt: 'Image',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleInsertImage
        },
        {
            label: 'TABLE',
            icon: <SvgIconController name={'TABLE'} color={'#ffffff'} />,
            alt: 'Table',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: () => handleTextFormatting('TABLE')
        }
    ]

    return toolbarItems;

}


