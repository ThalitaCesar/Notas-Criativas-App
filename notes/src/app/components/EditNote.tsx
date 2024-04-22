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
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const maxChars = 392;
  const remainingChars = maxChars - content.length;

  const updatePost = api.post.update.useMutation({
    onSuccess: () => {
      onClose();
      router.refresh();
    },
    onError: (error) => {
        alert('Erro. Não foi possível editar essa nota. Tente novamente.');
        console.log(error)
      },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) {
      setError('Por favor, insira algum conteúdo na nota.');
      return;
    }
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
            maxLength={392} 
            className="w-[270px] rounded-md px-4 py-2 text-black border-yellow-200 border-2 dark:bg-gray-600 dark:text-white outline-none resize-none focus:border-yellow-300"
         />
         <p className="text-sm text-gray-400 text-end">[{remainingChars}]</p>
          {error && <p className="text-red-500 dark:text-red-300  text-sm p-2">{error}</p>}
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
