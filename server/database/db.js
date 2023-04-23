import mongoose from 'mongoose';

const DBConnection = async() =>{
    const MONODB_URI = `mongodb://user:codeforinterview@ac-pgtf042-shard-00-00.fhil6om.mongodb.net:27017,ac-pgtf042-shard-00-01.fhil6om.mongodb.net:27017,ac-pgtf042-shard-00-02.fhil6om.mongodb.net:27017/?ssl=true&replicaSet=atlas-ra9sc7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URI, {useNewUrlParser: true});
        console.log('Database Connected succesfully');
    }catch(error){
        console.error('Error while connecting with the database ',error.message);
    }
}

export default DBConnection;