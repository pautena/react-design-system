// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/cross_promotion.proto

import * as jspb from "google-protobuf";

export class CrossPromotion extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasIcon(): boolean;
  clearIcon(): void;
  getIcon(): CrossPromotion.Icon | undefined;
  setIcon(value?: CrossPromotion.Icon): void;

  hasPopup(): boolean;
  clearPopup(): void;
  getPopup(): CrossPromotion.Popup | undefined;
  setPopup(value?: CrossPromotion.Popup): void;

  getTrackTimeout(): number;
  setTrackTimeout(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrossPromotion.AsObject;
  static toObject(includeInstance: boolean, msg: CrossPromotion): CrossPromotion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CrossPromotion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrossPromotion;
  static deserializeBinaryFromReader(message: CrossPromotion, reader: jspb.BinaryReader): CrossPromotion;
}

export namespace CrossPromotion {
  export type AsObject = {
    id: string,
    icon?: CrossPromotion.Icon.AsObject,
    popup?: CrossPromotion.Popup.AsObject,
    trackTimeout: number,
  }

  export class Banner extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getGame(): string;
    setGame(value: string): void;

    getStoreId(): string;
    setStoreId(value: string): void;

    getAppId(): string;
    setAppId(value: string): void;

    getButtonInstalled(): string;
    setButtonInstalled(value: string): void;

    getButtonNotInstalled(): string;
    setButtonNotInstalled(value: string): void;

    getBackground(): string;
    setBackground(value: string): void;

    getIcon(): string;
    setIcon(value: string): void;

    getRibbon(): boolean;
    setRibbon(value: boolean): void;

    getCurrent(): boolean;
    setCurrent(value: boolean): void;

    getAspectRatio(): number;
    setAspectRatio(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Banner.AsObject;
    static toObject(includeInstance: boolean, msg: Banner): Banner.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Banner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Banner;
    static deserializeBinaryFromReader(message: Banner, reader: jspb.BinaryReader): Banner;
  }

  export namespace Banner {
    export type AsObject = {
      id: number,
      game: string,
      storeId: string,
      appId: string,
      buttonInstalled: string,
      buttonNotInstalled: string,
      background: string,
      icon: string,
      ribbon: boolean,
      current: boolean,
      aspectRatio: number,
    }
  }

  export class Icon extends jspb.Message {
    getShow(): boolean;
    setShow(value: boolean): void;

    getId(): number;
    setId(value: number): void;

    getSrc(): string;
    setSrc(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Icon.AsObject;
    static toObject(includeInstance: boolean, msg: Icon): Icon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Icon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Icon;
    static deserializeBinaryFromReader(message: Icon, reader: jspb.BinaryReader): Icon;
  }

  export namespace Icon {
    export type AsObject = {
      show: boolean,
      id: number,
      src: string,
    }
  }

  export class Popup extends jspb.Message {
    getShow(): boolean;
    setShow(value: boolean): void;

    getFrequency(): number;
    setFrequency(value: number): void;

    getTimeout(): number;
    setTimeout(value: number): void;

    getTitle(): string;
    setTitle(value: string): void;

    getAspectRatio(): number;
    setAspectRatio(value: number): void;

    getHeightFactor(): number;
    setHeightFactor(value: number): void;

    clearBannersList(): void;
    getBannersList(): Array<CrossPromotion.Banner>;
    setBannersList(value: Array<CrossPromotion.Banner>): void;
    addBanners(value?: CrossPromotion.Banner, index?: number): CrossPromotion.Banner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Popup.AsObject;
    static toObject(includeInstance: boolean, msg: Popup): Popup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Popup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Popup;
    static deserializeBinaryFromReader(message: Popup, reader: jspb.BinaryReader): Popup;
  }

  export namespace Popup {
    export type AsObject = {
      show: boolean,
      frequency: number,
      timeout: number,
      title: string,
      aspectRatio: number,
      heightFactor: number,
      bannersList: Array<CrossPromotion.Banner.AsObject>,
    }
  }
}

