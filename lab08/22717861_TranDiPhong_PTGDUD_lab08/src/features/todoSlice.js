import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            const newId = state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1
            const newTodo = {
                id: newId,
                title: action.payload,
                completed: false,
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((item) => item.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
    },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
