import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/tracks_actions';

const recordingReducer = (oldState = false, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default:
      return oldState;
  }
};

export default recordingReducer;
