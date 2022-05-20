// package: sp.rpc.messaging
// file: SP/Rpc/Messaging/messaging_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_Messaging_messaging_message_pb from "../../../SP/Rpc/Messaging/messaging_message_pb";

export class GetMessagesRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getMessageBox(): string;
  setMessageBox(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesRequest): GetMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesRequest;
  static deserializeBinaryFromReader(message: GetMessagesRequest, reader: jspb.BinaryReader): GetMessagesRequest;
}

export namespace GetMessagesRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    messageBox: string,
  }
}

export class GetMessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<SP_Rpc_Messaging_messaging_message_pb.Message>;
  setMessagesList(value: Array<SP_Rpc_Messaging_messaging_message_pb.Message>): void;
  addMessages(value?: SP_Rpc_Messaging_messaging_message_pb.Message, index?: number): SP_Rpc_Messaging_messaging_message_pb.Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesResponse): GetMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesResponse;
  static deserializeBinaryFromReader(message: GetMessagesResponse, reader: jspb.BinaryReader): GetMessagesResponse;
}

export namespace GetMessagesResponse {
  export type AsObject = {
    messagesList: Array<SP_Rpc_Messaging_messaging_message_pb.Message.AsObject>,
  }
}

export class SendMessageRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getMessageBox(): string;
  setMessageBox(value: string): void;

  getId(): string;
  setId(value: string): void;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): SP_Rpc_Messaging_messaging_message_pb.Message.Sender | undefined;
  setSender(value?: SP_Rpc_Messaging_messaging_message_pb.Message.Sender): void;

  getReceiverId(): number;
  setReceiverId(value: number): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): SP_Rpc_Messaging_messaging_message_pb.Message.Content | undefined;
  setContent(value?: SP_Rpc_Messaging_messaging_message_pb.Message.Content): void;

  clearSenderTagsList(): void;
  getSenderTagsList(): Array<string>;
  setSenderTagsList(value: Array<string>): void;
  addSenderTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    messageBox: string,
    id: string,
    sender?: SP_Rpc_Messaging_messaging_message_pb.Message.Sender.AsObject,
    receiverId: number,
    content?: SP_Rpc_Messaging_messaging_message_pb.Message.Content.AsObject,
    senderTagsList: Array<string>,
  }
}

export class SendMessageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {
  }
}

export class RemoveMessagesRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getMessageBox(): string;
  setMessageBox(value: string): void;

  clearMessageIdsList(): void;
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): void;
  addMessageIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMessagesRequest): RemoveMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMessagesRequest;
  static deserializeBinaryFromReader(message: RemoveMessagesRequest, reader: jspb.BinaryReader): RemoveMessagesRequest;
}

export namespace RemoveMessagesRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    messageBox: string,
    messageIdsList: Array<string>,
  }
}

export class RemoveMessagesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMessagesResponse): RemoveMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMessagesResponse;
  static deserializeBinaryFromReader(message: RemoveMessagesResponse, reader: jspb.BinaryReader): RemoveMessagesResponse;
}

export namespace RemoveMessagesResponse {
  export type AsObject = {
  }
}

export class SetReceiverTagsRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getMessageBox(): string;
  setMessageBox(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  clearReceiverTagsList(): void;
  getReceiverTagsList(): Array<string>;
  setReceiverTagsList(value: Array<string>): void;
  addReceiverTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReceiverTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetReceiverTagsRequest): SetReceiverTagsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetReceiverTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReceiverTagsRequest;
  static deserializeBinaryFromReader(message: SetReceiverTagsRequest, reader: jspb.BinaryReader): SetReceiverTagsRequest;
}

export namespace SetReceiverTagsRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    messageBox: string,
    messageId: string,
    receiverTagsList: Array<string>,
  }
}

export class SetReceiverTagsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReceiverTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetReceiverTagsResponse): SetReceiverTagsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetReceiverTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReceiverTagsResponse;
  static deserializeBinaryFromReader(message: SetReceiverTagsResponse, reader: jspb.BinaryReader): SetReceiverTagsResponse;
}

export namespace SetReceiverTagsResponse {
  export type AsObject = {
  }
}

