const express=require('express');
const app = express();
const cors=require('cors');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sumit:sumit@cluster0.enrbqt5.mongodb.net/Employee_Data?retryWrites=true&w=majority',{
  useNewUrlParser: true,
});


app.use(bodyParser.json())

const EmployeeModel=require('./models/Employee')


app.use(cors());
app.post('/insert', async(req, res) => {
  const emp = new  EmployeeModel(req.body);
  await emp.save().then(() =>console.log('Success'))
})




app.post('/get', async(req, res) => {
  const id=req.body.id;
  
  try{
  const Employee = await EmployeeModel.findById(id);
  res.status(200).send({
    status: 'Success',
    data: Employee,
  })

  }
  catch(err){console.log(err)}
})


app.put ('/update', async(req, res) => {
  const update = req.body.empData;
  console.log("req received update"+ req.body.id);
  EmployeeModel.findByIdAndUpdate(req.body.id,update).exec();
})
app.put ('/delete', async(req, res) => {
  EmployeeModel.findByIdAndDelete(req.body.id).exec();
})



app.get('/read', async(req, res) => {
  const allUsers = await EmployeeModel.find()
  res.status(200).send({
    status: 'Success',
    data: allUsers,
  })
})
  


app.use(express.json())
app.listen(3001,()=>{
    console.log('listening on 3001')
});
