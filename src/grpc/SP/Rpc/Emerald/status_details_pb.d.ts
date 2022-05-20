// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/status_details.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class StatusDetails extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): google_protobuf_any_pb.Any | undefined;
  setDetails(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusDetails.AsObject;
  static toObject(includeInstance: boolean, msg: StatusDetails): StatusDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusDetails;
  static deserializeBinaryFromReader(message: StatusDetails, reader: jspb.BinaryReader): StatusDetails;
}

export namespace StatusDetails {
  export type AsObject = {
    code: number,
    message: string,
    details?: google_protobuf_any_pb.Any.AsObject,
  }
}

