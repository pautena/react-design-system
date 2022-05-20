// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/errors.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Error extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): Error.Data | undefined;
  setData(value?: Error.Data): void;

  hasUnavailableError(): boolean;
  clearUnavailableError(): void;
  getUnavailableError(): Error.Unavailable | undefined;
  setUnavailableError(value?: Error.Unavailable): void;

  hasCancelledError(): boolean;
  clearCancelledError(): void;
  getCancelledError(): Error.Cancelled | undefined;
  setCancelledError(value?: Error.Cancelled): void;

  hasRpcError(): boolean;
  clearRpcError(): void;
  getRpcError(): Error.RPC | undefined;
  setRpcError(value?: Error.RPC): void;

  hasTimeoutError(): boolean;
  clearTimeoutError(): void;
  getTimeoutError(): Error.Timeout | undefined;
  setTimeoutError(value?: Error.Timeout): void;

  hasSessionLostError(): boolean;
  clearSessionLostError(): void;
  getSessionLostError(): Error.SessionLost | undefined;
  setSessionLostError(value?: Error.SessionLost): void;

  hasOfflineModeError(): boolean;
  clearOfflineModeError(): void;
  getOfflineModeError(): Error.OfflineMode | undefined;
  setOfflineModeError(value?: Error.OfflineMode): void;

  hasClockChangeError(): boolean;
  clearClockChangeError(): void;
  getClockChangeError(): Error.ClockChange | undefined;
  setClockChangeError(value?: Error.ClockChange): void;

  hasInvalidLinkDataError(): boolean;
  clearInvalidLinkDataError(): void;
  getInvalidLinkDataError(): Error.InvalidLinkData | undefined;
  setInvalidLinkDataError(value?: Error.InvalidLinkData): void;

  hasInvalidLinkProviderTokenError(): boolean;
  clearInvalidLinkProviderTokenError(): void;
  getInvalidLinkProviderTokenError(): Error.InvalidLinkProviderToken | undefined;
  setInvalidLinkProviderTokenError(value?: Error.InvalidLinkProviderToken): void;

  hasLinkLoginError(): boolean;
  clearLinkLoginError(): void;
  getLinkLoginError(): Error.LinkLogin | undefined;
  setLinkLoginError(value?: Error.LinkLogin): void;

  hasInvalidSecurityTokenError(): boolean;
  clearInvalidSecurityTokenError(): void;
  getInvalidSecurityTokenError(): Error.InvalidSecurityToken | undefined;
  setInvalidSecurityTokenError(value?: Error.InvalidSecurityToken): void;

  hasRootedDeviceError(): boolean;
  clearRootedDeviceError(): void;
  getRootedDeviceError(): Error.RootedDevice | undefined;
  setRootedDeviceError(value?: Error.RootedDevice): void;

  hasMaintenanceError(): boolean;
  clearMaintenanceError(): void;
  getMaintenanceError(): Error.Maintenance | undefined;
  setMaintenanceError(value?: Error.Maintenance): void;

  hasForceUpgradeError(): boolean;
  clearForceUpgradeError(): void;
  getForceUpgradeError(): Error.ForceUpgrade | undefined;
  setForceUpgradeError(value?: Error.ForceUpgrade): void;

  hasLoginRequiredError(): boolean;
  clearLoginRequiredError(): void;
  getLoginRequiredError(): Error.LoginRequired | undefined;
  setLoginRequiredError(value?: Error.LoginRequired): void;

  hasGameDataError(): boolean;
  clearGameDataError(): void;
  getGameDataError(): Error.GameData | undefined;
  setGameDataError(value?: Error.GameData): void;

  hasInvalidCountryError(): boolean;
  clearInvalidCountryError(): void;
  getInvalidCountryError(): Error.InvalidCountry | undefined;
  setInvalidCountryError(value?: Error.InvalidCountry): void;

  hasInvalidPlatformError(): boolean;
  clearInvalidPlatformError(): void;
  getInvalidPlatformError(): Error.InvalidPlatform | undefined;
  setInvalidPlatformError(value?: Error.InvalidPlatform): void;

  hasServiceError(): boolean;
  clearServiceError(): void;
  getServiceError(): Error.Service | undefined;
  setServiceError(value?: Error.Service): void;

  getErrorCase(): Error.ErrorCase;
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
    data?: Error.Data.AsObject,
    unavailableError?: Error.Unavailable.AsObject,
    cancelledError?: Error.Cancelled.AsObject,
    rpcError?: Error.RPC.AsObject,
    timeoutError?: Error.Timeout.AsObject,
    sessionLostError?: Error.SessionLost.AsObject,
    offlineModeError?: Error.OfflineMode.AsObject,
    clockChangeError?: Error.ClockChange.AsObject,
    invalidLinkDataError?: Error.InvalidLinkData.AsObject,
    invalidLinkProviderTokenError?: Error.InvalidLinkProviderToken.AsObject,
    linkLoginError?: Error.LinkLogin.AsObject,
    invalidSecurityTokenError?: Error.InvalidSecurityToken.AsObject,
    rootedDeviceError?: Error.RootedDevice.AsObject,
    maintenanceError?: Error.Maintenance.AsObject,
    forceUpgradeError?: Error.ForceUpgrade.AsObject,
    loginRequiredError?: Error.LoginRequired.AsObject,
    gameDataError?: Error.GameData.AsObject,
    invalidCountryError?: Error.InvalidCountry.AsObject,
    invalidPlatformError?: Error.InvalidPlatform.AsObject,
    serviceError?: Error.Service.AsObject,
  }

  export class Data extends jspb.Message {
    hasTrackingInformation(): boolean;
    clearTrackingInformation(): void;
    getTrackingInformation(): Error.Data.TrackingInformation | undefined;
    setTrackingInformation(value?: Error.Data.TrackingInformation): void;

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
      trackingInformation?: Error.Data.TrackingInformation.AsObject,
    }

    export class TrackingInformation extends jspb.Message {
      getId(): string;
      setId(value: string): void;

      getDetails(): string;
      setDetails(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TrackingInformation.AsObject;
      static toObject(includeInstance: boolean, msg: TrackingInformation): TrackingInformation.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TrackingInformation, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TrackingInformation;
      static deserializeBinaryFromReader(message: TrackingInformation, reader: jspb.BinaryReader): TrackingInformation;
    }

    export namespace TrackingInformation {
      export type AsObject = {
        id: string,
        details: string,
      }
    }
  }

  export class Unavailable extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Unavailable.AsObject;
    static toObject(includeInstance: boolean, msg: Unavailable): Unavailable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Unavailable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Unavailable;
    static deserializeBinaryFromReader(message: Unavailable, reader: jspb.BinaryReader): Unavailable;
  }

  export namespace Unavailable {
    export type AsObject = {
    }
  }

  export class Cancelled extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cancelled.AsObject;
    static toObject(includeInstance: boolean, msg: Cancelled): Cancelled.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cancelled, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cancelled;
    static deserializeBinaryFromReader(message: Cancelled, reader: jspb.BinaryReader): Cancelled;
  }

  export namespace Cancelled {
    export type AsObject = {
    }
  }

  export class RPC extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RPC.AsObject;
    static toObject(includeInstance: boolean, msg: RPC): RPC.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RPC, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RPC;
    static deserializeBinaryFromReader(message: RPC, reader: jspb.BinaryReader): RPC;
  }

  export namespace RPC {
    export type AsObject = {
    }
  }

  export class Timeout extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timeout.AsObject;
    static toObject(includeInstance: boolean, msg: Timeout): Timeout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Timeout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timeout;
    static deserializeBinaryFromReader(message: Timeout, reader: jspb.BinaryReader): Timeout;
  }

  export namespace Timeout {
    export type AsObject = {
    }
  }

  export class SessionLost extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionLost.AsObject;
    static toObject(includeInstance: boolean, msg: SessionLost): SessionLost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionLost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionLost;
    static deserializeBinaryFromReader(message: SessionLost, reader: jspb.BinaryReader): SessionLost;
  }

  export namespace SessionLost {
    export type AsObject = {
    }
  }

  export class OfflineMode extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OfflineMode.AsObject;
    static toObject(includeInstance: boolean, msg: OfflineMode): OfflineMode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OfflineMode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OfflineMode;
    static deserializeBinaryFromReader(message: OfflineMode, reader: jspb.BinaryReader): OfflineMode;
  }

  export namespace OfflineMode {
    export type AsObject = {
    }
  }

  export class ClockChange extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClockChange.AsObject;
    static toObject(includeInstance: boolean, msg: ClockChange): ClockChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClockChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClockChange;
    static deserializeBinaryFromReader(message: ClockChange, reader: jspb.BinaryReader): ClockChange;
  }

  export namespace ClockChange {
    export type AsObject = {
    }
  }

  export class InvalidLinkData extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidLinkData.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidLinkData): InvalidLinkData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidLinkData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidLinkData;
    static deserializeBinaryFromReader(message: InvalidLinkData, reader: jspb.BinaryReader): InvalidLinkData;
  }

  export namespace InvalidLinkData {
    export type AsObject = {
    }
  }

  export class InvalidLinkProviderToken extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidLinkProviderToken.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidLinkProviderToken): InvalidLinkProviderToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidLinkProviderToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidLinkProviderToken;
    static deserializeBinaryFromReader(message: InvalidLinkProviderToken, reader: jspb.BinaryReader): InvalidLinkProviderToken;
  }

  export namespace InvalidLinkProviderToken {
    export type AsObject = {
    }
  }

  export class LinkLogin extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LinkLogin.AsObject;
    static toObject(includeInstance: boolean, msg: LinkLogin): LinkLogin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LinkLogin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LinkLogin;
    static deserializeBinaryFromReader(message: LinkLogin, reader: jspb.BinaryReader): LinkLogin;
  }

  export namespace LinkLogin {
    export type AsObject = {
    }
  }

  export class InvalidSecurityToken extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidSecurityToken.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidSecurityToken): InvalidSecurityToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidSecurityToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidSecurityToken;
    static deserializeBinaryFromReader(message: InvalidSecurityToken, reader: jspb.BinaryReader): InvalidSecurityToken;
  }

  export namespace InvalidSecurityToken {
    export type AsObject = {
    }
  }

  export class RootedDevice extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RootedDevice.AsObject;
    static toObject(includeInstance: boolean, msg: RootedDevice): RootedDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RootedDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RootedDevice;
    static deserializeBinaryFromReader(message: RootedDevice, reader: jspb.BinaryReader): RootedDevice;
  }

  export namespace RootedDevice {
    export type AsObject = {
    }
  }

  export class Maintenance extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;

    getButton(): string;
    setButton(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Maintenance.AsObject;
    static toObject(includeInstance: boolean, msg: Maintenance): Maintenance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Maintenance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Maintenance;
    static deserializeBinaryFromReader(message: Maintenance, reader: jspb.BinaryReader): Maintenance;
  }

  export namespace Maintenance {
    export type AsObject = {
      title: string,
      message: string,
      button: string,
    }
  }

  export class ForceUpgrade extends jspb.Message {
    getStoreUrl(): string;
    setStoreUrl(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForceUpgrade.AsObject;
    static toObject(includeInstance: boolean, msg: ForceUpgrade): ForceUpgrade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ForceUpgrade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForceUpgrade;
    static deserializeBinaryFromReader(message: ForceUpgrade, reader: jspb.BinaryReader): ForceUpgrade;
  }

  export namespace ForceUpgrade {
    export type AsObject = {
      storeUrl: string,
      title: string,
      message: string,
    }
  }

  export class LoginRequired extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequired.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequired): LoginRequired.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequired, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequired;
    static deserializeBinaryFromReader(message: LoginRequired, reader: jspb.BinaryReader): LoginRequired;
  }

  export namespace LoginRequired {
    export type AsObject = {
    }
  }

  export class GameData extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameData.AsObject;
    static toObject(includeInstance: boolean, msg: GameData): GameData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameData;
    static deserializeBinaryFromReader(message: GameData, reader: jspb.BinaryReader): GameData;
  }

  export namespace GameData {
    export type AsObject = {
    }
  }

  export class InvalidCountry extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidCountry.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidCountry): InvalidCountry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidCountry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidCountry;
    static deserializeBinaryFromReader(message: InvalidCountry, reader: jspb.BinaryReader): InvalidCountry;
  }

  export namespace InvalidCountry {
    export type AsObject = {
    }
  }

  export class InvalidPlatform extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidPlatform.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidPlatform): InvalidPlatform.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidPlatform, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidPlatform;
    static deserializeBinaryFromReader(message: InvalidPlatform, reader: jspb.BinaryReader): InvalidPlatform;
  }

  export namespace InvalidPlatform {
    export type AsObject = {
    }
  }

  export class Service extends jspb.Message {
    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_any_pb.Any | undefined;
    setData(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
  }

  export namespace Service {
    export type AsObject = {
      data?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export enum ErrorCase {
    ERROR_NOT_SET = 0,
    UNAVAILABLE_ERROR = 2,
    CANCELLED_ERROR = 3,
    RPC_ERROR = 4,
    TIMEOUT_ERROR = 5,
    SESSION_LOST_ERROR = 6,
    OFFLINE_MODE_ERROR = 7,
    CLOCK_CHANGE_ERROR = 8,
    INVALID_LINK_DATA_ERROR = 9,
    INVALID_LINK_PROVIDER_TOKEN_ERROR = 10,
    LINK_LOGIN_ERROR = 11,
    INVALID_SECURITY_TOKEN_ERROR = 12,
    ROOTED_DEVICE_ERROR = 13,
    MAINTENANCE_ERROR = 14,
    FORCE_UPGRADE_ERROR = 15,
    LOGIN_REQUIRED_ERROR = 16,
    GAME_DATA_ERROR = 17,
    INVALID_COUNTRY_ERROR = 18,
    INVALID_PLATFORM_ERROR = 19,
    SERVICE_ERROR = 20,
  }
}

