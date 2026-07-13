import { useEffect, useState } from "react"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos")

        if (savedTodos) {
            return JSON.parse(savedTodos)
        }

        return []
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function addTodo(text) {
        const newTodo = {
            id: Date.now(),
            todo: text
        }

        setTodos(prevTodos => [newTodo, ...prevTodos])
    }

    function deleteTodo(id) {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <main className="app">
            <Header />

            <TodoForm addTodo={addTodo} />

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </main>
    )
}

export default App