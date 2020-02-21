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
