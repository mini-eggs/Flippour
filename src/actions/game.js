export function squareClick(x, y) {
  return {
    type: "SQUARE_CLICK",
    payload: { x: x, y: y }
  };
}

export function nextLevel() {
  return {
    type: "NEXT_LEVEL"
  };
}

function setTimer(time) {
  return {
    type: "SET_TIMER",
    payload: { time: time }
  };
}

let timerInterval = false;
export function startTimer() {
  return (dispatch, getState) => {
    const { speed } = getState().GameReducer;
    function timer() {
      const { time } = getState().GameReducer;
      dispatch(setTimer(time - speed));
    }
    timerInterval = setInterval(timer, speed);
  };
}

export function stopTimer() {
  return dispatch => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  };
}

export function beginGame() {
  return {
    type: "BEGIN_GAME"
  };
}

export function forceGameOver() {
  stopTimer();
  return {
    type: "FORCE_GAME_OVER"
  };
}
