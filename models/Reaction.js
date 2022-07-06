// unpacking "schema" and "model" from mongoose
const { Schema, Types } = require('mongoose');

// Schema for Reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {//_id field not necessary since we have "reactionId" field
    _id: false
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
  
);

// exporting schema
module.exports = reactionSchema;