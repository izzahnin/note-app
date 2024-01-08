import { useState } from "react";
import "../index.css";

interface HeaderProps {
  onSearchChange: (query: string) => void;
}

export default function Header(props: HeaderProps) {
  const { onSearchChange } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <nav className="flex justify-center bg-blue-500 px-5 py-1">
      <main className="sticky top-0 flex h-16 w-full items-center justify-between">
        <h1 className="text-2xl font-bold text-white md:text-3xl">Notes</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar w-1/2 p-2 text-sm md:w-1/3 lg:w-1/4"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </main>
    </nav>
  );
}
