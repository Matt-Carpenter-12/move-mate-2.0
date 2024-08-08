 const { Schema, model } = require('mongoose');
const { User } = require('./User');

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        muscles: {
            type: String,
            required: true,
        },
        equipment: {
            type: String,
        },
        intensity_level: {
            type: String,
            required: true,
        },
        explanation: {
            type: String,
            required: true,
        },
    }
);


const workoutSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        date: {
            type: Date,
        },
        exercises: [exerciseSchema],
    }
);

const Exercise = model('Exercise', exerciseSchema);
const Workout = model('Workout', workoutSchema);

module.exports = { Exercise, Workout };