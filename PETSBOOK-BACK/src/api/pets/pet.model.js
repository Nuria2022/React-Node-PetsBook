const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");
//const {validationPassword} = require("../../middlewares/util");
const {setError} = require("../../helpers/errors");

const Schema = mongoose.Schema;

const schema = new Schema ({

    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String, required: false},
    type: {type: String, required: false},
    age: {type: Number, required: false},
    description: {type: String, required: false},
});

schema.pre("save", function(next) {
    //if(!validationPassword(this.password)) return next(setError('404', "Invalid password"));
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model("pets", schema);