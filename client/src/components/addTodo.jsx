import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("hi",this.props);
        return (
            <div>
                <form onSubmit={this.props.handleButtonClick}>
                    <input className="form-control" type="text" placeholder="Write your todo here ..." value={this.props.title} onChange={this.props.addTodo}></input>
                    <input className="form-control btn btn-secondary" type="submit" value="Add Todo"></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;