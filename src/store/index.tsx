import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { frameReducer } from './FrameSlice'
import { modeReducer } from './ModeSlice'

export const store = configureStore({
  reducer: {
    frame: frameReducer,
    mode: modeReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// typed hooks
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedStore = () => useStore<RootState>()
