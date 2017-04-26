const initialState = {
  theme: "Light",
  themeOptions: ["Dark", "Light", "Oceanic", "Solarized"],
  gameColors: {
    Dark: {
      red: "#B71C1C",
      blue: "#0D47A1",
      orange: "#E65100",
      green: "#1B5E20"
    },
    Light: {
      red: "#E53935",
      blue: "#1E88E5",
      orange: "#FB8C00",
      green: "#43A047"
    },
    Oceanic: {
      red: "#cc1a45",
      blue: "#66cce6",
      orange: "#ec7e46",
      green: "#007c57"
    },
    Solarized: {
      red: "#992e30",
      blue: "#007a8c",
      orange: "#cc7533",
      green: "#42765b"
    }
  },
  componentColors: {
    Dark: {
      highlight: "#63a098",
      background: "#1f1f1f",
      iosStatusbar: "light-content",
      titleFontColor: "#ffffff"
    },
    Light: {
      highlight: "#1E88E5",
      background: "#f1f1f1",
      iosStatusbar: "dark-content",
      titleFontColor: "#000000"
    },
    Oceanic: {
      highlight: "#9f80c5",
      background: "#1b2b34",
      iosStatusbar: "light-content",
      titleFontColor: "#ffffff"
    },
    Solarized: {
      highlight: "#70bbc2",
      background: "#33343d",
      iosStatusbar: "light-content",
      titleFontColor: "#ffffff"
    }
  },
  componentStyles: {
    Dark: {
      container: { backgroundColor: "#1f1f1f" },
      title: { color: "#696969" },
      button: { backgroundColor: "#63a098" },
      buttonText: { color: "rgba(0,0,0,0.35)", fontWeight: "500" },
      text: { color: "#696969" },
      modal: { backgroundColor: "#63a098" },
      modalText: { color: "#ffffff" }
    },
    Light: {
      container: { backgroundColor: "#f1f1f1" },
      title: { color: "#808080" },
      button: { backgroundColor: "#1E88E5" },
      buttonText: { color: "#ffffff" },
      text: { color: "#808080" },
      modal: { backgroundColor: "#e3e3e3" },
      modalText: { color: "#000000" }
    },
    Oceanic: {
      container: { backgroundColor: "#1b2b34" },
      title: { color: "#4ab3b3" },
      button: { backgroundColor: "#9f80c5" },
      buttonText: { color: "#ffffff" },
      text: { color: "#4ab3b3" },
      modal: { backgroundColor: "#9f90c5" },
      modalText: { color: "#ffffff" }
    },
    Solarized: {
      container: { backgroundColor: "#33343d" },
      title: { color: "#e1946b" },
      button: { backgroundColor: "#70bbc2" },
      buttonText: { color: "#ffffff" },
      text: { color: "#e1946b" },
      modal: { backgroundColor: "#70bbc2" },
      modalText: { color: "#ffffff" }
    }
  },
  username: "",
  soundsEnabled: false
};

export const SettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SETTINGS": {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
};
