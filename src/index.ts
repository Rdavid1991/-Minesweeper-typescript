import express from 'express';
import exphbs from 'express-handlebars';

import Config from './config/server-config'

const app = new Config(express()).app;

app.listen(app.get("port"), () => {
    console.log(`App is up in port ${app.get("port")}`)
});
