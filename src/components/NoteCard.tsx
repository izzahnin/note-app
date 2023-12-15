export default function NoteCard() {
  return (
    <main className="flex flex-col w-72 max-w-sm bg-white border-[1px] rounded-lg border-gray-900 h-fit">
      <section className="flex flex-col p-3">
        <h1 className="font-bold text-lg mb-1 ">Title NOte</h1>
        <span className="text-xs mb-2">Hari, 00 Bulan 2023</span>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis quos provident sint voluptate nam consequatur blanditiis ex, harum nihil sequi ut soluta laboriosam nesciunt, sapiente et modi deleniti earum eveniet?
          Doloremque vel omnis fuga consequuntur at sunt ea. Consequuntur?
        </p>
      </section>
      <section className="border-gray-900 flex w-full items-center align-middle font-semibold border-t-[1px]">
        <button className=" border-gray-900 w-1/2 hover:text-red-700 text-red-500 bg-white py-1 rounded-es-md border-e-[1px]">Delete</button>
        <button className=" border-gray-900 w-1/2 hover:text-yellow-700 text-yellow-500  bg-white py-1 rounded-ee-md">Archive</button>
      </section>
    </main>
  );
}
