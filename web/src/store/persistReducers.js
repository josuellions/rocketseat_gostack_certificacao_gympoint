import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedRedicer = persistReducer(
    {
      key: 'gympointjl',
      storage,
      whitelist: ['auth', 'admin', 'student'],
    },
    reducers
  );
  return persistedRedicer;
};
