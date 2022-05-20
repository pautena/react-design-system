// source: SP/Rpc/Leaderboard/admin_service.proto
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
goog.exportSymbol('proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest', null, global);
goog.exportSymbol('proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse', null, global);
goog.exportSymbol('proto.sp.rpc.leaderboard.ResetLeaderboardRequest', null, global);
goog.exportSymbol('proto.sp.rpc.leaderboard.ResetLeaderboardResponse', null, global);
goog.exportSymbol('proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest', null, global);
goog.exportSymbol('proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.Policy', null, global);
goog.exportSymbol('proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse', null, global);
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
proto.sp.rpc.leaderboard.ResetLeaderboardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.leaderboard.ResetLeaderboardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.leaderboard.ResetLeaderboardRequest.displayName = 'proto.sp.rpc.leaderboard.ResetLeaderboardRequest';
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
proto.sp.rpc.leaderboard.ResetLeaderboardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.leaderboard.ResetLeaderboardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.leaderboard.ResetLeaderboardResponse.displayName = 'proto.sp.rpc.leaderboard.ResetLeaderboardResponse';
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
proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.displayName = 'proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest';
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
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.repeatedFields_, null);
};
goog.inherits(proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.displayName = 'proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse';
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
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.displayName = 'proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest';
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
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.displayName = 'proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse';
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
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.leaderboard.ResetLeaderboardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.leaderboard.ResetLeaderboardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leaderboardId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.sp.rpc.leaderboard.ResetLeaderboardRequest}
 */
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.leaderboard.ResetLeaderboardRequest;
  return proto.sp.rpc.leaderboard.ResetLeaderboardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.leaderboard.ResetLeaderboardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.leaderboard.ResetLeaderboardRequest}
 */
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeaderboardId(value);
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
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.leaderboard.ResetLeaderboardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.leaderboard.ResetLeaderboardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeaderboardId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string leaderboard_id = 1;
 * @return {string}
 */
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.prototype.getLeaderboardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sp.rpc.leaderboard.ResetLeaderboardRequest} returns this
 */
proto.sp.rpc.leaderboard.ResetLeaderboardRequest.prototype.setLeaderboardId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.sp.rpc.leaderboard.ResetLeaderboardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.leaderboard.ResetLeaderboardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.leaderboard.ResetLeaderboardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.ResetLeaderboardResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sp.rpc.leaderboard.ResetLeaderboardResponse}
 */
proto.sp.rpc.leaderboard.ResetLeaderboardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.leaderboard.ResetLeaderboardResponse;
  return proto.sp.rpc.leaderboard.ResetLeaderboardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.leaderboard.ResetLeaderboardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.leaderboard.ResetLeaderboardResponse}
 */
proto.sp.rpc.leaderboard.ResetLeaderboardResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sp.rpc.leaderboard.ResetLeaderboardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.leaderboard.ResetLeaderboardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.leaderboard.ResetLeaderboardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.ResetLeaderboardResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest}
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest;
  return proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest}
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.repeatedFields_ = [1];



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
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    leaderboardIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse}
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse;
  return proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse}
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLeaderboardIds(value);
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
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeaderboardIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string leaderboard_ids = 1;
 * @return {!Array<string>}
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.prototype.getLeaderboardIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse} returns this
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.prototype.setLeaderboardIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse} returns this
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.prototype.addLeaderboardIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse} returns this
 */
proto.sp.rpc.leaderboard.GetLeaderboardIDsResponse.prototype.clearLeaderboardIdsList = function() {
  return this.setLeaderboardIdsList([]);
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
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leaderboardId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    score: jspb.Message.getFieldWithDefault(msg, 3, 0),
    policy: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rankingMetadata: (f = msg.getRankingMetadata()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest;
  return proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeaderboardId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.Policy} */ (reader.readEnum());
      msg.setPolicy(value);
      break;
    case 5:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setRankingMetadata(value);
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
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeaderboardId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getRankingMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.Policy = {
  ABSOLUTE: 0,
  RELATIVE: 1,
  HIGHER: 2,
  LOWER: 3
};

/**
 * optional string leaderboard_id = 1;
 * @return {string}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.getLeaderboardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} returns this
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.setLeaderboardId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 user_id = 2;
 * @return {number}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} returns this
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 score = 3;
 * @return {number}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} returns this
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Policy policy = 4;
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.Policy}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.getPolicy = function() {
  return /** @type {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.Policy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.Policy} value
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} returns this
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.setPolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Any ranking_metadata = 5;
 * @return {?proto.google.protobuf.Any}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.getRankingMetadata = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 5));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} returns this
*/
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.setRankingMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest} returns this
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.clearRankingMetadata = function() {
  return this.setRankingMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreRequest.prototype.hasRankingMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse;
  return proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse}
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sp.rpc.leaderboard.UpdateLeaderboardScoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.sp.rpc.leaderboard);
