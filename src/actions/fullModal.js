export const setFullMessage = fullMessage => {
  return {
    type: "ADD_FULL_MESSAGE",
    payload: fullMessage
  };
};

export const removeFullMessage = () => {
  return {
    type: "REMOVE_FULL_MESSAGE"
  };
};
