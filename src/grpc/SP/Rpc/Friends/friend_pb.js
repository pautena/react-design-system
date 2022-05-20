// source: SP/Rpc/Friends/friend.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var SP_Rpc_UserProfile_user_profile_pb = require('../../../SP/Rpc/UserProfile/user_profile_pb.js');
goog.object.extend(proto, SP_Rpc_UserProfile_user_profile_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.sp.rpc.friends.Friend', null, global);
goog.exportSymbol('proto.sp.rpc.friends.FriendInvitation', null, global);
goog.exportSymbol('proto.sp.rpc.friends.FriendSuggestion', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sp.rpc.friends.Friend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.friends.Friend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.friends.Friend.displayName = 'proto.sp.rpc.friends.Friend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sp.rpc.friends.FriendInvitation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.friends.FriendInvitation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.friends.FriendInvitation.displayName = 'proto.sp.rpc.friends.FriendInvitation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sp.rpc.friends.FriendSuggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.friends.FriendSuggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.friends.FriendSuggestion.displayName = 'proto.sp.rpc.friends.FriendSuggestion';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sp.rpc.friends.Friend.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.friends.Friend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.friends.Friend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.friends.Friend.toObject = function(includeInstance, msg) {
  var f, obj = {
    userProfile: (f = msg.getUserProfile()) && SP_Rpc_UserProfile_user_profile_pb.UserProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sp.rpc.friends.Friend}
 */
proto.sp.rpc.friends.Friend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.friends.Friend;
  return proto.sp.rpc.friends.Friend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.friends.Friend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.friends.Friend}
 */
proto.sp.rpc.friends.Friend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new SP_Rpc_UserProfile_user_profile_pb.UserProfile;
      reader.readMessage(value,SP_Rpc_UserProfile_user_profile_pb.UserProfile.deserializeBinaryFromReader);
      msg.setUserProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sp.rpc.friends.Friend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.friends.Friend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.friends.Friend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.friends.Friend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      SP_Rpc_UserProfile_user_profile_pb.UserProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional sp.rpc.userprofile.UserProfile user_profile = 1;
 * @return {?proto.sp.rpc.userprofile.UserProfile}
 */
proto.sp.rpc.friends.Friend.prototype.getUserProfile = function() {
  return /** @type{?proto.sp.rpc.userprofile.UserProfile} */ (
    jspb.Message.getWrapperField(this, SP_Rpc_UserProfile_user_profile_pb.UserProfile, 1));
};


/**
 * @param {?proto.sp.rpc.userprofile.UserProfile|undefined} value
 * @return {!proto.sp.rpc.friends.Friend} returns this
*/
proto.sp.rpc.friends.Friend.prototype.setUserProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.friends.Friend} returns this
 */
proto.sp.rpc.friends.Friend.prototype.clearUserProfile = function() {
  return this.setUserProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.friends.Friend.prototype.hasUserProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sp.rpc.friends.FriendInvitation.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.friends.FriendInvitation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.friends.FriendInvitation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.friends.FriendInvitation.toObject = function(includeInstance, msg) {
  var f, obj = {
    friend: (f = msg.getFriend()) && proto.sp.rpc.friends.Friend.toObject(includeInstance, f),
    invitationTs: (f = msg.getInvitationTs()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sp.rpc.friends.FriendInvitation}
 */
proto.sp.rpc.friends.FriendInvitation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.friends.FriendInvitation;
  return proto.sp.rpc.friends.FriendInvitation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.friends.FriendInvitation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.friends.FriendInvitation}
 */
proto.sp.rpc.friends.FriendInvitation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sp.rpc.friends.Friend;
      reader.readMessage(value,proto.sp.rpc.friends.Friend.deserializeBinaryFromReader);
      msg.setFriend(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInvitationTs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sp.rpc.friends.FriendInvitation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.friends.FriendInvitation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.friends.FriendInvitation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.friends.FriendInvitation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sp.rpc.friends.Friend.serializeBinaryToWriter
    );
  }
  f = message.getInvitationTs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Friend friend = 1;
 * @return {?proto.sp.rpc.friends.Friend}
 */
proto.sp.rpc.friends.FriendInvitation.prototype.getFriend = function() {
  return /** @type{?proto.sp.rpc.friends.Friend} */ (
    jspb.Message.getWrapperField(this, proto.sp.rpc.friends.Friend, 1));
};


/**
 * @param {?proto.sp.rpc.friends.Friend|undefined} value
 * @return {!proto.sp.rpc.friends.FriendInvitation} returns this
*/
proto.sp.rpc.friends.FriendInvitation.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.friends.FriendInvitation} returns this
 */
proto.sp.rpc.friends.FriendInvitation.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.friends.FriendInvitation.prototype.hasFriend = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp invitation_ts = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sp.rpc.friends.FriendInvitation.prototype.getInvitationTs = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sp.rpc.friends.FriendInvitation} returns this
*/
proto.sp.rpc.friends.FriendInvitation.prototype.setInvitationTs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.friends.FriendInvitation} returns this
 */
proto.sp.rpc.friends.FriendInvitation.prototype.clearInvitationTs = function() {
  return this.setInvitationTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.friends.FriendInvitation.prototype.hasInvitationTs = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.friends.FriendSuggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.friends.FriendSuggestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.friends.FriendSuggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    friend: (f = msg.getFriend()) && proto.sp.rpc.friends.Friend.toObject(includeInstance, f),
    suggestionData: (f = msg.getSuggestionData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sp.rpc.friends.FriendSuggestion}
 */
proto.sp.rpc.friends.FriendSuggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.friends.FriendSuggestion;
  return proto.sp.rpc.friends.FriendSuggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.friends.FriendSuggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.friends.FriendSuggestion}
 */
proto.sp.rpc.friends.FriendSuggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sp.rpc.friends.Friend;
      reader.readMessage(value,proto.sp.rpc.friends.Friend.deserializeBinaryFromReader);
      msg.setFriend(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setSuggestionData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.friends.FriendSuggestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.friends.FriendSuggestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.friends.FriendSuggestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sp.rpc.friends.Friend.serializeBinaryToWriter
    );
  }
  f = message.getSuggestionData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional Friend friend = 1;
 * @return {?proto.sp.rpc.friends.Friend}
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.getFriend = function() {
  return /** @type{?proto.sp.rpc.friends.Friend} */ (
    jspb.Message.getWrapperField(this, proto.sp.rpc.friends.Friend, 1));
};


/**
 * @param {?proto.sp.rpc.friends.Friend|undefined} value
 * @return {!proto.sp.rpc.friends.FriendSuggestion} returns this
*/
proto.sp.rpc.friends.FriendSuggestion.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.friends.FriendSuggestion} returns this
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.hasFriend = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Any suggestion_data = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.getSuggestionData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.sp.rpc.friends.FriendSuggestion} returns this
*/
proto.sp.rpc.friends.FriendSuggestion.prototype.setSuggestionData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.friends.FriendSuggestion} returns this
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.clearSuggestionData = function() {
  return this.setSuggestionData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.friends.FriendSuggestion.prototype.hasSuggestionData = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.sp.rpc.friends);