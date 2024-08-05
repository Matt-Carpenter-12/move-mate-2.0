//side bar with all the filters for workouts

function Sidebar() {
    return (
        <>
            Fiter Exercises
            {/*Show filters with option to remove them*/}
            <ul><h5>Exercise Type</h5>
                <li>Warm Up</li>
                <li>Weight Training</li>
                <li>Stretching</li>
            </ul>
            <ul><h5>Muscle Groups</h5>
                <li>Biceps</li>
                <li>Triceps</li>
                <li>Chest</li>
                <li>Back</li>
                <li>Legs</li>
                <li>Abs</li>
                <li>Lats</li>
                <li>Hamstrings</li>
                <li>Calves</li>
                <li>Quadriceps</li>
                <li>Trapezius</li>
                <li>Shoulders</li>
                <li>Glutes</li>
            </ul>
            <ul><h5>Equipment Needed</h5>
                <li>None</li>
                <li>Resistance Bands</li>
                <li>Dumbbells / Barbells</li>
                <li>Bench</li>
                <li>Kettlebell</li>
                <li>Cable Machine</li>
                <li>Pull-Up Bar</li>
                <li>Smith Machine</li>
            </ul>
        </>
    )
}

export default Sidebar;