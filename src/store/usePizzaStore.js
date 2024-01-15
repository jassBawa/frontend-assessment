import { create } from "zustand";
import pizzaData from "../data/pizza.json";

// Zustand store for managing state
const usePizzaStore = create((set) => ({
  selectedTab: "naples", // Default selected tab
  setTab: (newTab) => set({ selectedTab: newTab }),

  jsonData: pizzaData,
  // Initial JSON data
  setJsonData: (newJsonData) => set({ jsonData: newJsonData }),
}));

export default usePizzaStore;
