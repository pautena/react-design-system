// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/offline_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as SP_Rpc_Emerald_request_context_pb from "../../../SP/Rpc/Emerald/request_context_pb";
import * as SP_Rpc_Emerald_track_service_pb from "../../../SP/Rpc/Emerald/track_service_pb";
import * as SP_Rpc_Emerald_packet_service_pb from "../../../SP/Rpc/Emerald/packet_service_pb";

export class OfflineEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineEvent): OfflineEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineEvent;
  static deserializeBinaryFromReader(message: OfflineEvent, reader: jspb.BinaryReader): OfflineEvent;
}

export namespace OfflineEvent {
  export type AsObject = {
  }

  export class CommonData extends jspb.Message {
    hasTs(): boolean;
    clearTs(): void;
    getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getSessionId(): number;
    setSessionId(value: number): void;

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
      ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      sessionId: number,
    }
  }

  export class TrackEvent extends jspb.Message {
    hasCommonData(): boolean;
    clearCommonData(): void;
    getCommonData(): OfflineEvent.CommonData | undefined;
    setCommonData(value?: OfflineEvent.CommonData): void;

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): SP_Rpc_Emerald_track_service_pb.Track.Event | undefined;
    setEvent(value?: SP_Rpc_Emerald_track_service_pb.Track.Event): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrackEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TrackEvent): TrackEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrackEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrackEvent;
    static deserializeBinaryFromReader(message: TrackEvent, reader: jspb.BinaryReader): TrackEvent;
  }

  export namespace TrackEvent {
    export type AsObject = {
      commonData?: OfflineEvent.CommonData.AsObject,
      event?: SP_Rpc_Emerald_track_service_pb.Track.Event.AsObject,
    }
  }

  export class TrackEventsRequest extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    clearEventsList(): void;
    getEventsList(): Array<OfflineEvent.TrackEvent>;
    setEventsList(value: Array<OfflineEvent.TrackEvent>): void;
    addEvents(value?: OfflineEvent.TrackEvent, index?: number): OfflineEvent.TrackEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrackEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrackEventsRequest): TrackEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrackEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrackEventsRequest;
    static deserializeBinaryFromReader(message: TrackEventsRequest, reader: jspb.BinaryReader): TrackEventsRequest;
  }

  export namespace TrackEventsRequest {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
      eventsList: Array<OfflineEvent.TrackEvent.AsObject>,
    }
  }

  export class PacketEvent extends jspb.Message {
    hasCommonData(): boolean;
    clearCommonData(): void;
    getCommonData(): OfflineEvent.CommonData | undefined;
    setCommonData(value?: OfflineEvent.CommonData): void;

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): SP_Rpc_Emerald_packet_service_pb.Packet.Command.EventCommand | undefined;
    setEvent(value?: SP_Rpc_Emerald_packet_service_pb.Packet.Command.EventCommand): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PacketEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PacketEvent): PacketEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PacketEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PacketEvent;
    static deserializeBinaryFromReader(message: PacketEvent, reader: jspb.BinaryReader): PacketEvent;
  }

  export namespace PacketEvent {
    export type AsObject = {
      commonData?: OfflineEvent.CommonData.AsObject,
      event?: SP_Rpc_Emerald_packet_service_pb.Packet.Command.EventCommand.AsObject,
    }
  }

  export class PacketEventsRequest extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    clearEventsList(): void;
    getEventsList(): Array<OfflineEvent.PacketEvent>;
    setEventsList(value: Array<OfflineEvent.PacketEvent>): void;
    addEvents(value?: OfflineEvent.PacketEvent, index?: number): OfflineEvent.PacketEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PacketEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PacketEventsRequest): PacketEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PacketEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PacketEventsRequest;
    static deserializeBinaryFromReader(message: PacketEventsRequest, reader: jspb.BinaryReader): PacketEventsRequest;
  }

  export namespace PacketEventsRequest {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
      eventsList: Array<OfflineEvent.PacketEvent.AsObject>,
    }
  }
}

