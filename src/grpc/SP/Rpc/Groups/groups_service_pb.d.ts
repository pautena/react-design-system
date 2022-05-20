// package: sp.rpc.groups
// file: SP/Rpc/Groups/groups_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_Groups_groups_pb from "../../../SP/Rpc/Groups/groups_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class GetGroupRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    groupId: string,
  }
}

export class GetGroupResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): SP_Rpc_Groups_groups_pb.Group | undefined;
  setGroup(value?: SP_Rpc_Groups_groups_pb.Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupResponse): GetGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupResponse;
  static deserializeBinaryFromReader(message: GetGroupResponse, reader: jspb.BinaryReader): GetGroupResponse;
}

export namespace GetGroupResponse {
  export type AsObject = {
    group?: SP_Rpc_Groups_groups_pb.Group.AsObject,
  }
}

export class CreateGroupRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFeature(): string;
  setFeature(value: string): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): void;

  hasMemberPayload(): boolean;
  clearMemberPayload(): void;
  getMemberPayload(): google_protobuf_any_pb.Any | undefined;
  setMemberPayload(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    groupId: string,
    name: string,
    feature: string,
    capacity: number,
    payload?: google_protobuf_any_pb.Any.AsObject,
    memberPayload?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class CreateGroupResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): SP_Rpc_Groups_groups_pb.Group | undefined;
  setGroup(value?: SP_Rpc_Groups_groups_pb.Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResponse): CreateGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResponse;
  static deserializeBinaryFromReader(message: CreateGroupResponse, reader: jspb.BinaryReader): CreateGroupResponse;
}

export namespace CreateGroupResponse {
  export type AsObject = {
    group?: SP_Rpc_Groups_groups_pb.Group.AsObject,
  }
}

export class JoinGroupRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  hasMemberPayload(): boolean;
  clearMemberPayload(): void;
  getMemberPayload(): google_protobuf_any_pb.Any | undefined;
  setMemberPayload(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupRequest): JoinGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupRequest;
  static deserializeBinaryFromReader(message: JoinGroupRequest, reader: jspb.BinaryReader): JoinGroupRequest;
}

export namespace JoinGroupRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    groupId: string,
    memberPayload?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class JoinGroupResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): SP_Rpc_Groups_groups_pb.Group | undefined;
  setGroup(value?: SP_Rpc_Groups_groups_pb.Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupResponse): JoinGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupResponse;
  static deserializeBinaryFromReader(message: JoinGroupResponse, reader: jspb.BinaryReader): JoinGroupResponse;
}

export namespace JoinGroupResponse {
  export type AsObject = {
    group?: SP_Rpc_Groups_groups_pb.Group.AsObject,
  }
}

export class LeaveGroupRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveGroupRequest): LeaveGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveGroupRequest;
  static deserializeBinaryFromReader(message: LeaveGroupRequest, reader: jspb.BinaryReader): LeaveGroupRequest;
}

export namespace LeaveGroupRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    groupId: string,
  }
}

export class LeaveGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveGroupResponse): LeaveGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveGroupResponse;
  static deserializeBinaryFromReader(message: LeaveGroupResponse, reader: jspb.BinaryReader): LeaveGroupResponse;
}

export namespace LeaveGroupResponse {
  export type AsObject = {
  }
}

export class UpdateGroupPayloadRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupPayloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupPayloadRequest): UpdateGroupPayloadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupPayloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupPayloadRequest;
  static deserializeBinaryFromReader(message: UpdateGroupPayloadRequest, reader: jspb.BinaryReader): UpdateGroupPayloadRequest;
}

export namespace UpdateGroupPayloadRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    groupId: string,
    payload?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class UpdateGroupPayloadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupPayloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupPayloadResponse): UpdateGroupPayloadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupPayloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupPayloadResponse;
  static deserializeBinaryFromReader(message: UpdateGroupPayloadResponse, reader: jspb.BinaryReader): UpdateGroupPayloadResponse;
}

export namespace UpdateGroupPayloadResponse {
  export type AsObject = {
  }
}

export class UpdateMemberPayloadRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMemberPayloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMemberPayloadRequest): UpdateMemberPayloadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMemberPayloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMemberPayloadRequest;
  static deserializeBinaryFromReader(message: UpdateMemberPayloadRequest, reader: jspb.BinaryReader): UpdateMemberPayloadRequest;
}

export namespace UpdateMemberPayloadRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    groupId: string,
    payload?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class UpdateMemberPayloadResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMemberPayloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMemberPayloadResponse): UpdateMemberPayloadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMemberPayloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMemberPayloadResponse;
  static deserializeBinaryFromReader(message: UpdateMemberPayloadResponse, reader: jspb.BinaryReader): UpdateMemberPayloadResponse;
}

export namespace UpdateMemberPayloadResponse {
  export type AsObject = {
  }
}

