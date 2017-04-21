// @flow

type SaveType = {
  username: string,
  soundsEnabled: boolean,
  themeName: string
};

export function saveSettings(props: SaveType) {
  const { username, soundsEnabled } = props;
  return {
    type: "SAVE_SETTINGS",
    payload: {
      username: username,
      soundsEnabled: soundsEnabled,
      theme: props.themeName
    }
  };
}
