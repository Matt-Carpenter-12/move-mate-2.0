const { Schema, Typesl } = require('mongoose');

const formSchema = new Schema(
    {
        // formId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId,
        // },
        fitnessLevel: {
            type: String
        },
        equipment: {
            type: String
        },
        workoutDays: {
            type: Number
        },
    }
)


module.exports = formSchema;