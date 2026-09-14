import { products } from "./data.js";

export const state = {
  products: products,   
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle" 
};