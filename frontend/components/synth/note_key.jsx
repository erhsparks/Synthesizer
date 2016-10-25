import React from 'react';

const NoteKey = ({ note, pressed }) => (
  <article className={pressed}>
    {note}
  </article>
);

export default NoteKey;
