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

  return (
    <div className="container">
      <NotesList />
    </div>
  );
};

export default App;
