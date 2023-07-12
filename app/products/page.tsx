import { Counter } from "@/components/Counter";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="container">
      <h1 className="text-2xl">Products</h1>
      <Counter />
      {products.map(({ description, id, price, title }) => (
        <div key={id} className="border p-4 my-4 rounded-md">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
          <p className="text-gray-700">${price}</p>
        </div>
      ))}
    </div>
  )
}