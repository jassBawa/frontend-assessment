// tabStore.js

import { create } from "zustand";

const useTabStore = create((set) => ({
  selectedTab: "naples", // Initial selected tab

  setSelectedTab: (newTab) => set({ selectedTab: newTab }),
}));

export default useTabStore;
