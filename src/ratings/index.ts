import http from "http";
import { MAX_VIDEO_LENGTH } from "../consts";
import { clamp } from "../utils";
const port = +(process.env.PORT || 42069);

const ratings = new Array(MAX_VIDEO_LENGTH).fill(0).map(() => clamp(1, 5));

function readData(req: http.IncomingMessage): Promise<string> {
    return new Promise<string>(resolve => {
        let data = "";
        req.on("data", chunk => {
            data += chunk;
        });
        req.on("end", () => {
            resolve(data)
        });
    });
}

http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    const data = await readData(req);
    try {
        const ids = JSON.parse(data) as number[][];
        res.end(JSON.stringify(ids.map(row => row.map(id => ratings[id]))));
        return;
    } catch (e) {
        // this should never happen?
        console.log(e);
    }

    res.end(JSON.stringify([]));
}).listen(port);

