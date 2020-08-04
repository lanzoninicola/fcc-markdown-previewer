const MARKDOWNVERSIONSHISTORY = 'markdownVersionsHistory';
const MARKDOWNTEXTLOGGER = 'markdownTextLogger';
const FOCUSMODE = 'focusMode';


export const getmarkdownTextLogger = () => {
    const markdownTextLogger = localStorage.getItem(MARKDOWNTEXTLOGGER);
    return markdownTextLogger;
}

export const getmarkdownVersionsHistory = () => {
    const markdownVersionsHistory = localStorage.getItem(MARKDOWNVERSIONSHISTORY);
    const markdownVersionsHistoryParsed = JSON.parse(markdownVersionsHistory);
    return markdownVersionsHistoryParsed;
}

export const setmarkdownTextLogger = (data) => {
    localStorage.setItem(MARKDOWNTEXTLOGGER, data);
}

export const setmarkdownVersionsHistory = (data) => {
    localStorage.setItem(MARKDOWNVERSIONSHISTORY, JSON.stringify(data));
}

export const resetmarkdownTextLogger = () => {
    localStorage.removeItem(MARKDOWNTEXTLOGGER);
}

export const resetmarkdownVersionsHistory = () => {
    localStorage.removeItem(MARKDOWNVERSIONSHISTORY);
}

export const resetFocusMode = () => {
    localStorage.removeItem(FOCUSMODE);
}

export const resetLocalStorageSession = () => {
    resetmarkdownTextLogger();
    resetmarkdownVersionsHistory();
    resetFocusMode();
}