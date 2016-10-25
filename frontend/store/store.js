import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

export const configureStore = (preLoadedState = {
  notes: ['a', 's'],
  isRecording: false,
  tracks: {
    "1": {
      id: 1,
      name: 'Track 1',
      roll:
      [
        { notes: [ 'A5' ], timeSlice: 1250191 },
        { notes: [], timeSlice: 1255000 },
        { notes: [ 'a', 's' ], timeSlice: 1265180 },
        { notes: [], timeSlice: 1279511 }
      ],
      timeStart: 1470164117527
    },
    
    "2": {
      id: 2,
      name: 'Track 2',
      roll:
      [
        { notes: [ 's', 'd', ';' ], timeSlice: 253386 },
        { notes: [], timeSlice: 265216 }
      ],
      timeStart: 1470173676236
    }
  }
}) => (
  createStore(rootReducer, preLoadedState)
);
