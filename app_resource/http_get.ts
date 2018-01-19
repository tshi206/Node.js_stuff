import {Express} from "express";
import {createReadStream} from "fs";

export let httpGet = (app : Express) => {
    app.get("/", (req, res) => {
        // because the template file has already been stored in the
        // default folder (i.e. "views"), we don't need to specify
        // the path to the file explicitly
        res.render("index")
    });

    app.get("/contact", (req, res) => {
        res.render("contact")
    });

    app.get("/lorem_ipsum", (req, res) => {
        res.setHeader("Content-Type", "text/html");
        createReadStream(`${__dirname}/resource_files/lorem_ipsum.txt`)
            .pipe(res)
            .on("finish",
                () => console.log('sent out tons of lorem ipsums'));
    });

    // listening to a dynamic route with a parameter "name"
    app.get("/profile/:name", (req, res) => {
        let data = {age: 29, job: "ninja", hobbies: ["eating", "fighting", "fishing"]};
        // if a callback is specified, the rendered HTML string has to be sent explicitly
        res.render("profile", {person: req.params.name, data: data},
            (err, html) => {
                // This callback is always called BEFORE the rendered HTML string
                // being sent.
                // Therefore it is good for pre-processing the template file
                // or catch any compilation error around the template
                // before sending the response.
                if (err) {
                    console.log("Error: profile has not been sent");
                    console.log(`Error found in html: ${html}`);
                    throw err;
                } else {
                    // need to re-send the rendered HTML String manually
                    // if everything was okay
                    res.send(html);
                    console.log("Success: rendered 'profile.ejs' has been sent");
                }
            })
    })
};