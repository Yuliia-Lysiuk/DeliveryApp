import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    value: 'Pasta e Vino',
  },
  reducers: {
    chooseShop: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { chooseShop } = shopSlice.actions

export default shopSlice.reducer
