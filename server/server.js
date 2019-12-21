const express = require('express')
const app = express()
const port = 3333;

const mongoose =require('mongoose');

const db = 'mongodb://localhost:27017/todos';
mongoose.connect(db, { useNewUrlParser: true })
.then(console.log("MongoDB database connection established successfully"))
.catch(err=>console.log(err));

const todoSchema=new mongoose.Schema({
    title:String,
    complete: {
        type:Boolean,
        default:false
    }
});

const Todo= mongoose.model('todolist', todoSchema);
app.get('/todos', (req, res) => {
    Todo.find().then(todo=>res.json(todo))
}
    
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))