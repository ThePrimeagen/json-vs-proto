import { Lolomo } from "../types";
import { rando, randomString } from "../utils";
import { videos } from "./helpers";

export function createLolomo(): Lolomo {
    return {
        id: randomString(16),
        lists: new Array(10).fill(0).map(() => {
            return {
                id: randomString(16),
                videos: new Array(10).fill(0).map(() => {
                    return videos[rando(videos.length)];
                })
            };
        }),
    };
}

