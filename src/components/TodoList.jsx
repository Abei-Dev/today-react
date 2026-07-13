function TodoList({ todos, deleteTodo }) {
    
    const todoElements = todos.map(todo => {
        return (
            <p key={todo.id}>
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </p>
        )
    })
    


    return (
        <>
           {todoElements}
        </>
    )
}


export default TodoList