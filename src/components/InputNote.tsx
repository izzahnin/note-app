import { useState } from "react";

export default function InputNote() {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const onSubmit = () => {
    console.log("Judul:", judul);
    console.log("Isi:", isi);
  };

  return (
    <main className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center mx-auto p-4 gap-3">
      <section className="flex flex-col justify-between">
        <div className="flex flex-col w-full m-auto gap-1">
          <label className="text-gray-500">Judul</label>
          <input
            type="text"
            placeholder="Judul catatan"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full px-2 py-1 border rounded-md"
            maxLength={50}
          />
          <span className="text-gray-500 text-right">Sisa karakter: {50 - judul.length}</span>
        </div>
        <div className="flex flex-col w-full m-auto gap-1">
          <label className="text-gray-500">Isi</label>
          <textarea
            placeholder="Isi catatan"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="w-full h-20 px-2 py-1 border rounded-md"
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
    </main>
  );
}