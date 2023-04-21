
export function wait(ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
}

function mulberry32(a: number) {
    return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const random = mulberry32(0xbabecafe);

export function randomString(length: number): string {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let out = "";
    for (let i = 0; i < length; ++i) {
        out += chars[rando(chars.length)];
    }
    return out;
}

export function rando(max: number): number {
    return Math.floor(random() * max);
}

export function clamp(min: number, max: number): number {
    return Math.floor(random() * (max - min + 1)) + min;
}
