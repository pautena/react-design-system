// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/json.proto

import * as jspb from "google-protobuf";

export class Json extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getChecksum(): string;
  setChecksum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Json.AsObject;
  static toObject(includeInstance: boolean, msg: Json): Json.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Json, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Json;
  static deserializeBinaryFromReader(message: Json, reader: jspb.BinaryReader): Json;
}

export namespace Json {
  export type AsObject = {
    payload: Uint8Array | string,
    checksum: string,
  }
}

