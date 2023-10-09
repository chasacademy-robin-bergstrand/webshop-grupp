import { useState } from "react";
import { api } from "~/utils/api";

export default function Admin() {
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const allProducts = api.product.getAll.useQuery().data;

  const createProduct = api.product.createProduct.useMutation({});

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
    });
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          onChange={(e) => {
            setPrice(parseInt(e.target.value));
          }}
        />
        <label htmlFor="stock">Stock</label>
        <input
          type="text"
          id="stock"
          onChange={(e) => {
            setStock(parseInt(e.target.value));
          }}
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <div className="flex gap-5">
        {allProducts?.map((product) => {
          return (
            <div key={product.id}>
              <h1>Name: {product.name}</h1>
              <h2>Brand: {product.brand}</h2>
              <h2>Description: {product.description}</h2>
              <h2>Price: {product.price}</h2>
              <h2>Stock: {product.stock}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
