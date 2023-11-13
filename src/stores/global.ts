import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/global';
import uiReducer from '../reducers/ui';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ui: uiReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// expose the store
declare global {
  interface Window {
    store: typeof store;
  }
}
window.store = store;
