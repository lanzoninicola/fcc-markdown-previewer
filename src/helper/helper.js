const MARKUPVERSIONSHISTORY = 'markupVersionsHistory';
const MARKUPTEXTLOGGER = 'markupTextLogger'


export const getMarkupTextLogger = () => {
    const markupTextLogger = localStorage.getItem(MARKUPTEXTLOGGER);
    return markupTextLogger;
}

export const getMarkupVersionsHistory = () => {
    const markupVersionsHistory = localStorage.getItem(MARKUPVERSIONSHISTORY);
    const markupVersionsHistoryParsed = JSON.parse(markupVersionsHistory);
    return markupVersionsHistoryParsed;
}

export const setMarkupTextLogger = (data) => {
    localStorage.setItem(MARKUPTEXTLOGGER, data);
}

export const setMarkupVersionsHistory = (data) => {
    localStorage.setItem(MARKUPVERSIONSHISTORY, JSON.stringify(data));
}

export const resetMarkupTextLogger = () => {
    localStorage.removeItem(MARKUPTEXTLOGGER);
}

export const resetMarkupVersionsHistory = () => {
    localStorage.removeItem(MARKUPVERSIONSHISTORY);
}

export const resetLocalStorageSession = () => {
    resetMarkupTextLogger();
    resetMarkupVersionsHistory();
}