 const { Schema, model } = require('mongoose');
const { User } = require('./User');

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        muscles: {
            type: Number,
            required: true,
        },
        equipment: {
            type: Number,
        },
        intensity_level: {
            type: Number,
            required: true,
        },
        explanation: {
            type: Number,
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