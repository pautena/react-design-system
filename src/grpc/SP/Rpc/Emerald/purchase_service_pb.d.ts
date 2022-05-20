// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/purchase_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as SP_Rpc_Emerald_request_context_pb from "../../../SP/Rpc/Emerald/request_context_pb";

export class Purchase extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Purchase.AsObject;
  static toObject(includeInstance: boolean, msg: Purchase): Purchase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Purchase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Purchase;
  static deserializeBinaryFromReader(message: Purchase, reader: jspb.BinaryReader): Purchase;
}

export namespace Purchase {
  export type AsObject = {
  }

  export class ITunesReceipt extends jspb.Message {
    getAppStoreReceiptBase64(): string;
    setAppStoreReceiptBase64(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ITunesReceipt.AsObject;
    static toObject(includeInstance: boolean, msg: ITunesReceipt): ITunesReceipt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ITunesReceipt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ITunesReceipt;
    static deserializeBinaryFromReader(message: ITunesReceipt, reader: jspb.BinaryReader): ITunesReceipt;
  }

  export namespace ITunesReceipt {
    export type AsObject = {
      appStoreReceiptBase64: string,
    }
  }

  export class PurchaseValidationData extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurchaseValidationData.AsObject;
    static toObject(includeInstance: boolean, msg: PurchaseValidationData): PurchaseValidationData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurchaseValidationData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurchaseValidationData;
    static deserializeBinaryFromReader(message: PurchaseValidationData, reader: jspb.BinaryReader): PurchaseValidationData;
  }

  export namespace PurchaseValidationData {
    export type AsObject = {
    }

    export class ITunes extends jspb.Message {
      hasReceipt(): boolean;
      clearReceipt(): void;
      getReceipt(): Purchase.ITunesReceipt | undefined;
      setReceipt(value?: Purchase.ITunesReceipt): void;

      getTransactionId(): string;
      setTransactionId(value: string): void;

      getOriginalTransactionId(): string;
      setOriginalTransactionId(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ITunes.AsObject;
      static toObject(includeInstance: boolean, msg: ITunes): ITunes.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ITunes, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ITunes;
      static deserializeBinaryFromReader(message: ITunes, reader: jspb.BinaryReader): ITunes;
    }

    export namespace ITunes {
      export type AsObject = {
        receipt?: Purchase.ITunesReceipt.AsObject,
        transactionId: string,
        originalTransactionId: string,
      }
    }

    export class GooglePlay extends jspb.Message {
      getData(): string;
      setData(value: string): void;

      getSignature(): string;
      setSignature(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GooglePlay.AsObject;
      static toObject(includeInstance: boolean, msg: GooglePlay): GooglePlay.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GooglePlay, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GooglePlay;
      static deserializeBinaryFromReader(message: GooglePlay, reader: jspb.BinaryReader): GooglePlay;
    }

    export namespace GooglePlay {
      export type AsObject = {
        data: string,
        signature: string,
      }
    }

    export class Amazon extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Amazon.AsObject;
      static toObject(includeInstance: boolean, msg: Amazon): Amazon.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Amazon, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Amazon;
      static deserializeBinaryFromReader(message: Amazon, reader: jspb.BinaryReader): Amazon;
    }

    export namespace Amazon {
      export type AsObject = {
      }
    }

    export class Windows extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Windows.AsObject;
      static toObject(includeInstance: boolean, msg: Windows): Windows.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Windows, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Windows;
      static deserializeBinaryFromReader(message: Windows, reader: jspb.BinaryReader): Windows;
    }

    export namespace Windows {
      export type AsObject = {
      }
    }

    export class Unity extends jspb.Message {
      getStatus(): Purchase.StatusMap[keyof Purchase.StatusMap];
      setStatus(value: Purchase.StatusMap[keyof Purchase.StatusMap]): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Unity.AsObject;
      static toObject(includeInstance: boolean, msg: Unity): Unity.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Unity, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Unity;
      static deserializeBinaryFromReader(message: Unity, reader: jspb.BinaryReader): Unity;
    }

    export namespace Unity {
      export type AsObject = {
        status: Purchase.StatusMap[keyof Purchase.StatusMap],
      }
    }
  }

  export class ValidateRequest extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    getTestMode(): boolean;
    setTestMode(value: boolean): void;

    hasItunes(): boolean;
    clearItunes(): void;
    getItunes(): Purchase.PurchaseValidationData.ITunes | undefined;
    setItunes(value?: Purchase.PurchaseValidationData.ITunes): void;

    hasGooglePlay(): boolean;
    clearGooglePlay(): void;
    getGooglePlay(): Purchase.PurchaseValidationData.GooglePlay | undefined;
    setGooglePlay(value?: Purchase.PurchaseValidationData.GooglePlay): void;

    hasAmazon(): boolean;
    clearAmazon(): void;
    getAmazon(): Purchase.PurchaseValidationData.Amazon | undefined;
    setAmazon(value?: Purchase.PurchaseValidationData.Amazon): void;

    hasWindows(): boolean;
    clearWindows(): void;
    getWindows(): Purchase.PurchaseValidationData.Windows | undefined;
    setWindows(value?: Purchase.PurchaseValidationData.Windows): void;

    hasUnity(): boolean;
    clearUnity(): void;
    getUnity(): Purchase.PurchaseValidationData.Unity | undefined;
    setUnity(value?: Purchase.PurchaseValidationData.Unity): void;

    getDataCase(): ValidateRequest.DataCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateRequest): ValidateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateRequest;
    static deserializeBinaryFromReader(message: ValidateRequest, reader: jspb.BinaryReader): ValidateRequest;
  }

  export namespace ValidateRequest {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
      testMode: boolean,
      itunes?: Purchase.PurchaseValidationData.ITunes.AsObject,
      googlePlay?: Purchase.PurchaseValidationData.GooglePlay.AsObject,
      amazon?: Purchase.PurchaseValidationData.Amazon.AsObject,
      windows?: Purchase.PurchaseValidationData.Windows.AsObject,
      unity?: Purchase.PurchaseValidationData.Unity.AsObject,
    }

    export enum DataCase {
      DATA_NOT_SET = 0,
      ITUNES = 3,
      GOOGLE_PLAY = 4,
      AMAZON = 5,
      WINDOWS = 6,
      UNITY = 7,
    }
  }

  export class ValidateResponse extends jspb.Message {
    getStatus(): Purchase.StatusMap[keyof Purchase.StatusMap];
    setStatus(value: Purchase.StatusMap[keyof Purchase.StatusMap]): void;

    getOrderId(): string;
    setOrderId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateResponse): ValidateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateResponse;
    static deserializeBinaryFromReader(message: ValidateResponse, reader: jspb.BinaryReader): ValidateResponse;
  }

  export namespace ValidateResponse {
    export type AsObject = {
      status: Purchase.StatusMap[keyof Purchase.StatusMap],
      orderId: string,
    }
  }

  export class ActiveSubscription extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    hasExpirationTs(): boolean;
    clearExpirationTs(): void;
    getExpirationTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveSubscription): ActiveSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveSubscription;
    static deserializeBinaryFromReader(message: ActiveSubscription, reader: jspb.BinaryReader): ActiveSubscription;
  }

  export namespace ActiveSubscription {
    export type AsObject = {
      id: string,
      expirationTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class ActiveSubscriptionsRequest extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveSubscriptionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveSubscriptionsRequest): ActiveSubscriptionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveSubscriptionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveSubscriptionsRequest;
    static deserializeBinaryFromReader(message: ActiveSubscriptionsRequest, reader: jspb.BinaryReader): ActiveSubscriptionsRequest;
  }

  export namespace ActiveSubscriptionsRequest {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
    }
  }

  export class ActiveSubscriptionsResponse extends jspb.Message {
    clearActiveSubscriptionsList(): void;
    getActiveSubscriptionsList(): Array<Purchase.ActiveSubscription>;
    setActiveSubscriptionsList(value: Array<Purchase.ActiveSubscription>): void;
    addActiveSubscriptions(value?: Purchase.ActiveSubscription, index?: number): Purchase.ActiveSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActiveSubscriptionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActiveSubscriptionsResponse): ActiveSubscriptionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActiveSubscriptionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActiveSubscriptionsResponse;
    static deserializeBinaryFromReader(message: ActiveSubscriptionsResponse, reader: jspb.BinaryReader): ActiveSubscriptionsResponse;
  }

  export namespace ActiveSubscriptionsResponse {
    export type AsObject = {
      activeSubscriptionsList: Array<Purchase.ActiveSubscription.AsObject>,
    }
  }

  export class RestorePurchasesData extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestorePurchasesData.AsObject;
    static toObject(includeInstance: boolean, msg: RestorePurchasesData): RestorePurchasesData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestorePurchasesData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestorePurchasesData;
    static deserializeBinaryFromReader(message: RestorePurchasesData, reader: jspb.BinaryReader): RestorePurchasesData;
  }

  export namespace RestorePurchasesData {
    export type AsObject = {
    }

    export class ITunes extends jspb.Message {
      hasReceipt(): boolean;
      clearReceipt(): void;
      getReceipt(): Purchase.ITunesReceipt | undefined;
      setReceipt(value?: Purchase.ITunesReceipt): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ITunes.AsObject;
      static toObject(includeInstance: boolean, msg: ITunes): ITunes.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ITunes, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ITunes;
      static deserializeBinaryFromReader(message: ITunes, reader: jspb.BinaryReader): ITunes;
    }

    export namespace ITunes {
      export type AsObject = {
        receipt?: Purchase.ITunesReceipt.AsObject,
      }
    }
  }

  export class RestorePurchasesRequest extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    hasItunes(): boolean;
    clearItunes(): void;
    getItunes(): Purchase.RestorePurchasesData.ITunes | undefined;
    setItunes(value?: Purchase.RestorePurchasesData.ITunes): void;

    getDataCase(): RestorePurchasesRequest.DataCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestorePurchasesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestorePurchasesRequest): RestorePurchasesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestorePurchasesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestorePurchasesRequest;
    static deserializeBinaryFromReader(message: RestorePurchasesRequest, reader: jspb.BinaryReader): RestorePurchasesRequest;
  }

  export namespace RestorePurchasesRequest {
    export type AsObject = {
      context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
      itunes?: Purchase.RestorePurchasesData.ITunes.AsObject,
    }

    export enum DataCase {
      DATA_NOT_SET = 0,
      ITUNES = 2,
    }
  }

  export class RestorePurchasesResponse extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestorePurchasesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RestorePurchasesResponse): RestorePurchasesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestorePurchasesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestorePurchasesResponse;
    static deserializeBinaryFromReader(message: RestorePurchasesResponse, reader: jspb.BinaryReader): RestorePurchasesResponse;
  }

  export namespace RestorePurchasesResponse {
    export type AsObject = {
    }
  }

  export interface StatusMap {
    INVALID: 0;
    NOT_SYNCED: 1;
    ALREADY_SYNCED: 2;
    OK: 3;
  }

  export const Status: StatusMap;
}

