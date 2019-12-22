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
                <h3 className="text-center mt-3">Tasks</h3>
            {this.props.todo.map((singleTodo)=> {
                return <Task singleTodo={singleTodo}/>
            })}
            <button type="submit" className="btn btn-danger form-control mt-5" onClick={this.props.clearList}>Clear List</button>
            </div>
        )
    }
}

export default TodoList;
