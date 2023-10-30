import type { Prisma } from "@prisma/client";
import { useState } from "react";
import { api } from "~/utils/api";
import Image from "next/image";

type ProductWithCategory = Prisma.ProductGetPayload<{
  include: { category: true };
}>;

export default function AdminPageProduct(product: ProductWithCategory) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<string>("");

  const utils = api.useContext();
  const deleteProduct = api.product.delete.useMutation({
    onSettled: async () => {
      await utils.product.getAll.invalidate();
    },
  });

  const updateProduct = api.product.update.useMutation({
    onSettled: async () => {
      await utils.product.getAll.invalidate();
    },
  });

  const allCategories = api.category.getAll.useQuery().data;

  async function saveEdit() {
    await updateProduct.mutateAsync({
      brand: brand || product.brand,
      name: name || product.name,
      description: description || product.description,
      price: price || product.price,
      stock: stock || product.stock,
      categoryId: categoryId || product.categoryId!,
      id: product.id,
    });
  }

  return (
    <div
      key={product.id}
      className="flex max-w-sm flex-grow flex-col gap-2 rounded-md border-2 p-4"
    >
      {isEditing ? (
        <>
          <form action="" className="flex flex-col gap-2">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="rounded-md border-2 px-2 py-1"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <select
              id="category"
              defaultValue={""}
              className="rounded-md border-2 px-2 py-1"
              onChange={(e) => {
                setCategoryId(e.target.value);
                //setNewCategoryName("");
              }}
            >
              <option value="" disabled>
                Select category
              </option>
              {allCategories?.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              id="brand"
              placeholder="Brand"
              className="rounded-md border-2 px-2 py-1"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />

            <textarea
              id="description"
              placeholder="Description"
              className="resize-none rounded-md border-2 px-2 py-1"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <input
              type="text"
              id="price"
              placeholder="Price"
              className="rounded-md border-2 px-2 py-1"
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
              }}
            />
            <input
              type="text"
              id="stock"
              placeholder="Stock"
              className="rounded-md border-2 px-2 py-1"
              onChange={(e) => {
                setStock(parseInt(e.target.value));
              }}
            />
          </form>
        </>
      ) : (
        <div className="flex">
          <div>
            <h1 className="text-center text-lg">{product.name}</h1>
            <h2>Category: {product.category?.name}</h2>
            <h2>Brand: {product.brand}</h2>
            <h2>Description: {product.description}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Stock: {product.stock}</h2>
          </div>
          <Image
            src={product.imageURL}
            width={100}
            height={100}
            alt="Product Image"
            className="h-full object-contain"
          />
        </div>
      )}
      {isEditing ? (
        <>
          <button
            onClick={async () => {
              setIsEditing((old) => !old);
              await saveEdit();
            }}
            className="mt-auto rounded-md border-2 bg-gray-200 p-1"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing((old) => !old)}
            className="rounded-md border-2 bg-gray-200 p-1"
          >
            Discard changes
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsEditing((old) => !old)}
            className="mt-auto rounded-md border-2 bg-gray-200 p-1"
          >
            Edit
          </button>
          <button
            onClick={() => deleteProduct.mutateAsync(product.id)}
            className="rounded-md border-2 border-red-400 bg-red-400 p-1 text-white"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
