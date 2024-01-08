import CardNote from "./CardNote";
import { DataItem } from "../utils";

interface ListNoteProps {
  notes: DataItem[];
  deleteNote: (id: number) => void;
  toggleArchive: (id: number) => void;
}

export default function ListNote(props: ListNoteProps) {
  const { notes, deleteNote, toggleArchive } = props;
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <main className="m-auto flex max-w-5xl flex-col justify-center p-4">
      <h1 className="my-3 text-left text-2xl font-semibold">Active Notes</h1>
      <section className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {activeNotes.length === 0 ? (
          <p className="text-gray-500">No active notes found.</p>
        ) : (
          activeNotes.map((note) => (
            <CardNote
              key={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              isArchived={note.archived}
              onDelete={() => deleteNote(note.id)}
              onArchiveToggle={() => toggleArchive(note.id)}
            />
          ))
        )}
      </section>

      <h1 className="my-3 text-left text-2xl font-semibold">Archived Notes</h1>
      <section className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {archivedNotes.length === 0 ? (
          <p className="text-gray-500">No archived notes found.</p>
        ) : (
          archivedNotes.map((note) => (
            <CardNote
              key={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              isArchived={note.archived}
              onDelete={() => deleteNote(note.id)}
              onArchiveToggle={() => toggleArchive(note.id)}
            />
          ))
        )}
      </section>
    </main>
  );
}
