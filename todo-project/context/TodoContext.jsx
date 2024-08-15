import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const TodoContext = createContext({})

TodoContextProvider.propTypes = {
    children: PropTypes.node
}

export function TodoContextProvider({children}) {

    const [nextId, setNextId] = useState(1)

    const [todos, setTodos] = useState([
    ])

    const addTodo = (item) => {
        const newTodo = {id: nextId, name: item, checked: false}
        setTodos(currentState => {
            const updatedTodos = [newTodo, ...currentState]
            return updatedTodos
        })
        setNextId(nextId + 1)
    }

    const todo = {
        todos,
        setTodos,
        addTodo
    }
    return (
        <TodoContext.Provider value={todo}>
            {children}
        </TodoContext.Provider>
    )
}