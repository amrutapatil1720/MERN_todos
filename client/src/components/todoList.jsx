import React from 'react';
import Task from './task.jsx';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
            {this.props.todo.map((singleTodo)=> {
                return <Task singleTodo={singleTodo}/>
            })}
            </div>
        )
    }
}

export default TodoList;
