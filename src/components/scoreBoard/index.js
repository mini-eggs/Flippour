import { connect } from "react-redux";
import { ScoreBoardComponent } from "./component";
import { GameActions } from "../../actions/";

export const ScoreBoard = connect(
  state => {
    return {
      time: state.GameReducer.time,
      score: state.GameReducer.score,
      fail: state.GameReducer.fail,
      level: state.GameReducer.level
    };
  },
  dispatch => {
    return {
      startTimer: () => dispatch(GameActions.startTimer()),
      stopTimer: () => dispatch(GameActions.stopTimer())
    };
  }
)(ScoreBoardComponent);
