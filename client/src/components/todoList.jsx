import React from 'react';
import Task from './task.jsx';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const {editTodo, deleteTodo}=this.props;
        console.log("ankit",this.props);
        return (
            <div>
                <h3 className="text-center mt-3">Tasks</h3>
            {this.props.todo.map((singleTodo)=> {
                return <Task key={singleTodo.id} title={singleTodo.title} editTodo={() => editTodo(singleTodo.id)} deleteTodo={() => deleteTodo(singleTodo.id)}/>
            })}
            <button type="submit" className="btn btn-danger form-control mt-5" onClick={this.props.clearList}>Clear List</button>
            </div>
        )
    }
}

export default TodoList;
