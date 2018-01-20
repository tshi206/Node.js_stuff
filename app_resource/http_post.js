"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
// bodyParser.urlencoded() returns a function that can parse HTTP body from a web form
let urlencodedParser = bodyParser.urlencoded({ extended: false });
exports.httpPost = (app) => {
    // Pass in the urlencodedParser as a middleware which will be fired
    // whenever a post request is sent to "/contact", BEFORE our customized
    // request handler is called.
    // The way the middleware works here is similar to when we use app.use().
    // The difference here is we pass in the middleware directly via the app.post()
    // method.
    // The equivalent implementation can be as following:
    //      app.use("/contact", urlencodedParser);
    //      app.post("/contact", **customized_handler_goes_here**);
    app.post("/contact", urlencodedParser, ((req, res) => {
        // urlencodedParser will fill up the req.body property with the result it parsed
        if (req.body) {
            console.log(req.body);
            res.render("contact-success", { data: req.body });
        }
        else
            res.sendStatus(400);
    }));
};
//# sourceMappingURL=http_post.js.map