import { connect } from "react-redux";
import { ScoresScene } from "../scenes/scores/";

function stateToProps(state) {
  return {
    title: "RECENT SCORE",
    subtitle: "RECENT",
    featured: state.FirebaseReducer.recentScores[0],
    scores: state.FirebaseReducer.recentScores
  };
}

export const RecentContainer = connect(stateToProps)(ScoresScene);
