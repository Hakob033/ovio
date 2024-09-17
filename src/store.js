import { create } from "zustand";

const useStore = create((set) => ({
  cards: [],
  addCards: (newCard) =>
    set((state) => ({
      cards: state.cards.find((card) => card.id === newCard.id)
        ? state.cards
        : [...state.cards, newCard],
    })),
}));

export default useStore;
