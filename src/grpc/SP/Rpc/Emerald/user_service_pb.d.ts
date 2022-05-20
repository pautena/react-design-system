// package: sp.rpc.emerald
// file: SP/Rpc/Emerald/user_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as SP_Rpc_Emerald_request_context_pb from "../../../SP/Rpc/Emerald/request_context_pb";
import * as SP_Rpc_Emerald_terms_of_service_pb from "../../../SP/Rpc/Emerald/terms_of_service_pb";
import * as SP_Rpc_Emerald_cross_promotion_pb from "../../../SP/Rpc/Emerald/cross_promotion_pb";

export class User extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
  }

  export class Login extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Login.AsObject;
    static toObject(includeInstance: boolean, msg: Login): Login.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Login, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Login;
    static deserializeBinaryFromReader(message: Login, reader: jspb.BinaryReader): Login;
  }

  export namespace Login {
    export type AsObject = {
    }

    export class GenericData extends jspb.Message {
      hasServerTs(): boolean;
      clearServerTs(): void;
      getServerTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setServerTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

      hasUser(): boolean;
      clearUser(): void;
      getUser(): User.Login.GenericData.User | undefined;
      setUser(value?: User.Login.GenericData.User): void;

      hasTermsOfService(): boolean;
      clearTermsOfService(): void;
      getTermsOfService(): SP_Rpc_Emerald_terms_of_service_pb.TermsOfService | undefined;
      setTermsOfService(value?: SP_Rpc_Emerald_terms_of_service_pb.TermsOfService): void;

      hasCrossPromotion(): boolean;
      clearCrossPromotion(): void;
      getCrossPromotion(): SP_Rpc_Emerald_cross_promotion_pb.CrossPromotion | undefined;
      setCrossPromotion(value?: SP_Rpc_Emerald_cross_promotion_pb.CrossPromotion): void;

      hasSuggestedUpgrade(): boolean;
      clearSuggestedUpgrade(): void;
      getSuggestedUpgrade(): User.Login.GenericData.SuggestedUpgrade | undefined;
      setSuggestedUpgrade(value?: User.Login.GenericData.SuggestedUpgrade): void;

      hasSocial(): boolean;
      clearSocial(): void;
      getSocial(): User.Login.GenericData.Social | undefined;
      setSocial(value?: User.Login.GenericData.Social): void;

      hasMessage(): boolean;
      clearMessage(): void;
      getMessage(): User.Login.GenericData.GenericMessage | undefined;
      setMessage(value?: User.Login.GenericData.GenericMessage): void;

      hasChannelSettings(): boolean;
      clearChannelSettings(): void;
      getChannelSettings(): User.Login.GenericData.ChannelSettings | undefined;
      setChannelSettings(value?: User.Login.GenericData.ChannelSettings): void;

      hasMarketingSettings(): boolean;
      clearMarketingSettings(): void;
      getMarketingSettings(): User.Login.GenericData.MarketingSettings | undefined;
      setMarketingSettings(value?: User.Login.GenericData.MarketingSettings): void;

      getAppDataUpdatedBy(): User.UpdatedByMap[keyof User.UpdatedByMap];
      setAppDataUpdatedBy(value: User.UpdatedByMap[keyof User.UpdatedByMap]): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GenericData.AsObject;
      static toObject(includeInstance: boolean, msg: GenericData): GenericData.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GenericData, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GenericData;
      static deserializeBinaryFromReader(message: GenericData, reader: jspb.BinaryReader): GenericData;
    }

    export namespace GenericData {
      export type AsObject = {
        serverTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        user?: User.Login.GenericData.User.AsObject,
        termsOfService?: SP_Rpc_Emerald_terms_of_service_pb.TermsOfService.AsObject,
        crossPromotion?: SP_Rpc_Emerald_cross_promotion_pb.CrossPromotion.AsObject,
        suggestedUpgrade?: User.Login.GenericData.SuggestedUpgrade.AsObject,
        social?: User.Login.GenericData.Social.AsObject,
        message?: User.Login.GenericData.GenericMessage.AsObject,
        channelSettings?: User.Login.GenericData.ChannelSettings.AsObject,
        marketingSettings?: User.Login.GenericData.MarketingSettings.AsObject,
        appDataUpdatedBy: User.UpdatedByMap[keyof User.UpdatedByMap],
      }

      export class User extends jspb.Message {
        hasRegistrationTs(): boolean;
        clearRegistrationTs(): void;
        getRegistrationTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRegistrationTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

        getExpire(): number;
        setExpire(value: number): void;

        getUserId(): number;
        setUserId(value: number): void;

        getSessionId(): number;
        setSessionId(value: number): void;

        getIsNgu(): boolean;
        setIsNgu(value: boolean): void;

        getUserImportance(): User.ImportanceMap[keyof User.ImportanceMap];
        setUserImportance(value: User.ImportanceMap[keyof User.ImportanceMap]): void;

        getIsCheater(): boolean;
        setIsCheater(value: boolean): void;

        clearLinkedAccountsList(): void;
        getLinkedAccountsList(): Array<User.Link.Account>;
        setLinkedAccountsList(value: Array<User.Link.Account>): void;
        addLinkedAccounts(value?: User.Link.Account, index?: number): User.Link.Account;

        getAdsCategory(): string;
        setAdsCategory(value: string): void;

        getCountryCode(): string;
        setCountryCode(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): User.AsObject;
        static toObject(includeInstance: boolean, msg: User): User.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): User;
        static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
      }

      export namespace User {
        export type AsObject = {
          registrationTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
          expire: number,
          userId: number,
          sessionId: number,
          isNgu: boolean,
          userImportance: User.ImportanceMap[keyof User.ImportanceMap],
          isCheater: boolean,
          linkedAccountsList: Array<User.Link.Account.AsObject>,
          adsCategory: string,
          countryCode: string,
        }
      }

      export class SuggestedUpgrade extends jspb.Message {
        getStoreUrl(): string;
        setStoreUrl(value: string): void;

        getMessage(): string;
        setMessage(value: string): void;

        getVersion(): string;
        setVersion(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SuggestedUpgrade.AsObject;
        static toObject(includeInstance: boolean, msg: SuggestedUpgrade): SuggestedUpgrade.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SuggestedUpgrade, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SuggestedUpgrade;
        static deserializeBinaryFromReader(message: SuggestedUpgrade, reader: jspb.BinaryReader): SuggestedUpgrade;
      }

      export namespace SuggestedUpgrade {
        export type AsObject = {
          storeUrl: string,
          message: string,
          version: string,
        }
      }

      export class Social extends jspb.Message {
        clearWebsocketEndpointsList(): void;
        getWebsocketEndpointsList(): Array<string>;
        setWebsocketEndpointsList(value: Array<string>): void;
        addWebsocketEndpoints(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Social.AsObject;
        static toObject(includeInstance: boolean, msg: Social): Social.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Social, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Social;
        static deserializeBinaryFromReader(message: Social, reader: jspb.BinaryReader): Social;
      }

      export namespace Social {
        export type AsObject = {
          websocketEndpointsList: Array<string>,
        }
      }

      export class GenericMessage extends jspb.Message {
        getTitle(): string;
        setTitle(value: string): void;

        getMessage(): string;
        setMessage(value: string): void;

        getButton(): string;
        setButton(value: string): void;

        getUrl(): string;
        setUrl(value: string): void;

        getBlocking(): boolean;
        setBlocking(value: boolean): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GenericMessage.AsObject;
        static toObject(includeInstance: boolean, msg: GenericMessage): GenericMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GenericMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GenericMessage;
        static deserializeBinaryFromReader(message: GenericMessage, reader: jspb.BinaryReader): GenericMessage;
      }

      export namespace GenericMessage {
        export type AsObject = {
          title: string,
          message: string,
          button: string,
          url: string,
          blocking: boolean,
        }
      }

      export class ChannelSettings extends jspb.Message {
        clearOptionsList(): void;
        getOptionsList(): Array<User.Login.GenericData.ChannelSettings.ChannelOption>;
        setOptionsList(value: Array<User.Login.GenericData.ChannelSettings.ChannelOption>): void;
        addOptions(value?: User.Login.GenericData.ChannelSettings.ChannelOption, index?: number): User.Login.GenericData.ChannelSettings.ChannelOption;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ChannelSettings.AsObject;
        static toObject(includeInstance: boolean, msg: ChannelSettings): ChannelSettings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ChannelSettings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ChannelSettings;
        static deserializeBinaryFromReader(message: ChannelSettings, reader: jspb.BinaryReader): ChannelSettings;
      }

      export namespace ChannelSettings {
        export type AsObject = {
          optionsList: Array<User.Login.GenericData.ChannelSettings.ChannelOption.AsObject>,
        }

        export class ChannelOption extends jspb.Message {
          getName(): string;
          setName(value: string): void;

          hasStringValue(): boolean;
          clearStringValue(): void;
          getStringValue(): string;
          setStringValue(value: string): void;

          hasIntValue(): boolean;
          clearIntValue(): void;
          getIntValue(): number;
          setIntValue(value: number): void;

          getValueCase(): ChannelOption.ValueCase;
          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ChannelOption.AsObject;
          static toObject(includeInstance: boolean, msg: ChannelOption): ChannelOption.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ChannelOption, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ChannelOption;
          static deserializeBinaryFromReader(message: ChannelOption, reader: jspb.BinaryReader): ChannelOption;
        }

        export namespace ChannelOption {
          export type AsObject = {
            name: string,
            stringValue: string,
            intValue: number,
          }

          export enum ValueCase {
            VALUE_NOT_SET = 0,
            STRING_VALUE = 2,
            INT_VALUE = 3,
          }
        }
      }

      export class MarketingSettings extends jspb.Message {
        getAttributionTimeout(): number;
        setAttributionTimeout(value: number): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MarketingSettings.AsObject;
        static toObject(includeInstance: boolean, msg: MarketingSettings): MarketingSettings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MarketingSettings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MarketingSettings;
        static deserializeBinaryFromReader(message: MarketingSettings, reader: jspb.BinaryReader): MarketingSettings;
      }

      export namespace MarketingSettings {
        export type AsObject = {
          attributionTimeout: number,
        }
      }
    }

    export class GameData extends jspb.Message {
      hasData(): boolean;
      clearData(): void;
      getData(): google_protobuf_any_pb.Any | undefined;
      setData(value?: google_protobuf_any_pb.Any): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GameData.AsObject;
      static toObject(includeInstance: boolean, msg: GameData): GameData.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GameData, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GameData;
      static deserializeBinaryFromReader(message: GameData, reader: jspb.BinaryReader): GameData;
    }

    export namespace GameData {
      export type AsObject = {
        data?: google_protobuf_any_pb.Any.AsObject,
      }
    }

    export class Request extends jspb.Message {
      hasTs(): boolean;
      clearTs(): void;
      getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setTs(value?: google_protobuf_timestamp_pb.Timestamp): void;

      getUserId(): number;
      setUserId(value: number): void;

      getSecurityToken(): string;
      setSecurityToken(value: string): void;

      getLinkType(): User.Link.TypeMap[keyof User.Link.TypeMap];
      setLinkType(value: User.Link.TypeMap[keyof User.Link.TypeMap]): void;

      getClientAppId(): string;
      setClientAppId(value: string): void;

      getClientVersion(): string;
      setClientVersion(value: string): void;

      getClientBuild(): string;
      setClientBuild(value: string): void;

      getClientLanguage(): string;
      setClientLanguage(value: string): void;

      getPlatform(): string;
      setPlatform(value: string): void;

      getDevice(): string;
      setDevice(value: string): void;

      getDeviceUid(): string;
      setDeviceUid(value: string): void;

      getDeviceOs(): string;
      setDeviceOs(value: string): void;

      getDeviceLanguage(): string;
      setDeviceLanguage(value: string): void;

      getDeviceAdId(): string;
      setDeviceAdId(value: string): void;

      getDeviceAdIdEnabled(): boolean;
      setDeviceAdIdEnabled(value: boolean): void;

      getDeviceRooted(): boolean;
      setDeviceRooted(value: boolean): void;

      getDeviceVendorId(): string;
      setDeviceVendorId(value: string): void;

      getNetworkConnection(): string;
      setNetworkConnection(value: string): void;

      hasMarketingIds(): boolean;
      clearMarketingIds(): void;
      getMarketingIds(): User.Login.Request.MarketingIds | undefined;
      setMarketingIds(value?: User.Login.Request.MarketingIds): void;

      getAdTrackingStatus(): string;
      setAdTrackingStatus(value: string): void;

      getPlatformStore(): string;
      setPlatformStore(value: string): void;

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
        ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        userId: number,
        securityToken: string,
        linkType: User.Link.TypeMap[keyof User.Link.TypeMap],
        clientAppId: string,
        clientVersion: string,
        clientBuild: string,
        clientLanguage: string,
        platform: string,
        device: string,
        deviceUid: string,
        deviceOs: string,
        deviceLanguage: string,
        deviceAdId: string,
        deviceAdIdEnabled: boolean,
        deviceRooted: boolean,
        deviceVendorId: string,
        networkConnection: string,
        marketingIds?: User.Login.Request.MarketingIds.AsObject,
        adTrackingStatus: string,
        platformStore: string,
      }

      export class MarketingIds extends jspb.Message {
        getAppsflyer(): string;
        setAppsflyer(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MarketingIds.AsObject;
        static toObject(includeInstance: boolean, msg: MarketingIds): MarketingIds.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MarketingIds, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MarketingIds;
        static deserializeBinaryFromReader(message: MarketingIds, reader: jspb.BinaryReader): MarketingIds;
      }

      export namespace MarketingIds {
        export type AsObject = {
          appsflyer: string,
        }
      }
    }

    export class Response extends jspb.Message {
      hasGenericData(): boolean;
      clearGenericData(): void;
      getGenericData(): User.Login.GenericData | undefined;
      setGenericData(value?: User.Login.GenericData): void;

      hasGameData(): boolean;
      clearGameData(): void;
      getGameData(): User.Login.GameData | undefined;
      setGameData(value?: User.Login.GameData): void;

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
        genericData?: User.Login.GenericData.AsObject,
        gameData?: User.Login.GameData.AsObject,
      }
    }
  }

  export class Link extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
    }

    export class Account extends jspb.Message {
      getProvider(): User.Link.ProviderMap[keyof User.Link.ProviderMap];
      setProvider(value: User.Link.ProviderMap[keyof User.Link.ProviderMap]): void;

      getExternalId(): string;
      setExternalId(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Account.AsObject;
      static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Account;
      static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
    }

    export namespace Account {
      export type AsObject = {
        provider: User.Link.ProviderMap[keyof User.Link.ProviderMap],
        externalId: string,
      }
    }

    export class Facebook extends jspb.Message {
      getExternalId(): string;
      setExternalId(value: string): void;

      getAccessToken(): string;
      setAccessToken(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Facebook.AsObject;
      static toObject(includeInstance: boolean, msg: Facebook): Facebook.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Facebook, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Facebook;
      static deserializeBinaryFromReader(message: Facebook, reader: jspb.BinaryReader): Facebook;
    }

    export namespace Facebook {
      export type AsObject = {
        externalId: string,
        accessToken: string,
      }
    }

    export class Google extends jspb.Message {
      getExternalId(): string;
      setExternalId(value: string): void;

      getAccessToken(): string;
      setAccessToken(value: string): void;

      getUserName(): string;
      setUserName(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Google.AsObject;
      static toObject(includeInstance: boolean, msg: Google): Google.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Google, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Google;
      static deserializeBinaryFromReader(message: Google, reader: jspb.BinaryReader): Google;
    }

    export namespace Google {
      export type AsObject = {
        externalId: string,
        accessToken: string,
        userName: string,
      }
    }

    export class GameCenter extends jspb.Message {
      getExternalId(): string;
      setExternalId(value: string): void;

      getUserName(): string;
      setUserName(value: string): void;

      getAgeGroup(): User.AgeGroupMap[keyof User.AgeGroupMap];
      setAgeGroup(value: User.AgeGroupMap[keyof User.AgeGroupMap]): void;

      hasVerification(): boolean;
      clearVerification(): void;
      getVerification(): User.Link.GameCenter.Verification | undefined;
      setVerification(value?: User.Link.GameCenter.Verification): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GameCenter.AsObject;
      static toObject(includeInstance: boolean, msg: GameCenter): GameCenter.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GameCenter, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GameCenter;
      static deserializeBinaryFromReader(message: GameCenter, reader: jspb.BinaryReader): GameCenter;
    }

    export namespace GameCenter {
      export type AsObject = {
        externalId: string,
        userName: string,
        ageGroup: User.AgeGroupMap[keyof User.AgeGroupMap],
        verification?: User.Link.GameCenter.Verification.AsObject,
      }

      export class Verification extends jspb.Message {
        getUrl(): string;
        setUrl(value: string): void;

        getSignature(): string;
        setSignature(value: string): void;

        getSalt(): string;
        setSalt(value: string): void;

        getTime(): number;
        setTime(value: number): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Verification.AsObject;
        static toObject(includeInstance: boolean, msg: Verification): Verification.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Verification, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Verification;
        static deserializeBinaryFromReader(message: Verification, reader: jspb.BinaryReader): Verification;
      }

      export namespace Verification {
        export type AsObject = {
          url: string,
          signature: string,
          salt: string,
          time: number,
        }
      }
    }

    export class Apple extends jspb.Message {
      getExternalId(): string;
      setExternalId(value: string): void;

      getIdentityToken(): string;
      setIdentityToken(value: string): void;

      getAuthCode(): string;
      setAuthCode(value: string): void;

      getState(): string;
      setState(value: string): void;

      getRealUserStatus(): number;
      setRealUserStatus(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Apple.AsObject;
      static toObject(includeInstance: boolean, msg: Apple): Apple.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Apple, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Apple;
      static deserializeBinaryFromReader(message: Apple, reader: jspb.BinaryReader): Apple;
    }

    export namespace Apple {
      export type AsObject = {
        externalId: string,
        identityToken: string,
        authCode: string,
        state: string,
        realUserStatus: number,
      }
    }

    export class Unity extends jspb.Message {
      getExternalId(): string;
      setExternalId(value: string): void;

      getAccessToken(): string;
      setAccessToken(value: string): void;

      getUserName(): string;
      setUserName(value: string): void;

      hasResponse(): boolean;
      clearResponse(): void;
      getResponse(): User.Link.Response | undefined;
      setResponse(value?: User.Link.Response): void;

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
        externalId: string,
        accessToken: string,
        userName: string,
        response?: User.Link.Response.AsObject,
      }
    }

    export class Info extends jspb.Message {
      hasData(): boolean;
      clearData(): void;
      getData(): google_protobuf_any_pb.Any | undefined;
      setData(value?: google_protobuf_any_pb.Any): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Info.AsObject;
      static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Info;
      static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
    }

    export namespace Info {
      export type AsObject = {
        data?: google_protobuf_any_pb.Any.AsObject,
      }
    }

    export class Request extends jspb.Message {
      hasContext(): boolean;
      clearContext(): void;
      getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
      setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

      hasFacebook(): boolean;
      clearFacebook(): void;
      getFacebook(): User.Link.Facebook | undefined;
      setFacebook(value?: User.Link.Facebook): void;

      hasGoogle(): boolean;
      clearGoogle(): void;
      getGoogle(): User.Link.Google | undefined;
      setGoogle(value?: User.Link.Google): void;

      hasGameCenter(): boolean;
      clearGameCenter(): void;
      getGameCenter(): User.Link.GameCenter | undefined;
      setGameCenter(value?: User.Link.GameCenter): void;

      hasApple(): boolean;
      clearApple(): void;
      getApple(): User.Link.Apple | undefined;
      setApple(value?: User.Link.Apple): void;

      hasUnity(): boolean;
      clearUnity(): void;
      getUnity(): User.Link.Unity | undefined;
      setUnity(value?: User.Link.Unity): void;

      getDataCase(): Request.DataCase;
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
        facebook?: User.Link.Facebook.AsObject,
        google?: User.Link.Google.AsObject,
        gameCenter?: User.Link.GameCenter.AsObject,
        apple?: User.Link.Apple.AsObject,
        unity?: User.Link.Unity.AsObject,
      }

      export enum DataCase {
        DATA_NOT_SET = 0,
        FACEBOOK = 2,
        GOOGLE = 3,
        GAME_CENTER = 4,
        APPLE = 5,
        UNITY = 6,
      }
    }

    export class Response extends jspb.Message {
      getType(): User.Link.TypeMap[keyof User.Link.TypeMap];
      setType(value: User.Link.TypeMap[keyof User.Link.TypeMap]): void;

      getConfirmLinkToken(): string;
      setConfirmLinkToken(value: string): void;

      hasInfo(): boolean;
      clearInfo(): void;
      getInfo(): User.Link.Info | undefined;
      setInfo(value?: User.Link.Info): void;

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
        type: User.Link.TypeMap[keyof User.Link.TypeMap],
        confirmLinkToken: string,
        info?: User.Link.Info.AsObject,
      }
    }

    export class Confirm extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Confirm.AsObject;
      static toObject(includeInstance: boolean, msg: Confirm): Confirm.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Confirm, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Confirm;
      static deserializeBinaryFromReader(message: Confirm, reader: jspb.BinaryReader): Confirm;
    }

    export namespace Confirm {
      export type AsObject = {
      }

      export class Request extends jspb.Message {
        hasContext(): boolean;
        clearContext(): void;
        getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
        setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

        getConfirmLinkToken(): string;
        setConfirmLinkToken(value: string): void;

        getDecision(): User.Link.DecisionMap[keyof User.Link.DecisionMap];
        setDecision(value: User.Link.DecisionMap[keyof User.Link.DecisionMap]): void;

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
          confirmLinkToken: string,
          decision: User.Link.DecisionMap[keyof User.Link.DecisionMap],
        }
      }

      export class Response extends jspb.Message {
        getUserId(): number;
        setUserId(value: number): void;

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
          userId: number,
        }
      }
    }

    export class Mapping extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Mapping.AsObject;
      static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Mapping;
      static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
    }

    export namespace Mapping {
      export type AsObject = {
      }

      export class Data extends jspb.Message {
        getUserId(): number;
        setUserId(value: number): void;

        clearAccountsList(): void;
        getAccountsList(): Array<User.Link.Account>;
        setAccountsList(value: Array<User.Link.Account>): void;
        addAccounts(value?: User.Link.Account, index?: number): User.Link.Account;

        hasInfo(): boolean;
        clearInfo(): void;
        getInfo(): User.Link.Info | undefined;
        setInfo(value?: User.Link.Info): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Data.AsObject;
        static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Data;
        static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
      }

      export namespace Data {
        export type AsObject = {
          userId: number,
          accountsList: Array<User.Link.Account.AsObject>,
          info?: User.Link.Info.AsObject,
        }
      }

      export class Request extends jspb.Message {
        hasContext(): boolean;
        clearContext(): void;
        getContext(): SP_Rpc_Emerald_request_context_pb.RequestContext | undefined;
        setContext(value?: SP_Rpc_Emerald_request_context_pb.RequestContext): void;

        clearAccountsList(): void;
        getAccountsList(): Array<User.Link.Account>;
        setAccountsList(value: Array<User.Link.Account>): void;
        addAccounts(value?: User.Link.Account, index?: number): User.Link.Account;

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
          accountsList: Array<User.Link.Account.AsObject>,
        }
      }

      export class Response extends jspb.Message {
        clearDataList(): void;
        getDataList(): Array<User.Link.Mapping.Data>;
        setDataList(value: Array<User.Link.Mapping.Data>): void;
        addData(value?: User.Link.Mapping.Data, index?: number): User.Link.Mapping.Data;

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
          dataList: Array<User.Link.Mapping.Data.AsObject>,
        }
      }
    }

    export interface ProviderMap {
      SOCIAL_POINT: 0;
      FACEBOOK: 1;
      GOOGLE: 2;
      GAME_CENTER: 3;
      APPLE: 4;
      UNITY: 5;
    }

    export const Provider: ProviderMap;

    export interface TypeMap {
      NONE: 0;
      LOOSE_TO_LINKED: 1;
      LINKED_TO_LOOSE: 2;
      LINKED_TO_SAME: 3;
      LINKED_TO_LINKED: 4;
      LOOSE_TO_LOOSE: 5;
    }

    export const Type: TypeMap;

    export interface DecisionMap {
      CANCEL: 0;
      KEEP: 1;
      CHANGE: 2;
    }

    export const Decision: DecisionMap;
  }

  export interface AgeGroupMap {
    UNKNOWN: 0;
    UNDER_AGE: 1;
    ADULT: 2;
  }

  export const AgeGroup: AgeGroupMap;

  export interface ImportanceMap {
    PLANKTON: 0;
    FISH: 1;
    DOLPHIN: 2;
    SEAL: 3;
    WHALE: 4;
    KILLER_WHALE: 5;
  }

  export const Importance: ImportanceMap;

  export interface UpdatedByMap {
    PLAYER: 0;
    BACKEND: 1;
  }

  export const UpdatedBy: UpdatedByMap;
}

