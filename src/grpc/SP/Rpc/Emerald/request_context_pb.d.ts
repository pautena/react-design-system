// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/request_context.proto

import * as jspb from "google-protobuf";

export class RequestContext extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getSessionId(): number;
  setSessionId(value: number): void;

  getSecurityToken(): string;
  setSecurityToken(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  getDeviceUid(): string;
  setDeviceUid(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getAdId(): string;
  setAdId(value: string): void;

  getAdIdEnabled(): boolean;
  setAdIdEnabled(value: boolean): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  getOs(): string;
  setOs(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getRooted(): boolean;
  setRooted(value: boolean): void;

  getAdminPanel(): boolean;
  setAdminPanel(value: boolean): void;

  getDeviceVendorId(): string;
  setDeviceVendorId(value: string): void;

  getNetworkConnection(): string;
  setNetworkConnection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestContext.AsObject;
  static toObject(includeInstance: boolean, msg: RequestContext): RequestContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestContext;
  static deserializeBinaryFromReader(message: RequestContext, reader: jspb.BinaryReader): RequestContext;
}

export namespace RequestContext {
  export type AsObject = {
    userId: number,
    sessionId: number,
    securityToken: string,
    device: string,
    deviceUid: string,
    version: string,
    adId: string,
    adIdEnabled: boolean,
    platform: string,
    os: string,
    language: string,
    country: string,
    rooted: boolean,
    adminPanel: boolean,
    deviceVendorId: string,
    networkConnection: string,
  }
}

