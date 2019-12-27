import React from 'react';


const Task = (props) => {
    console.log("hgjhg", props.singleTodo)
    return (
        <div>
            <li className="text-dark text-center bg-light text-capitalize d-flex list-group-item justify-content-between my-2">
                <h6> {props.title} </h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={props.editTodo}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={props.deleteTodo}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </span>
                </div>
            </li>


        </div>
    )
}
export default Task;