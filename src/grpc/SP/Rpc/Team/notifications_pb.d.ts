// package: sp.rpc.team
// file: SP/Rpc/Team/notifications.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Team_team_pb from "../../../SP/Rpc/Team/team_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class MemberReadyNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberReadyNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberReadyNotification): MemberReadyNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberReadyNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberReadyNotification;
  static deserializeBinaryFromReader(message: MemberReadyNotification, reader: jspb.BinaryReader): MemberReadyNotification;
}

export namespace MemberReadyNotification {
  export type AsObject = {
    userId: number,
  }
}

export class MemberNotReadyNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberNotReadyNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberNotReadyNotification): MemberNotReadyNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberNotReadyNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberNotReadyNotification;
  static deserializeBinaryFromReader(message: MemberNotReadyNotification, reader: jspb.BinaryReader): MemberNotReadyNotification;
}

export namespace MemberNotReadyNotification {
  export type AsObject = {
    userId: number,
  }
}

export class EveryoneReadyNotification extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EveryoneReadyNotification.AsObject;
  static toObject(includeInstance: boolean, msg: EveryoneReadyNotification): EveryoneReadyNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EveryoneReadyNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EveryoneReadyNotification;
  static deserializeBinaryFromReader(message: EveryoneReadyNotification, reader: jspb.BinaryReader): EveryoneReadyNotification;
}

export namespace EveryoneReadyNotification {
  export type AsObject = {
  }
}

export class TeamReadyNotification extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamReadyNotification.AsObject;
  static toObject(includeInstance: boolean, msg: TeamReadyNotification): TeamReadyNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamReadyNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamReadyNotification;
  static deserializeBinaryFromReader(message: TeamReadyNotification, reader: jspb.BinaryReader): TeamReadyNotification;
}

export namespace TeamReadyNotification {
  export type AsObject = {
  }
}

export class MemberJoinedNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

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
    userId: number,
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

export class MemberKickedOffNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberKickedOffNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberKickedOffNotification): MemberKickedOffNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberKickedOffNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberKickedOffNotification;
  static deserializeBinaryFromReader(message: MemberKickedOffNotification, reader: jspb.BinaryReader): MemberKickedOffNotification;
}

export namespace MemberKickedOffNotification {
  export type AsObject = {
    userId: number,
  }
}

export class MemberInvitedNotification extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  getInvitedUserId(): number;
  setInvitedUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberInvitedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberInvitedNotification): MemberInvitedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberInvitedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberInvitedNotification;
  static deserializeBinaryFromReader(message: MemberInvitedNotification, reader: jspb.BinaryReader): MemberInvitedNotification;
}

export namespace MemberInvitedNotification {
  export type AsObject = {
    memberId: number,
    invitedUserId: number,
  }
}

export class TeamInviteNotification extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): SP_Rpc_Team_team_pb.Team | undefined;
  setTeam(value?: SP_Rpc_Team_team_pb.Team): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamInviteNotification.AsObject;
  static toObject(includeInstance: boolean, msg: TeamInviteNotification): TeamInviteNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamInviteNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamInviteNotification;
  static deserializeBinaryFromReader(message: TeamInviteNotification, reader: jspb.BinaryReader): TeamInviteNotification;
}

export namespace TeamInviteNotification {
  export type AsObject = {
    team?: SP_Rpc_Team_team_pb.Team.AsObject,
    userId: number,
  }
}

export class TeamMetadataUpdatedNotification extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamMetadataUpdatedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: TeamMetadataUpdatedNotification): TeamMetadataUpdatedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamMetadataUpdatedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamMetadataUpdatedNotification;
  static deserializeBinaryFromReader(message: TeamMetadataUpdatedNotification, reader: jspb.BinaryReader): TeamMetadataUpdatedNotification;
}

export namespace TeamMetadataUpdatedNotification {
  export type AsObject = {
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MemberMetadataUpdatedNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_any_pb.Any | undefined;
  setMetadata(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberMetadataUpdatedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: MemberMetadataUpdatedNotification): MemberMetadataUpdatedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberMetadataUpdatedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberMetadataUpdatedNotification;
  static deserializeBinaryFromReader(message: MemberMetadataUpdatedNotification, reader: jspb.BinaryReader): MemberMetadataUpdatedNotification;
}

export namespace MemberMetadataUpdatedNotification {
  export type AsObject = {
    userId: number,
    metadata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class NewTeamAdminNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewTeamAdminNotification.AsObject;
  static toObject(includeInstance: boolean, msg: NewTeamAdminNotification): NewTeamAdminNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewTeamAdminNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewTeamAdminNotification;
  static deserializeBinaryFromReader(message: NewTeamAdminNotification, reader: jspb.BinaryReader): NewTeamAdminNotification;
}

export namespace NewTeamAdminNotification {
  export type AsObject = {
    userId: number,
  }
}

export class GameReadyNotification extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameReadyNotification.AsObject;
  static toObject(includeInstance: boolean, msg: GameReadyNotification): GameReadyNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameReadyNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameReadyNotification;
  static deserializeBinaryFromReader(message: GameReadyNotification, reader: jspb.BinaryReader): GameReadyNotification;
}

export namespace GameReadyNotification {
  export type AsObject = {
  }
}

export class GameEndedNotification extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameEndedNotification.AsObject;
  static toObject(includeInstance: boolean, msg: GameEndedNotification): GameEndedNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameEndedNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameEndedNotification;
  static deserializeBinaryFromReader(message: GameEndedNotification, reader: jspb.BinaryReader): GameEndedNotification;
}

export namespace GameEndedNotification {
  export type AsObject = {
  }
}

