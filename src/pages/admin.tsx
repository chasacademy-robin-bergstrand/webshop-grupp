import { useState } from "react";
import AdminPageProduct from "~/Components/AdminPageProduct";
import Layout from "~/Components/Layout";
import { api } from "~/utils/api";

export default function Admin() {
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<string>("");
  const [newCategoryName, setNewCategoryName] = useState<string>("");

  const utils = api.useContext();

  const allProducts = api.product.getAll.useQuery().data;

  const allCategories = api.category.getAll.useQuery().data;

  const createProduct = api.product.createProduct.useMutation({
    onSettled: async () => {
      await utils.product.getAll.invalidate();
      await utils.category.getAll.invalidate();
    },
  });
  const deleteProduct = api.product.delete.useMutation({
    onSettled: async () => {
      await utils.product.getAll.invalidate();
    },
  });

  /*  const createExercise = api.exercise.createExercise.useMutation({
    onSettled: async () => {
      await utils.exercise.getAll.invalidate();
    },
  }); */

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createProduct.mutateAsync({
      brand: brand,
      name: name,
      description: description,
      price: price,
      stock: stock,
      categoryId: categoryId,
      newCategoryName: newCategoryName,
    });
  };

  return (
    <Layout>
      <div className="max-w-screen flex gap-4 px-8 py-8">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="flex w-96 flex-col gap-3"
        >
          <h2 className="text-center text-lg">Add new product</h2>
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="rounded-md border-2 px-2 py-1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* <label htmlFor="brand">Brand</label> */}
          <input
            type="text"
            id="brand"
            placeholder="Brand"
            className="rounded-md border-2 px-2 py-1"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          />
          {/* <label htmlFor="description">Description</label> */}
          <textarea
            //type="text"
            id="description"
            placeholder="Description"
            className="resize-none rounded-md border-2 px-2 py-1"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {/* <label htmlFor="price">Price</label> */}
          <input
            type="text"
            id="price"
            placeholder="Price"
            className="rounded-md border-2 px-2 py-1"
            onChange={(e) => {
              setPrice(parseInt(e.target.value));
            }}
          />
          {/* <label htmlFor="stock">Stock</label> */}
          <input
            type="text"
            id="stock"
            placeholder="Stock"
            className="rounded-md border-2 px-2 py-1"
            onChange={(e) => {
              setStock(parseInt(e.target.value));
            }}
          />
          {/* <label htmlFor="category">Category</label> */}
          <select
            id="category"
            defaultValue={""}
            className="rounded-md border-2 px-2 py-1"
            onChange={(e) => {
              setCategoryId(e.target.value);
              setNewCategoryName("");
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
            <option value="other">Other / New category</option>;
          </select>
          {categoryId === "other" && (
            <>
              {/* <label htmlFor="newCategory">New category</label> */}
              <input
                type="text"
                id="newCategory"
                className="rounded-md border-2 px-2 py-1"
                placeholder="New category"
                onChange={(e) => {
                  setNewCategoryName(e.target.value);
                }}
              />
            </>
          )}
          <button
            type="submit"
            className="self-center rounded-md border-2 bg-gray-200 px-4 py-2 font-semibold"
          >
            Add
          </button>
        </form>
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-lg">Products</h2>
          <div className="flex flex-wrap gap-5">
            {allProducts?.map((product) => {
              return <AdminPageProduct {...product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
