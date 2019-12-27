import React from 'react';
import Header from './header.jsx';
import AddTodo from './addTodo.jsx';
import TodoList from './todoList.jsx';
import uuid from "uuid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            todo:[],
            id:uuid(),
            editItem: false
        }
        this.addTodo=this.addTodo.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.clearList=this.clearList.bind(this);
        // this.editTodo=this.editTodo.bind(this);
    }
    addTodo(e) {
        // console.log(e.target.value)
        this.setState({
            title:e.target.value
        })
    }
    handleButtonClick(e){
    
       var newTodo={id: this.state.id, title:this.state.title};
       const UpdateTodo= [...this.state.todo,newTodo];
      console.log(this.state.todo);
      this.setState({
          todo:UpdateTodo,
          title:'',
          id:uuid(),
          editItem:false
      })
      e.preventDefault()
    }
    clearList() {
        this.setState({todo:[]})
    }
    editTodo= id => {
        const filterArray= this.state.todo.filter(item => item.id!==id);
        const selectedTodo= this.state.todo.find(item =>item.id===id);
        this.setState({
           todo:filterArray,
           title:selectedTodo.title,
           id:id,
           editItem:true
        })
    }
    deleteTodo =id => {
        const filterArray = this.state.todo.filter( item => item.id!== id);
        this.setState({
            todo:filterArray
        })
    }
    render() {
        return (
            <div className="app-container">
                <Header />
                <AddTodo title={this.state.title} addTodo={this.addTodo} handleButtonClick={this.handleButtonClick} editItem={this.state.editItem}/>
                <TodoList todo={this.state.todo} clearList={this.clearList} editTodo={this.editTodo} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default App;