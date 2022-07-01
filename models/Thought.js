// unpacking "schema" and "model" from mongoose
const {Schema, model} = require('mongoose');
// importing reactionSchema
const reactionSchema = require('./Reaction')

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,
        },//nesting reactionSchema
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    },
    // { timestamps: true}
);
//  virtual to add reactionCount to toJSON response
userSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
// initiating a Thought model
const Thought = model('thought', thoughtSchema);
// exporting the Thought model
module.exports = Thought;