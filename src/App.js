import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Note!",
      date: "19/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my Second Note!",
      date: "20/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my Third Note!",
      date: "21/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my Fourth Note!",
      date: "22/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my Fifth Note!",
      date: "23/07/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote]; //create new array insted of updating the old array;
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
