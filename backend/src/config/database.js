const mongoose = require('mongoose')

const connectDb = async () =>{
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        })
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch(error){
        console.log(error);

    }
}

module.exports = {connectDb}