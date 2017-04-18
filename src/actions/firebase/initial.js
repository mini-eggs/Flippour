import * as Firebase from "firebase";
import { getUniqueID } from "react-native-device-info";
import { FIREBASE_API_KEY, FIREBASE_DATABASE_URL } from "../../keys/";

Firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  databaseURL: FIREBASE_DATABASE_URL
});

Firebase.database();

export { Firebase };

function getUser() {
  try {
    return getUniqueID();
  } catch (err) {
    // this is for jest testing
    return 99;
  }
}

export const User = getUser();
