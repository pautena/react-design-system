// package: sp.rpc.team
// file: SP/Rpc/Team/admin_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Team_team_pb from "../../../SP/Rpc/Team/team_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class GetTeamRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamRequest): GetTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamRequest;
  static deserializeBinaryFromReader(message: GetTeamRequest, reader: jspb.BinaryReader): GetTeamRequest;
}

export namespace GetTeamRequest {
  export type AsObject = {
    teamId: string,
  }
}

export class GetTeamResponse extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): SP_Rpc_Team_team_pb.Team | undefined;
  setTeam(value?: SP_Rpc_Team_team_pb.Team): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamResponse): GetTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamResponse;
  static deserializeBinaryFromReader(message: GetTeamResponse, reader: jspb.BinaryReader): GetTeamResponse;
}

export namespace GetTeamResponse {
  export type AsObject = {
    team?: SP_Rpc_Team_team_pb.Team.AsObject,
  }
}

export class UpdateTeamRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): void;

  getIsReady(): boolean;
  setIsReady(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTeamRequest): UpdateTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTeamRequest;
  static deserializeBinaryFromReader(message: UpdateTeamRequest, reader: jspb.BinaryReader): UpdateTeamRequest;
}

export namespace UpdateTeamRequest {
  export type AsObject = {
    teamId: string,
    metadata?: google_protobuf_any_pb.Any.AsObject,
    isReady: boolean,
  }
}

export class UpdateTeamResponse extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): SP_Rpc_Team_team_pb.Team | undefined;
  setTeam(value?: SP_Rpc_Team_team_pb.Team): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTeamResponse): UpdateTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTeamResponse;
  static deserializeBinaryFromReader(message: UpdateTeamResponse, reader: jspb.BinaryReader): UpdateTeamResponse;
}

export namespace UpdateTeamResponse {
  export type AsObject = {
    team?: SP_Rpc_Team_team_pb.Team.AsObject,
  }
}

export class ResetTeamMetadataRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetTeamMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetTeamMetadataRequest): ResetTeamMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetTeamMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetTeamMetadataRequest;
  static deserializeBinaryFromReader(message: ResetTeamMetadataRequest, reader: jspb.BinaryReader): ResetTeamMetadataRequest;
}

export namespace ResetTeamMetadataRequest {
  export type AsObject = {
    teamId: string,
  }
}

export class ResetTeamMetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetTeamMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetTeamMetadataResponse): ResetTeamMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetTeamMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetTeamMetadataResponse;
  static deserializeBinaryFromReader(message: ResetTeamMetadataResponse, reader: jspb.BinaryReader): ResetTeamMetadataResponse;
}

export namespace ResetTeamMetadataResponse {
  export type AsObject = {
  }
}

export class ResetUserMetadataRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserMetadataRequest): ResetUserMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserMetadataRequest;
  static deserializeBinaryFromReader(message: ResetUserMetadataRequest, reader: jspb.BinaryReader): ResetUserMetadataRequest;
}

export namespace ResetUserMetadataRequest {
  export type AsObject = {
    teamId: string,
    userId: number,
  }
}

export class ResetUserMetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserMetadataResponse): ResetUserMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserMetadataResponse;
  static deserializeBinaryFromReader(message: ResetUserMetadataResponse, reader: jspb.BinaryReader): ResetUserMetadataResponse;
}

export namespace ResetUserMetadataResponse {
  export type AsObject = {
  }
}

export class ChangeAdminRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeAdminRequest): ChangeAdminRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeAdminRequest;
  static deserializeBinaryFromReader(message: ChangeAdminRequest, reader: jspb.BinaryReader): ChangeAdminRequest;
}

export namespace ChangeAdminRequest {
  export type AsObject = {
    teamId: string,
    userId: number,
  }
}

export class ChangeAdminResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeAdminResponse): ChangeAdminResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeAdminResponse;
  static deserializeBinaryFromReader(message: ChangeAdminResponse, reader: jspb.BinaryReader): ChangeAdminResponse;
}

export namespace ChangeAdminResponse {
  export type AsObject = {
  }
}

export class RemoveUserRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserRequest): RemoveUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserRequest;
  static deserializeBinaryFromReader(message: RemoveUserRequest, reader: jspb.BinaryReader): RemoveUserRequest;
}

export namespace RemoveUserRequest {
  export type AsObject = {
    teamId: string,
    userId: number,
  }
}

export class RemoveUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserResponse): RemoveUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserResponse;
  static deserializeBinaryFromReader(message: RemoveUserResponse, reader: jspb.BinaryReader): RemoveUserResponse;
}

export namespace RemoveUserResponse {
  export type AsObject = {
  }
}

export class RemoveTeamRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTeamRequest): RemoveTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTeamRequest;
  static deserializeBinaryFromReader(message: RemoveTeamRequest, reader: jspb.BinaryReader): RemoveTeamRequest;
}

export namespace RemoveTeamRequest {
  export type AsObject = {
    teamId: string,
  }
}

export class RemoveTeamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTeamResponse): RemoveTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTeamResponse;
  static deserializeBinaryFromReader(message: RemoveTeamResponse, reader: jspb.BinaryReader): RemoveTeamResponse;
}

export namespace RemoveTeamResponse {
  export type AsObject = {
  }
}

