"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { IoCloseCircleOutline } from 'react-icons/io5';
import { api } from '~/trpc/react';
import type { Note } from '../types/Notes'; 

interface EditNoteProps {
  onClose: () => void;
  note: Note;
}

const EditNote: React.FC<EditNoteProps> = ({ onClose, note }) => {
  const [content, setContent] = useState(() => {
    const processedContent = note.name.replace(/<br>/g, '\n').replace(/<[^>]*>/g, '');
    return processedContent;
  });

  const router = useRouter();

  const updatePost = api.post.update.useMutation({
    onSuccess: () => {
      onClose();
      router.refresh();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedContent = content.replace(/\n/g, '<br>');
    updatePost.mutate({ id: note.id, name: formattedContent });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-600 p-4 rounded-md relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-gray-600 hover:text-black dark:text-white"
        >
          <IoCloseCircleOutline size={24} />
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center mt-10">
          <textarea
            placeholder="Edite sua nota..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={1000} // Defina um limite adequado de caracteres
            className="w-[270px] rounded-md px-4 py-2 text-black border-yellow-200 border-2 dark:bg-gray-600 dark:text-white outline-none resize-none focus:border-yellow-300"
         />
          <button
            type="submit"
            className="rounded-full px-10 py-3 font-semibold transition bg-yellow-200 hover:bg-yellow-300"
            disabled={updatePost.isPending}
          >
            {updatePost.isPending ? 'Editando...' : 'Salvar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
