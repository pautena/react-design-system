// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/basic_request_context.proto

import * as jspb from "google-protobuf";

export class BasicRequestContext extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getSessionId(): number;
  setSessionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicRequestContext.AsObject;
  static toObject(includeInstance: boolean, msg: BasicRequestContext): BasicRequestContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicRequestContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicRequestContext;
  static deserializeBinaryFromReader(message: BasicRequestContext, reader: jspb.BinaryReader): BasicRequestContext;
}

export namespace BasicRequestContext {
  export type AsObject = {
    userId: number,
    sessionId: number,
  }
}

