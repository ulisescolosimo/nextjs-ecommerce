import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slides/cartSlice'

export default configureStore({
    reducer: {
      cart: cartSlice
    },
    middleware: (getAllCities) => getAllCities({
        immutableCheck: false,
        serializableCheck: false
    })
  })