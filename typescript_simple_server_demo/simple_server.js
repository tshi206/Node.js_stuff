"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
let simpleServer = http_1.createServer(((request, response) => {
    console.log(`request made from : ${request.url}`);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("hey there", "utf8", () => console.log("response has been sent"));
}));
simpleServer.listen(13000, "127.0.0.1");
console.log('server now listening at port 13000. (to terminate : Ctrl + C)');
//# sourceMappingURL=simple_server.js.map