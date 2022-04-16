

  import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your Name",]
    },
    email: {
        type: String,
        required: [true, "Please Enter your Email"]
    },
    booked_room: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders"
    }]
});


const User = mongoose.model("User", UserSchema);

module.exports = User;