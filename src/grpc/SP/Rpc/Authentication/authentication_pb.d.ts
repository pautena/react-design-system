// package: sp.rpc.authentication
// file: SP/Rpc/Authentication/authentication.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Authentication_session_pb from "../../../SP/Rpc/Authentication/session_pb";

export class Authentication extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authentication.AsObject;
  static toObject(includeInstance: boolean, msg: Authentication): Authentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Authentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authentication;
  static deserializeBinaryFromReader(message: Authentication, reader: jspb.BinaryReader): Authentication;
}

export namespace Authentication {
  export type AsObject = {
  }

  export class AuthenticateRequest extends jspb.Message {
    getUserId(): number;
    setUserId(value: number): void;

    getSessionId(): number;
    setSessionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
    static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
  }

  export namespace AuthenticateRequest {
    export type AsObject = {
      userId: number,
      sessionId: number,
    }
  }

  export class AuthenticateResponse extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateResponse): AuthenticateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateResponse;
    static deserializeBinaryFromReader(message: AuthenticateResponse, reader: jspb.BinaryReader): AuthenticateResponse;
  }

  export namespace AuthenticateResponse {
    export type AsObject = {
    }
  }

  export class GetSessionRequest extends jspb.Message {
    getUserId(): number;
    setUserId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
    static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
  }

  export namespace GetSessionRequest {
    export type AsObject = {
      userId: number,
    }
  }

  export class GetSessionResponse extends jspb.Message {
    hasSession(): boolean;
    clearSession(): void;
    getSession(): SP_Rpc_Authentication_session_pb.Session | undefined;
    setSession(value?: SP_Rpc_Authentication_session_pb.Session): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionResponse): GetSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionResponse;
    static deserializeBinaryFromReader(message: GetSessionResponse, reader: jspb.BinaryReader): GetSessionResponse;
  }

  export namespace GetSessionResponse {
    export type AsObject = {
      session?: SP_Rpc_Authentication_session_pb.Session.AsObject,
    }
  }

  export class StoreSessionRequest extends jspb.Message {
    hasSession(): boolean;
    clearSession(): void;
    getSession(): SP_Rpc_Authentication_session_pb.Session | undefined;
    setSession(value?: SP_Rpc_Authentication_session_pb.Session): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StoreSessionRequest): StoreSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreSessionRequest;
    static deserializeBinaryFromReader(message: StoreSessionRequest, reader: jspb.BinaryReader): StoreSessionRequest;
  }

  export namespace StoreSessionRequest {
    export type AsObject = {
      session?: SP_Rpc_Authentication_session_pb.Session.AsObject,
    }
  }

  export class StoreSessionResponse extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StoreSessionResponse): StoreSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreSessionResponse;
    static deserializeBinaryFromReader(message: StoreSessionResponse, reader: jspb.BinaryReader): StoreSessionResponse;
  }

  export namespace StoreSessionResponse {
    export type AsObject = {
    }
  }

  export class DeleteSessionRequest extends jspb.Message {
    getUserId(): number;
    setUserId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSessionRequest): DeleteSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSessionRequest;
    static deserializeBinaryFromReader(message: DeleteSessionRequest, reader: jspb.BinaryReader): DeleteSessionRequest;
  }

  export namespace DeleteSessionRequest {
    export type AsObject = {
      userId: number,
    }
  }

  export class DeleteSessionResponse extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSessionResponse): DeleteSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSessionResponse;
    static deserializeBinaryFromReader(message: DeleteSessionResponse, reader: jspb.BinaryReader): DeleteSessionResponse;
  }

  export namespace DeleteSessionResponse {
    export type AsObject = {
    }
  }
}

