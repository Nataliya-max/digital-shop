import { configureStore } from '@reduxjs/toolkit'
import items from './itemSlice'


export const store = configureStore({
  reducer: {
    items
  },
})