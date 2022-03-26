import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/newTopics';
import quizReducer from '../features/quizzes/newQuiz';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer
  },
});
