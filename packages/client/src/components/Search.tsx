import React from "react";

export default function Search({
  searchTerm,
  setSearchTerm,
  onSearchInput,
  onSearchSubmit,
  onClick,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
}) {
  return (
    <div className="search">
      <form onSubmit={onSearchSubmit}>
        <input type="text" onChange={onSearchInput}></input>
        <button type="submit">Search</button>
        <button onClick={onClick}>clear</button>
      </form>
    </div>
  );
}
