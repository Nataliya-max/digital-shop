import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
    name: 'items',
    initialState: {
        filteredItem: 'ALL',
    },
    reducers: {
        // ejemplo de reducer
        setFilteredItem: (state, action) => {
            state.filteredItem = action.payload;
        }
    }
});

export const getFilteredItem = state => state.items.filteredItem;
export const { setFilteredItem } = itemSlice.actions;
export default itemSlice.reducer;
