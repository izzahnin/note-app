import { useState } from "react";
import { DataItem } from "../utils/index";

interface InputNoteProps {
  addNote: (note: DataItem) => void;
}

export default function InputNote(props: InputNoteProps) {
  const { addNote } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState("");

  const limitTitle = (value: string) => {
    return value.length <= 50 ? value : value.slice(0, 50);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(limitTitle(e.target.value));
    setTitleError(limitTitle.length === 0 ? "Title is required" : "");
  };

  const onSubmit = () => {
    if (title.trim() === "") {
      setTitleError("Title is required");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    addNote(newNote);
    setTitle("");
    setBody("");
  };

  return (
    <form className="mx-auto flex w-full flex-col justify-center gap-3 p-4 sm:w-4/5 md:w-1/2 lg:w-1/3">
      <section className="flex flex-col justify-between">
        <div className="m-auto flex w-full flex-col gap-1">
          <label className="text-gray-500">Title</label>
          <input
            type="text"
            placeholder="Judul catatan"
            value={title}
            onChange={onTitleChange}
            className="w-full rounded-md border px-2 py-1"
          />
          {titleError && (
            <span className="text-right text-red-500">{titleError}</span>
          )}
          <span className="text-right text-gray-500">
            Sisa karakter: {50 - title.length}
          </span>
        </div>
        <div className="m-auto flex w-full flex-col gap-1">
          <label className="text-gray-500">Isi</label>
          <textarea
            placeholder="Content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="h-40 w-full rounded-md border px-2 py-1"
          ></textarea>
        </div>
      </section>
      <button
        type="button"
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={onSubmit}
      >
        Buat
      </button>
    </form>
  );
}
