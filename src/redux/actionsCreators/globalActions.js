import { setmarkdownTextLog } from '../../helper/helper';
import {
    MARKDOWN_TEXT_EDITOR_CHANGE,
    MARKDOWN_TEXT_SELECTION
} from '../actions/actions';


// Application Init
// 
//export const initEditor = () => {

// }

export const handleEditorChange = (e) => {

    setmarkdownTextLog(e.target.value);

    return {
        type: MARKDOWN_TEXT_EDITOR_CHANGE,
        payload: e.target.value
    }
}

export const handleTextSelection = (textAreaRef) => {

    console.log(textAreaRef)

    // let newTextSelection = {};

    // let startSelection = textAreaRef.current.selectionStart;
    // let endSelection = textAreaRef.current.selectionEnd;


    // newTextSelection.startSelection = startSelection;
    // newTextSelection.endSelection = endSelection;

    // return {
    //     type: MARKDOWN_TEXT_SELECTION,
    //     payload: newTextSelection
    // }
}


// handleTextSelection = () => {
//     const { textSelection, markdownText } = this.state;

//     let newTextSelection = { ...textSelection };

//     let startSelection = this.textAreaRef.current.selectionStart;
//     let endSelection = this.textAreaRef.current.selectionEnd;

//     if (markdownText[startSelection] === " ") { startSelection = startSelection + 1 }
//     if (markdownText[endSelection - 1] === " ") { endSelection = endSelection - 1 }

//     newTextSelection.startSelection = startSelection;
//     newTextSelection.endSelection = endSelection;

//     this.setState(
//         { textSelection: newTextSelection }
//     )
// }



