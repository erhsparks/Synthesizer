import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';
import union from 'lodash/union';
import merge from 'lodash/merge';

const _defaultState = [];

const releaseKey = (notes, key) => {
  if (notes.includes(key)) {
    let idx = notes.indexOf(key);
    notes.splice(idx, 1);
  }

  return notes;
};

const noteValid = key => (
  NOTE_NAMES.includes(key)
);

const notesReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState;

  if (!noteValid(action.key)) return oldState;
  
  switch (action.type) {
    case KEY_PRESSED:
      newState = union(oldState, [action.key]);
      return newState;
    case KEY_RELEASED:
      newState = merge([], oldState);
      newState = releaseKey(newState, action.key);
      return newState;
    default:
      return oldState;
  }
};

export default notesReducer;
