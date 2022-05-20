// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/legal_agreement_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_request_context_pb from "../../../SP/Rpc/Emerald/request_context_pb";
import * as SP_Rpc_Emerald_terms_of_service_pb from "../../../SP/Rpc/Emerald/terms_of_service_pb";

export class LegalAgreement extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegalAgreement.AsObject;
  static toObject(includeInstance: boolean, msg: LegalAgreement): LegalAgreement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LegalAgreement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegalAgreement;
  static deserializeBinaryFromReader(message: LegalAgreement, reader: jspb.BinaryReader): LegalAgreement;
}

export namespace LegalAgreement {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    hasContext(): boolean;
    clearContext(): void;
    getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
    setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

    getAge(): number;
    setAge(value: number): void;

    getUserId(): number;
    setUserId(value: number): void;

    getCountry(): string;
    setCountry(value: string): void;

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
      age: number,
      userId: number,
      country: string,
    }
  }

  export class Response extends jspb.Message {
    hasTermsOfServiceData(): boolean;
    clearTermsOfServiceData(): void;
    getTermsOfServiceData(): SP_Rpc_Emerald_terms_of_service_pb.TermsOfService.Data | undefined;
    setTermsOfServiceData(value?: SP_Rpc_Emerald_terms_of_service_pb.TermsOfService.Data): void;

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
      termsOfServiceData?: SP_Rpc_Emerald_terms_of_service_pb.TermsOfService.Data.AsObject,
    }
  }
}

