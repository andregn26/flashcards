import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
	name: "quizzes",
	initialState: { quizzes: {} },
	reducers: {},
});

export default quizzesSlice.reducer;
