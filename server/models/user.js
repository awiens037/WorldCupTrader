var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    screenName: String,
    email: String,
    password: String,
    authKey: String, 
    has: [Number],
    needs: [Number],
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;