import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
