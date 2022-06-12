import { createSlice, configureStore } from "@reduxjs/toolkit";

const itemReducer = createSlice({
    name: 'item',
    initialState: {
        items: JSON.parse(localStorage.getItem('items')) || [],
    },
    reducers: {
        fetchallitems(state, action) {
            state.items = action.payload
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        remove_item(state, action) {
            let filterdItem = state.items.filter((item) => {
                return item.id !== action.payload
            })
            state.items = filterdItem
            localStorage.setItem('items', JSON.stringify(state.items))

        },
        update_item(state, action) {
            let updateItems = state.items
            let findItem = updateItems.findIndex((item) => {
                return item.id == action.payload.id
            })
            updateItems[findItem] = action.payload
            state.items = updateItems
            localStorage.setItem('items', JSON.stringify(state.items))

        },
        add_item(state, action) {
            let updateitems = state.items
            updateitems.push(action.payload)
            state.items = updateitems
            localStorage.setItem('items', JSON.stringify(state.items))

        }

    }
})


export const Actions = itemReducer.actions
const store = configureStore({
    reducer: itemReducer
})
export default store