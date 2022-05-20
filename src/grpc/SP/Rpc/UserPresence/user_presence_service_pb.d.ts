// package: sp.rpc.userpresence
// file: SP/Rpc/UserPresence/user_presence_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_UserPresence_user_presence_pb from "../../../SP/Rpc/UserPresence/user_presence_pb";

export class SetPresenceRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  hasPresenceData(): boolean;
  clearPresenceData(): void;
  getPresenceData(): SP_Rpc_UserPresence_user_presence_pb.PresenceData | undefined;
  setPresenceData(value?: SP_Rpc_UserPresence_user_presence_pb.PresenceData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPresenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPresenceRequest): SetPresenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPresenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPresenceRequest;
  static deserializeBinaryFromReader(message: SetPresenceRequest, reader: jspb.BinaryReader): SetPresenceRequest;
}

export namespace SetPresenceRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    presenceData?: SP_Rpc_UserPresence_user_presence_pb.PresenceData.AsObject,
  }
}

export class SetPresenceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPresenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPresenceResponse): SetPresenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPresenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPresenceResponse;
  static deserializeBinaryFromReader(message: SetPresenceResponse, reader: jspb.BinaryReader): SetPresenceResponse;
}

export namespace SetPresenceResponse {
  export type AsObject = {
  }
}

export class HeartbeatRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatRequest): HeartbeatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeartbeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatRequest;
  static deserializeBinaryFromReader(message: HeartbeatRequest, reader: jspb.BinaryReader): HeartbeatRequest;
}

export namespace HeartbeatRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class HeartbeatResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatResponse): HeartbeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatResponse;
  static deserializeBinaryFromReader(message: HeartbeatResponse, reader: jspb.BinaryReader): HeartbeatResponse;
}

export namespace HeartbeatResponse {
  export type AsObject = {
  }
}

export class GetPresenceRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): void;
  addUserIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPresenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPresenceRequest): GetPresenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPresenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPresenceRequest;
  static deserializeBinaryFromReader(message: GetPresenceRequest, reader: jspb.BinaryReader): GetPresenceRequest;
}

export namespace GetPresenceRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userIdsList: Array<number>,
  }
}

export class GetPresenceResponse extends jspb.Message {
  clearUserPresencesList(): void;
  getUserPresencesList(): Array<SP_Rpc_UserPresence_user_presence_pb.UserPresence>;
  setUserPresencesList(value: Array<SP_Rpc_UserPresence_user_presence_pb.UserPresence>): void;
  addUserPresences(value?: SP_Rpc_UserPresence_user_presence_pb.UserPresence, index?: number): SP_Rpc_UserPresence_user_presence_pb.UserPresence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPresenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPresenceResponse): GetPresenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPresenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPresenceResponse;
  static deserializeBinaryFromReader(message: GetPresenceResponse, reader: jspb.BinaryReader): GetPresenceResponse;
}

export namespace GetPresenceResponse {
  export type AsObject = {
    userPresencesList: Array<SP_Rpc_UserPresence_user_presence_pb.UserPresence.AsObject>,
  }
}

export class OfflineRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineRequest): OfflineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineRequest;
  static deserializeBinaryFromReader(message: OfflineRequest, reader: jspb.BinaryReader): OfflineRequest;
}

export namespace OfflineRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class OfflineResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineResponse): OfflineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineResponse;
  static deserializeBinaryFromReader(message: OfflineResponse, reader: jspb.BinaryReader): OfflineResponse;
}

export namespace OfflineResponse {
  export type AsObject = {
  }
}

