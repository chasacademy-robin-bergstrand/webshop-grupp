import { encode } from "querystring";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
type Props = {};

export default function SearchBar({}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const encodeSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodeSearchQuery}`);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" rounded-md border border-gray-400 bg-gray-50 p-1 pl-2 text-gray-600 outline-none focus:border-gray-200 focus:ring-gray-200"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
