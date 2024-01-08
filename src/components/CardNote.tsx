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
    <main
      className={`flex h-full w-full flex-col justify-between rounded-lg border-[1px] border-gray-900 bg-white`}
    >
      <section className="flex flex-col p-3">
        <h1 className="mb-1 text-lg font-bold ">{title}</h1>
        <span className="mb-2 text-xs">{showFormattedDate(createdAt)}</span>
        <p className="text-sm">{body}</p>
      </section>
      <section className="flex w-full items-center border-t-[1px] border-gray-900 align-middle font-semibold">
        <button
          className="w-1/2 rounded-es-lg border-gray-900 bg-white py-1  text-yellow-500 hover:text-yellow-700 "
          onClick={() => {
            // archiveNote();
            onArchiveToggle();
          }}
        >
          {isArchived ? "Unarchive" : "Archive"}
        </button>
        <div className="h-6 border-l border-gray-900"></div>
        <button
          className="w-1/2 rounded-ee-lg border-gray-900 bg-transparent bg-white py-1 text-red-500 hover:text-red-700"
          onClick={onDelete}
        >
          Delete
        </button>
      </section>
    </main>
  );
}
