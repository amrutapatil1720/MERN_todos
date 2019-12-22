import React from 'react';


const Task = (props) => {
    console.log("hgjhg", props.singleTodo)
    return (
        <div>
            <h6 className="text-dark text-center bg-light text-capitalize d-flex list-group-item justify-content-between my-2">
                {props.singleTodo.title}
            </h6>
            <div className="todo-icon">
                <span className="mx-2 text-success">
                    <i className="fas fa-pen"></i>
                    
                </span>
            </div>

        </div>
    )
}
export default Task;