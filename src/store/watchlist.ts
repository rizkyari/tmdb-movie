import { defineStore } from "pinia";

type Item = { 
    id: number;
    type: "movie" | "tv"
};

export const useWatchlistStore = defineStore("watchlist", {
  state: () => ({ items: [] as Item[] }),
  getters: {
    hasById: (state) => (id: number, type: Item["type"]) => state.items.some((i) => i.id === id && i.type === type)
  },
  actions: {
    toggle(item: Item) {
      const idx = this.items.findIndex(i => i.id === item.id && i.type === item.type);
      if (idx >= 0) this.items.splice(idx, 1);
      else this.items.push(item);
      localStorage.setItem("watchlist", JSON.stringify(this.items));
    },
    load() {
      const raw = localStorage.getItem("watchlist");
      if (raw) this.items = JSON.parse(raw);
      console.log(this.items);
      
    },
  }
});