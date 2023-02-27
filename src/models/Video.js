import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        id: {type: String},
        Título: {type: String, required: true},
        Descrição: {type: String, required: true},
        URL: {type: String, required: true}
    }
)

const videos = mongoose.model('videos', videoSchema)

export default videos