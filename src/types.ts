
export type Lolomo = {
    lists: List[]
    id: string,
}

export type List = {
    videos: Video[],
    id: string,
}

export type Video = {
    id: number,
    title: string,
    description: string,
    duration: number,
    boxArt: string,
}

export type VideoExt = Video & {
    rating: number,
}

export type LolomoExt = Lolomo & {
    lists: ListExt[]
}

export type ListExt = List & {
    videos: VideoExt[],
}
