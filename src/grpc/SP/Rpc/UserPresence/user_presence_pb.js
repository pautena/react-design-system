// source: SP/Rpc/UserPresence/user_presence.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.sp.rpc.userpresence.OnlineStateChangedNotification', null, global);
goog.exportSymbol('proto.sp.rpc.userpresence.PresenceChangedNotification', null, global);
goog.exportSymbol('proto.sp.rpc.userpresence.PresenceData', null, global);
goog.exportSymbol('proto.sp.rpc.userpresence.UserPresence', null, global);
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
proto.sp.rpc.userpresence.UserPresence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userpresence.UserPresence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userpresence.UserPresence.displayName = 'proto.sp.rpc.userpresence.UserPresence';
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
proto.sp.rpc.userpresence.PresenceData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userpresence.PresenceData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userpresence.PresenceData.displayName = 'proto.sp.rpc.userpresence.PresenceData';
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
proto.sp.rpc.userpresence.PresenceChangedNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userpresence.PresenceChangedNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userpresence.PresenceChangedNotification.displayName = 'proto.sp.rpc.userpresence.PresenceChangedNotification';
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
proto.sp.rpc.userpresence.OnlineStateChangedNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userpresence.OnlineStateChangedNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userpresence.OnlineStateChangedNotification.displayName = 'proto.sp.rpc.userpresence.OnlineStateChangedNotification';
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
proto.sp.rpc.userpresence.UserPresence.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userpresence.UserPresence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userpresence.UserPresence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.UserPresence.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    updateTs: (f = msg.getUpdateTs()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    presenceData: (f = msg.getPresenceData()) && proto.sp.rpc.userpresence.PresenceData.toObject(includeInstance, f),
    online: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.sp.rpc.userpresence.UserPresence}
 */
proto.sp.rpc.userpresence.UserPresence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userpresence.UserPresence;
  return proto.sp.rpc.userpresence.UserPresence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userpresence.UserPresence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userpresence.UserPresence}
 */
proto.sp.rpc.userpresence.UserPresence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTs(value);
      break;
    case 3:
      var value = new proto.sp.rpc.userpresence.PresenceData;
      reader.readMessage(value,proto.sp.rpc.userpresence.PresenceData.deserializeBinaryFromReader);
      msg.setPresenceData(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnline(value);
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
proto.sp.rpc.userpresence.UserPresence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userpresence.UserPresence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userpresence.UserPresence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.UserPresence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUpdateTs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPresenceData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sp.rpc.userpresence.PresenceData.serializeBinaryToWriter
    );
  }
  f = message.getOnline();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint64 user_id = 1;
 * @return {number}
 */
proto.sp.rpc.userpresence.UserPresence.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sp.rpc.userpresence.UserPresence} returns this
 */
proto.sp.rpc.userpresence.UserPresence.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp update_ts = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sp.rpc.userpresence.UserPresence.prototype.getUpdateTs = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sp.rpc.userpresence.UserPresence} returns this
*/
proto.sp.rpc.userpresence.UserPresence.prototype.setUpdateTs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userpresence.UserPresence} returns this
 */
proto.sp.rpc.userpresence.UserPresence.prototype.clearUpdateTs = function() {
  return this.setUpdateTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userpresence.UserPresence.prototype.hasUpdateTs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PresenceData presence_data = 3;
 * @return {?proto.sp.rpc.userpresence.PresenceData}
 */
proto.sp.rpc.userpresence.UserPresence.prototype.getPresenceData = function() {
  return /** @type{?proto.sp.rpc.userpresence.PresenceData} */ (
    jspb.Message.getWrapperField(this, proto.sp.rpc.userpresence.PresenceData, 3));
};


/**
 * @param {?proto.sp.rpc.userpresence.PresenceData|undefined} value
 * @return {!proto.sp.rpc.userpresence.UserPresence} returns this
*/
proto.sp.rpc.userpresence.UserPresence.prototype.setPresenceData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userpresence.UserPresence} returns this
 */
proto.sp.rpc.userpresence.UserPresence.prototype.clearPresenceData = function() {
  return this.setPresenceData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userpresence.UserPresence.prototype.hasPresenceData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool online = 4;
 * @return {boolean}
 */
proto.sp.rpc.userpresence.UserPresence.prototype.getOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sp.rpc.userpresence.UserPresence} returns this
 */
proto.sp.rpc.userpresence.UserPresence.prototype.setOnline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.sp.rpc.userpresence.PresenceData.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userpresence.PresenceData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userpresence.PresenceData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.PresenceData.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customData: (f = msg.getCustomData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.sp.rpc.userpresence.PresenceData}
 */
proto.sp.rpc.userpresence.PresenceData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userpresence.PresenceData;
  return proto.sp.rpc.userpresence.PresenceData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userpresence.PresenceData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userpresence.PresenceData}
 */
proto.sp.rpc.userpresence.PresenceData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setCustomData(value);
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
proto.sp.rpc.userpresence.PresenceData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userpresence.PresenceData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userpresence.PresenceData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.PresenceData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCustomData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 state = 1;
 * @return {number}
 */
proto.sp.rpc.userpresence.PresenceData.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sp.rpc.userpresence.PresenceData} returns this
 */
proto.sp.rpc.userpresence.PresenceData.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Any custom_data = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.sp.rpc.userpresence.PresenceData.prototype.getCustomData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.sp.rpc.userpresence.PresenceData} returns this
*/
proto.sp.rpc.userpresence.PresenceData.prototype.setCustomData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userpresence.PresenceData} returns this
 */
proto.sp.rpc.userpresence.PresenceData.prototype.clearCustomData = function() {
  return this.setCustomData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userpresence.PresenceData.prototype.hasCustomData = function() {
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
proto.sp.rpc.userpresence.PresenceChangedNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userpresence.PresenceChangedNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userpresence.PresenceChangedNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.PresenceChangedNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    presence: (f = msg.getPresence()) && proto.sp.rpc.userpresence.UserPresence.toObject(includeInstance, f)
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
 * @return {!proto.sp.rpc.userpresence.PresenceChangedNotification}
 */
proto.sp.rpc.userpresence.PresenceChangedNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userpresence.PresenceChangedNotification;
  return proto.sp.rpc.userpresence.PresenceChangedNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userpresence.PresenceChangedNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userpresence.PresenceChangedNotification}
 */
proto.sp.rpc.userpresence.PresenceChangedNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sp.rpc.userpresence.UserPresence;
      reader.readMessage(value,proto.sp.rpc.userpresence.UserPresence.deserializeBinaryFromReader);
      msg.setPresence(value);
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
proto.sp.rpc.userpresence.PresenceChangedNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userpresence.PresenceChangedNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userpresence.PresenceChangedNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.PresenceChangedNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sp.rpc.userpresence.UserPresence.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserPresence presence = 1;
 * @return {?proto.sp.rpc.userpresence.UserPresence}
 */
proto.sp.rpc.userpresence.PresenceChangedNotification.prototype.getPresence = function() {
  return /** @type{?proto.sp.rpc.userpresence.UserPresence} */ (
    jspb.Message.getWrapperField(this, proto.sp.rpc.userpresence.UserPresence, 1));
};


/**
 * @param {?proto.sp.rpc.userpresence.UserPresence|undefined} value
 * @return {!proto.sp.rpc.userpresence.PresenceChangedNotification} returns this
*/
proto.sp.rpc.userpresence.PresenceChangedNotification.prototype.setPresence = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userpresence.PresenceChangedNotification} returns this
 */
proto.sp.rpc.userpresence.PresenceChangedNotification.prototype.clearPresence = function() {
  return this.setPresence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userpresence.PresenceChangedNotification.prototype.hasPresence = function() {
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
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userpresence.OnlineStateChangedNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userpresence.OnlineStateChangedNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    updateTs: (f = msg.getUpdateTs()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    online: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.sp.rpc.userpresence.OnlineStateChangedNotification}
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userpresence.OnlineStateChangedNotification;
  return proto.sp.rpc.userpresence.OnlineStateChangedNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userpresence.OnlineStateChangedNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userpresence.OnlineStateChangedNotification}
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTs(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnline(value);
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
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userpresence.OnlineStateChangedNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userpresence.OnlineStateChangedNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUpdateTs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOnline();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 user_id = 1;
 * @return {number}
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sp.rpc.userpresence.OnlineStateChangedNotification} returns this
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp update_ts = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.getUpdateTs = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sp.rpc.userpresence.OnlineStateChangedNotification} returns this
*/
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.setUpdateTs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userpresence.OnlineStateChangedNotification} returns this
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.clearUpdateTs = function() {
  return this.setUpdateTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.hasUpdateTs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool online = 3;
 * @return {boolean}
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.getOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sp.rpc.userpresence.OnlineStateChangedNotification} returns this
 */
proto.sp.rpc.userpresence.OnlineStateChangedNotification.prototype.setOnline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.sp.rpc.userpresence);
