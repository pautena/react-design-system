// package: sp.rpc.userpresence
// file: SP/Rpc/UserPresence/user_presence.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class UserPresence extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  hasUpdateTs(): boolean;
  clearUpdateTs(): void;
  getUpdateTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPresenceData(): boolean;
  clearPresenceData(): void;
  getPresenceData(): PresenceData | undefined;
  setPresenceData(value?: PresenceData): void;

  getOnline(): boolean;
  setOnline(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPresence.AsObject;
  static toObject(includeInstance: boolean, msg: UserPresence): UserPresence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPresence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPresence;
  static deserializeBinaryFromReader(message: UserPresence, reader: jspb.BinaryReader): UserPresence;
}

export namespace UserPresence {
  export type AsObject = {
    userId: number,
    updateTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    presenceData?: PresenceData.AsObject,
    online: boolean,
  }
}

export class PresenceData extends jspb.Message {
  getState(): number;
  setState(value: number): void;

  hasCustomData(): boolean;
  clearCustomData(): void;
  getCustomData(): google_protobuf_any_pb.Any | undefined;
  setCustomData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PresenceData.AsObject;
  static toObject(includeInstance: boolean, msg: PresenceData): PresenceData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PresenceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PresenceData;
  static deserializeBinaryFromReader(message: PresenceData, reader: jspb.BinaryReader): PresenceData;
}

export namespace PresenceData {
  export type AsObject = {
    state: number,
    customData?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class PresenceChangedNotification extends jspb.Message {
  hasPresence(): boolean;
  clearPresence(): void;
  getPresence(): UserPresence | undefined;
  setPresence(value?: UserPresence): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PresenceChangedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: PresenceChangedNotification): PresenceChangedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PresenceChangedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PresenceChangedNotification;
  static deserializeBinaryFromReader(message: PresenceChangedNotification, reader: jspb.BinaryReader): PresenceChangedNotification;
}

export namespace PresenceChangedNotification {
  export type AsObject = {
    presence?: UserPresence.AsObject,
  }
}

export class OnlineStateChangedNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  hasUpdateTs(): boolean;
  clearUpdateTs(): void;
  getUpdateTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOnline(): boolean;
  setOnline(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineStateChangedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineStateChangedNotification): OnlineStateChangedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnlineStateChangedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineStateChangedNotification;
  static deserializeBinaryFromReader(message: OnlineStateChangedNotification, reader: jspb.BinaryReader): OnlineStateChangedNotification;
}

export namespace OnlineStateChangedNotification {
  export type AsObject = {
    userId: number,
    updateTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    online: boolean,
  }
}

