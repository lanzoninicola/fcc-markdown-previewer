export class LocalStorageItem {
    constructor(name) {
        this.itemName = name;
        this.size = 0;
    }

    getValue() {
        localStorage.getItem(this.itemName)
    }

    setValue(value) {
        if (value === undefined) {
            throw new Error('Function expected a value parameter. Operation interrupted')
        }

        if (typeof (value) === 'object') {
            localStorage.setItem(this.itemName, JSON.stringify(value))
        } else {
            localStorage.setItem(this.itemName, value)
        }
    }

    reset() {
        localStorage.setItem(this.itemName, '')
    }

    remove() {
        localStorage.removeItem(this.itemName)
    }

    getSize() {
        let localStorageValue = localStorage.getItem(this.itemName);
        return localStorageValue.length * 2; // size in Byte
    }
}

export class GlobalLocalStorage {
    constructor() {
        this.maxStorageSize = 5000000;
    }

    getSpaceUsedInByte() {
        let totalByte = 0,
            xLen, x;

        for (x in localStorage) {
            if (!localStorage.hasOwnProperty(x)) {
                continue;
            }
            xLen = ((localStorage[x].length + x.length) * 2);
            totalByte += xLen;
        };
        // (localStorageTotalByte / 1024).toFixed(2)
        return totalByte;
    }

    getFreeSpaceInByte() {
        const spaceUseInByte = this.getSpaceUsedInByte();
        return this.maxStorageSize - spaceUseInByte;
    }

    getFreeSpaceInPercentage() {
        const freeSpaceInByte = this.getFreeSpaceInByte();
        const freeSpaceInPercentage = (freeSpaceInByte / this.maxStorageSize) * 100;

        return freeSpaceInPercentage.toFixed(3);
    }

}