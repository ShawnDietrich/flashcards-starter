
//imports
import { createSlice } from "@reduxjs/toolkit";


//create slice
export const topicSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
      '0': {
        id: 0,
        name: '',
        icon: '',
        quizIds: []
      }
    }
  },
  reducers: {
    addTopic: (state, action) => {
      const { uniqueId, name, icon } = action.payload;
      const newTopic = {
        id: uniqueId,
        name: name,
        icon: icon,
        quizIds: []
      }
      state.topics = { ...state.topics, [uniqueId]: newTopic }
    }
  }
})


//selectors
export const selectTopics = (state) => state.topics.topics;

//reducers
export const { addTopic } = topicSlice.actions;
export default topicSlice.reducer;


/*   let topicName = uniqueId;
      topicName = Object.create(state.topics);
      topicName.uniqueId = uniqueId;
      topicName.name = name;
      topicName.icon = icon;
      topicName.quizIds = [];*/