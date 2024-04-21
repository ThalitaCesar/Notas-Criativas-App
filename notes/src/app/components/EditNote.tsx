"use client";
import React, { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { api } from '~/trpc/react';
import { Note } from '../types/Notes';

interface EditNoteProps {
    onClose: () => void;
    note: Note;
  }
  
  const EditNote: React.FC<EditNoteProps> = ({ onClose, note }) => {
    const [content, setContent] = useState(note.name);
  
    const updatePost = api.post.update.useMutation({
      onSuccess: () => {
        onClose(); 
        window.location.reload();
      },
    });
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updatePost.mutate({ id: note.id, name: content });
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-4 rounded-md relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 p-2 text-gray-600 hover:text-black"
          >
            <IoCloseCircleOutline size={24} />
          </button>
  
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center mt-10">
            <textarea
              placeholder="Edite sua nota..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={197}
              className="w-[270px] rounded-full px-4 py-2 text-black border-yellow-200 border-2 outline-none focus:border-yellow-300"
            />
            <button
              type="submit"
              className="rounded-full px-10 py-3 font-semibold transition bg-yellow-200 hover:bg-yellow-300"
              disabled={updatePost.isPending}
            >
              {updatePost.isPending ? 'Editando...' : 'Editar'}
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditNote;