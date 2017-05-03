import RNS from "react-native-sound";
const { MAIN_BUNDLE } = RNS;

const mocked = {
  play: () => {},
  stop: () => {},
  release: () => {}
};

export class Sound {
  constructor(name, soundsEnabled, onLoaded = () => {}) {
    this.params = {
      name: name,
      soundsEnabled: soundsEnabled,
      onLoaded: onLoaded
    };
    this.looped = false;
    this.sound = this.getSound();
  }

  getSound = () => {
    const { soundsEnabled, name, onLoaded } = this.params;
    return soundsEnabled
      ? new RNS(`${name}.mp3`, MAIN_BUNDLE, onLoaded)
      : mocked;
  };

  restart = () => {
    this.release();
    if (!this.looped) {
      this.sound = this.getSound();
    }
  };

  loop = () => {
    this.looped = true;
    this.sound.setNumberOfLoops(-1);
  };

  release = () => this.sound.release();

  play = () => this.sound.play(this.restart);

  stop = () => {
    this.sound.stop();
    this.sound.release();
  };

  fadeIn = (volume = 0, max = 0.5) => {
    this.sound.setVolume(volume);
    if (volume !== 1 && volume <= max) {
      setTimeout(() => {
        this.fadeIn(volume + 0.1, max);
      }, 100);
    }
  };
}
