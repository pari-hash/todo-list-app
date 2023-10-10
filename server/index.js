const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, // Allow credentials (cookies, etc.)
  };
  
  app.use(cors(corsOptions));

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require('./routes/todoItems');
const EmployeeModel = require('./models/Employee');


//connect to mongodb ..
mongoose.connect('mongodb://127.0.0.1:27017/todo')
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password)
              res.json("Success");
            else 
              res.json("Incorrect password, try again.");
        }
        else {
            res.json("Email not registered, Please try again after registering.")
        }
   })
})
app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees =>res.json(employees))
    .catch(err=>res.json(err));
})
app.use('/', TodoItemRoute);



//connect to server
app.listen(5500, ()=> console.log("Server connected") );
