import { connect } from "react-redux";
import { GameScene } from "../scenes/game/";

function mapStateToProps(state) {
  return {
    squares: state.GameReducer.squares,
    goal: state.GameReducer.goal,
    complete: state.GameReducer.complete,
    fail: state.GameReducer.fail
  };
}

export const GameContainer = connect(mapStateToProps)(GameScene);
