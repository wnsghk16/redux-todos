import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodoAction, toggleTodoAction} from './store/schedule.reducer'

const ToDoList = () => {
    const todos = useSelector(state=>state.todos) //새로만드는게 아니라 있는거 가져온다.
    const dispatch = useDispatch()
    const toggleTodo = todoId => dispatch(toggleTodoAction(todoId))
    const deleteTodo = todoId => dispatch(deleteTodoAction(todoId))

    return (
        <>
            <div>
                {todos && todos.length === 0 && (
                    <p className="alert alert-info">No Todos at the moment</p>
                )}
                {todos &&
                todos.map(todo => (
                    <div key={todo.todoId} className="row mb-1">
                        <div className="col-sm-2">
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={toggleTodo.bind(null, todo.todoId)}
                            />
                        </div>
                        <div className="col-sm-8">
                            <span>{todo.name}</span>
                        </div>
                        <div className="col-sm-2">
                            <button
                                className="btn btn-danger"
                                onClick={deleteTodo.bind(null, todo.todoId)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ToDoList