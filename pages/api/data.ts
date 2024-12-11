export default async function getProducts() {
  const response = await fetch(`${process.env.API_URL}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = response.json();
  return data;
}
