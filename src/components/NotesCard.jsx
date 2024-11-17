import { useContext, useEffect, useState } from 'react';
import { NotesContext } from './NotesContext';
import { FaPen, FaTrash } from 'react-icons/fa';

const NotesCard = () => {
  const { notes, deleteNote, searchTerm, handleEdit, editingNote, handleSaveEdit, setEditingNote } = useContext(NotesContext);

  const [animatedNotes, setAnimatedNotes] = useState([]);
  const [deletingNote, setDeletingNote] = useState(null);

  const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    setAnimatedNotes(filteredNotes.map((note) => note.id));
  }, [notes]);

  return (
    <>
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className={`border rounded-xl bg-black card-glow border-white flex flex-col justify-between p-2 w-full h-[200px] transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform
            ${animatedNotes.includes(note.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            ${deletingNote === note.id ? 'opacity-0 scale-95' : ''}`}
        >
          {editingNote && editingNote.id === note.id ? (
            <textarea
              className="w-full h-full p-2 focus:outline-none"
              value={editingNote.text}
              onChange={(e) => setEditingNote({ ...editingNote, text: e.target.value })}
            />
          ) : (
            <textarea className="w-full h-full p-2 focus:outline-none bg-black" value={note.text} readOnly />
          )}

          <div className="flex justify-between mt-2">
            <small className="hidden">
              Remaining: {200 - (editingNote && editingNote.id === note.id ? editingNote.text.length : note.text.length)}
            </small>
            <div className="flex justify-between md:justify-end w-full space-x-2">
              <button
                className="btn btn-glow py-3 px-4 bg-primary bg-opacity-15 border border-primary text-white rounded-2xl transition-all duration-200 hover:scale-105"
                onClick={() => handleEdit(note.id, note.text)}
              >
                <FaPen />
              </button>

              <button
                className="btn btn-glow px-2 py-1 md:py-3 md:px-4 bg-primary bg-opacity-15 border border-primary text-white rounded-2xl transition-all duration-200 hover:scale-105"
                onClick={handleSaveEdit}
              >
                <span className="mr-2">Save</span>
              </button>

              <button
                className="btn btn-glow py-1 px-2 md:py-3 md:px-4 bg-primary bg-opacity-15 border border-primary text-white rounded-2xl transition-all duration-200 hover:scale-105 flex items-center"
                onClick={() => {
                  setDeletingNote(note.id);
                  setTimeout(() => deleteNote(note.id), 700);
                }}
              >
                <span className="mr-2">Delete</span>
                <FaTrash size={23} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotesCard;
