import React from 'react';
import $ from 'jquery';

import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import NoteKey from './note_key';

export default class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(key => new Note(TONES[key]));

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  render () {
    this.playNotes();

    const { notes } = this.props;
    const propFreqs = notes.map(note => (TONES[note]));

    const notesList = this.notes.map((note, idx) => {
      const freq = note.oscillatorNode.frequency.value.toFixed(2);
      let pressed = false;
      if (propFreqs.includes(Number(freq))) pressed = true;

      return (
        <li key={idx}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            className="synth-li">
              <NoteKey note={NOTE_NAMES[idx]} pressed={pressed} />
        </li>
      );
    });

    return (
      <section>
        <ul className="synth-ul">{notesList}</ul>
      </section>
    );
  }

  playNotes() {
    const { notes } = this.props;
    const propFreqs = notes.map(note => (TONES[note]));

    this.notes.forEach(note => {
      const freq = note.oscillatorNode.frequency.value.toFixed(2);

      return propFreqs.includes(Number(freq)) ? note.start() : note.stop();
    });
  }

  onKeyDown(event) {
    this.props.keyPressed(event.key);
  }

  onKeyUp(event) {
    this.props.keyReleased(event.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }
}
