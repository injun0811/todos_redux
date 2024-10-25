import { createSlice } from "@reduxjs/toolkit";
import todoData from '../../assets/api/todoData'

const initialState = {
    todoList: todoData,
    showList: todoData,
    btnClick: 'all'
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // 추가
        addBtn: (state, action) => {
            const no = state.todoList.length + 1;
            state.todoList = ([...state.todoList, { id: no, text: action.payload, isDone: false, isMod: false }])
            state.showList = ([...state.showList, { id: no, text: action.payload, isDone: false, isMod: false }])
        },
        // 삭제
        delBtn: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload)
            state.showList = state.showList.filter((todo) => todo.id !== action.payload)
        },
        // 완료 처리
        updBtn: (state, action) => {
            const { checked, id } = action.payload
            state.todoList = state.todoList.map((todo) => todo.id === id ? { ...todo, isDone: checked } : todo)
            state.showList = state.showList.map((todo) => todo.id === id ? { ...todo, isDone: checked } : todo)
        },
        // 데이터 수정
        onMode: (state, action) => {
            state.todoList = state.todoList.map((todo) => todo.id === action.payload ? { ...todo, isMod: true } : todo)
            state.showList = state.showList.map((todo) => todo.id === action.payload ? { ...todo, isMod: true } : todo)
        },
        // 데이터 저장
        onSave: (state, action) => {
            const { id, txt } = action.payload
            state.todoList = state.todoList.map((todo) => todo.id === id ? { ...todo, isMod: false, text: txt } : todo)
            state.showList = state.showList.map((todo) => todo.id === id ? { ...todo, isMod: false, text: txt } : todo)
        },
        // 전체 : 모두 보이기
        totalShow: (state) => {
            state.btnClick = 'all';
            state.showList = state.todoList;

        },
        // 완료 : isDone(true) 보이기
        completeShow: (state) => {
            state.btnClick = 'com';
            state.showList = state.todoList.filter((todo) => todo.isDone);
        },
        // 진행 : isDone(false) 보이기
        ingShow: (state) => {
            state.btnClick = 'ing';
            state.showList = state.todoList.filter((todo) => !todo.isDone);
        },

    }

});

export const { addBtn, delBtn, updBtn, onMode, onSave, totalShow, completeShow, ingShow } = todoSlice.actions;
export default todoSlice.reducer;