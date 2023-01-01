import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNotification: ''
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleNotification(state, action) {
            state.showNotification = {
                status: action.payload.status,
                message: action.payload.message
            }
        },
        unshowNotification(state) {
            state.showNotification = ''
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice