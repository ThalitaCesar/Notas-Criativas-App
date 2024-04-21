"use client";
import React from 'react';
import { CiEdit, CiTrash } from 'react-icons/ci';
import manImage from '../../assets/man.jpg';
import Image from 'next/image';
import { Note } from '../types/Notes';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (note: Note) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  const parts = note.name.split('<br>');

  const handleEditClick = () => {
    onEdit(note); 
  };

  const handleDeleteClick = () => {
    onDelete(note); 
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-4">
      <div className="bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-lg h-[260px] w-[250px] flex flex-col justify-between">
        <div className="p-4">
          {parts.map((part, index) => (
            <p key={index} style={{ wordWrap: 'break-word' }}>
              {part}
            </p>
          ))}
        </div>
        <div className="flex justify-between items-center px-4 pb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src={manImage} alt="User" className="rounded-full" priority />
          </div>
          <div className="flex">
            <button onClick={handleEditClick} className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mr-2">
              <CiEdit />
            </button>
            <button onClick={handleDeleteClick} className="flex items-center justify-center rounded-full w-10 h-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded">
              <CiTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;


