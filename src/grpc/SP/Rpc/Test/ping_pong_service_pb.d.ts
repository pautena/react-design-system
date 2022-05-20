// package: sp.rpc.test
// file: SP/Rpc/Test/ping_pong_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PingPongRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingPongRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingPongRequest): PingPongRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingPongRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingPongRequest;
  static deserializeBinaryFromReader(message: PingPongRequest, reader: jspb.BinaryReader): PingPongRequest;
}

export namespace PingPongRequest {
  export type AsObject = {
    requestId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PingPongResponse extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getResponseId(): string;
  setResponseId(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingPongResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingPongResponse): PingPongResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingPongResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingPongResponse;
  static deserializeBinaryFromReader(message: PingPongResponse, reader: jspb.BinaryReader): PingPongResponse;
}

export namespace PingPongResponse {
  export type AsObject = {
    requestId: string,
    responseId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

