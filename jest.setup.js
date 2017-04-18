/**
 * For native modules
 */
jest.mock("Linking", () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn()
  };
});

/**
 * For Firebase addEventListener
 */
global.addEventListener = jest.fn();
global.attachEvent = jest.fn();

/**
 * Turn of console.warn for useNativeDriver
 */
console.warn = jest.fn();
