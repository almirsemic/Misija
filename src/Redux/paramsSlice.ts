import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { paramsType } from '../Types/types'

const initialState: paramsType = {
  info: 'base_info',
  list: 'most_pop_movies',
  url: '/titles',
  titleType: 'movie',
}
export const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<paramsType>) => {
      return action.payload
    },
  },
})

export const { setParams } = paramsSlice.actions

export default paramsSlice.reducer
