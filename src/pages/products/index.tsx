import React from "react";
import Layout from "~/Components/Layout";
import Productcard from "~/Components/Productcard";
import { api } from "~/utils/api";
export default function products() {
  const allProducts = api.product.getAll.useQuery().data;
  return (
    <Layout>
      <div className="mx-auto grid w-10/12 grid-cols-2 gap-1 py-10  lg:grid-cols-4  2xl:grid-cols-6">
        {allProducts
          ? allProducts?.map((product) => {
              return (
                <div key={product.id}>
                  <Productcard
                    Name={product.name}
                    Price={product.price}
                    ImageSrc={product.imageURL}
                  />
                </div>
              );
            })
          : "Loading..."}
      </div>
    </Layout>
  );
}
