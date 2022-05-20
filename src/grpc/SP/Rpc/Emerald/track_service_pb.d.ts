// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/track_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as SP_Rpc_Emerald_request_context_pb from "../../../SP/Rpc/Emerald/request_context_pb";

export class Track extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Track.AsObject;
  static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Track;
  static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
  export type AsObject = {
  }

  export class Event extends jspb.Message {
    getType(): string;
    setType(value: string): void;

    hasTs(): boolean;
    clearTs(): void;
    getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_any_pb.Any | undefined;
    setData(value?: google_protobuf_any_pb.Any): void;

    getNum(): number;
    setNum(value: number): void;

    getId(): string;
    setId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
  }

  export namespace Event {
    export type AsObject = {
      type: string,
      ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      data?: google_protobuf_any_pb.Any.AsObject,
      num: number,
      id: string,
    }
  }

  export class CommonData extends jspb.Message {
    hasTs(): boolean;
    clearTs(): void;
    getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getDts(): number;
    setDts(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommonData.AsObject;
    static toObject(includeInstance: boolean, msg: CommonData): CommonData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommonData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommonData;
    static deserializeBinaryFromReader(message: CommonData, reader: jspb.BinaryReader): CommonData;
  }

  export namespace CommonData {
    export type AsObject = {
      ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      dts: number,
    }
  }

  export class AuthorizedRequest extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    hasCommonData(): boolean;
    clearCommonData(): void;
    getCommonData(): Track.CommonData | undefined;
    setCommonData(value?: Track.CommonData): void;

    clearEventsList(): void;
    getEventsList(): Array<Track.Event>;
    setEventsList(value: Array<Track.Event>): void;
    addEvents(value?: Track.Event, index?: number): Track.Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizedRequest): AuthorizedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizedRequest;
    static deserializeBinaryFromReader(message: AuthorizedRequest, reader: jspb.BinaryReader): AuthorizedRequest;
  }

  export namespace AuthorizedRequest {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
      commonData?: Track.CommonData.AsObject,
      eventsList: Array<Track.Event.AsObject>,
    }
  }

  export class UnauthorizedRequest extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    hasCommonData(): boolean;
    clearCommonData(): void;
    getCommonData(): Track.CommonData | undefined;
    setCommonData(value?: Track.CommonData): void;

    clearEventsList(): void;
    getEventsList(): Array<Track.Event>;
    setEventsList(value: Array<Track.Event>): void;
    addEvents(value?: Track.Event, index?: number): Track.Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnauthorizedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnauthorizedRequest): UnauthorizedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnauthorizedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnauthorizedRequest;
    static deserializeBinaryFromReader(message: UnauthorizedRequest, reader: jspb.BinaryReader): UnauthorizedRequest;
  }

  export namespace UnauthorizedRequest {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
      commonData?: Track.CommonData.AsObject,
      eventsList: Array<Track.Event.AsObject>,
    }
  }
}

