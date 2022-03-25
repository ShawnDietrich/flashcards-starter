
//imports
import { createSlice } from "@reduxjs/toolkit";


//create slice
export const topicSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
      '0': {
        id: '',
        name: '',
        icon: '',
        quizIds: []
      }
    }
  },
  reducers: {
    addTopic: (state, action) => {
      //add new topic
      const { uniqueId, name, icon } = action.payload;
      const newTopic = {
        id: uniqueId,
        name: name,
        icon: icon,
        quizIds: []
      }
      state.topics = { ...state.topics, [uniqueId]: newTopic }
    },
    addQuiz: (state, action) => {
      const { quizId, topicId } = action.payload;
      //find the active topic key and insert a quiz array
      for(const key in state.topics){
        if(key === topicId){
          key.quizIds.push(quizId);
        }
      }
    }
  }
})


//selectors
export const selectTopics = (state) => state.topics.topics;

//actions
export const { addTopic, addQuiz } = topicSlice.actions;

//reducers
export default topicSlice.reducer;


