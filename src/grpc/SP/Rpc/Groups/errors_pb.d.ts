// package: sp.rpc.groups
// file: SP/Rpc/Groups/errors.proto

import * as jspb from "google-protobuf";

export class GroupIsFullError extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupIsFullError.AsObject;
  static toObject(includeInstance: boolean, msg: GroupIsFullError): GroupIsFullError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupIsFullError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupIsFullError;
  static deserializeBinaryFromReader(message: GroupIsFullError, reader: jspb.BinaryReader): GroupIsFullError;
}

export namespace GroupIsFullError {
  export type AsObject = {
  }
}

export class GroupDoesNotExistError extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupDoesNotExistError.AsObject;
  static toObject(includeInstance: boolean, msg: GroupDoesNotExistError): GroupDoesNotExistError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupDoesNotExistError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupDoesNotExistError;
  static deserializeBinaryFromReader(message: GroupDoesNotExistError, reader: jspb.BinaryReader): GroupDoesNotExistError;
}

export namespace GroupDoesNotExistError {
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

