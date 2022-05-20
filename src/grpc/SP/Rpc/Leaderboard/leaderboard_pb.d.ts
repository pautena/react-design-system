// package: sp.rpc.leaderboard
// file: SP/Rpc/Leaderboard/leaderboard.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_UserProfile_user_profile_pb from "../../../SP/Rpc/UserProfile/user_profile_pb";

export class LeaderboardRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getLeaderboardId(): string;
  setLeaderboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaderboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaderboardRequest): LeaderboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaderboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaderboardRequest;
  static deserializeBinaryFromReader(message: LeaderboardRequest, reader: jspb.BinaryReader): LeaderboardRequest;
}

export namespace LeaderboardRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    leaderboardId: string,
  }
}

export class GetRankingRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): LeaderboardRequest | undefined;
  setRequest(value?: LeaderboardRequest): void;

  getOrdering(): GetRankingRequest.OrderingMap[keyof GetRankingRequest.OrderingMap];
  setOrdering(value: GetRankingRequest.OrderingMap[keyof GetRankingRequest.OrderingMap]): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRankingRequest): GetRankingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRankingRequest;
  static deserializeBinaryFromReader(message: GetRankingRequest, reader: jspb.BinaryReader): GetRankingRequest;
}

export namespace GetRankingRequest {
  export type AsObject = {
    request?: LeaderboardRequest.AsObject,
    ordering: GetRankingRequest.OrderingMap[keyof GetRankingRequest.OrderingMap],
    limit: number,
    offset: number,
  }

  export interface OrderingMap {
    DESCENDING: 0;
    ASCENDING: 1;
  }

  export const Ordering: OrderingMap;
}

export class GetRankingResponse extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<RankingEntry>;
  setEntriesList(value: Array<RankingEntry>): void;
  addEntries(value?: RankingEntry, index?: number): RankingEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRankingResponse): GetRankingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRankingResponse;
  static deserializeBinaryFromReader(message: GetRankingResponse, reader: jspb.BinaryReader): GetRankingResponse;
}

export namespace GetRankingResponse {
  export type AsObject = {
    entriesList: Array<RankingEntry.AsObject>,
  }
}

export class RankingEntry extends jspb.Message {
  hasUserProfile(): boolean;
  clearUserProfile(): void;
  getUserProfile(): SP_Rpc_UserProfile_user_profile_pb.UserProfile | undefined;
  setUserProfile(value?: SP_Rpc_UserProfile_user_profile_pb.UserProfile): void;

  getScore(): number;
  setScore(value: number): void;

  getPosition(): number;
  setPosition(value: number): void;

  hasRankingMetadata(): boolean;
  clearRankingMetadata(): void;
  getRankingMetadata(): google_protobuf_any_pb.Any | undefined;
  setRankingMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RankingEntry.AsObject;
  static toObject(includeInstance: boolean, msg: RankingEntry): RankingEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RankingEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RankingEntry;
  static deserializeBinaryFromReader(message: RankingEntry, reader: jspb.BinaryReader): RankingEntry;
}

export namespace RankingEntry {
  export type AsObject = {
    userProfile?: SP_Rpc_UserProfile_user_profile_pb.UserProfile.AsObject,
    score: number,
    position: number,
    rankingMetadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class GetSurroundingUserEntriesRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): LeaderboardRequest | undefined;
  setRequest(value?: LeaderboardRequest): void;

  getUserId(): number;
  setUserId(value: number): void;

  getSurroundingEntriesAmount(): number;
  setSurroundingEntriesAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurroundingUserEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurroundingUserEntriesRequest): GetSurroundingUserEntriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSurroundingUserEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurroundingUserEntriesRequest;
  static deserializeBinaryFromReader(message: GetSurroundingUserEntriesRequest, reader: jspb.BinaryReader): GetSurroundingUserEntriesRequest;
}

export namespace GetSurroundingUserEntriesRequest {
  export type AsObject = {
    request?: LeaderboardRequest.AsObject,
    userId: number,
    surroundingEntriesAmount: number,
  }
}

export class GetSurroundingUserEntriesResponse extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<RankingEntry>;
  setEntriesList(value: Array<RankingEntry>): void;
  addEntries(value?: RankingEntry, index?: number): RankingEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurroundingUserEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurroundingUserEntriesResponse): GetSurroundingUserEntriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSurroundingUserEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurroundingUserEntriesResponse;
  static deserializeBinaryFromReader(message: GetSurroundingUserEntriesResponse, reader: jspb.BinaryReader): GetSurroundingUserEntriesResponse;
}

export namespace GetSurroundingUserEntriesResponse {
  export type AsObject = {
    entriesList: Array<RankingEntry.AsObject>,
  }
}

export class GetSurroundingScoreEntriesRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): LeaderboardRequest | undefined;
  setRequest(value?: LeaderboardRequest): void;

  getScore(): number;
  setScore(value: number): void;

  getSurroundingEntriesAmount(): number;
  setSurroundingEntriesAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurroundingScoreEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurroundingScoreEntriesRequest): GetSurroundingScoreEntriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSurroundingScoreEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurroundingScoreEntriesRequest;
  static deserializeBinaryFromReader(message: GetSurroundingScoreEntriesRequest, reader: jspb.BinaryReader): GetSurroundingScoreEntriesRequest;
}

export namespace GetSurroundingScoreEntriesRequest {
  export type AsObject = {
    request?: LeaderboardRequest.AsObject,
    score: number,
    surroundingEntriesAmount: number,
  }
}

export class GetSurroundingScoreEntriesResponse extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<RankingEntry>;
  setEntriesList(value: Array<RankingEntry>): void;
  addEntries(value?: RankingEntry, index?: number): RankingEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurroundingScoreEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurroundingScoreEntriesResponse): GetSurroundingScoreEntriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSurroundingScoreEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurroundingScoreEntriesResponse;
  static deserializeBinaryFromReader(message: GetSurroundingScoreEntriesResponse, reader: jspb.BinaryReader): GetSurroundingScoreEntriesResponse;
}

export namespace GetSurroundingScoreEntriesResponse {
  export type AsObject = {
    entriesList: Array<RankingEntry.AsObject>,
  }
}

export class UpdateScoreRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): LeaderboardRequest | undefined;
  setRequest(value?: LeaderboardRequest): void;

  getScore(): number;
  setScore(value: number): void;

  getPolicy(): UpdateScoreRequest.PolicyMap[keyof UpdateScoreRequest.PolicyMap];
  setPolicy(value: UpdateScoreRequest.PolicyMap[keyof UpdateScoreRequest.PolicyMap]): void;

  hasRankingMetadata(): boolean;
  clearRankingMetadata(): void;
  getRankingMetadata(): google_protobuf_any_pb.Any | undefined;
  setRankingMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScoreRequest): UpdateScoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScoreRequest;
  static deserializeBinaryFromReader(message: UpdateScoreRequest, reader: jspb.BinaryReader): UpdateScoreRequest;
}

export namespace UpdateScoreRequest {
  export type AsObject = {
    request?: LeaderboardRequest.AsObject,
    score: number,
    policy: UpdateScoreRequest.PolicyMap[keyof UpdateScoreRequest.PolicyMap],
    rankingMetadata?: google_protobuf_any_pb.Any.AsObject,
  }

  export interface PolicyMap {
    ABSOLUTE: 0;
    RELATIVE: 1;
    HIGHER: 2;
    LOWER: 3;
  }

  export const Policy: PolicyMap;
}

export class UpdateScoreResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScoreResponse): UpdateScoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScoreResponse;
  static deserializeBinaryFromReader(message: UpdateScoreResponse, reader: jspb.BinaryReader): UpdateScoreResponse;
}

export namespace UpdateScoreResponse {
  export type AsObject = {
  }
}

export class DeleteUserRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): LeaderboardRequest | undefined;
  setRequest(value?: LeaderboardRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    request?: LeaderboardRequest.AsObject,
  }
}

export class DeleteUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
  }
}

