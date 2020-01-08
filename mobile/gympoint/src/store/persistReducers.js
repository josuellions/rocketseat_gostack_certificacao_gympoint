import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedRedicer = persistReducer(
    {
      key: 'gympointjl',
      storage: AsyncStorage,
      whitelist: ['auth', 'student', 'checkin'],
    },
    reducers
  );
  return persistedRedicer;
};
