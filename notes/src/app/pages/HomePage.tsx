"use client";
import React, { useState, useEffect } from 'react';
import NotesCards from '../components/NotesCards';
import EditNote from '../components/EditNote';
import DeleteNote from '../components/DeleteNote';
import type { Note } from '../types/Notes'; 
import { CreateNote } from '../components/CreateNote';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

interface HomePageProps {
  latestPostPromise: Promise<Note[] | null>; 
}

const HomePage: React.FC<HomePageProps> = ({ latestPostPromise }) => {
  const [latestPosts, setLatestPosts] = useState<Note[] | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [deleteNote, setDeleteNote] = useState<Note | null>(null);
  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState(false); 

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await latestPostPromise; 
        if (Array.isArray(response)) {
          setLatestPosts(response); 
        } else {
          setLatestPosts(null); 
        }
      } catch (error) {
        console.error('Erro ao encontrar notas:', error);
        setLatestPosts(null); 
      }
    };

    fetchLatestPosts();
  }, [latestPostPromise]); 

  const closeModal = () => {
    setIsModalOpen(false);
    setEditNote(null);
    setDeleteNote(null);
    setIsCreateNoteModalOpen(false); 
  };

  const handleEditNote = (note: Note) => {
    setEditNote(note);
    setIsModalOpen(true);
  };

  const handleDeleteNote = (note: Note) => {
    setDeleteNote(note);
    setIsModalOpen(true);
  };

  return (
    <div className='bg-white dark:bg-gray-600'>
      <div className="flex justify-between items-center pt-10 mr-10 ml-10 ">
        <h1 className='text-center font-semibold text-gray-600 dark:text-white'>Nota Criativa</h1>
        <div className='flex  items-center'>
          <button onClick={() => setIsCreateNoteModalOpen(true)} className="bg-yellow-300 text-white px-4 py-2 rounded-md mr-2 xl:mr-10">
            Criar Nota
          </button>
          <DarkModeSwitch />
        </div>
      </div>

      <div className="flex justify-center">
        {latestPosts && latestPosts.length > 0 ? (
          <NotesCards notes={latestPosts} onEdit={handleEditNote} onDelete={handleDeleteNote} /> 
        ) : (
          <div className='h-[100vh] w-full flex justify-center items-center'>
          <p className=''>Você ainda não tem nenhuma nota.</p>
          </div>
        )}
      </div>

      {isCreateNoteModalOpen && (
        <CreateNote onClose={() => setIsCreateNoteModalOpen(false)}/>
      )}
      {isModalOpen && editNote && (
        <EditNote note={editNote} onClose={closeModal} />
      )}
      {isModalOpen && deleteNote && (
        <DeleteNote note={deleteNote} onClose={closeModal} />
      )}
    </div>
  );
};

export default HomePage;
