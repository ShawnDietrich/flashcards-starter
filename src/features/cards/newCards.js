//imports

import { createSlice } from "@reduxjs/toolkit";



//create slice
export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {

    }
  },
  reducers: {
    addCards: (state, action) => {
      const { id, front, back } = action.payload;
      const newCard = {
        id: id,
        front: front,
        back: back,
      }
      state.cards = { ...state.cards, [id]: newCard }
    }
  }
})




//selectors
export const selectCards = (state) => state.cards.cards;

//actions
export const { addCards } = cardSlice.actions;

//renders
export default cardSlice.reducer;