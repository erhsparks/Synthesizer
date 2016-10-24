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

  if (!noteValid(action.key)) return oldState;

  switch (action.type) {
    case KEY_PRESSED:
      return union(oldState, action.key);
    case KEY_RELEASED:
      let newState = merge([], oldState);
      return releaseKey(newState, action.key);
    default:
      return oldState;
  }
};

export default notesReducer;
