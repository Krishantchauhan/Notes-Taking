import { createContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app-data')) || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  const handleEdit = (id, text) => {
    setEditingNote({ id, text });
  };

  const handleSaveEdit = () => {
    if (editingNote && editingNote.text.trim() !== '') {
      setNotes((prevNotes) => prevNotes.map((note) => (note.id === editingNote.id ? { ...note, text: editingNote.text } : note)));
      setEditingNote(null); // Exit edit mode after saving
    }
  };

  const addNote = (text) => {
    if (editingNote) {
      handleSaveEdit(); // Save changes if in edit mode
    } else {
      const newNote = { id: nanoid(), text };
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, searchTerm, setSearchTerm, handleEdit, handleSaveEdit, editingNote, setEditingNote }}>
      {children}
    </NotesContext.Provider>
  );
};