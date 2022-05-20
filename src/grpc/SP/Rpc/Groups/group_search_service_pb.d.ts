// package: sp.rpc.groups
// file: SP/Rpc/Groups/group_search_service.proto

import * as jspb from "google-protobuf";
import * as SP_Rpc_Emerald_basic_request_context_pb from "../../../SP/Rpc/Emerald/basic_request_context_pb";
import * as SP_Rpc_Groups_groups_pb from "../../../SP/Rpc/Groups/groups_pb";

export class FindGroupsRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext | undefined;
  setRequestContext(value?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext): void;

  getFeature(): string;
  setFeature(value: string): void;

  getEntriesPerPage(): number;
  setEntriesPerPage(value: number): void;

  getPageNumber(): number;
  setPageNumber(value: number): void;

  getNamePattern(): string;
  setNamePattern(value: string): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  getCapacityCondition(): FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap];
  setCapacityCondition(value: FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap]): void;

  getNumMembers(): number;
  setNumMembers(value: number): void;

  getNumMembersCondition(): FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap];
  setNumMembersCondition(value: FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap]): void;

  getAvailableCapacity(): number;
  setAvailableCapacity(value: number): void;

  getAvailableCapacityCondition(): FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap];
  setAvailableCapacityCondition(value: FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap]): void;

  clearMemberIdsList(): void;
  getMemberIdsList(): Array<number>;
  setMemberIdsList(value: Array<number>): void;
  addMemberIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindGroupsRequest): FindGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindGroupsRequest;
  static deserializeBinaryFromReader(message: FindGroupsRequest, reader: jspb.BinaryReader): FindGroupsRequest;
}

export namespace FindGroupsRequest {
  export type AsObject = {
    requestContext?: SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.AsObject,
    feature: string,
    entriesPerPage: number,
    pageNumber: number,
    namePattern: string,
    capacity: number,
    capacityCondition: FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap],
    numMembers: number,
    numMembersCondition: FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap],
    availableCapacity: number,
    availableCapacityCondition: FindGroupsRequest.AmountConditionTypeMap[keyof FindGroupsRequest.AmountConditionTypeMap],
    memberIdsList: Array<number>,
  }

  export interface AmountConditionTypeMap {
    EQUALS: 0;
    MIN: 1;
    MAX: 2;
  }

  export const AmountConditionType: AmountConditionTypeMap;
}

export class FindGroupsResponse extends jspb.Message {
  clearMatchingGroupsList(): void;
  getMatchingGroupsList(): Array<SP_Rpc_Groups_groups_pb.Group>;
  setMatchingGroupsList(value: Array<SP_Rpc_Groups_groups_pb.Group>): void;
  addMatchingGroups(value?: SP_Rpc_Groups_groups_pb.Group, index?: number): SP_Rpc_Groups_groups_pb.Group;

  getTotalMatches(): number;
  setTotalMatches(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindGroupsResponse): FindGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindGroupsResponse;
  static deserializeBinaryFromReader(message: FindGroupsResponse, reader: jspb.BinaryReader): FindGroupsResponse;
}

export namespace FindGroupsResponse {
  export type AsObject = {
    matchingGroupsList: Array<SP_Rpc_Groups_groups_pb.Group.AsObject>,
    totalMatches: number,
  }
}

