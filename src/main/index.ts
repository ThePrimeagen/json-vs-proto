import http from "http";
import { Lolomo, LolomoExt } from "../types";

const port = +(process.env.PORT || 42069);
const lolomoServiceUrl = process.env.LOLOMO_SERVICE_URL || "http://lolomo-service.theprimeagen.tv:42069";
const ratingsServiceUrl = process.env.RATINGS_SERVICE_URL || "http://ratings-service.theprimeagen.tv:42069";

function pluckAllIds(lolomo: Lolomo): number[][] {
    const out: number[][] = [];

    for (const list of lolomo.lists) {
        const row: number[] = [];
        for (const video of list.videos) {
            row.push(video.id);
        }
        out.push(row);
    }

    return out;
}

http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    // contact the lolomo service.
    const lolomo = (await (await fetch(lolomoServiceUrl)).json()) as LolomoExt;

    // get the ratings
    const ids = pluckAllIds(lolomo);
    const ratings = (await (await fetch(ratingsServiceUrl, {
        method: "POST",
        body: JSON.stringify(ids),
    })).json()) as number[][];

    for (let i = 0; i < ratings.length; ++i) {
        const row = ratings[i];
        for (let j = 0; j < row.length; j++) {
            lolomo.lists[i].videos[j].rating = row[i];
        }
    }

    res.end(JSON.stringify(lolomo));
}).listen(port);


