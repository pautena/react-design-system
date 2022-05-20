// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/inbox_message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class InboxMessage extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): InboxMessage.Payload | undefined;
  setPayload(value?: InboxMessage.Payload): void;

  hasCreationTs(): boolean;
  clearCreationTs(): void;
  getCreationTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InboxMessage.AsObject;
  static toObject(includeInstance: boolean, msg: InboxMessage): InboxMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InboxMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InboxMessage;
  static deserializeBinaryFromReader(message: InboxMessage, reader: jspb.BinaryReader): InboxMessage;
}

export namespace InboxMessage {
  export type AsObject = {
    messageId: string,
    tagsList: Array<string>,
    payload?: InboxMessage.Payload.AsObject,
    creationTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class Payload extends jspb.Message {
    getBodyKey(): string;
    setBodyKey(value: string): void;

    getButtonKey(): string;
    setButtonKey(value: string): void;

    getIcon(): string;
    setIcon(value: string): void;

    getSubjectKey(): string;
    setSubjectKey(value: string): void;

    getUri(): string;
    setUri(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      bodyKey: string,
      buttonKey: string,
      icon: string,
      subjectKey: string,
      uri: string,
    }
  }
}

