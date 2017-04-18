import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { FullModalActions } from "../../actions/";
import { GameOverComponent } from "./component";

export const GameOver = connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      back: () => {
        dispatch(FullModalActions.removeFullMessage());
        Actions.pop();
      }
    };
  }
)(GameOverComponent);
