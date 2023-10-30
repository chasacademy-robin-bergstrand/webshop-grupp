import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const encodeSearchQuery = encodeURI(searchQuery);
    router
      .push(`/search?q=${encodeSearchQuery}`)
      .catch(() => "obligatory catch");
  };

  return (
    <div className="absolute left-4">
      <form onSubmit={onSearch}>
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="focus:cursor-exit peer relative z-10 h-10 w-8 cursor-pointer rounded-full bg-transparent pl-8 pr-4 outline-none focus:w-max focus:border focus:border-gray-400 focus:pl-16 focus:pr-4"
            placeholder="Search"
          />
          <AiOutlineSearch className="absolute inset-y-0 h-10 w-14 border-r border-transparent stroke-gray-300 px-3.5  peer-focus:border-btnMain peer-focus:stroke-btnMain" />
        </div>
      </form>
    </div>
  );
}
