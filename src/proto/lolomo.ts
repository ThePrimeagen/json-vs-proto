/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "lolomo";

export interface Lolomo {
  lists: List[];
  id: string;
}

export interface List {
  videos: Video[];
  id: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  duration: number;
  boxArt: string;
  rating: number;
}

function createBaseLolomo(): Lolomo {
  return { lists: [], id: "" };
}

export const Lolomo = {
  encode(message: Lolomo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lists) {
      List.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lolomo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLolomo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.lists.push(List.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lolomo {
    return {
      lists: Array.isArray(object?.lists) ? object.lists.map((e: any) => List.fromJSON(e)) : [],
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Lolomo): unknown {
    const obj: any = {};
    if (message.lists) {
      obj.lists = message.lists.map((e) => e ? List.toJSON(e) : undefined);
    } else {
      obj.lists = [];
    }
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<Lolomo>, I>>(base?: I): Lolomo {
    return Lolomo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Lolomo>, I>>(object: I): Lolomo {
    const message = createBaseLolomo();
    message.lists = object.lists?.map((e) => List.fromPartial(e)) || [];
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseList(): List {
  return { videos: [], id: "" };
}

export const List = {
  encode(message: List, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.videos) {
      Video.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): List {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.videos.push(Video.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): List {
    return {
      videos: Array.isArray(object?.videos) ? object.videos.map((e: any) => Video.fromJSON(e)) : [],
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: List): unknown {
    const obj: any = {};
    if (message.videos) {
      obj.videos = message.videos.map((e) => e ? Video.toJSON(e) : undefined);
    } else {
      obj.videos = [];
    }
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<List>, I>>(base?: I): List {
    return List.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<List>, I>>(object: I): List {
    const message = createBaseList();
    message.videos = object.videos?.map((e) => Video.fromPartial(e)) || [];
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseVideo(): Video {
  return { id: 0, title: "", description: "", duration: 0, boxArt: "", rating: 0 };
}

export const Video = {
  encode(message: Video, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.duration !== 0) {
      writer.uint32(32).int64(message.duration);
    }
    if (message.boxArt !== "") {
      writer.uint32(42).string(message.boxArt);
    }
    if (message.rating !== 0) {
      writer.uint32(48).int32(message.rating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Video {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.duration = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.boxArt = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.rating = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Video {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      boxArt: isSet(object.boxArt) ? String(object.boxArt) : "",
      rating: isSet(object.rating) ? Number(object.rating) : 0,
    };
  },

  toJSON(message: Video): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.boxArt !== undefined && (obj.boxArt = message.boxArt);
    message.rating !== undefined && (obj.rating = Math.round(message.rating));
    return obj;
  },

  create<I extends Exact<DeepPartial<Video>, I>>(base?: I): Video {
    return Video.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Video>, I>>(object: I): Video {
    const message = createBaseVideo();
    message.id = object.id ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.duration = object.duration ?? 0;
    message.boxArt = object.boxArt ?? "";
    message.rating = object.rating ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
