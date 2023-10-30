import { useSearchParams } from "next/navigation";
import React from "react";
import Layout from "~/Components/Layout";
import Productcard from "~/Components/Productcard";
import { api } from "~/utils/api";

export default function SearchPage() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const searchItems = searchQuery
    ? api.product.search.useQuery({ searchTerm: searchQuery })
    : api.product.search.useQuery({ searchTerm: "" });

  return (
    <Layout>
      <div className="mx-auto grid w-10/12 grid-cols-1 gap-1 py-10 sm:grid-cols-2  lg:grid-cols-4 2xl:grid-cols-6">
        {searchItems?.data?.map((item) => {
          return (
            <div key={item.id}>
              <Productcard
                Name={item.name}
                ImageSrc={item.imageURL}
                Price={item.price}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
