import React from 'react';
import ReactDOM from 'react-dom';

import Note from "./util/note";

const root = document.getElementById("root");
window.Note = Note;

addEventListener('DOMContentLoaded', () => (
  ReactDOM.render(<Synth />, root)
));
