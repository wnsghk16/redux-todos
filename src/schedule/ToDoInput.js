import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodoAction} from "./store/schedule.reducer"
import uuid from 'uuid/v4'

const ToDoInput = () => {
    const [todo,setTodo] = useState("") //리듀서로 만들 생각이 없음 action필요 없음
    const dispatch = useDispatch()
    const addToDo = todo => dispatch(addTodoAction(todo))

    const handleChange = e =>{ // 변화가 일어나면 반응(aa라고 치다가 지우고 bb로바꾸는 경우 같은거)
        e.preventDefault() //양방향으로 전달되는걸 막음?
        setTodo(e.target.value)
    }
    const submitForm = e =>{
        e.preventDefault()
        const newTodo={
            todoId:uuid(),
            name:todo,
            complete:false
        }
        addToDo(newTodo)
        setTodo("") //할일을 추가하고나면 비운다.
    }

    return (
        <>
            <form onSubmit={submitForm} method="POST">
                <div className="row mt-3">
                    <div className="form-group col-sm-8">
                        <input
                            type="text"
                            placeholder="Add a todo"
                            name="todo"
                            className="form-control"
                            value={todo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-4">
                        <button type="submit" className="btn btn-primary btn-md">
                            Add Todo
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ToDoInput;