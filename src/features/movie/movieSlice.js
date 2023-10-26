import {createSlice} from "@reduxjs/toolkit";


//redux is made of three things
// i. Action ii. Reducers iii. State
//i.Action is basically what you want to do for eg: you want to create a new movie, if you want to create set a new movie, ifyou want to login and logout the user these are called the action
//ii.Reducers are basically is what takes an action and actually changes the state

// initial state is basically nothing
const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});

export const {setMovies} = movieSlice.actions;

//here we need to export the actual movie state 
export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;