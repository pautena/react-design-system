// package: sp.rpc.userprofile
// file: SP/Rpc/UserProfile/user_profile_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_UserProfile_user_profile_pb from "../../../SP/Rpc/UserProfile/user_profile_pb";

export class UpdateProfileRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  hasUserProfile(): boolean;
  clearUserProfile(): void;
  getUserProfile(): SP_Rpc_UserProfile_user_profile_pb.UserProfile | undefined;
  setUserProfile(value?: SP_Rpc_UserProfile_user_profile_pb.UserProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userProfile?: SP_Rpc_UserProfile_user_profile_pb.UserProfile.AsObject,
  }
}

export class UpdateProfileResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileResponse): UpdateProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileResponse;
  static deserializeBinaryFromReader(message: UpdateProfileResponse, reader: jspb.BinaryReader): UpdateProfileResponse;
}

export namespace UpdateProfileResponse {
  export type AsObject = {
  }
}

export class RetrieveProfileRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveProfileRequest): RetrieveProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveProfileRequest;
  static deserializeBinaryFromReader(message: RetrieveProfileRequest, reader: jspb.BinaryReader): RetrieveProfileRequest;
}

export namespace RetrieveProfileRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userId: number,
  }
}

export class RetrieveProfileResponse extends jspb.Message {
  hasUserProfile(): boolean;
  clearUserProfile(): void;
  getUserProfile(): SP_Rpc_UserProfile_user_profile_pb.UserProfile | undefined;
  setUserProfile(value?: SP_Rpc_UserProfile_user_profile_pb.UserProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveProfileResponse): RetrieveProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveProfileResponse;
  static deserializeBinaryFromReader(message: RetrieveProfileResponse, reader: jspb.BinaryReader): RetrieveProfileResponse;
}

export namespace RetrieveProfileResponse {
  export type AsObject = {
    userProfile?: SP_Rpc_UserProfile_user_profile_pb.UserProfile.AsObject,
  }
}

