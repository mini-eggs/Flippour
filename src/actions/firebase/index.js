import { insertData, getData } from "./utilities";

export function saveGame(score, level) {
  const data = { score: score, level: level };
  const status = insertData("/games/", data);
  return status;
}

/**
 * Set the scores object
 * @param {*Object -> { recentScores: Array<Object> } OR { highScores: Array<Object> }} typeOfScoresObj 
 */
function setScores(typeOfScoresObj) {
  return {
    type: "FIREBASE_SET_SCORES",
    payload: typeOfScoresObj
  };
}

/**
 * Get the most recent scores from the current user
 * @param {*number} count 
 */
export function getRecentScores(count = 10) {
  return async dispatch => {
    try {
      const recentScores = await getData("games", count, { user: true });
      const data = { recentScores: recentScores };
      dispatch(setScores(data));
    } catch (err) {
      // console.log(err);
    }
  };
}

/**
 * Get the highest universal scores (leaderboard - from everyone)
 * @param {*number} count 
 */
export function getHighScores(count = 10) {
  return async dispatch => {
    try {
      const highScores = await getData("games", count, { high: true });
      const data = { highScores: highScores };
      dispatch(setScores(data));
    } catch (err) {
      // console.log(err);
    }
  };
}
