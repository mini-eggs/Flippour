import { connect } from "react-redux";
import { ScoresScene } from "../scenes/scores/";

function stateToProps(state) {
  return {
    title: "HIGHEST SCORE",
    subtitle: "RANKINGS",
    featured: state.FirebaseReducer.highScores[0],
    scores: state.FirebaseReducer.highScores
  };
}

export const HighScoresContainer = connect(stateToProps)(ScoresScene);
