import { useState } from "react"

function TodoForm({ addTodo }) {

const [text, setText] = useState("")


function handleChange(e) {
    setText(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()

if (!text.trim()) return
    
    addTodo(text.trim())
    setText("")
}


    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={text} 
            onChange={handleChange}
            placeholder="Activity..."
            />
            <button>Add Todo</button>
        </form>
    )
}


export default TodoForm






