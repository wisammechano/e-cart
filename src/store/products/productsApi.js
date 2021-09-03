export default async function fetchProducts(options = {}) {
  const url = "/data.json";
  const res = await fetch(url, options);
  if (res.ok) {
    return await res.json();
  } else {
    const message = `Fetching products failed. An error has occured: ${res.status}`;
    throw new Error(message);
  }
}
