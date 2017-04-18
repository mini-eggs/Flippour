export const setMessage = message => {
  return {
    type: "ADD_MESSAGE",
    payload: message
  };
};

export const removeMessage = () => {
  return {
    type: "REMOVE_MESSAGE"
  };
};
