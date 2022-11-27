import mongoose from 'mongoose';


const student = mongoose.Schema({
    roll: String,
    name: String,
    department: String,
    contact: String,
    identity: String
});

const studentmodel = mongoose.model('Studentmodel', student);
export default studentmodel;