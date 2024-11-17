import { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';

export default function InputNotes() {
  const { addNote } = useContext(NotesContext);
  const [noteText, setNoteText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false); // Animation state

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
      setIsAnimating(true); // Trigger animation on save
    }
  };

  return (
    <div className="border rounded-xl  border-white card-glow flex bg-black flex-col justify-between p-2 w-full h-[200px]">
      <textarea
        className="w-full h-full p-2 focus:outline-none bg-black"
        placeholder="Type your notes here..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="flex justify-between mt-2 ">
        <small>Remaining: {200 - noteText.length}</small>
        <button
          className="btn btn-glow py-3 px-4 bg-primary bg-opacity-15 border border-primary text-white rounded-2xl transition-all duration-300 hover:scale-105"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}
