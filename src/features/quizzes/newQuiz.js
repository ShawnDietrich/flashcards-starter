import { createSlice } from "@reduxjs/toolkit";





//create slice
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            
        }
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            const newQuiz = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
            state.quizzes = {...state.quizzes, [id]: newQuiz}
        }
    }
})

//selectors
export const selectQuiz = (state) => state.quizzes.quizzes;

//slice actions
export const {addQuiz} = quizzesSlice.actions;
//Reducers
export default quizzesSlice.reducer;