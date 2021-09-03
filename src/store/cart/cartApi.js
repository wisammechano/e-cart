export async function fetchCart(key = "") {
  key = key === "" ? "my-shop-cart" : key;
  try {
    const res = (await localStorage.getItem(key)) || "{}";
    return await JSON.parse(res);
  } catch (e) {
    return {};
  }
}

export async function postCart(data, key = "") {
  key = key === "" ? "my-shop-cart" : key;
  try {
    await localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}
