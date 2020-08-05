const MARKDOWNVERSIONSHISTORY = 'markdownVersionsHistory';
const MARKDOWNTEXTLOGGER = 'markdownTextLogger';
const FOCUSMODE = 'focusMode';
const ULTRAFOCUSMODE = 'ultraFocusMode';


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

export const resetUltraFocusMode = () => {
    localStorage.removeItem(ULTRAFOCUSMODE);
}

export const resetLocalStorageSession = () => {
    resetmarkdownTextLogger();
    resetmarkdownVersionsHistory();
    resetFocusMode();
    resetUltraFocusMode();
}

export const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

export const closeFullscreen = () => {
    return new Promise((result, reject) => {
        if (document.exitFullscreen) {
            result(document.exitFullscreen());
        } else if (document.mozCancelFullScreen) { /* Firefox */
            result(document.mozCancelFullScreen());
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            result(document.webkitExitFullscreen());
        } else if (document.msExitFullscreen) { /* IE/Edge */
            result(document.msExitFullscreen());
        }
        else
            reject(console.log('helper - closeFullscreen: an error occured'))
    })

}


export const getLocalStorageUsedSpace = () => {
    let localStorageTotalByte = 0,
        xLen, x;

    for (x in localStorage) {
        if (!localStorage.hasOwnProperty(x)) {
            continue;
        }
        xLen = ((localStorage[x].length + x.length) * 2);
        localStorageTotalByte += xLen;
    };
    // (localStorageTotalByte / 1024).toFixed(2)
    return localStorageTotalByte;
}