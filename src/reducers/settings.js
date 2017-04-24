const initialState = {
  theme: "Light",
  themeOptions: ["Dark", "Light", "Oceanic", "Solarized"],
  gameColors: {
    Dark: {
      red: "red",
      blue: "blue",
      orange: "orange",
      green: "green"
    },
    Light: {
      red: "red",
      blue: "blue",
      orange: "orange",
      green: "green"
    },
    Oceanic: {
      red: "red",
      blue: "blue",
      orange: "orange",
      green: "green"
    },
    Solarized: {
      red: "red",
      blue: "blue",
      orange: "orange",
      green: "green"
    }
  },
  username: "",
  soundsEnabled: true
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
