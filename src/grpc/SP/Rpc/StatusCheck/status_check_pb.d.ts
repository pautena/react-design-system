// package: sp.rpc.statuscheck
// file: SP/Rpc/StatusCheck/status_check.proto

import * as jspb from "google-protobuf";

export class StatusCheck extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusCheck.AsObject;
  static toObject(includeInstance: boolean, msg: StatusCheck): StatusCheck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusCheck;
  static deserializeBinaryFromReader(message: StatusCheck, reader: jspb.BinaryReader): StatusCheck;
}

export namespace StatusCheck {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
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
    }
  }

  export class Response extends jspb.Message {
    clearChecksList(): void;
    getChecksList(): Array<StatusCheck.Check>;
    setChecksList(value: Array<StatusCheck.Check>): void;
    addChecks(value?: StatusCheck.Check, index?: number): StatusCheck.Check;

    getHostname(): string;
    setHostname(value: string): void;

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
      checksList: Array<StatusCheck.Check.AsObject>,
      hostname: string,
    }
  }

  export class Check extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getStatus(): boolean;
    setStatus(value: boolean): void;

    getInfo(): string;
    setInfo(value: string): void;

    getIsCritical(): boolean;
    setIsCritical(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Check.AsObject;
    static toObject(includeInstance: boolean, msg: Check): Check.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Check, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Check;
    static deserializeBinaryFromReader(message: Check, reader: jspb.BinaryReader): Check;
  }

  export namespace Check {
    export type AsObject = {
      name: string,
      status: boolean,
      info: string,
      isCritical: boolean,
    }
  }
}

