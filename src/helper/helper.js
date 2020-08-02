const markdownVERSIONSHISTORY = 'markdownVersionsHistory';
const markdownTEXTLOGGER = 'markdownTextLogger'


export const getmarkdownTextLogger = () => {
    const markdownTextLogger = localStorage.getItem(markdownTEXTLOGGER);
    return markdownTextLogger;
}

export const getmarkdownVersionsHistory = () => {
    const markdownVersionsHistory = localStorage.getItem(markdownVERSIONSHISTORY);
    const markdownVersionsHistoryParsed = JSON.parse(markdownVersionsHistory);
    return markdownVersionsHistoryParsed;
}

export const setmarkdownTextLogger = (data) => {
    localStorage.setItem(markdownTEXTLOGGER, data);
}

export const setmarkdownVersionsHistory = (data) => {
    localStorage.setItem(markdownVERSIONSHISTORY, JSON.stringify(data));
}

export const resetmarkdownTextLogger = () => {
    localStorage.removeItem(markdownTEXTLOGGER);
}

export const resetmarkdownVersionsHistory = () => {
    localStorage.removeItem(markdownVERSIONSHISTORY);
}

export const resetLocalStorageSession = () => {
    resetmarkdownTextLogger();
    resetmarkdownVersionsHistory();
}