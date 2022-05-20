// source: SP/Rpc/UserProfile/user_profile_service.proto
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

var SP_Rpc_Emerald_basic_request_context_pb = require('../../../SP/Rpc/Emerald/basic_request_context_pb.js');
goog.object.extend(proto, SP_Rpc_Emerald_basic_request_context_pb);
var SP_Rpc_UserProfile_user_profile_pb = require('../../../SP/Rpc/UserProfile/user_profile_pb.js');
goog.object.extend(proto, SP_Rpc_UserProfile_user_profile_pb);
goog.exportSymbol('proto.sp.rpc.userprofile.RetrieveProfileRequest', null, global);
goog.exportSymbol('proto.sp.rpc.userprofile.RetrieveProfileResponse', null, global);
goog.exportSymbol('proto.sp.rpc.userprofile.UpdateProfileRequest', null, global);
goog.exportSymbol('proto.sp.rpc.userprofile.UpdateProfileResponse', null, global);
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
proto.sp.rpc.userprofile.UpdateProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userprofile.UpdateProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userprofile.UpdateProfileRequest.displayName = 'proto.sp.rpc.userprofile.UpdateProfileRequest';
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
proto.sp.rpc.userprofile.UpdateProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userprofile.UpdateProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userprofile.UpdateProfileResponse.displayName = 'proto.sp.rpc.userprofile.UpdateProfileResponse';
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
proto.sp.rpc.userprofile.RetrieveProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userprofile.RetrieveProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userprofile.RetrieveProfileRequest.displayName = 'proto.sp.rpc.userprofile.RetrieveProfileRequest';
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
proto.sp.rpc.userprofile.RetrieveProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.userprofile.RetrieveProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.userprofile.RetrieveProfileResponse.displayName = 'proto.sp.rpc.userprofile.RetrieveProfileResponse';
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
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userprofile.UpdateProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userprofile.UpdateProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestContext: (f = msg.getRequestContext()) && SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.toObject(includeInstance, f),
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
 * @return {!proto.sp.rpc.userprofile.UpdateProfileRequest}
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userprofile.UpdateProfileRequest;
  return proto.sp.rpc.userprofile.UpdateProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userprofile.UpdateProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userprofile.UpdateProfileRequest}
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext;
      reader.readMessage(value,SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.deserializeBinaryFromReader);
      msg.setRequestContext(value);
      break;
    case 2:
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
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userprofile.UpdateProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userprofile.UpdateProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestContext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.serializeBinaryToWriter
    );
  }
  f = message.getUserProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      SP_Rpc_UserProfile_user_profile_pb.UserProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional sp.rpc.emerald.BasicRequestContext request_context = 1;
 * @return {?proto.sp.rpc.emerald.BasicRequestContext}
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.getRequestContext = function() {
  return /** @type{?proto.sp.rpc.emerald.BasicRequestContext} */ (
    jspb.Message.getWrapperField(this, SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext, 1));
};


/**
 * @param {?proto.sp.rpc.emerald.BasicRequestContext|undefined} value
 * @return {!proto.sp.rpc.userprofile.UpdateProfileRequest} returns this
*/
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.setRequestContext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userprofile.UpdateProfileRequest} returns this
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.clearRequestContext = function() {
  return this.setRequestContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.hasRequestContext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserProfile user_profile = 2;
 * @return {?proto.sp.rpc.userprofile.UserProfile}
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.getUserProfile = function() {
  return /** @type{?proto.sp.rpc.userprofile.UserProfile} */ (
    jspb.Message.getWrapperField(this, SP_Rpc_UserProfile_user_profile_pb.UserProfile, 2));
};


/**
 * @param {?proto.sp.rpc.userprofile.UserProfile|undefined} value
 * @return {!proto.sp.rpc.userprofile.UpdateProfileRequest} returns this
*/
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.setUserProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userprofile.UpdateProfileRequest} returns this
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.clearUserProfile = function() {
  return this.setUserProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userprofile.UpdateProfileRequest.prototype.hasUserProfile = function() {
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
proto.sp.rpc.userprofile.UpdateProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userprofile.UpdateProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userprofile.UpdateProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.UpdateProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.sp.rpc.userprofile.UpdateProfileResponse}
 */
proto.sp.rpc.userprofile.UpdateProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userprofile.UpdateProfileResponse;
  return proto.sp.rpc.userprofile.UpdateProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userprofile.UpdateProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userprofile.UpdateProfileResponse}
 */
proto.sp.rpc.userprofile.UpdateProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.sp.rpc.userprofile.UpdateProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userprofile.UpdateProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userprofile.UpdateProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.UpdateProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userprofile.RetrieveProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userprofile.RetrieveProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestContext: (f = msg.getRequestContext()) && SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileRequest}
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userprofile.RetrieveProfileRequest;
  return proto.sp.rpc.userprofile.RetrieveProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userprofile.RetrieveProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileRequest}
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext;
      reader.readMessage(value,SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.deserializeBinaryFromReader);
      msg.setRequestContext(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
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
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userprofile.RetrieveProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userprofile.RetrieveProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestContext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional sp.rpc.emerald.BasicRequestContext request_context = 1;
 * @return {?proto.sp.rpc.emerald.BasicRequestContext}
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.getRequestContext = function() {
  return /** @type{?proto.sp.rpc.emerald.BasicRequestContext} */ (
    jspb.Message.getWrapperField(this, SP_Rpc_Emerald_basic_request_context_pb.BasicRequestContext, 1));
};


/**
 * @param {?proto.sp.rpc.emerald.BasicRequestContext|undefined} value
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileRequest} returns this
*/
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.setRequestContext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileRequest} returns this
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.clearRequestContext = function() {
  return this.setRequestContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.hasRequestContext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 user_id = 2;
 * @return {number}
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileRequest} returns this
 */
proto.sp.rpc.userprofile.RetrieveProfileRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.sp.rpc.userprofile.RetrieveProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.userprofile.RetrieveProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.userprofile.RetrieveProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.RetrieveProfileResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileResponse}
 */
proto.sp.rpc.userprofile.RetrieveProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.userprofile.RetrieveProfileResponse;
  return proto.sp.rpc.userprofile.RetrieveProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.userprofile.RetrieveProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileResponse}
 */
proto.sp.rpc.userprofile.RetrieveProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sp.rpc.userprofile.RetrieveProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.userprofile.RetrieveProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.userprofile.RetrieveProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.userprofile.RetrieveProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional UserProfile user_profile = 1;
 * @return {?proto.sp.rpc.userprofile.UserProfile}
 */
proto.sp.rpc.userprofile.RetrieveProfileResponse.prototype.getUserProfile = function() {
  return /** @type{?proto.sp.rpc.userprofile.UserProfile} */ (
    jspb.Message.getWrapperField(this, SP_Rpc_UserProfile_user_profile_pb.UserProfile, 1));
};


/**
 * @param {?proto.sp.rpc.userprofile.UserProfile|undefined} value
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileResponse} returns this
*/
proto.sp.rpc.userprofile.RetrieveProfileResponse.prototype.setUserProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.userprofile.RetrieveProfileResponse} returns this
 */
proto.sp.rpc.userprofile.RetrieveProfileResponse.prototype.clearUserProfile = function() {
  return this.setUserProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.userprofile.RetrieveProfileResponse.prototype.hasUserProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.sp.rpc.userprofile);
