'use client'
import React, { useState, useEffect } from 'react';
import NotesCards from '../components/NotesCards';
import EditNote from '../components/EditNote';
import DeleteNote from '../components/DeleteNote';
import { Note } from '../types/Notes';
import { CreateNote } from '../components/CreateNote';

interface HomePageProps {
  latestPostPromise: Promise<Note[] | null>; 
}

const HomePage: React.FC<HomePageProps> = ({ latestPostPromise }) => {
  const [latestPosts, setLatestPosts] = useState<Note[] | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [deleteNote, setDeleteNote] = useState<Note | null>(null);
  const [isCreateNoteModalOpen, setIsCreateNoteModalOpen] = useState(false); // Novo estado para controlar o modal CreateNote

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditNote(null);
    setDeleteNote(null);
    setIsCreateNoteModalOpen(false); // Fechar o modal CreateNote ao fechar o modal principal
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
    <div>
      <div className="flex justify-between align-center mt-10 mr-10 ml-10">
        <h1>Minhas Notas</h1>
        <button onClick={() => setIsCreateNoteModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Criar Nota
        </button>
      </div>

      <div className="flex justify-center">
        {latestPosts && latestPosts.length > 0 ? (
          <NotesCards notes={latestPosts} onEdit={handleEditNote} onDelete={handleDeleteNote} /> 
        ) : (
          <p>Você ainda não tem nenhuma nota.</p>
        )}
      </div>

      {/* Renderizar o modal CreateNote quando isCreateNoteModalOpen for true */}
      {isCreateNoteModalOpen && (
        <CreateNote onClose={() => setIsCreateNoteModalOpen(false)}/>
      )}

      {/* Renderizar o modal EditNote quando editNote existir e isModalOpen for true */}
      {isModalOpen && editNote && (
        <EditNote note={editNote} onClose={closeModal} />
      )}

      {/* Renderizar o modal DeleteNote quando deleteNote existir e isModalOpen for true */}
      {isModalOpen && deleteNote && (
        <DeleteNote note={deleteNote} onClose={closeModal} />
      )}
    </div>
  );
};

export default HomePage;