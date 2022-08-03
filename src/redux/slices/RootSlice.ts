import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:"root",
    initialState: {
        name: "Name",
        description: "Description",
        price: "Price",
        speed: "Max Speed",
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        chooseDescription: (state, action) => {state.name = action.payload},
        choosePrice: (state, action) => {state.name = action.payload},
        chooseSpeed: (state, action) => {state.name = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseDescription, choosePrice, chooseSpeed } = rootSlice.actions;