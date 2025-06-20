import mongoose from "mongoose"

export const initMongoConnection = async()=>{
    try{
        const {MONGODB_USER,MONGODB_PASSWORD} = process.env
        const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.xciwg0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(connectionString)
        console.log("Mongo connection successfully established!")

    }catch(err){
        console.log("Error connecting to MongoDB:", err)
        process.exit(1)
    }
}