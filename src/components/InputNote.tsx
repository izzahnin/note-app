import { useState } from "react";
import { DataItem } from "../utils/index";

interface InputNoteProps {
  addNote: (note: DataItem) => void;
}

export default function InputNote(props: InputNoteProps) {
  const { addNote } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const limitTitle = (value: string) => {
    return value.length <= 50 ? value : value.slice(0, 50);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(limitTitle(e.target.value));
  };

  const onSubmit = () => {
    const newNote = {
      id: Date.now(), // Assuming each note has a unique ID
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
    <form className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 flex flex-col justify-center mx-auto p-4 gap-3">
      <section className="flex flex-col justify-between">
        <div className="flex flex-col w-full m-auto gap-1">
          <label className="text-gray-500">Title</label>
          <input type="text" placeholder="Judul catatan" value={title} onChange={onTitleChange} className="w-full px-2 py-1 border rounded-md" />
          <span className="text-gray-500 text-right">Sisa karakter: {50 - title.length}</span>
        </div>
        <div className="flex flex-col w-full m-auto gap-1">
          <label className="text-gray-500">Isi</label>
          <textarea placeholder="Content" value={body} onChange={(e) => setBody(e.target.value)} className="w-full h-40 px-2 py-1 border rounded-md"></textarea>
        </div>
      </section>
      <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={onSubmit}>
        Buat
      </button>
    </form>
  );
}
