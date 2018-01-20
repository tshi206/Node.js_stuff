import {IncomingMessage, ServerResponse} from "http";
import {createReadStream} from "fs";

// a trivial implementation of basic routing in node.js_templates via if-else statements
export function  NaiveHTTPResponseBuilder
(request: IncomingMessage, response: ServerResponse){

    let url = request.url;

    if (url === "/" || url === "/home" || url === "/index"){
        response.writeHead(200, {"Content-Type" : "text/html"});

        // you can manually listen to the 'finish' event on the piped stream
        // otherwise response will be ended by pipe automatically
        createReadStream(__dirname+"/index.html", "utf8")
            .pipe(response)
            .on('finish', () => console.log(`response has been sent to ${request.url}`));

    } else if (url === "/i_am_your_worst_nightmare"){
        // setHeader() must be called before writeHead(). see ref: https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
        response.setHeader("Location", "https://masonshi23.wixsite.com/website");

        // change status code to 302 to indicate a redirection
        response.writeHead(302, {"Content-Type" : "text/html"});

        response.end("redirecting to your worst nightmare", "utf8",
            () => console.log("response has been sent"))

    } else if (url === "/lorem_ipsum"){
        response.writeHead(200, {"Content-Type" : "text/html"});

        // be aware that the Response itself is also classified as a Writable stream so we can pipe a readable stream to it
        // you can manually listen to the 'finish' event on the piped stream
        // otherwise response will be ended by pipe automatically
        createReadStream(__dirname+"/lorem_ipsum.txt", "utf8").pipe(response);
    } else if (url === "/api/json"){
        // below shows how to send a JSON in response
        response.setHeader("Content-Type", "application/json");
        response.writeHead(200);
        let myObj = {name: "foo", age:"9999", job:"bar"};
        response.end(JSON.stringify(myObj),
            () => console.log(`JSON : ${myObj} has been sent to ${request.url}` ))

    } else {
        response.writeHead(404, {"Content-Type" : "text/html"});
        createReadStream(__dirname+"/404.html", "utf8").pipe(response);
    }
}