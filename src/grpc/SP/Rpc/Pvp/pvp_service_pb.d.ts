// package: sp.rpc.pvp
// file: SP/Rpc/Pvp/pvp_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_UserProfile_user_profile_pb from "../../../SP/Rpc/UserProfile/user_profile_pb";

export class SaveMatchRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getPlayer1Id(): number;
  setPlayer1Id(value: number): void;

  getPlayer2Id(): number;
  setPlayer2Id(value: number): void;

  getWinner(): SaveMatchRequest.WinnerMap[keyof SaveMatchRequest.WinnerMap];
  setWinner(value: SaveMatchRequest.WinnerMap[keyof SaveMatchRequest.WinnerMap]): void;

  hasMatchData(): boolean;
  clearMatchData(): void;
  getMatchData(): google_protobuf_any_pb.Any | undefined;
  setMatchData(value?: google_protobuf_any_pb.Any): void;

  getRematchId(): string;
  setRematchId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveMatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveMatchRequest): SaveMatchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveMatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveMatchRequest;
  static deserializeBinaryFromReader(message: SaveMatchRequest, reader: jspb.BinaryReader): SaveMatchRequest;
}

export namespace SaveMatchRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    player1Id: number,
    player2Id: number,
    winner: SaveMatchRequest.WinnerMap[keyof SaveMatchRequest.WinnerMap],
    matchData?: google_protobuf_any_pb.Any.AsObject,
    rematchId: string,
  }

  export interface WinnerMap {
    PLAYER1: 0;
    PLAYER2: 1;
  }

  export const Winner: WinnerMap;
}

export class SaveMatchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveMatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveMatchResponse): SaveMatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveMatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveMatchResponse;
  static deserializeBinaryFromReader(message: SaveMatchResponse, reader: jspb.BinaryReader): SaveMatchResponse;
}

export namespace SaveMatchResponse {
  export type AsObject = {
  }
}

export class GetMatchesRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  hasPlayer1Id(): boolean;
  clearPlayer1Id(): void;
  getPlayer1Id(): number;
  setPlayer1Id(value: number): void;

  hasPlayer2Id(): boolean;
  clearPlayer2Id(): void;
  getPlayer2Id(): number;
  setPlayer2Id(value: number): void;

  hasFromTs(): boolean;
  clearFromTs(): void;
  getFromTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFromTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOrdering(): GetMatchesRequest.OrderingMap[keyof GetMatchesRequest.OrderingMap];
  setOrdering(value: GetMatchesRequest.OrderingMap[keyof GetMatchesRequest.OrderingMap]): void;

  getPlayeridCase(): GetMatchesRequest.PlayeridCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatchesRequest): GetMatchesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatchesRequest;
  static deserializeBinaryFromReader(message: GetMatchesRequest, reader: jspb.BinaryReader): GetMatchesRequest;
}

export namespace GetMatchesRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    player1Id: number,
    player2Id: number,
    fromTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    limit: number,
    ordering: GetMatchesRequest.OrderingMap[keyof GetMatchesRequest.OrderingMap],
  }

  export interface OrderingMap {
    DESCENDING: 0;
    ASCENDING: 1;
  }

  export const Ordering: OrderingMap;

  export enum PlayeridCase {
    PLAYERID_NOT_SET = 0,
    PLAYER1_ID = 2,
    PLAYER2_ID = 3,
  }
}

export class GetMatchesResponse extends jspb.Message {
  clearMatchesList(): void;
  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): void;
  addMatches(value?: Match, index?: number): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatchesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatchesResponse): GetMatchesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatchesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatchesResponse;
  static deserializeBinaryFromReader(message: GetMatchesResponse, reader: jspb.BinaryReader): GetMatchesResponse;
}

export namespace GetMatchesResponse {
  export type AsObject = {
    matchesList: Array<Match.AsObject>,
  }
}

export class Match extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasPlayer1(): boolean;
  clearPlayer1(): void;
  getPlayer1(): SP_Rpc_UserProfile_user_profile_pb.UserProfile | undefined;
  setPlayer1(value?: SP_Rpc_UserProfile_user_profile_pb.UserProfile): void;

  hasPlayer2(): boolean;
  clearPlayer2(): void;
  getPlayer2(): SP_Rpc_UserProfile_user_profile_pb.UserProfile | undefined;
  setPlayer2(value?: SP_Rpc_UserProfile_user_profile_pb.UserProfile): void;

  getWinner(): Match.WinnerMap[keyof Match.WinnerMap];
  setWinner(value: Match.WinnerMap[keyof Match.WinnerMap]): void;

  hasTs(): boolean;
  clearTs(): void;
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMatchData(): boolean;
  clearMatchData(): void;
  getMatchData(): google_protobuf_any_pb.Any | undefined;
  setMatchData(value?: google_protobuf_any_pb.Any): void;

  clearRematchesList(): void;
  getRematchesList(): Array<Match>;
  setRematchesList(value: Array<Match>): void;
  addRematches(value?: Match, index?: number): Match;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    id: string,
    player1?: SP_Rpc_UserProfile_user_profile_pb.UserProfile.AsObject,
    player2?: SP_Rpc_UserProfile_user_profile_pb.UserProfile.AsObject,
    winner: Match.WinnerMap[keyof Match.WinnerMap],
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    matchData?: google_protobuf_any_pb.Any.AsObject,
    rematchesList: Array<Match.AsObject>,
  }

  export interface WinnerMap {
    PLAYER1: 0;
    PLAYER2: 1;
  }

  export const Winner: WinnerMap;
}

