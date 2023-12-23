import CardNote from "./CardNote";
import { getInitialData } from "../utils";

export default function ActiveNote() {
  // function notesMapper() {
  //   return getInitialData().map((note) => (
  //     <CardNote key={note.id} title={note.title} body={note.body} createdAt={note.createdAt} isArchived={note.archived} />
  //   ));
  // }

  return (
    <main className="flex flex-col m-auto justify-center p-4 max-w-5xl">
      <h1 className="font-semibold text-2xl text-left my-3">Active Note</h1>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 w-fit gap-4 ">
        {/* mapping getIntialData */}
        {getInitialData().map((note) => (
          <CardNote key={note.id} title={note.title} body={note.body} createdAt={note.createdAt} isArchived={note.archived} />
        ))}

        {/* {notesMapper()} */}
      </section>
    </main>
  );
}
