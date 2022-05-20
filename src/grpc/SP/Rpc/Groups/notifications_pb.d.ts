// package: sp.rpc.groups
// file: SP/Rpc/Groups/notifications.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Groups_groups_pb from "../../../SP/Rpc/Groups/groups_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class MemberJoinedNotification extends jspb.Message {
  hasMember(): boolean;
  clearMember(): void;
  getMember(): SP_Rpc_Groups_groups_pb.Member | undefined;
  setMember(value?: SP_Rpc_Groups_groups_pb.Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberJoinedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberJoinedNotification): MemberJoinedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberJoinedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberJoinedNotification;
  static deserializeBinaryFromReader(message: MemberJoinedNotification, reader: jspb.BinaryReader): MemberJoinedNotification;
}

export namespace MemberJoinedNotification {
  export type AsObject = {
    member?: SP_Rpc_Groups_groups_pb.Member.AsObject,
  }
}

export class MemberLeftNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberLeftNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberLeftNotification): MemberLeftNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberLeftNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberLeftNotification;
  static deserializeBinaryFromReader(message: MemberLeftNotification, reader: jspb.BinaryReader): MemberLeftNotification;
}

export namespace MemberLeftNotification {
  export type AsObject = {
    userId: number,
  }
}

export class GroupPayloadUpdatedNotification extends jspb.Message {
  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupPayloadUpdatedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: GroupPayloadUpdatedNotification): GroupPayloadUpdatedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupPayloadUpdatedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupPayloadUpdatedNotification;
  static deserializeBinaryFromReader(message: GroupPayloadUpdatedNotification, reader: jspb.BinaryReader): GroupPayloadUpdatedNotification;
}

export namespace GroupPayloadUpdatedNotification {
  export type AsObject = {
    payload?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MemberPayloadUpdatedNotification extends jspb.Message {
  hasMember(): boolean;
  clearMember(): void;
  getMember(): SP_Rpc_Groups_groups_pb.Member | undefined;
  setMember(value?: SP_Rpc_Groups_groups_pb.Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberPayloadUpdatedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberPayloadUpdatedNotification): MemberPayloadUpdatedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberPayloadUpdatedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberPayloadUpdatedNotification;
  static deserializeBinaryFromReader(message: MemberPayloadUpdatedNotification, reader: jspb.BinaryReader): MemberPayloadUpdatedNotification;
}

export namespace MemberPayloadUpdatedNotification {
  export type AsObject = {
    member?: SP_Rpc_Groups_groups_pb.Member.AsObject,
  }
}

