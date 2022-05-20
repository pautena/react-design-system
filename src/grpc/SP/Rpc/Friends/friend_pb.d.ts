// package: sp.rpc.friends
// file: SP/Rpc/Friends/friend.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_UserProfile_user_profile_pb from "../../../SP/Rpc/UserProfile/user_profile_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Friend extends jspb.Message {
  hasUserProfile(): boolean;
  clearUserProfile(): void;
  getUserProfile(): SP_Rpc_UserProfile_user_profile_pb.UserProfile | undefined;
  setUserProfile(value?: SP_Rpc_UserProfile_user_profile_pb.UserProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Friend.AsObject;
  static toObject(includeInstance: boolean, msg: Friend): Friend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Friend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Friend;
  static deserializeBinaryFromReader(message: Friend, reader: jspb.BinaryReader): Friend;
}

export namespace Friend {
  export type AsObject = {
    userProfile?: SP_Rpc_UserProfile_user_profile_pb.UserProfile.AsObject,
  }
}

export class FriendInvitation extends jspb.Message {
  hasFriend(): boolean;
  clearFriend(): void;
  getFriend(): Friend | undefined;
  setFriend(value?: Friend): void;

  hasInvitationTs(): boolean;
  clearInvitationTs(): void;
  getInvitationTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvitationTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInvitation.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInvitation): FriendInvitation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInvitation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInvitation;
  static deserializeBinaryFromReader(message: FriendInvitation, reader: jspb.BinaryReader): FriendInvitation;
}

export namespace FriendInvitation {
  export type AsObject = {
    friend?: Friend.AsObject,
    invitationTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FriendSuggestion extends jspb.Message {
  hasFriend(): boolean;
  clearFriend(): void;
  getFriend(): Friend | undefined;
  setFriend(value?: Friend): void;

  hasSuggestionData(): boolean;
  clearSuggestionData(): void;
  getSuggestionData(): google_protobuf_any_pb.Any | undefined;
  setSuggestionData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendSuggestion.AsObject;
  static toObject(includeInstance: boolean, msg: FriendSuggestion): FriendSuggestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendSuggestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendSuggestion;
  static deserializeBinaryFromReader(message: FriendSuggestion, reader: jspb.BinaryReader): FriendSuggestion;
}

export namespace FriendSuggestion {
  export type AsObject = {
    friend?: Friend.AsObject,
    suggestionData?: google_protobuf_any_pb.Any.AsObject,
  }
}

