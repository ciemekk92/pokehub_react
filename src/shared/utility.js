export const updateObject = (oldObject, updatedProperties) => {
   return {
      ...oldObject,
      ...updatedProperties
   };
};

export const capitalizeFirstLetter = string => {
   return string.charAt(0).toUpperCase() + string.slice(1);
};
