"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    //root: __dirname + '/public/', // set this to specify a customized root directory for sendFile() to lookup
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
        'Content-Type': 'text/css'
    }
};
exports.httpGetStyleSheet = (app) => {
    app.get("/node_modules/bootstrap/dist/css/bootstrap.min.css", (req, res) => {
        console.log("Attempts to respond to: " + req.url);
        // sendFile requires absolute path so need to subtract /app_resource/ from __dirname
        res.sendFile(`${__dirname.substring(0, 1 + (__dirname.length - "/app_resource/".length))}/node_modules/bootstrap/dist/css/bootstrap.min.css`, options, (err) => {
            if (err) {
                console.log(`${__dirname.substring(0, 1 + (__dirname.length - "/app_resource/".length))}/node_modules/bootstrap/dist/css/bootstrap.min.css`);
                throw err;
            }
            else {
                console.log("OK");
            }
        });
    });
    app.get("/app_resource/resource_files/css/A3.css", (req, res) => {
        console.log("Attempts to respond to: " + req.url);
        res.sendFile(`${__dirname}/resource_files/css/A3.css`, options, (err) => {
            if (err) {
                console.log(`${__dirname}/resource_files/css/A3.css`);
                throw err;
            }
            else {
                console.log("OK");
            }
        });
    });
};
//# sourceMappingURL=http_get_style.js.map