// package: sp.rpc.leaderboard
// file: SP/Rpc/Leaderboard/admin_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class ResetLeaderboardRequest extends jspb.Message {
  getLeaderboardId(): string;
  setLeaderboardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetLeaderboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetLeaderboardRequest): ResetLeaderboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetLeaderboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetLeaderboardRequest;
  static deserializeBinaryFromReader(message: ResetLeaderboardRequest, reader: jspb.BinaryReader): ResetLeaderboardRequest;
}

export namespace ResetLeaderboardRequest {
  export type AsObject = {
    leaderboardId: string,
  }
}

export class ResetLeaderboardResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetLeaderboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetLeaderboardResponse): ResetLeaderboardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetLeaderboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetLeaderboardResponse;
  static deserializeBinaryFromReader(message: ResetLeaderboardResponse, reader: jspb.BinaryReader): ResetLeaderboardResponse;
}

export namespace ResetLeaderboardResponse {
  export type AsObject = {
  }
}

export class GetLeaderboardIDsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLeaderboardIDsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLeaderboardIDsRequest): GetLeaderboardIDsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLeaderboardIDsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLeaderboardIDsRequest;
  static deserializeBinaryFromReader(message: GetLeaderboardIDsRequest, reader: jspb.BinaryReader): GetLeaderboardIDsRequest;
}

export namespace GetLeaderboardIDsRequest {
  export type AsObject = {
  }
}

export class GetLeaderboardIDsResponse extends jspb.Message {
  clearLeaderboardIdsList(): void;
  getLeaderboardIdsList(): Array<string>;
  setLeaderboardIdsList(value: Array<string>): void;
  addLeaderboardIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLeaderboardIDsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLeaderboardIDsResponse): GetLeaderboardIDsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLeaderboardIDsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLeaderboardIDsResponse;
  static deserializeBinaryFromReader(message: GetLeaderboardIDsResponse, reader: jspb.BinaryReader): GetLeaderboardIDsResponse;
}

export namespace GetLeaderboardIDsResponse {
  export type AsObject = {
    leaderboardIdsList: Array<string>,
  }
}

export class UpdateLeaderboardScoreRequest extends jspb.Message {
  getLeaderboardId(): string;
  setLeaderboardId(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  getScore(): number;
  setScore(value: number): void;

  getPolicy(): UpdateLeaderboardScoreRequest.PolicyMap[keyof UpdateLeaderboardScoreRequest.PolicyMap];
  setPolicy(value: UpdateLeaderboardScoreRequest.PolicyMap[keyof UpdateLeaderboardScoreRequest.PolicyMap]): void;

  hasRankingMetadata(): boolean;
  clearRankingMetadata(): void;
  getRankingMetadata(): google_protobuf_any_pb.Any | undefined;
  setRankingMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLeaderboardScoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLeaderboardScoreRequest): UpdateLeaderboardScoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLeaderboardScoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLeaderboardScoreRequest;
  static deserializeBinaryFromReader(message: UpdateLeaderboardScoreRequest, reader: jspb.BinaryReader): UpdateLeaderboardScoreRequest;
}

export namespace UpdateLeaderboardScoreRequest {
  export type AsObject = {
    leaderboardId: string,
    userId: number,
    score: number,
    policy: UpdateLeaderboardScoreRequest.PolicyMap[keyof UpdateLeaderboardScoreRequest.PolicyMap],
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

export class UpdateLeaderboardScoreResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLeaderboardScoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLeaderboardScoreResponse): UpdateLeaderboardScoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLeaderboardScoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLeaderboardScoreResponse;
  static deserializeBinaryFromReader(message: UpdateLeaderboardScoreResponse, reader: jspb.BinaryReader): UpdateLeaderboardScoreResponse;
}

export namespace UpdateLeaderboardScoreResponse {
  export type AsObject = {
  }
}

