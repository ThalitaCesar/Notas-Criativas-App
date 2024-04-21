"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import { IoCloseCircleOutline } from 'react-icons/io5';
import { api } from '~/trpc/react';
import { Note } from '../types/Notes';

interface DeletePostProps {
  onClose: () => void;
  note: Note;
}

const DeletePost: React.FC<DeletePostProps> = ({ onClose, note }) => {
   const router = useRouter();

  const deletePost = api.post.remove.useMutation({
    onSuccess: () => {
      onClose();
      router.refresh();
    },
  });

  const handleDelete = () => {
    deletePost.mutate({ id: note.id });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-600 p-4 rounded-md relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-gray-600 dark:text-white hover:text-black"
        >
          <IoCloseCircleOutline size={24} />
        </button>

        <div className="p-4 text-center  dark:text-white">
          <p>Tem certeza que deseja apagar o post?</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleDelete}
            className="rounded-full px-10 py-3 font-semibold transition bg-blue-500 hover:bg-blue-700 text-white mr-2"
          >
            Sim
          </button>
          <button
            onClick={onClose}
            className="rounded-full px-10 py-3 font-semibold transition bg-red-500 hover:bg-red-700 text-white"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePost;
