/**
 * Fetches the list of products from the API.
 *
 * This function makes a GET request to the `/products` endpoint of the API.
 * The base URL of the API is determined by the `API_URL` environment variable.
 * If the `API_URL` environment variable is not set, it defaults to `http://localhost:3000/api`.
 *
 * @returns {Promise<Product[]>} A promise that resolves to the list of products.
 */

export interface Product {
  id: string;
  sku: string;
  price: string;
  name: string;
}
export default async function getProducts(): Promise<Product[]> {
  const url = process.env.API_URL
    ? process.env.API_URL
    : "http://localhost:3000/api";
  const response = await fetch(`${url}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = response.json();
  return data;
}
