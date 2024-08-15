import { useContext, useState } from "react"
import { TodoContext } from "./context/TodoContext"

export default function App () {

    const { currentId, todos, setTodos, addTodo } = useContext(TodoContext)
    const [newItem, setNewItem] = useState('')

    const createNewTodo = (ev) => {
        addTodo(newItem)
        ev.preventDefault()
        setNewItem('')
    }

    const removeTodo = (id) => {
        setTodos(currentTodos => 
            currentTodos.filter(todo => 
                todo.id !== id
            )
        )
    }

    const toggleChecked = (id) => {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo
            )
        )
    }

    const deleteAllTodos = () => {
        setTodos([])
    }
    const deleteCheckedsTodos = () => {
        setTodos(currentTodos => 
            currentTodos.filter(todo => !todo.checked)
        )
    }
    const checkAllTodos = () => {
        setTodos(currentTodos => 
            currentTodos.map(todo => 
                todo.checked !== true ? {...todo, checked: !todo.checked} : todo
            )
        )
    }

    return (
        <>
        <div className="container">
            <div className="todocontainer">
                <h1> T O D O</h1>
                <div>
                    <form onSubmit={(ev) => createNewTodo(ev)}>
                        <input className="todoinput" placeholder="create a new todo" value={newItem} onChange={(ev) => setNewItem(ev.currentTarget.value)}/>
                    </form>
                </div>
                <div className="todolist">
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id}>
                                <div>
                                    <input type="checkbox" checked={todo.checked} onChange={() => toggleChecked(todo.id)}/>
                                    <h3 id={todo.checked ? 'checked' : ''}>{todo.name}</h3>
                                </div>
                                <span className="remove-btn" onClick={() => removeTodo(todo.id)}>
                                    X
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="btns-menu">
                    <button className="menu-btn" onClick={deleteAllTodos}> Delete All </button>
                    <button className="menu-btn" onClick={deleteCheckedsTodos}> Delete Checkeds </button>
                    <button className="menu-btn" onClick={checkAllTodos}> Check all </button>
                </div>
            </div>
        </div>
        </>
    )
}