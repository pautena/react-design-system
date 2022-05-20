// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/terms_of_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_request_context_pb from "../../../SP/Rpc/Emerald/request_context_pb";

export class TermsOfService extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): TermsOfService.Config | undefined;
  setConfig(value?: TermsOfService.Config): void;

  hasData(): boolean;
  clearData(): void;
  getData(): TermsOfService.Data | undefined;
  setData(value?: TermsOfService.Data): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermsOfService.AsObject;
  static toObject(includeInstance: boolean, msg: TermsOfService): TermsOfService.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TermsOfService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TermsOfService;
  static deserializeBinaryFromReader(message: TermsOfService, reader: jspb.BinaryReader): TermsOfService;
}

export namespace TermsOfService {
  export type AsObject = {
    config?: TermsOfService.Config.AsObject,
    data?: TermsOfService.Data.AsObject,
  }

  export class AdTracking extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdTracking.AsObject;
    static toObject(includeInstance: boolean, msg: AdTracking): AdTracking.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdTracking, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdTracking;
    static deserializeBinaryFromReader(message: AdTracking, reader: jspb.BinaryReader): AdTracking;
  }

  export namespace AdTracking {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
      hasContext(): boolean;
      clearContext(): void;
      getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
      setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

      getAdTrackingStatus(): string;
      setAdTrackingStatus(value: string): void;

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
        adTrackingStatus: string,
      }
    }

    export class Response extends jspb.Message {
      getDisplay(): string;
      setDisplay(value: string): void;

      getExplanation(): string;
      setExplanation(value: string): void;

      getConfirmButton(): string;
      setConfirmButton(value: string): void;

      getDeclineButton(): string;
      setDeclineButton(value: string): void;

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
        display: string,
        explanation: string,
        confirmButton: string,
        declineButton: string,
      }
    }
  }

  export class Config extends jspb.Message {
    getDisplay(): boolean;
    setDisplay(value: boolean): void;

    getSkippable(): boolean;
    setSkippable(value: boolean): void;

    getDefaultAge(): number;
    setDefaultAge(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      display: boolean,
      skippable: boolean,
      defaultAge: number,
    }
  }

  export class Data extends jspb.Message {
    getIsAnonymous(): boolean;
    setIsAnonymous(value: boolean): void;

    getAge(): number;
    setAge(value: number): void;

    getFacebookEnabled(): boolean;
    setFacebookEnabled(value: boolean): void;

    getVideoAdsGdprConsent(): boolean;
    setVideoAdsGdprConsent(value: boolean): void;

    getAttributionAnonymizeData(): string;
    setAttributionAnonymizeData(value: string): void;

    hasAdTrackingConsent(): boolean;
    clearAdTrackingConsent(): void;
    getAdTrackingConsent(): TermsOfService.AdTracking.Response | undefined;
    setAdTrackingConsent(value?: TermsOfService.AdTracking.Response): void;

    getIsUnderAgeOfConsent(): boolean;
    setIsUnderAgeOfConsent(value: boolean): void;

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
      isAnonymous: boolean,
      age: number,
      facebookEnabled: boolean,
      videoAdsGdprConsent: boolean,
      attributionAnonymizeData: string,
      adTrackingConsent?: TermsOfService.AdTracking.Response.AsObject,
      isUnderAgeOfConsent: boolean,
    }
  }
}

