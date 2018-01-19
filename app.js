"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_get_1 = require("./app_resource/http_get");
let app = express();
// Set the view engine (a.k.a template engine) for express.
// The default folder name for express to lookup our
// template html files is called 'views'
// relative to the current directory of the application.
app.set("view engine", "ejs");
http_get_1.httpGet(app);
app.listen(3000, "127.0.0.1", () => {
    console.log("server now listening at 127.0.0.1:3000");
});
//# sourceMappingURL=app.js.map