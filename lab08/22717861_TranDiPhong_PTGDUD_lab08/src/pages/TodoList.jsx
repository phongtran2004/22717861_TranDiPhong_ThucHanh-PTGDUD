"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, toggleTodo } from "../features/todoSlice"
import { PlusCircle, Trash2, Check, Circle } from "lucide-react"

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("")
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo))
            setNewTodo("")
        }
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo(id))
    }

    const handleRemove = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    <span className="text-purple-600 dark:text-purple-400">Todo</span> List
                </h1>

                {/* Add Todo Form */}
                <form onSubmit={handleAddTodo} className="mb-6">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder="Add a new task..."
                            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                        />
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
                        >
                            <PlusCircle className="h-5 w-5" />
                            <span className="ml-1 hidden sm:inline">Add</span>
                        </button>
                    </div>
                </form>

                {/* Todo List */}
                <div className="space-y-3">
                    {todos.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400 text-center py-4">No tasks yet. Add one above!</p>
                    ) : (
                        todos.map((todo) => (
                            <div
                                key={todo.id}
                                className={`flex items-center justify-between p-3 rounded-md transition-colors duration-200 ${todo.completed ? "bg-purple-50 dark:bg-purple-900/20" : "bg-gray-50 dark:bg-gray-700/50"
                                    }`}
                            >
                                <div className="flex items-center">
                                    <button onClick={() => handleToggle(todo.id)} className="focus:outline-none mr-3">
                                        {todo.completed ? (
                                            <Check className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                        ) : (
                                            <Circle className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                                        )}
                                    </button>
                                    <span
                                        className={`${todo.completed
                                            ? "line-through text-gray-500 dark:text-gray-400"
                                            : "text-gray-800 dark:text-gray-200"
                                            }`}
                                    >
                                        {todo.title}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleRemove(todo.id)}
                                    className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 focus:outline-none transition-colors duration-200"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Todo Stats */}
                {todos.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {todos.filter((todo) => todo.completed).length} of {todos.length} tasks completed
                        </p>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                            <div
                                className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full"
                                style={{
                                    width: `${todos.length > 0 ? (todos.filter((todo) => todo.completed).length / todos.length) * 100 : 0
                                        }%`,
                                }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList
