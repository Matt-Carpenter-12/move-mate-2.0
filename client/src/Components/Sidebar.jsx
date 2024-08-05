//side bar with all the filters for workouts
import '../assets/css/sidebar.css'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function Sidebar() {
    return (
        <>
        <section className="sidebar">
            <h5>Fiter Exercises</h5>
            {/*Show filters with option to remove them*/}
            
            <Nav className="flex-column">
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>Intensity Level</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Beginner</Dropdown.Item>
                        <Dropdown.Item>Intermediate</Dropdown.Item>
                        <Dropdown.Item>Expert</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>Exercise Type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Warm Up</Dropdown.Item>
                        <Dropdown.Item>Weight Training</Dropdown.Item>
                        <Dropdown.Item>Stretching</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>Muscle Groups</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Biceps</Dropdown.Item>
                        <Dropdown.Item>Triceps</Dropdown.Item>
                        <Dropdown.Item>Chest</Dropdown.Item>
                        <Dropdown.Item>Back</Dropdown.Item>
                        <Dropdown.Item>Legs</Dropdown.Item>
                        <Dropdown.Item>Abs</Dropdown.Item>
                        <Dropdown.Item>Lats</Dropdown.Item>
                        <Dropdown.Item>Hamstrings</Dropdown.Item>
                        <Dropdown.Item>Calves</Dropdown.Item>
                        <Dropdown.Item>Quadriceps</Dropdown.Item>
                        <Dropdown.Item>Trapezius</Dropdown.Item>
                        <Dropdown.Item>Shoulders</Dropdown.Item>
                        <Dropdown.Item>Glutes</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>Equipment Needed</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>None</Dropdown.Item>
                        <Dropdown.Item>Resistance Band</Dropdown.Item>
                        <Dropdown.Item>Dumbbell</Dropdown.Item>
                        <Dropdown.Item>Kettlebell</Dropdown.Item>
                        <Dropdown.Item>Barbell</Dropdown.Item>
                        <Dropdown.Item>Bench</Dropdown.Item>
                        <Dropdown.Item>Cable Machine</Dropdown.Item>
                        <Dropdown.Item>Pull-Up Bar</Dropdown.Item>
                        <Dropdown.Item>Smith Machine</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </section>
        </>
    )
}

export default Sidebar;