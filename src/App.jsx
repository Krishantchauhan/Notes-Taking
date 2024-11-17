import Header from './components/Header';
import Search from './components/Search';
import InputNotes from './components/InputNotes';
import { NotesProvider } from './components/NotesContext';
import NotesCard from './components/NotesCard';

function App() {
  return (
    <NotesProvider>
      <Header />
      <div className="relative pt-14 pb-4 px-16 min-h-screen h-screen bg-img">
        <Search />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3 py-12">
          <NotesCard />
          <InputNotes />
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
