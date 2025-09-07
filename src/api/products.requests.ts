import apiUrl from "./index";

// productlar bilan ishlash uchun service
export const getProducts = async () => {
  const { data } = await apiUrl.get("/products");
  return data;
};
