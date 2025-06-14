const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => axiosClient.post("/carts", payload);

const getUserCartItems = (email) =>
  axiosClient.get(
    `/carts?filters[email][$eq]=${email}&populate[products][populate]=*`
  );

const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);
export default {
  addToCart,
  getUserCartItems,
  deleteCartItem,
};
