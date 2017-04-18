import { connect } from "react-redux";
import { FullModalComponent } from "./component";

const stateToProps = state => {
  const message = state.FullModalReducer.fullMessages;
  return {
    component: message.length > 0 ? message[0] : null
  };
};

export const FullModalLayer = connect(stateToProps)(FullModalComponent);
