import express from 'express';
import mongoose from 'mongoose';
import Student from './studentmodel.js';

mongoose.connect('mongodb+srv://dinu0000:RLQHO0usK6afBaNN@dinuks.zqu91qf.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch((error) => console.log('DB has connection error'));
const app = express();

app.use((express.json()))
app.use((express.urlencoded({ extended: true })))

app.get('/', (req, res) => {
  res.send('Server is live')
})


app.post('/createstudent', async (req, res) => {

  const { roll, department, contact, name, identity } = req.body;
  console.log(req.body)

  const user = new Student({ roll: roll, name: name, department: department, contact: contact, identity: identity })
  try {
    await user.save()
    console.log('student added')
    res.send('Success');
  } catch (error) {
    console.log('Student not created')
    res.send('error')
  }
})


app.get('/studentdata', async (req, res) => {
  const user = await Student.find()

  res.json(user);
})

app.get("/getstudent/:_id", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const std = await Student.findById(_id);
  res.json(std); 
})

app.get("/upstudent/:_id/:_name", async (req, res) => {
  const { _id, _name } = req.params;
  console.log(_id);
  console.log(_name);
  const std = await Student.findByIdAndUpdate(_id, {name: _name});
  res.json(std)
})

app.get("/deletestudent/:_id", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const std = await Student.findByIdAndDelete(_id);
  res.send('std deleted'); 
})

....b.user[a];

app.listen(5000, () => {
  console.log('Running on port 5000')
})