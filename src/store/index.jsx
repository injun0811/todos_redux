import { configureStore } from '@reduxjs/toolkit';
import todo from './modules/todoSlice';

export const store = configureStore({
    reducer: {
        todo,
    },
});
