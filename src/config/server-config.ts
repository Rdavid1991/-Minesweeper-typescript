import express ,{ Express } from "express";
import exphbs from "express-handlebars";
import path from "path";


import Route  from "../routes"

class Config {

    app: Express;

    constructor(app: Express) {
        this.app = app
        this.app.set("port", process.env.PORT || 3000)
        this.hbsConfig()
        this.middlewares()

        this.app  = new Route(this.app).app;
    }

    hbsConfig(): void{
        this.app.set("views", path.join(__dirname,"../views"))
        this.app.engine(".hbs",exphbs({
            defaultLayout: 'main',
            partialsDir: path.join(this.app.get('views'), 'partials'),
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            extname: '.hbs',
           // helpers: require('../helpers')
        }));
        this.app.set("view engine",".hbs");
    }

    middlewares(): void{

        this.app.use("/public", express.static(path.join(__dirname,"../public")));
    }
}

export default Config;