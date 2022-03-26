import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/newTopics';
import quizReducer from '../features/quizzes/newQuiz';
import cardsReducer from '../features/cards/newCards';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardsReducer
  },
});
