export const localStorageItem = (name) => {
  let itemName = name;
  let itemSize = 0;

  return {
    getValue: () => {
      let value = localStorage.getItem(itemName);
      return JSON.parse(value);
    },
    setValue: (value) => {
      if (value === undefined) {
        throw new Error(
          "Function expected a value parameter. Operation interrupted"
        );
      }

      if (typeof value === "object") {
        localStorage.setItem(itemName, JSON.stringify(value));
      } else {
        localStorage.setItem(itemName, value);
      }
    },
    reset: () => {
      localStorage.setItem(itemName, "");
    },
    remove: () => {
      localStorage.removeItem(itemName);
    },
    getSize: () => {
      let localStorageValue = localStorage.getItem(itemName);
      return localStorageValue.length * 2; // size in Byte
    },
    getLastVersionNumber: () => {},
  };
};

export class GlobalLocalStorage {
  constructor() {
    this.maxStorageSize = 5000000;
  }

  getSpaceUsedInByte() {
    let totalByte = 0,
      xLen,
      x;

    for (x in localStorage) {
      if (!localStorage.hasOwnProperty(x)) {
        continue;
      }
      xLen = (localStorage[x].length + x.length) * 2;
      totalByte += xLen;
    }
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
