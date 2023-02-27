import express from "express"
import VideoController from "../controllers/videosController.js"

const router = express.Router()

router
    .get("/videos", VideoController.listVideos)
    .get("/videos/:id", VideoController.listVideoById)
    .post("/videos", VideoController.createVideo)
    .put("/videos/:id", VideoController.uptadeVideo)
    .delete("/videos/:id", VideoController.deleteVideo)
export default router