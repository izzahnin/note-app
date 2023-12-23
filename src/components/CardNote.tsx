import { showFormattedDate } from "../utils";

interface CardNoteProps {
  title: string;
  body: string;
  createdAt: string;
  isArchived: boolean;
  onDelete: () => void;
  onArchiveToggle: () => void;
}

export default function CardNote(props: CardNoteProps) {
  const { title, body, createdAt, isArchived, onArchiveToggle } = props;

  const onDelete = () => {
    props.onDelete();
    console.log("Note deleted");
  };

  return (
    <main className={`flex flex-col w-full bg-white border-[1px] rounded-lg border-gray-900 h-full justify-between`}>
      <section className="flex flex-col p-3">
        <h1 className="font-bold text-lg mb-1 ">{title}</h1>
        <span className="text-xs mb-2">{showFormattedDate(createdAt)}</span>
        <p className="text-sm">{body}</p>
      </section>
      <section className="border-gray-900 flex w-full items-center align-middle font-semibold border-t-[1px]">
        <button
          className="rounded-es-lg border-gray-900 w-1/2 hover:text-yellow-700 text-yellow-500  bg-white py-1 "
          onClick={() => {
            // archiveNote();
            onArchiveToggle();
          }}
        >
          {isArchived ? "Unarchive" : "Archive"}
        </button>
        <div className="border-l border-gray-900 h-6"></div>
        <button className="rounded-ee-lg border-gray-900 w-1/2 hover:text-red-700 text-red-500 bg-white py-1 bg-transparent" onClick={onDelete}>
          Delete
        </button>
      </section>
    </main>
  );
}
