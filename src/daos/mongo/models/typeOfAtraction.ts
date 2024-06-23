const typeOfAtractionSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name:{
        tpye: String,
        required: true,
    }
});
export const typeOfAtractionModel = mongoose.model('Type of atractions', typeOfAtractionSchema);