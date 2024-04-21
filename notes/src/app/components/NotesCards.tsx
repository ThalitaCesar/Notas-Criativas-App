'use client'
import React from 'react';
import type { Note } from '../types/Notes'; 
import NoteCard from './NoteCard';

interface NotesCardsProps {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (note: Note) => void;
}

const NotesCards: React.FC<NotesCardsProps> = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-10 mb-20">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} /> 
      ))}
    </div>
  );
};

export default NotesCards;