import express from "express"
import routerVideo from "./videosRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Alura Challenge"})
    })

    app.use(
        express.json(),
        routerVideo
    )
}

export default routes