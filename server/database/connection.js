
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        //mongodb connects string
        const con = await mongoose.connect(process.env.DATABASEURL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })

        console.log(`mongodb connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB