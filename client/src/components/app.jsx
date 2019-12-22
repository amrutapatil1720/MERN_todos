import React from 'react';
import Header from './header.jsx';
import AddTodo from './addTodo.jsx';
import TodoList from './todoList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            todo:[]
        }
        this.addTodo=this.addTodo.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.clearList=this.clearList.bind(this);
    }
    addTodo(e) {
        // console.log(e.target.value)
        this.setState({
            title:e.target.value
        })
    }
    handleButtonClick(e){
       
      this.state.todo.push({title:this.state.title});
      console.log(this.state.todo);
      this.setState({
          todo:this.state.todo,
          title:''
      })
      e.preventDefault()
    }
    clearList() {
        this.setState({todo:[]})
    }
    render() {
        return (
            <div className="app-container">
                <Header />
                <AddTodo title={this.state.title} addTodo={this.addTodo} handleButtonClick={this.handleButtonClick}/>
                <TodoList todo={this.state.todo} clearList={this.clearList}/>
            </div>
        )
    }
}

export default App;