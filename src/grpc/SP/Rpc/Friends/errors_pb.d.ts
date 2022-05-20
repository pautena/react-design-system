// package: sp.rpc.friends
// file: SP/Rpc/Friends/errors.proto

import * as jspb from "google-protobuf";

export class FriendsListIsFullError extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendsListIsFullError.AsObject;
  static toObject(includeInstance: boolean, msg: FriendsListIsFullError): FriendsListIsFullError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendsListIsFullError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendsListIsFullError;
  static deserializeBinaryFromReader(message: FriendsListIsFullError, reader: jspb.BinaryReader): FriendsListIsFullError;
}

export namespace FriendsListIsFullError {
  export type AsObject = {
  }
}

export class InvitationsListIsFullError extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationsListIsFullError.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationsListIsFullError): InvitationsListIsFullError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvitationsListIsFullError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationsListIsFullError;
  static deserializeBinaryFromReader(message: InvitationsListIsFullError, reader: jspb.BinaryReader): InvitationsListIsFullError;
}

export namespace InvitationsListIsFullError {
  export type AsObject = {
  }
}

