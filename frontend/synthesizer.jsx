import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';

import Note from "./util/note";


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById("root");

  ReactDOM.render(<h1>Synth</h1>, root);

  // for testing
  window.Note = Note;
  window.store = store;
});
