// package: sp.rpc.emerald.purchaseV2
// file: SP/Rpc/Emerald/PurchaseV2/purchase_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as SP_Rpc_Emerald_request_context_pb from "../../../../SP/Rpc/Emerald/request_context_pb";

export class ValidationRequest extends jspb.Message {
  hasContext(): boolean;
  clearContext(): void;
  getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
  setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

  getTestMode(): boolean;
  setTestMode(value: boolean): void;

  hasGooglePlay(): boolean;
  clearGooglePlay(): void;
  getGooglePlay(): ValidationData.GooglePlay | undefined;
  setGooglePlay(value?: ValidationData.GooglePlay): void;

  hasItunes(): boolean;
  clearItunes(): void;
  getItunes(): ValidationData.ITunes | undefined;
  setItunes(value?: ValidationData.ITunes): void;

  hasAmazon(): boolean;
  clearAmazon(): void;
  getAmazon(): ValidationData.Amazon | undefined;
  setAmazon(value?: ValidationData.Amazon): void;

  hasHuawei(): boolean;
  clearHuawei(): void;
  getHuawei(): ValidationData.Huawei | undefined;
  setHuawei(value?: ValidationData.Huawei): void;

  hasMock(): boolean;
  clearMock(): void;
  getMock(): ValidationData.Mock | undefined;
  setMock(value?: ValidationData.Mock): void;

  getDataCase(): ValidationRequest.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationRequest): ValidationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationRequest;
  static deserializeBinaryFromReader(message: ValidationRequest, reader: jspb.BinaryReader): ValidationRequest;
}

export namespace ValidationRequest {
  export type AsObject = {
    context?: SP_Rpc_Emerald_request_context_pb.RequestContext.AsObject,
    testMode: boolean,
    googlePlay?: ValidationData.GooglePlay.AsObject,
    itunes?: ValidationData.ITunes.AsObject,
    amazon?: ValidationData.Amazon.AsObject,
    huawei?: ValidationData.Huawei.AsObject,
    mock?: ValidationData.Mock.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    GOOGLE_PLAY = 3,
    ITUNES = 4,
    AMAZON = 5,
    HUAWEI = 6,
    MOCK = 7,
  }
}

export class ValidationResponse extends jspb.Message {
  getStatus(): ValidationResponse.StatusMap[keyof ValidationResponse.StatusMap];
  setStatus(value: ValidationResponse.StatusMap[keyof ValidationResponse.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationResponse): ValidationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationResponse;
  static deserializeBinaryFromReader(message: ValidationResponse, reader: jspb.BinaryReader): ValidationResponse;
}

export namespace ValidationResponse {
  export type AsObject = {
    status: ValidationResponse.StatusMap[keyof ValidationResponse.StatusMap],
  }

  export interface StatusMap {
    INVALID: 0;
    VALID_NOT_SYNCED: 1;
    VALID_DUPLICATED: 2;
  }

  export const Status: StatusMap;
}

export class ValidationData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationData.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationData): ValidationData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidationData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationData;
  static deserializeBinaryFromReader(message: ValidationData, reader: jspb.BinaryReader): ValidationData;
}

export namespace ValidationData {
  export type AsObject = {
  }

  export class GooglePlay extends jspb.Message {
    getTransactionData(): string;
    setTransactionData(value: string): void;

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
      transactionData: string,
      signature: string,
    }
  }

  export class ITunes extends jspb.Message {
    getReceipt(): string;
    setReceipt(value: string): void;

    getTransactionId(): string;
    setTransactionId(value: string): void;

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
      receipt: string,
      transactionId: string,
    }
  }

  export class Amazon extends jspb.Message {
    getAmazonUserId(): string;
    setAmazonUserId(value: string): void;

    getReceiptId(): string;
    setReceiptId(value: string): void;

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
      amazonUserId: string,
      receiptId: string,
    }
  }

  export class Huawei extends jspb.Message {
    getTransactionData(): string;
    setTransactionData(value: string): void;

    getSignature(): string;
    setSignature(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Huawei.AsObject;
    static toObject(includeInstance: boolean, msg: Huawei): Huawei.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Huawei, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Huawei;
    static deserializeBinaryFromReader(message: Huawei, reader: jspb.BinaryReader): Huawei;
  }

  export namespace Huawei {
    export type AsObject = {
      transactionData: string,
      signature: string,
    }
  }

  export class Mock extends jspb.Message {
    getStatus(): ValidationResponse.StatusMap[keyof ValidationResponse.StatusMap];
    setStatus(value: ValidationResponse.StatusMap[keyof ValidationResponse.StatusMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mock.AsObject;
    static toObject(includeInstance: boolean, msg: Mock): Mock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mock;
    static deserializeBinaryFromReader(message: Mock, reader: jspb.BinaryReader): Mock;
  }

  export namespace Mock {
    export type AsObject = {
      status: ValidationResponse.StatusMap[keyof ValidationResponse.StatusMap],
    }
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
  getActiveSubscriptionsList(): Array<ActiveSubscription>;
  setActiveSubscriptionsList(value: Array<ActiveSubscription>): void;
  addActiveSubscriptions(value?: ActiveSubscription, index?: number): ActiveSubscription;

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
    activeSubscriptionsList: Array<ActiveSubscription.AsObject>,
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

export class RestorePurchasesRequest extends jspb.Message {
  hasContext(): boolean;
  clearContext(): void;
  getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
  setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

  hasItunes(): boolean;
  clearItunes(): void;
  getItunes(): RestorePurchasesData.ITunes | undefined;
  setItunes(value?: RestorePurchasesData.ITunes): void;

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
    itunes?: RestorePurchasesData.ITunes.AsObject,
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
    getReceipt(): string;
    setReceipt(value: string): void;

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
      receipt: string,
    }
  }
}

