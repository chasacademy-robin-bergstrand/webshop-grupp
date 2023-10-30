import React from "react";
import { useRouter } from "next/router";
import Layout from "~/Components/Layout";
import { api } from "~/utils/api";
import Image from "next/image";

type productFields = {
  name: string;
  brand: string;
  description: string;
  price: number;
  stock: number | null;
  imageURL: string;
};

export default function SingleProduct() {
  const router = useRouter();
  const productName = router.query.productName;
  const validSearchItem: string = productName as string;

  const singleItem = api.product.singleItem.useQuery({
    singleItem: validSearchItem,
  }).data;

  return (
    <Layout>
      <div className=" flex min-h-[calc(100vh-350px)] w-full  justify-center py-20">
        <div className="flex w-1/2 justify-center ">
          <Image
            src={singleItem ? singleItem?.imageURL : ""}
            alt="product image"
            width={600}
            height={800}
            className=" object-contain"
          />
        </div>
        <div className="flex w-1/2 flex-col justify-between">
          <div>
            <h1 className=" text-xl uppercase tracking-[3px] lg:text-2xl lg:tracking-[5px]">
              {singleItem?.name}
            </h1>
            <p className="text-md uppercase tracking-[3px] lg:text-lg lg:tracking-[5px]">
              {singleItem?.price},00 kr
            </p>
          </div>
          <div className="w-1/2">
            <div className="">
              <p className="text-lg font-semibold tracking-[3px]">Pay with</p>
              <div className="flex space-x-4">
                <Image
                  src={
                    "https://utfs.io/f/805178fd-2091-45df-ba30-f44b3c709565-ou2as0.png"
                  }
                  className=" object-contain"
                  alt="Klarna logo"
                  width={100}
                  height={75}
                />
                <Image
                  src={
                    "https://utfs.io/f/34891c76-e86c-49c8-adfc-7551a8e0ecb8-vlz9ql.svg.png"
                  }
                  alt="Paypal logo"
                  className=" object-contain"
                  width={100}
                  height={75}
                />

                <Image
                  src={
                    "https://utfs.io/f/0604513f-e4e3-456b-a841-c6a4860e7411-8xiyq6.wine.png"
                  }
                  alt="Swish logo"
                  width={100}
                  height={75}
                />
              </div>
            </div>
            <div className=" flex justify-between space-x-4 py-6">
              <button className="text-md w-1/2 rounded-2xl bg-[#b451b4] p-5 font-semibold text-slate-100 hover:opacity-50">
                Add to cart
              </button>
              <button className="text-md w-1/2 rounded-2xl bg-[#b451b4] p-5 font-semibold text-slate-100 hover:opacity-50">
                Buy now
              </button>
            </div>

            <div className=" border-t pt-8">
              <div className=" ">
                <h2 className="text-md lg:text-md uppercase tracking-[3px] lg:tracking-[5px]">
                  Description
                </h2>
                <p className="w-full">{singleItem?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
