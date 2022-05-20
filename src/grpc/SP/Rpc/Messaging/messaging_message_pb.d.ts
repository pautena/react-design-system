// package: sp.rpc.messaging
// file: SP/Rpc/Messaging/messaging_message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as SP_Rpc_Emerald_json_pb from "../../../SP/Rpc/Emerald/json_pb";

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): Message.Sender | undefined;
  setSender(value?: Message.Sender): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): Message.Content | undefined;
  setContent(value?: Message.Content): void;

  hasTs(): boolean;
  clearTs(): void;
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSenderTagsList(): void;
  getSenderTagsList(): Array<string>;
  setSenderTagsList(value: Array<string>): void;
  addSenderTags(value: string, index?: number): string;

  clearReceiverTagsList(): void;
  getReceiverTagsList(): Array<string>;
  setReceiverTagsList(value: Array<string>): void;
  addReceiverTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    sender?: Message.Sender.AsObject,
    content?: Message.Content.AsObject,
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    senderTagsList: Array<string>,
    receiverTagsList: Array<string>,
  }

  export class UserSender extends jspb.Message {
    getUserId(): number;
    setUserId(value: number): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSender.AsObject;
    static toObject(includeInstance: boolean, msg: UserSender): UserSender.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSender, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSender;
    static deserializeBinaryFromReader(message: UserSender, reader: jspb.BinaryReader): UserSender;
  }

  export namespace UserSender {
    export type AsObject = {
      userId: number,
      name: string,
    }
  }

  export class InternalSender extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalSender.AsObject;
    static toObject(includeInstance: boolean, msg: InternalSender): InternalSender.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalSender, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalSender;
    static deserializeBinaryFromReader(message: InternalSender, reader: jspb.BinaryReader): InternalSender;
  }

  export namespace InternalSender {
    export type AsObject = {
      name: string,
    }
  }

  export class CustomSender extends jspb.Message {
    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_any_pb.Any | undefined;
    setData(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomSender.AsObject;
    static toObject(includeInstance: boolean, msg: CustomSender): CustomSender.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomSender, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomSender;
    static deserializeBinaryFromReader(message: CustomSender, reader: jspb.BinaryReader): CustomSender;
  }

  export namespace CustomSender {
    export type AsObject = {
      data?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export class Sender extends jspb.Message {
    hasUserSender(): boolean;
    clearUserSender(): void;
    getUserSender(): Message.UserSender | undefined;
    setUserSender(value?: Message.UserSender): void;

    hasCustomSender(): boolean;
    clearCustomSender(): void;
    getCustomSender(): Message.CustomSender | undefined;
    setCustomSender(value?: Message.CustomSender): void;

    hasInternalSender(): boolean;
    clearInternalSender(): void;
    getInternalSender(): Message.InternalSender | undefined;
    setInternalSender(value?: Message.InternalSender): void;

    getSenderOneofCase(): Sender.SenderOneofCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sender.AsObject;
    static toObject(includeInstance: boolean, msg: Sender): Sender.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sender, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sender;
    static deserializeBinaryFromReader(message: Sender, reader: jspb.BinaryReader): Sender;
  }

  export namespace Sender {
    export type AsObject = {
      userSender?: Message.UserSender.AsObject,
      customSender?: Message.CustomSender.AsObject,
      internalSender?: Message.InternalSender.AsObject,
    }

    export enum SenderOneofCase {
      SENDER_ONEOF_NOT_SET = 0,
      USER_SENDER = 1,
      CUSTOM_SENDER = 2,
      INTERNAL_SENDER = 3,
    }
  }

  export class Content extends jspb.Message {
    getType(): string;
    setType(value: string): void;

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): google_protobuf_any_pb.Any | undefined;
    setPayload(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
  }

  export namespace Content {
    export type AsObject = {
      type: string,
      payload?: google_protobuf_any_pb.Any.AsObject,
    }
  }
}

export class NewMessageNotification extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  getMessageBox(): string;
  setMessageBox(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMessageNotification.AsObject;
  static toObject(includeInstance: boolean, msg: NewMessageNotification): NewMessageNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewMessageNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMessageNotification;
  static deserializeBinaryFromReader(message: NewMessageNotification, reader: jspb.BinaryReader): NewMessageNotification;
}

export namespace NewMessageNotification {
  export type AsObject = {
    message?: Message.AsObject,
    messageBox: string,
  }
}

export class TextContent extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextContent.AsObject;
  static toObject(includeInstance: boolean, msg: TextContent): TextContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextContent;
  static deserializeBinaryFromReader(message: TextContent, reader: jspb.BinaryReader): TextContent;
}

export namespace TextContent {
  export type AsObject = {
    subject: string,
    body: string,
  }
}

export class TextWithRewardContent extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getJsonReward(): string;
  setJsonReward(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextWithRewardContent.AsObject;
  static toObject(includeInstance: boolean, msg: TextWithRewardContent): TextWithRewardContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextWithRewardContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextWithRewardContent;
  static deserializeBinaryFromReader(message: TextWithRewardContent, reader: jspb.BinaryReader): TextWithRewardContent;
}

export namespace TextWithRewardContent {
  export type AsObject = {
    subject: string,
    body: string,
    jsonReward: string,
  }
}

export class CSharpSerializedContent extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  hasJson(): boolean;
  clearJson(): void;
  getJson(): SP_Rpc_Emerald_json_pb.Json | undefined;
  setJson(value?: SP_Rpc_Emerald_json_pb.Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CSharpSerializedContent.AsObject;
  static toObject(includeInstance: boolean, msg: CSharpSerializedContent): CSharpSerializedContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CSharpSerializedContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CSharpSerializedContent;
  static deserializeBinaryFromReader(message: CSharpSerializedContent, reader: jspb.BinaryReader): CSharpSerializedContent;
}

export namespace CSharpSerializedContent {
  export type AsObject = {
    type: string,
    json?: SP_Rpc_Emerald_json_pb.Json.AsObject,
  }
}

