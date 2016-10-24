import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

export const configureStore = (preloadedState = { notes: [] }) => (
  createStore(rootReducer, preloadedState)
);
