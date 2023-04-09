const recommendationSchema = new Schema({
    emotion: {
        type: String,
        required: true,
    },
    books: [
        {
            title: {
                type: String,
                required: true,
            },
            author: {
                type: String,
                required: true,
            },
            summary: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        },
    ],
});


const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;