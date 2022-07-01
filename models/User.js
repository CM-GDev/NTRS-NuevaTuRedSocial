// unpacking "schema" and "model" from mongoose
const {Schema, model} = require('mongoose');

//email validation function
var validateEmail = function (email){
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimm: true,
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: true,
            validate: [validateEmail, "Please fill a valid email address"],
            // get: obfuscate,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        friends: [this],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
//  virtual to add friendCount to toJSON response
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize our User model
const User = model ('user', userSchema);
// export User mode
module.exports = User;