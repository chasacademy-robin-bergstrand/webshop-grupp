import { useSearchParams } from "next/navigation";
import React from "react";
import Layout from "~/Components/Layout";
import { api } from "~/utils/api";

export default function SearchPage() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const searchItems = searchQuery
    ? api.product.search.useQuery({ searchTerm: searchQuery })
    : api.product.search.useQuery({ searchTerm: "" });

  return (
    <Layout>
      <div className="h-screen">
        {searchItems?.data?.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </Layout>
  );
}
