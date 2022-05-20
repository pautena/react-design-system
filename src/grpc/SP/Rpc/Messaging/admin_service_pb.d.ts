// package: sp.rpc.messaging
// file: SP/Rpc/Messaging/admin_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Messaging_messaging_message_pb from "../../../SP/Rpc/Messaging/messaging_message_pb";

export class AdminSendMessageRequest extends jspb.Message {
  getMessageBox(): string;
  setMessageBox(value: string): void;

  getId(): string;
  setId(value: string): void;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): SP_Rpc_Messaging_messaging_message_pb.Message.Sender | undefined;
  setSender(value?: SP_Rpc_Messaging_messaging_message_pb.Message.Sender): void;

  getReceiverId(): string;
  setReceiverId(value: string): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): SP_Rpc_Messaging_messaging_message_pb.Message.Content | undefined;
  setContent(value?: SP_Rpc_Messaging_messaging_message_pb.Message.Content): void;

  clearSenderTagsList(): void;
  getSenderTagsList(): Array<string>;
  setSenderTagsList(value: Array<string>): void;
  addSenderTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminSendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminSendMessageRequest): AdminSendMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminSendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminSendMessageRequest;
  static deserializeBinaryFromReader(message: AdminSendMessageRequest, reader: jspb.BinaryReader): AdminSendMessageRequest;
}

export namespace AdminSendMessageRequest {
  export type AsObject = {
    messageBox: string,
    id: string,
    sender?: SP_Rpc_Messaging_messaging_message_pb.Message.Sender.AsObject,
    receiverId: string,
    content?: SP_Rpc_Messaging_messaging_message_pb.Message.Content.AsObject,
    senderTagsList: Array<string>,
  }
}

export class AdminSendMessageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminSendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminSendMessageResponse): AdminSendMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdminSendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminSendMessageResponse;
  static deserializeBinaryFromReader(message: AdminSendMessageResponse, reader: jspb.BinaryReader): AdminSendMessageResponse;
}

export namespace AdminSendMessageResponse {
  export type AsObject = {
  }
}

