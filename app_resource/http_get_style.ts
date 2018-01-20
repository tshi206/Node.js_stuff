import {Express} from "express";

const options = {
    //root: __dirname + '/public/', // set this to specify a customized root directory for sendFile() to lookup
    dotfiles: 'deny', // Option for serving dotfiles. Possible values are “allow”, “deny”, “ignore”.
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
        'Content-Type': 'text/css'
    }
};

export let httpGetStyleSheet = (app : Express) => {
    app.get("/node_modules/bootstrap/dist/css/bootstrap.min.css",
        (req, res) => {
            console.log("Attempts to respond to: " + req.url);
            // sendFile requires absolute path so need to subtract /app_resource/ from __dirname
            res.sendFile(
                `${__dirname.substring(0, 1 + (__dirname.length - "/app_resource/".length))}/node_modules/bootstrap/dist/css/bootstrap.min.css`,
                options,
                (err) => {
                    if (err){
                        console.log(`${__dirname.substring(0, 1 + (__dirname.length - "/app_resource/".length))}/node_modules/bootstrap/dist/css/bootstrap.min.css`);
                        throw err
                    }else {
                        console.log("OK")
                    }
                });
        });

    app.get("/app_resource/resource_files/css/A3.css",
        (req, res) => {
            console.log("Attempts to respond to: " + req.url);
            res.sendFile(`${__dirname}/resource_files/css/A3.css`,
                options,
                (err) => {
                if (err) {
                    console.log(`${__dirname}/resource_files/css/A3.css`);
                    throw err
                }else {
                    console.log("OK")
                }
            })
        })
};