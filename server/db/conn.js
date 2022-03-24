var mongoose = require('mongoose');

//Database URI from .env
const MONGODB_URI = process.env.DATABASE

// For connection with mongodb 
mongoose.connect('mongodb+srv://AryanAdmin:shindearyan57007@cluster0.h9cql.mongodb.net/sih2k22?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connection successful");
}).catch((err)=>{
    console.log("No connection with DB")
})