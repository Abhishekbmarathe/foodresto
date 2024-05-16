import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    phone: Number,
    food: Array,
    serves: Array, // Assuming serves is a number
    price: Array, // Assuming price is a number
    delivery: String,
    address: String,
});

const User = mongoose.model('User', userSchema);

export default User;
