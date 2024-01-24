import mongoose from "mongoose";

async function connectToMongodb(url){
    return mongoose.connect(url);
}


export {connectToMongodb as connectToMongodb};