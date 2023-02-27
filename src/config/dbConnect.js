import mongoose from "mongoose";

mongoose.connect("mongodb+srv://henry:123@alura-challenge.pvneprk.mongodb.net/node-challenge?retryWrites=true&w=majority")
let db =  mongoose.connection

export default db