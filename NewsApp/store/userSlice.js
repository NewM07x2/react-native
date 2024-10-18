import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookmarks: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addBookMark: (state, action) => {
      const addItem = action.payload
      state.bookmarks.push(addItem)
    },
    removeBookMark: (state, action) => {
      // 削除するアイテム
      const removeItem = action.payload
      // 現在のアイテム
      const currentBookMark = state.bookmarks
      // 削除後のアイテム
      const filteredBookMark = currentBookMark.filter(item => item.url !== removeItem.url)
      // 値の更新
      state.bookmarks = filteredBookMark
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBookMark, removeBookMark } = userSlice.actions

export default userSlice.reducer