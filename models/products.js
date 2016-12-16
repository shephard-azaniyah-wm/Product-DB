var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    resolution: {
        type: String,
        required: true
    },
    pressure: {
        type: Number,
        required: true
    }
});


/**
 * Created by session1 on 12/15/16.
 */
