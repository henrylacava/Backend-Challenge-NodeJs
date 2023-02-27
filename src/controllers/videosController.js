import videos from "../models/Video.js"

class VideoController {

    static listVideos = (req, res) => {
        videos.find().exec((err, videos) => {
            res.status(200).json(videos)
        })
    }

    static listVideoById = (req, res) => {
        videos.findById(req.params.id).exec((err, videos) => {
            if(err){
                res.status(400).send("Not found")
            }else{
                res.status(200).send(videos)
            }
        })
    }

    static createVideo = (req, res) => {
      const video = new videos(req.body)

      video.save((err) => {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).json(video)
        }
      })
}

    static uptadeVideo = (req, res) => {
        videos.findByIdAndUpdate(req.params.id, req.body, (err, videos) => {
            if(err){
                res.status(500).send(err.message)
            }else{
                res.status(200).json(videos)
            }
        })
    }

    static deleteVideo = (req, res) => {
        videos.findByIdAndDelete(req.params.id, (err) => {
            if (err){
                res.status(500).send(err.message)
            }else{
                res.status(200).send('Deleted')
            }
        })
    }
}

export default VideoController