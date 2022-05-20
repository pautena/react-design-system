// package: sp.rpc.team
// file: SP/Rpc/Team/errors.proto

import * as jspb from "google-protobuf";

export class TeamIsFullError extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamIsFullError.AsObject;
  static toObject(includeInstance: boolean, msg: TeamIsFullError): TeamIsFullError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamIsFullError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamIsFullError;
  static deserializeBinaryFromReader(message: TeamIsFullError, reader: jspb.BinaryReader): TeamIsFullError;
}

export namespace TeamIsFullError {
  export type AsObject = {
  }
}

export class TeamDoesNotExistError extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamDoesNotExistError.AsObject;
  static toObject(includeInstance: boolean, msg: TeamDoesNotExistError): TeamDoesNotExistError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TeamDoesNotExistError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamDoesNotExistError;
  static deserializeBinaryFromReader(message: TeamDoesNotExistError, reader: jspb.BinaryReader): TeamDoesNotExistError;
}

export namespace TeamDoesNotExistError {
  export type AsObject = {
  }
}

export class AlreadyInATeamError extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlreadyInATeamError.AsObject;
  static toObject(includeInstance: boolean, msg: AlreadyInATeamError): AlreadyInATeamError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlreadyInATeamError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlreadyInATeamError;
  static deserializeBinaryFromReader(message: AlreadyInATeamError, reader: jspb.BinaryReader): AlreadyInATeamError;
}

export namespace AlreadyInATeamError {
  export type AsObject = {
  }
}

export class NotAllowedError extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotAllowedError.AsObject;
  static toObject(includeInstance: boolean, msg: NotAllowedError): NotAllowedError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotAllowedError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotAllowedError;
  static deserializeBinaryFromReader(message: NotAllowedError, reader: jspb.BinaryReader): NotAllowedError;
}

export namespace NotAllowedError {
  export type AsObject = {
    message: string,
  }
}

