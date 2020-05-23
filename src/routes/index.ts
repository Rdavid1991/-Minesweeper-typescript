import {Router, Express} from "express"
import {getGame} from "../controllers/index"

class Route {
    router : Router;
    app : Express;

    constructor(app :Express) {
        this.router = Router()
        this.app = app
        this.callRoute()
    }

    callRoute():void{
        this.router.get("/", getGame)

        this.app.use(this.router)
    }
}

export default Route;