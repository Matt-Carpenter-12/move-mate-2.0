//side bar with all the filters for workouts
import '../assets/css/sidebar.css'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { CiCirclePlus } from "react-icons/ci";
import Input from './input';

function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <h5>Add Filter <CiCirclePlus /></h5>
                <h6 className='sidebar-title'>Intensity Level</h6>
                    <Input 
                    value=""
                    title="All"
                    name="All-Levels"
                    />
                    <Input 
                    value="Beginner"
                    title="Beginner"
                    name="Beginner"
                    />
                    <Input 
                    value="Intermediate"
                    title="Intermediate"
                    name="Intermediate"
                    />
                    <Input 
                    value="Expert"
                    title="Expert"
                    name="Expert"
                    />
                <h6 className="sidebar-title">Exercise Type</h6>
                    <Input 
                    value=""
                    title="All"
                    name="All-Types"
                    />
                    <Input 
                    value="Strength-Training"
                    title="Strength Training"
                    name="Strength-Training"
                    />
                    <Input 
                    value="Warm-up"
                    title="Warm Up"
                    name="Warm-up"
                    />
                    <Input 
                    value="Stretching"
                    title="Stretching"
                    name="Stretching"
                    />
                <h6 className="sidebar-title">Muscle Group</h6>
                    <Input 
                    value=""
                    title="All"
                    name="All-Muscles"
                    />
                    <Input 
                    value="Biceps"
                    title="Biceps"
                    name="Biceps"
                    />
                    <Input 
                    value="Triceps"
                    title="Triceps"
                    name="Triceps"
                    />
                    <Input 
                    value="Chest"
                    title="Chest"
                    name="Chest"
                    />
                    <Input 
                    value="Back"
                    title="Back"
                    name="Back"
                    />
                    <Input 
                    value="Legs"
                    title="Legs"
                    name="Legs"
                    />
                    <Input 
                    value="Abs"
                    title="Abs"
                    name="Abs"
                    />
                    <Input 
                    value="Lats"
                    title="Lats"
                    name="Lats"
                    />
                    <Input 
                    value="Hamstrings"
                    title="Hamstrings"
                    name="Hamstrings"
                    />
                    <Input 
                    value="Calves"
                    title="Calves"
                    name="Calves"
                    />
                    <Input 
                    value="Quadriceps"
                    title="Quadriceps"
                    name="Quadriceps"
                    />
                    <Input 
                    value="Trapezius"
                    title="Trapezius"
                    name="Trapezius"
                    />
                    <Input 
                    value="Shoulders"
                    title="Shoulders"
                    name="Shoulders"
                    />
                    <Input 
                    value="Glutes"
                    title="Glutes"
                    name="Glutes"
                    />
                <h6 className="sidebar-title">Equipment</h6>
                    <Input 
                    value="none"
                    title="None"
                    name="No-Equipment"
                    />
                    <Input 
                    value="Resistance-Bands"
                    title="Resistance Bands"
                    name="Resistance-Bands"
                    />
                    <Input 
                    value="KettleBell"
                    title="KettleBell"
                    name="KettleBell"
                    />
                    <Input 
                    value="Dumbbell"
                    title="Dumbbell"
                    name="Dumbbell"
                    />
                    <Input 
                    value="Barbell"
                    title="Barbell"
                    name="Barbell"
                    />
                    <Input 
                    value="Bench"
                    title="Bench"
                    name="Bench"
                    />
                    <Input 
                    value="Cable-Machine"
                    title="Cable Machine"
                    name="Cable-Machine"
                    />
                    <Input 
                    value="Pull-Up-Bar"
                    title="Pull-Up Bar"
                    name="Pull-Up-Bar"
                    />
                    <Input 
                    value="Smith-Machine"
                    title="Smith Machine"
                    name="Smith-Machine"
                    />


            {/* <Nav className="flex-column">
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
            </Nav> */}
        </div>
        </>
    )
}

export default Sidebar;