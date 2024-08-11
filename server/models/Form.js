const { Schema, Typesl } = require('mongoose');

const formSchema = new Schema(
    {
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