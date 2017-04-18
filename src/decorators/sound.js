import React from "react";
import Sound from "react-native-sound";

export function SoundDecorator(soundNames) {
  const sounds = {};

  soundNames.forEach(name => {
    sounds[name] = new Sound(`${name}.mp3`, Sound.MAIN_BUNDLE, err => {
      if (err && __DEV__) {
        alert(`${name}.mp3 had trouble loading`);
      }
    });
  });

  return Comp => props => <Comp sounds={sounds} {...props} />;
}
