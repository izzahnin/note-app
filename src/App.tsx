import { useState } from "react";
import Header from "./components/Header";
import InputNote from "./components/InputNote";
import ListNote from "./components/ListNote";
import { getInitialData, DataItem } from "./utils";

function App() {
  const initialNotes = getInitialData();
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (newNote: DataItem) => {
    setNotes([...notes, newNote]);
  };

  // delete note
  const deleteNote = (noteId: number) => {
    const selectedNote = notes.filter((note) => note.id !== noteId);
    setNotes(selectedNote);
  };

  // archive note
  const [isArchived, setIsArchived] = useState(false);

  const toggleArchive = (noteId: number) => {
    setIsArchived(!isArchived);
    const archiveNote = notes.map((note) =>
      note.id === noteId ? { ...note, archived: !note.archived } : note
    );
    setNotes(archiveNote);
  };

  return (
    <main className="w-screen min-h-screen h-full flex flex-col">
      <Header/>
      <InputNote addNote={addNote}/>
      <ListNote notes={notes} deleteNote={deleteNote} toggleArchive={toggleArchive}/>
    </main>
  );
}

export default App;
