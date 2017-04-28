// @flow

import { combineReducers } from "redux";
import { ModalReducer } from "./modal";
import { FullModalReducer } from "./fullModal";
import { GameReducer } from "./game";
import { FirebaseReducer } from "./firebase";
import { SettingsReducer } from "./settings";
import { ProductReducer } from "./product";

export const Reducers = combineReducers({
  ModalReducer,
  FullModalReducer,
  GameReducer,
  FirebaseReducer,
  SettingsReducer,
  ProductReducer
});
