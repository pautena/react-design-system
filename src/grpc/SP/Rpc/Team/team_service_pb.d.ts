// package: sp.rpc.team
// file: SP/Rpc/Team/team_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_Team_team_pb from "../../../SP/Rpc/Team/team_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class CurrentTeamRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentTeamRequest): CurrentTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentTeamRequest;
  static deserializeBinaryFromReader(message: CurrentTeamRequest, reader: jspb.BinaryReader): CurrentTeamRequest;
}

export namespace CurrentTeamRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class CurrentTeamResponse extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): SP_Rpc_Team_team_pb.Team | undefined;
  setTeam(value?: SP_Rpc_Team_team_pb.Team): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentTeamResponse): CurrentTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentTeamResponse;
  static deserializeBinaryFromReader(message: CurrentTeamResponse, reader: jspb.BinaryReader): CurrentTeamResponse;
}

export namespace CurrentTeamResponse {
  export type AsObject = {
    team?: SP_Rpc_Team_team_pb.Team.AsObject,
  }
}

export class CreateTeamRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamRequest): CreateTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamRequest;
  static deserializeBinaryFromReader(message: CreateTeamRequest, reader: jspb.BinaryReader): CreateTeamRequest;
}

export namespace CreateTeamRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    size: number,
  }
}

export class CreateTeamResponse extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): SP_Rpc_Team_team_pb.Team | undefined;
  setTeam(value?: SP_Rpc_Team_team_pb.Team): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamResponse): CreateTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamResponse;
  static deserializeBinaryFromReader(message: CreateTeamResponse, reader: jspb.BinaryReader): CreateTeamResponse;
}

export namespace CreateTeamResponse {
  export type AsObject = {
    team?: SP_Rpc_Team_team_pb.Team.AsObject,
  }
}

export class JoinTeamRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinTeamRequest): JoinTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinTeamRequest;
  static deserializeBinaryFromReader(message: JoinTeamRequest, reader: jspb.BinaryReader): JoinTeamRequest;
}

export namespace JoinTeamRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class JoinTeamResponse extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): SP_Rpc_Team_team_pb.Team | undefined;
  setTeam(value?: SP_Rpc_Team_team_pb.Team): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinTeamResponse): JoinTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinTeamResponse;
  static deserializeBinaryFromReader(message: JoinTeamResponse, reader: jspb.BinaryReader): JoinTeamResponse;
}

export namespace JoinTeamResponse {
  export type AsObject = {
    team?: SP_Rpc_Team_team_pb.Team.AsObject,
  }
}

export class LeaveTeamRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveTeamRequest): LeaveTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveTeamRequest;
  static deserializeBinaryFromReader(message: LeaveTeamRequest, reader: jspb.BinaryReader): LeaveTeamRequest;
}

export namespace LeaveTeamRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class LeaveTeamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveTeamResponse): LeaveTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveTeamResponse;
  static deserializeBinaryFromReader(message: LeaveTeamResponse, reader: jspb.BinaryReader): LeaveTeamResponse;
}

export namespace LeaveTeamResponse {
  export type AsObject = {
  }
}

export class UpdateTeamMetadataRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTeamMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTeamMetadataRequest): UpdateTeamMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTeamMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTeamMetadataRequest;
  static deserializeBinaryFromReader(message: UpdateTeamMetadataRequest, reader: jspb.BinaryReader): UpdateTeamMetadataRequest;
}

export namespace UpdateTeamMetadataRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class UpdateTeamMetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTeamMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTeamMetadataResponse): UpdateTeamMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTeamMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTeamMetadataResponse;
  static deserializeBinaryFromReader(message: UpdateTeamMetadataResponse, reader: jspb.BinaryReader): UpdateTeamMetadataResponse;
}

export namespace UpdateTeamMetadataResponse {
  export type AsObject = {
  }
}

export class TeamReadyRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamReadyRequest): TeamReadyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamReadyRequest;
  static deserializeBinaryFromReader(message: TeamReadyRequest, reader: jspb.BinaryReader): TeamReadyRequest;
}

export namespace TeamReadyRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class TeamReadyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamReadyResponse): TeamReadyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamReadyResponse;
  static deserializeBinaryFromReader(message: TeamReadyResponse, reader: jspb.BinaryReader): TeamReadyResponse;
}

export namespace TeamReadyResponse {
  export type AsObject = {
  }
}

export class KickMemberRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KickMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KickMemberRequest): KickMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KickMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KickMemberRequest;
  static deserializeBinaryFromReader(message: KickMemberRequest, reader: jspb.BinaryReader): KickMemberRequest;
}

export namespace KickMemberRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
    userId: number,
  }
}

export class KickMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KickMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KickMemberResponse): KickMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KickMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KickMemberResponse;
  static deserializeBinaryFromReader(message: KickMemberResponse, reader: jspb.BinaryReader): KickMemberResponse;
}

export namespace KickMemberResponse {
  export type AsObject = {
  }
}

export class DoesTeamExistRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoesTeamExistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DoesTeamExistRequest): DoesTeamExistRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoesTeamExistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoesTeamExistRequest;
  static deserializeBinaryFromReader(message: DoesTeamExistRequest, reader: jspb.BinaryReader): DoesTeamExistRequest;
}

export namespace DoesTeamExistRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class DoesTeamExistResponse extends jspb.Message {
  getExist(): boolean;
  setExist(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoesTeamExistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DoesTeamExistResponse): DoesTeamExistResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoesTeamExistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoesTeamExistResponse;
  static deserializeBinaryFromReader(message: DoesTeamExistResponse, reader: jspb.BinaryReader): DoesTeamExistResponse;
}

export namespace DoesTeamExistResponse {
  export type AsObject = {
    exist: boolean,
  }
}

export class GameReadyRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameReadyRequest): GameReadyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameReadyRequest;
  static deserializeBinaryFromReader(message: GameReadyRequest, reader: jspb.BinaryReader): GameReadyRequest;
}

export namespace GameReadyRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class GameReadyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameReadyResponse): GameReadyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameReadyResponse;
  static deserializeBinaryFromReader(message: GameReadyResponse, reader: jspb.BinaryReader): GameReadyResponse;
}

export namespace GameReadyResponse {
  export type AsObject = {
  }
}

export class GameEndRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameEndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameEndRequest): GameEndRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameEndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameEndRequest;
  static deserializeBinaryFromReader(message: GameEndRequest, reader: jspb.BinaryReader): GameEndRequest;
}

export namespace GameEndRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class GameEndResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameEndResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameEndResponse): GameEndResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameEndResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameEndResponse;
  static deserializeBinaryFromReader(message: GameEndResponse, reader: jspb.BinaryReader): GameEndResponse;
}

export namespace GameEndResponse {
  export type AsObject = {
  }
}

export class MemberReadyRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MemberReadyRequest): MemberReadyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberReadyRequest;
  static deserializeBinaryFromReader(message: MemberReadyRequest, reader: jspb.BinaryReader): MemberReadyRequest;
}

export namespace MemberReadyRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class MemberReadyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MemberReadyResponse): MemberReadyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberReadyResponse;
  static deserializeBinaryFromReader(message: MemberReadyResponse, reader: jspb.BinaryReader): MemberReadyResponse;
}

export namespace MemberReadyResponse {
  export type AsObject = {
  }
}

export class MemberNotReadyRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberNotReadyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MemberNotReadyRequest): MemberNotReadyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberNotReadyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberNotReadyRequest;
  static deserializeBinaryFromReader(message: MemberNotReadyRequest, reader: jspb.BinaryReader): MemberNotReadyRequest;
}

export namespace MemberNotReadyRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
  }
}

export class MemberNotReadyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberNotReadyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MemberNotReadyResponse): MemberNotReadyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberNotReadyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberNotReadyResponse;
  static deserializeBinaryFromReader(message: MemberNotReadyResponse, reader: jspb.BinaryReader): MemberNotReadyResponse;
}

export namespace MemberNotReadyResponse {
  export type AsObject = {
  }
}

export class UpdateMemberMetadataRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMemberMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMemberMetadataRequest): UpdateMemberMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMemberMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMemberMetadataRequest;
  static deserializeBinaryFromReader(message: UpdateMemberMetadataRequest, reader: jspb.BinaryReader): UpdateMemberMetadataRequest;
}

export namespace UpdateMemberMetadataRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class UpdateMemberMetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMemberMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMemberMetadataResponse): UpdateMemberMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMemberMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMemberMetadataResponse;
  static deserializeBinaryFromReader(message: UpdateMemberMetadataResponse, reader: jspb.BinaryReader): UpdateMemberMetadataResponse;
}

export namespace UpdateMemberMetadataResponse {
  export type AsObject = {
  }
}

export class InviteRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getTeamId(): string;
  setTeamId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteRequest): InviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteRequest;
  static deserializeBinaryFromReader(message: InviteRequest, reader: jspb.BinaryReader): InviteRequest;
}

export namespace InviteRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    teamId: string,
    userId: number,
  }
}

export class InviteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteResponse): InviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteResponse;
  static deserializeBinaryFromReader(message: InviteResponse, reader: jspb.BinaryReader): InviteResponse;
}

export namespace InviteResponse {
  export type AsObject = {
  }
}

