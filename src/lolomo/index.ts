import http from "http";
import { createLolomo } from "./lolomo";

const port = +(process.env.PORT || 42069);

http.createServer(async (_, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(createLolomo()));
}).listen(port);



