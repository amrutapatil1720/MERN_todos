import React from 'react';

const Task=(props) => {
    console.log("hgjhg",props.singleTodo)
    return (
        <div>
<h3 className="text-dark text-center bg-light">

{props.singleTodo.title}
         </h3>
        </div>
    )
}
export default Task;