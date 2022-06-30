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
            unique: true,
            required: true,
            validate: [validateEmail, "Please fill a valid email address"]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thoughts"
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

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model ('user', userSchema);

module.exports = User;