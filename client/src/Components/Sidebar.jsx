//side bar with all the filters for workouts
import '../assets/css/sidebar.css'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <h5>Filter Exercises</h5>
            {/*Show filters with option to remove them*/}
            
            <Nav className="flex-column">
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink} className='dropdown-title'>Intensity Level</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='dropdown-item'>Beginner</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Intermediate</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Expert</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink} className='dropdown-title'>Exercise Type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='dropdown-item'>Warm Up</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Weight Training</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Stretching</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink} className='dropdown-title'>Muscle Groups</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='dropdown-item'>Biceps</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Triceps</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Chest</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Back</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Legs</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Abs</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Lats</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Hamstrings</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Calves</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Quadriceps</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Trapezius</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Shoulders</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Glutes</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink} className='dropdown-title'>Equipment Needed</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='dropdown-item'>None</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Resistance Band</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Dumbbell</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Kettlebell</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Barbell</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Bench</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Cable Machine</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Pull-Up Bar</Dropdown.Item>
                        <Dropdown.Item className='dropdown-item'>Smith Machine</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </div>
        </>
    )
}

export default Sidebar;