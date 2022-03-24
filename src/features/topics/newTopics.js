
//imports
import { createSlice } from "@reduxjs/toolkit";


//create slice
export const topics = createSlice({
  name: 'topics',
  initialState: {topics: {}},
  reducers: {
    addTopic(state, action){
      state.topics {
        [id] = action.payload.id;

      }
    }
  }
})
