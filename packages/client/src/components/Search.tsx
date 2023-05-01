import React from "react";

export default function Search({
  searchTerm,
  setSearchTerm,
  onSearchInput,
  onSearchSubmit,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="search">
      <form onSubmit={onSearchSubmit}>
        <input type="text" onChange={onSearchInput}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
