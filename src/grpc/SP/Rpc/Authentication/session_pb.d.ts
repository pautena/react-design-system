// package: sp.rpc.authentication
// file: SP/Rpc/Authentication/session.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Session extends jspb.Message {
  getSessionId(): number;
  setSessionId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  hasTs(): boolean;
  clearTs(): void;
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasClient(): boolean;
  clearClient(): void;
  getClient(): Session.Client | undefined;
  setClient(value?: Session.Client): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Session.Device | undefined;
  setDevice(value?: Session.Device): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  getPrivileged(): boolean;
  setPrivileged(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    sessionId: number,
    userId: number,
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    client?: Session.Client.AsObject,
    device?: Session.Device.AsObject,
    dataMap: Array<[string, string]>,
    privileged: boolean,
  }

  export class Client extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): void;

    getBuild(): number;
    setBuild(value: number): void;

    getIp(): string;
    setIp(value: string): void;

    getLanguage(): string;
    setLanguage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Client.AsObject;
    static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Client;
    static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
  }

  export namespace Client {
    export type AsObject = {
      version: string,
      build: number,
      ip: string,
      language: string,
    }
  }

  export class Device extends jspb.Message {
    getUid(): string;
    setUid(value: string): void;

    getPlatform(): string;
    setPlatform(value: string): void;

    getOs(): string;
    setOs(value: string): void;

    getModel(): string;
    setModel(value: string): void;

    getAdid(): string;
    setAdid(value: string): void;

    getAdidEnabled(): boolean;
    setAdidEnabled(value: boolean): void;

    getLanguage(): string;
    setLanguage(value: string): void;

    getIsRooted(): boolean;
    setIsRooted(value: boolean): void;

    getVendorId(): string;
    setVendorId(value: string): void;

    getStore(): string;
    setStore(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Device.AsObject;
    static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Device;
    static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
  }

  export namespace Device {
    export type AsObject = {
      uid: string,
      platform: string,
      os: string,
      model: string,
      adid: string,
      adidEnabled: boolean,
      language: string,
      isRooted: boolean,
      vendorId: string,
      store: string,
    }
  }
}

