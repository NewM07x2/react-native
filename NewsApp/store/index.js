import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
// web
// import storage from 'redux-persist/lib/storage'
// iPhone
import AsyncStorage from "@react-native-async-storage/async-storage"

// 永続化.設定情報
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
}

// 複数のReducerを束ねるためにcombineReducersを定義する。
const rootReducer = combineReducers({
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // warningを防止: https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
