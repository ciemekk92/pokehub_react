export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeAllFirstLetters = string => {
    const splitString = string.toLowerCase().split(' ');
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] =
            splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
    return splitString.join(' ');
};

export const removeDashes = string => {
    return string.replace(/-/g, ' ');
};

export const romanize = number => {
    let base = {
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for (let i in base) {
        while (number >= base[i]) {
            roman += i;
            number -= base[i];
        }
    }
    return roman;
};
