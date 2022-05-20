// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/packet_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as SP_Rpc_Emerald_request_context_pb from "../../../SP/Rpc/Emerald/request_context_pb";

export class Packet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
  }

  export class Command extends jspb.Message {
    hasCommonData(): boolean;
    clearCommonData(): void;
    getCommonData(): Packet.Command.CommonData | undefined;
    setCommonData(value?: Packet.Command.CommonData): void;

    hasSyncCommand(): boolean;
    clearSyncCommand(): void;
    getSyncCommand(): Packet.Command.SyncCommand | undefined;
    setSyncCommand(value?: Packet.Command.SyncCommand): void;

    hasEventCommand(): boolean;
    clearEventCommand(): void;
    getEventCommand(): Packet.Command.EventCommand | undefined;
    setEventCommand(value?: Packet.Command.EventCommand): void;

    hasPurchaseCommand(): boolean;
    clearPurchaseCommand(): void;
    getPurchaseCommand(): Packet.Command.PurchaseCommand | undefined;
    setPurchaseCommand(value?: Packet.Command.PurchaseCommand): void;

    hasPushEnabledCommand(): boolean;
    clearPushEnabledCommand(): void;
    getPushEnabledCommand(): Packet.Command.PushEnabledCommand | undefined;
    setPushEnabledCommand(value?: Packet.Command.PushEnabledCommand): void;

    hasCustomCommand(): boolean;
    clearCustomCommand(): void;
    getCustomCommand(): Packet.Command.CustomCommand | undefined;
    setCustomCommand(value?: Packet.Command.CustomCommand): void;

    getDataCase(): Command.DataCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Command.AsObject;
    static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Command;
    static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
  }

  export namespace Command {
    export type AsObject = {
      commonData?: Packet.Command.CommonData.AsObject,
      syncCommand?: Packet.Command.SyncCommand.AsObject,
      eventCommand?: Packet.Command.EventCommand.AsObject,
      purchaseCommand?: Packet.Command.PurchaseCommand.AsObject,
      pushEnabledCommand?: Packet.Command.PushEnabledCommand.AsObject,
      customCommand?: Packet.Command.CustomCommand.AsObject,
    }

    export class Error extends jspb.Message {
      getCode(): number;
      setCode(value: number): void;

      getMessage(): string;
      setMessage(value: string): void;

      getClientMessage(): string;
      setClientMessage(value: string): void;

      getClientLocalize(): string;
      setClientLocalize(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Error.AsObject;
      static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Error;
      static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
    }

    export namespace Error {
      export type AsObject = {
        code: number,
        message: string,
        clientMessage: string,
        clientLocalize: string,
      }
    }

    export class CommonData extends jspb.Message {
      getId(): string;
      setId(value: string): void;

      getName(): string;
      setName(value: string): void;

      hasTs(): boolean;
      clearTs(): void;
      getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

      getUnique(): boolean;
      setUnique(value: boolean): void;

      getAtomic(): boolean;
      setAtomic(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CommonData.AsObject;
      static toObject(includeInstance: boolean, msg: CommonData): CommonData.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CommonData, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CommonData;
      static deserializeBinaryFromReader(message: CommonData, reader: jspb.BinaryReader): CommonData;
    }

    export namespace CommonData {
      export type AsObject = {
        id: string,
        name: string,
        ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        unique: boolean,
        atomic: boolean,
      }
    }

    export class SyncCommand extends jspb.Message {
      hasData(): boolean;
      clearData(): void;
      getData(): google_protobuf_any_pb.Any | undefined;
      setData(value?: google_protobuf_any_pb.Any): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SyncCommand.AsObject;
      static toObject(includeInstance: boolean, msg: SyncCommand): SyncCommand.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SyncCommand, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SyncCommand;
      static deserializeBinaryFromReader(message: SyncCommand, reader: jspb.BinaryReader): SyncCommand;
    }

    export namespace SyncCommand {
      export type AsObject = {
        data?: google_protobuf_any_pb.Any.AsObject,
      }
    }

    export class EventCommand extends jspb.Message {
      getType(): string;
      setType(value: string): void;

      hasData(): boolean;
      clearData(): void;
      getData(): google_protobuf_any_pb.Any | undefined;
      setData(value?: google_protobuf_any_pb.Any): void;

      getId(): string;
      setId(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EventCommand.AsObject;
      static toObject(includeInstance: boolean, msg: EventCommand): EventCommand.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EventCommand, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EventCommand;
      static deserializeBinaryFromReader(message: EventCommand, reader: jspb.BinaryReader): EventCommand;
    }

    export namespace EventCommand {
      export type AsObject = {
        type: string,
        data?: google_protobuf_any_pb.Any.AsObject,
        id: string,
      }
    }

    export class PurchaseCommand extends jspb.Message {
      getReceipt(): string;
      setReceipt(value: string): void;

      getGateway(): string;
      setGateway(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PurchaseCommand.AsObject;
      static toObject(includeInstance: boolean, msg: PurchaseCommand): PurchaseCommand.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PurchaseCommand, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PurchaseCommand;
      static deserializeBinaryFromReader(message: PurchaseCommand, reader: jspb.BinaryReader): PurchaseCommand;
    }

    export namespace PurchaseCommand {
      export type AsObject = {
        receipt: string,
        gateway: string,
      }
    }

    export class PushEnabledCommand extends jspb.Message {
      getToken(): string;
      setToken(value: string): void;

      getEnabled(): boolean;
      setEnabled(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PushEnabledCommand.AsObject;
      static toObject(includeInstance: boolean, msg: PushEnabledCommand): PushEnabledCommand.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PushEnabledCommand, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PushEnabledCommand;
      static deserializeBinaryFromReader(message: PushEnabledCommand, reader: jspb.BinaryReader): PushEnabledCommand;
    }

    export namespace PushEnabledCommand {
      export type AsObject = {
        token: string,
        enabled: boolean,
      }
    }

    export class CustomCommand extends jspb.Message {
      hasData(): boolean;
      clearData(): void;
      getData(): google_protobuf_any_pb.Any | undefined;
      setData(value?: google_protobuf_any_pb.Any): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CustomCommand.AsObject;
      static toObject(includeInstance: boolean, msg: CustomCommand): CustomCommand.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CustomCommand, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CustomCommand;
      static deserializeBinaryFromReader(message: CustomCommand, reader: jspb.BinaryReader): CustomCommand;
    }

    export namespace CustomCommand {
      export type AsObject = {
        data?: google_protobuf_any_pb.Any.AsObject,
      }
    }

    export enum DataCase {
      DATA_NOT_SET = 0,
      SYNC_COMMAND = 2,
      EVENT_COMMAND = 3,
      PURCHASE_COMMAND = 4,
      PUSH_ENABLED_COMMAND = 5,
      CUSTOM_COMMAND = 6,
    }
  }

  export class Data extends jspb.Message {
    getPid(): number;
    setPid(value: number): void;

    hasTs(): boolean;
    clearTs(): void;
    getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

    clearCommandsList(): void;
    getCommandsList(): Array<Packet.Command>;
    setCommandsList(value: Array<Packet.Command>): void;
    addCommands(value?: Packet.Command, index?: number): Packet.Command;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      pid: number,
      ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      commandsList: Array<Packet.Command.AsObject>,
    }
  }

  export class Request extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    hasData(): boolean;
    clearData(): void;
    getData(): Packet.Data | undefined;
    setData(value?: Packet.Data): void;

    clearAcksList(): void;
    getAcksList(): Array<string>;
    setAcksList(value: Array<string>): void;
    addAcks(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
      data?: Packet.Data.AsObject,
      acksList: Array<string>,
    }
  }

  export class CommandResponse extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): google_protobuf_any_pb.Any | undefined;
    setResponse(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommandResponse): CommandResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandResponse;
    static deserializeBinaryFromReader(message: CommandResponse, reader: jspb.BinaryReader): CommandResponse;
  }

  export namespace CommandResponse {
    export type AsObject = {
      id: string,
      response?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export class DataResponse extends jspb.Message {
    getPid(): number;
    setPid(value: number): void;

    clearCommandsList(): void;
    getCommandsList(): Array<Packet.CommandResponse>;
    setCommandsList(value: Array<Packet.CommandResponse>): void;
    addCommands(value?: Packet.CommandResponse, index?: number): Packet.CommandResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DataResponse): DataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataResponse;
    static deserializeBinaryFromReader(message: DataResponse, reader: jspb.BinaryReader): DataResponse;
  }

  export namespace DataResponse {
    export type AsObject = {
      pid: number,
      commandsList: Array<Packet.CommandResponse.AsObject>,
    }
  }

  export class PushCommand extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    hasTs(): boolean;
    clearTs(): void;
    getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_any_pb.Any | undefined;
    setData(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushCommand.AsObject;
    static toObject(includeInstance: boolean, msg: PushCommand): PushCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushCommand;
    static deserializeBinaryFromReader(message: PushCommand, reader: jspb.BinaryReader): PushCommand;
  }

  export namespace PushCommand {
    export type AsObject = {
      id: string,
      name: string,
      ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      data?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export class Push extends jspb.Message {
    clearCommandsList(): void;
    getCommandsList(): Array<Packet.PushCommand>;
    setCommandsList(value: Array<Packet.PushCommand>): void;
    addCommands(value?: Packet.PushCommand, index?: number): Packet.PushCommand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Push.AsObject;
    static toObject(includeInstance: boolean, msg: Push): Push.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Push, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Push;
    static deserializeBinaryFromReader(message: Push, reader: jspb.BinaryReader): Push;
  }

  export namespace Push {
    export type AsObject = {
      commandsList: Array<Packet.PushCommand.AsObject>,
    }
  }

  export class Response extends jspb.Message {
    clearDataList(): void;
    getDataList(): Array<Packet.DataResponse>;
    setDataList(value: Array<Packet.DataResponse>): void;
    addData(value?: Packet.DataResponse, index?: number): Packet.DataResponse;

    hasPush(): boolean;
    clearPush(): void;
    getPush(): Packet.Push | undefined;
    setPush(value?: Packet.Push): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      dataList: Array<Packet.DataResponse.AsObject>,
      push?: Packet.Push.AsObject,
    }
  }
}

