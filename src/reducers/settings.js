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
