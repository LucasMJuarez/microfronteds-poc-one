const API_SERVER = "http://localhost:8080";

const getProducts = () =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

const getProductById = (id) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export { getProducts, getProductById, currency };
