import { useState } from "react";


export default function InputNote() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    console.log("Note created");
    console.log(title);
    console.log(body);
  }

  return (
    <form
    className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 flex flex-col justify-center mx-auto p-4 gap-3">
      <section className="flex flex-col justify-between">
        <div className="flex flex-col w-full m-auto gap-1">
          <label className="text-gray-500">Title</label>
          <input
            type="text"
            placeholder="Judul catatan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-2 py-1 border rounded-md"
            maxLength={50}
          />
          <span className="text-gray-500 text-right">Sisa karakter: {50 - title.length}</span>
        </div>
        <div className="flex flex-col w-full m-auto gap-1">
          <label className="text-gray-500">Isi</label>
          <textarea
            placeholder="Content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full h-40 px-2 py-1 border rounded-md"
          ></textarea>
        </div>
      </section>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={onSubmit}
      >
        Buat
      </button>
    </form>
  );
}