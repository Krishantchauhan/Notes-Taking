import { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';

function Search() {
  const { setSearchTerm } = useContext(NotesContext);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setSearchTerm(value);
  };

  return (
    <div className="flex justify-center items-center py-7 mx-3 ">
      <input
        type="text"
        className="border w-1/2 px-4 py-3 rounded-xl focus:outline-none placeholder:text-xs card-glow duration-150"
        placeholder="Enter to search"
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
