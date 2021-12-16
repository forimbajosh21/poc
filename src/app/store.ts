import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
  PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer, { CounterState } from 'features/counter/counterSlice';
import userReducer, { UserState } from './User';
import managerReducer, { ManagerState } from './Manager';
import scholarReducer, { ScholarState } from './Scholar';

const transform = createTransform(
  (inboundState) => inboundState,
  (outboundState) => JSON.parse(outboundState as string),
);

interface ReducerState {
  user: UserState
  counter: CounterState
  manager: ManagerState
  scholar: ScholarState
}

const persistConfig: PersistConfig<ReducerState> = {
  key: 'root',
  storage,
  transforms: [transform],
  whitelist: ['user'],
};

const persistedReducer = persistCombineReducers<ReducerState>(persistConfig, {
  user: userReducer,
  counter: counterReducer,
  manager: managerReducer,
  scholar: scholarReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
