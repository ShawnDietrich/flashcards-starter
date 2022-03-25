import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/newTopics';

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
