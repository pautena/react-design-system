// package: sp.rpc.team
// file: SP/Rpc/Team/team.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_UserProfile_user_profile_pb from "../../../SP/Rpc/UserProfile/user_profile_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Team extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getIsReady(): boolean;
  setIsReady(value: boolean): void;

  clearMembersList(): void;
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): void;
  addMembers(value?: Member, index?: number): Member;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    teamId: string,
    size: number,
    isReady: boolean,
    membersList: Array<Member.AsObject>,
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class Member extends jspb.Message {
  hasUserProfile(): boolean;
  clearUserProfile(): void;
  getUserProfile(): SP_Rpc_UserProfile_user_profile_pb.UserProfile | undefined;
  setUserProfile(value?: SP_Rpc_UserProfile_user_profile_pb.UserProfile): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): void;

  getIsReady(): boolean;
  setIsReady(value: boolean): void;

  getRole(): RoleMap[keyof RoleMap];
  setRole(value: RoleMap[keyof RoleMap]): void;

  hasJoinTs(): boolean;
  clearJoinTs(): void;
  getJoinTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJoinTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    userProfile?: SP_Rpc_UserProfile_user_profile_pb.UserProfile.AsObject,
    metadata?: google_protobuf_any_pb.Any.AsObject,
    isReady: boolean,
    role: RoleMap[keyof RoleMap],
    joinTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface RoleMap {
  ADMIN: 0;
  MEMBER: 1;
}

export const Role: RoleMap;

