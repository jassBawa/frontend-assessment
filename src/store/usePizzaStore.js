import { create } from "zustand";
import zukeeper from "zukeeper";

import pizzaData from "../data/pizza.json";

// Zustand store for managing state
const usePizzaStore = create(
  zukeeper((set) => ({
    selectedTab: null,
    setSelectedTab: (newTab) => set({ selectedTab: newTab }),
    jsonData: pizzaData,
    setJsonData: (newJsonData) => set({ jsonData: newJsonData }),
    formFields: {},
    updateFormField: (fieldName, value) =>
      set((state) => ({
        formFields: {
          ...state.formFields,
          [fieldName]: value,
        },
      })),
  }))
);

window.store = usePizzaStore;

export default usePizzaStore;
