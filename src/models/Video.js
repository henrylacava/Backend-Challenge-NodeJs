import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        id: {type: String},
        Título: {type: String, required: true, maxlength: 30},
        Descrição: {type: String, required: true, maxlength: 30},
        URL: {type: String, required: true, match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Please fill a valid URL'] }
    }
)

const videos = mongoose.model('videos', videoSchema)

export default videos
