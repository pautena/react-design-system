// package: sp.rpc.friends
// file: SP/Rpc/Friends/friends_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_Friends_friend_pb from "../../../SP/Rpc/Friends/friend_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class RetrieveUserCodeRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveUserCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveUserCodeRequest): RetrieveUserCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveUserCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveUserCodeRequest;
  static deserializeBinaryFromReader(message: RetrieveUserCodeRequest, reader: jspb.BinaryReader): RetrieveUserCodeRequest;
}

export namespace RetrieveUserCodeRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userId: number,
  }
}

export class RetrieveUserCodeResponse extends jspb.Message {
  getUserCode(): string;
  setUserCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveUserCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveUserCodeResponse): RetrieveUserCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RetrieveUserCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveUserCodeResponse;
  static deserializeBinaryFromReader(message: RetrieveUserCodeResponse, reader: jspb.BinaryReader): RetrieveUserCodeResponse;
}

export namespace RetrieveUserCodeResponse {
  export type AsObject = {
    userCode: string,
  }
}

export class ListFriendsRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFriendsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFriendsRequest): ListFriendsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFriendsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFriendsRequest;
  static deserializeBinaryFromReader(message: ListFriendsRequest, reader: jspb.BinaryReader): ListFriendsRequest;
}

export namespace ListFriendsRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class ListFriendsResponse extends jspb.Message {
  clearFriendsListList(): void;
  getFriendsListList(): Array<SP_Rpc_Friends_friend_pb.Friend>;
  setFriendsListList(value: Array<SP_Rpc_Friends_friend_pb.Friend>): void;
  addFriendsList(value?: SP_Rpc_Friends_friend_pb.Friend, index?: number): SP_Rpc_Friends_friend_pb.Friend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFriendsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFriendsResponse): ListFriendsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFriendsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFriendsResponse;
  static deserializeBinaryFromReader(message: ListFriendsResponse, reader: jspb.BinaryReader): ListFriendsResponse;
}

export namespace ListFriendsResponse {
  export type AsObject = {
    friendsListList: Array<SP_Rpc_Friends_friend_pb.Friend.AsObject>,
  }
}

export class InviteFriendRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): number;
  setUserId(value: number): void;

  hasUserCode(): boolean;
  clearUserCode(): void;
  getUserCode(): string;
  setUserCode(value: string): void;

  getDataCase(): InviteFriendRequest.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteFriendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteFriendRequest): InviteFriendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteFriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteFriendRequest;
  static deserializeBinaryFromReader(message: InviteFriendRequest, reader: jspb.BinaryReader): InviteFriendRequest;
}

export namespace InviteFriendRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userId: number,
    userCode: string,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_ID = 2,
    USER_CODE = 3,
  }
}

export class InviteFriendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteFriendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteFriendResponse): InviteFriendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteFriendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteFriendResponse;
  static deserializeBinaryFromReader(message: InviteFriendResponse, reader: jspb.BinaryReader): InviteFriendResponse;
}

export namespace InviteFriendResponse {
  export type AsObject = {
  }
}

export class AddFriendRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getUserCode(): string;
  setUserCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFriendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddFriendRequest): AddFriendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFriendRequest;
  static deserializeBinaryFromReader(message: AddFriendRequest, reader: jspb.BinaryReader): AddFriendRequest;
}

export namespace AddFriendRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userCode: string,
  }
}

export class AddFriendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFriendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddFriendResponse): AddFriendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFriendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFriendResponse;
  static deserializeBinaryFromReader(message: AddFriendResponse, reader: jspb.BinaryReader): AddFriendResponse;
}

export namespace AddFriendResponse {
  export type AsObject = {
  }
}

export class AmountOfFriendsRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmountOfFriendsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AmountOfFriendsRequest): AmountOfFriendsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmountOfFriendsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmountOfFriendsRequest;
  static deserializeBinaryFromReader(message: AmountOfFriendsRequest, reader: jspb.BinaryReader): AmountOfFriendsRequest;
}

export namespace AmountOfFriendsRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class AmountOfFriendsResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmountOfFriendsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AmountOfFriendsResponse): AmountOfFriendsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmountOfFriendsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmountOfFriendsResponse;
  static deserializeBinaryFromReader(message: AmountOfFriendsResponse, reader: jspb.BinaryReader): AmountOfFriendsResponse;
}

export namespace AmountOfFriendsResponse {
  export type AsObject = {
    amount: number,
  }
}

export class RemoveFriendRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFriendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFriendRequest): RemoveFriendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveFriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFriendRequest;
  static deserializeBinaryFromReader(message: RemoveFriendRequest, reader: jspb.BinaryReader): RemoveFriendRequest;
}

export namespace RemoveFriendRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userId: number,
  }
}

export class RemoveFriendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFriendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFriendResponse): RemoveFriendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveFriendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFriendResponse;
  static deserializeBinaryFromReader(message: RemoveFriendResponse, reader: jspb.BinaryReader): RemoveFriendResponse;
}

export namespace RemoveFriendResponse {
  export type AsObject = {
  }
}

export class ListInvitationsRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvitationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvitationsRequest): ListInvitationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvitationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvitationsRequest;
  static deserializeBinaryFromReader(message: ListInvitationsRequest, reader: jspb.BinaryReader): ListInvitationsRequest;
}

export namespace ListInvitationsRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class ListInvitationsResponse extends jspb.Message {
  clearInvitationsListList(): void;
  getInvitationsListList(): Array<SP_Rpc_Friends_friend_pb.FriendInvitation>;
  setInvitationsListList(value: Array<SP_Rpc_Friends_friend_pb.FriendInvitation>): void;
  addInvitationsList(value?: SP_Rpc_Friends_friend_pb.FriendInvitation, index?: number): SP_Rpc_Friends_friend_pb.FriendInvitation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvitationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvitationsResponse): ListInvitationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvitationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvitationsResponse;
  static deserializeBinaryFromReader(message: ListInvitationsResponse, reader: jspb.BinaryReader): ListInvitationsResponse;
}

export namespace ListInvitationsResponse {
  export type AsObject = {
    invitationsListList: Array<SP_Rpc_Friends_friend_pb.FriendInvitation.AsObject>,
  }
}

export class RespondInvitationRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getUserId(): number;
  setUserId(value: number): void;

  getResponse(): RespondInvitationRequest.InviteResponseMap[keyof RespondInvitationRequest.InviteResponseMap];
  setResponse(value: RespondInvitationRequest.InviteResponseMap[keyof RespondInvitationRequest.InviteResponseMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespondInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RespondInvitationRequest): RespondInvitationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RespondInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespondInvitationRequest;
  static deserializeBinaryFromReader(message: RespondInvitationRequest, reader: jspb.BinaryReader): RespondInvitationRequest;
}

export namespace RespondInvitationRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userId: number,
    response: RespondInvitationRequest.InviteResponseMap[keyof RespondInvitationRequest.InviteResponseMap],
  }

  export interface InviteResponseMap {
    ACCEPT: 0;
    DECLINE: 1;
  }

  export const InviteResponse: InviteResponseMap;
}

export class RespondInvitationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RespondInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RespondInvitationResponse): RespondInvitationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RespondInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RespondInvitationResponse;
  static deserializeBinaryFromReader(message: RespondInvitationResponse, reader: jspb.BinaryReader): RespondInvitationResponse;
}

export namespace RespondInvitationResponse {
  export type AsObject = {
  }
}

export class AmountOfInvitationsRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmountOfInvitationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AmountOfInvitationsRequest): AmountOfInvitationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmountOfInvitationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmountOfInvitationsRequest;
  static deserializeBinaryFromReader(message: AmountOfInvitationsRequest, reader: jspb.BinaryReader): AmountOfInvitationsRequest;
}

export namespace AmountOfInvitationsRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class AmountOfInvitationsResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmountOfInvitationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AmountOfInvitationsResponse): AmountOfInvitationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmountOfInvitationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmountOfInvitationsResponse;
  static deserializeBinaryFromReader(message: AmountOfInvitationsResponse, reader: jspb.BinaryReader): AmountOfInvitationsResponse;
}

export namespace AmountOfInvitationsResponse {
  export type AsObject = {
    amount: number,
  }
}

export class SuggestFriendRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getUserId(): number;
  setUserId(value: number): void;

  hasSuggestionData(): boolean;
  clearSuggestionData(): void;
  getSuggestionData(): google_protobuf_any_pb.Any | undefined;
  setSuggestionData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestFriendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestFriendRequest): SuggestFriendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuggestFriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestFriendRequest;
  static deserializeBinaryFromReader(message: SuggestFriendRequest, reader: jspb.BinaryReader): SuggestFriendRequest;
}

export namespace SuggestFriendRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    userId: number,
    suggestionData?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class SuggestFriendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestFriendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestFriendResponse): SuggestFriendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuggestFriendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestFriendResponse;
  static deserializeBinaryFromReader(message: SuggestFriendResponse, reader: jspb.BinaryReader): SuggestFriendResponse;
}

export namespace SuggestFriendResponse {
  export type AsObject = {
  }
}

export class ListSuggestionsRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSuggestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSuggestionsRequest): ListSuggestionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSuggestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSuggestionsRequest;
  static deserializeBinaryFromReader(message: ListSuggestionsRequest, reader: jspb.BinaryReader): ListSuggestionsRequest;
}

export namespace ListSuggestionsRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
  }
}

export class ListSuggestionsResponse extends jspb.Message {
  clearFriendSuggestionsList(): void;
  getFriendSuggestionsList(): Array<SP_Rpc_Friends_friend_pb.FriendSuggestion>;
  setFriendSuggestionsList(value: Array<SP_Rpc_Friends_friend_pb.FriendSuggestion>): void;
  addFriendSuggestions(value?: SP_Rpc_Friends_friend_pb.FriendSuggestion, index?: number): SP_Rpc_Friends_friend_pb.FriendSuggestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSuggestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSuggestionsResponse): ListSuggestionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSuggestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSuggestionsResponse;
  static deserializeBinaryFromReader(message: ListSuggestionsResponse, reader: jspb.BinaryReader): ListSuggestionsResponse;
}

export namespace ListSuggestionsResponse {
  export type AsObject = {
    friendSuggestionsList: Array<SP_Rpc_Friends_friend_pb.FriendSuggestion.AsObject>,
  }
}

export class NewFriendNotification extends jspb.Message {
  hasFriend(): boolean;
  clearFriend(): void;
  getFriend(): SP_Rpc_Friends_friend_pb.Friend | undefined;
  setFriend(value?: SP_Rpc_Friends_friend_pb.Friend): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewFriendNotification.AsObject;
  static toObject(includeInstance: boolean, msg: NewFriendNotification): NewFriendNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewFriendNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewFriendNotification;
  static deserializeBinaryFromReader(message: NewFriendNotification, reader: jspb.BinaryReader): NewFriendNotification;
}

export namespace NewFriendNotification {
  export type AsObject = {
    friend?: SP_Rpc_Friends_friend_pb.Friend.AsObject,
  }
}

export class RemovedFriendNotification extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovedFriendNotification.AsObject;
  static toObject(includeInstance: boolean, msg: RemovedFriendNotification): RemovedFriendNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovedFriendNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovedFriendNotification;
  static deserializeBinaryFromReader(message: RemovedFriendNotification, reader: jspb.BinaryReader): RemovedFriendNotification;
}

export namespace RemovedFriendNotification {
  export type AsObject = {
    userId: number,
  }
}

export class NewInvitationNotification extends jspb.Message {
  hasInvitation(): boolean;
  clearInvitation(): void;
  getInvitation(): SP_Rpc_Friends_friend_pb.FriendInvitation | undefined;
  setInvitation(value?: SP_Rpc_Friends_friend_pb.FriendInvitation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewInvitationNotification.AsObject;
  static toObject(includeInstance: boolean, msg: NewInvitationNotification): NewInvitationNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewInvitationNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewInvitationNotification;
  static deserializeBinaryFromReader(message: NewInvitationNotification, reader: jspb.BinaryReader): NewInvitationNotification;
}

export namespace NewInvitationNotification {
  export type AsObject = {
    invitation?: SP_Rpc_Friends_friend_pb.FriendInvitation.AsObject,
  }
}

