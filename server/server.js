const express = require('express');
const path=require('path');
var bodyParser = require('body-parser')

const app = express();
const port = 3333;
const cors=require("cors");

// var index = require("./routes/index");
// var tasks = require("./routes/tasks");

// Set Static Folder
app.use('/', express.static(path.join(__dirname, '../client/dist/')))

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );
  
  //View Engine
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  app.engine("html", require("ejs").renderFile);

  // Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", index);
// app.use("/api", tasks);

// const mongoose =require('mongoose');

// const db = 'mongodb://localhost:27017/todos';
// mongoose.connect(db, { useNewUrlParser: true })
// .then(console.log("MongoDB database connection established successfully"))
// .catch(err=>console.log(err));

// const todoSchema=new mongoose.Schema({
//     title:String,
//     complete: {
//         type:Boolean,
//         default:false
//     }
// });

// const Todo= mongoose.model('todolist', todoSchema);
// app.get('/todos', (req, res) => {
//     Todo.find().then(todo=>res.json(todo))
// });
// app.post('/todos',(req,res)=> {
//     const newTodo=new Todo({
//         title :req.body.title
//     })
//     newTodo.save().then(todo=>res.json(todo));
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))