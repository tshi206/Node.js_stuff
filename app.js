"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_get_1 = require("./app_resource/http_get");
const http_post_1 = require("./app_resource/http_post");
let app = express();
// Set the view engine (a.k.a template engine) for express.
// The default folder name for express to lookup our
// template html files is called 'views'
// relative to the current directory of the application.
app.set("view engine", "ejs");
// httpGetStyleSheet(app); // handle all requests to static files manually like this will dramatically reduce the scalability
// to serve up static file efficiently, we can either use our customized middleware or use the built-in one in express
// express.static is a function (a.k.a middleware) that match the given URI with a specific local path (e.g. some directory)
// and serve the files inside this directory automatically if any URI requested matches the prefix given at the first Param
// in the method use().
// For example, app_resource/resource_files/css/A3.css will be served automatically by this middleware so then we don't
// need to create a separate get() method to handle a particular request made to "/app_resource/resource_files/css/A3.css".
// Any request starting with "/app_resource/resource_files/css" will be handled by this middleware.
// In addition, a middleware must call next() in its callback function:
//   app.use(*some_path*, (req, res, next) => {
//      console.log(req.url);
//      next()
//      })
// The function next() is used to invoke the next middleware, or the next request handler if there are any.
// Since express.static() is calling the next() internally, we don't need to worry about it anymore.
app.use("/app_resource/resource_files/css", express.static("app_resource/resource_files/css"));
http_get_1.httpGet(app);
http_post_1.httpPost(app);
app.listen(3000, "127.0.0.1", () => {
    console.log("server now listening at 127.0.0.1:3000");
});
//# sourceMappingURL=app.js.map