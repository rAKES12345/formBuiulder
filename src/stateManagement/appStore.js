import { configureStore } from '@reduxjs/toolkit'; // Ensure you import from '@reduxjs/toolkit'
import { reducer } from './reducer'; // Adjust the import path as necessary
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  duration: true,
  diff: true,
});


const store = configureStore({
  reducer: {
    components: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
