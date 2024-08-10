import { useState } from 'react';
import '../assets/css/sidebar.css'
import { CiCirclePlus } from "react-icons/ci";
import Input from './input';
import { Offcanvas, Form } from 'react-bootstrap';


function Sidebar() {
    const [show, setShow] = useState(false);
    const [populateForm, setPopulateForm] = useState({level:"", types:"", muscles: "", equipment: ""});
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setPopulateForm({ ...populateForm, [e.target.name]: e.target.value });
    };
    
    const levels = ["All", "Beginner", "Intermediate", "Expert"];
    const types = ["All", "Strength Training", "Warm Up", "Stretching"];
    const muscles = ["All", "Biceps", "Triceps", "Chest", "Back", "Legs", "Abs", "Lats", "Hamstrings", "Calves", "Quadriceps", "Trapezius", "Shoulders", "Glutes"]
    const equipment = ["None", "Resistance Bands", "KettleBell", "Dumbbell", "Barbell", "Bench", "Cable Machine", "Pull-Up Bar", "Smith Machine"];
    

    //make GET request to get data user/:id
    //state update of form
    //update input value = selected data
    const getData = async (userId) => {
        try{
            const userId = sessionStorage.getItem('userId');
            console.log(userId);
            const response = await fetch(`/api/users/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                  }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error:",error)
        }
    }; 
    getData();
    
    return (
        <>
        <div className="sidebar">
             <button className='btn offcanvas-btn' onClick={handleShow}>Add Filter <CiCirclePlus /></button>
             <div className="hide">
             <h5>Add Filter <CiCirclePlus /></h5>

                <h6 className='sidebar-title'>Intensity Level</h6>
                    <Form>
                        {levels.map(level => (
                            <div key={`default-${level}`} className="mb-3">
                                <Form.Check 
                                    type="radio"
                                    id={`default-${level}`}
                                    label={level}
                                    name="level"
                                    value={level === "All" ? "" : level}
                                    checked={populateForm.level === (level === "All" ? "" : level)}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </Form>

                <h6 className="sidebar-title">Exercise Type</h6>
                    <Form>
                        {types.map(types => (
                            <div key={`default-${types}`} className="mb-3">
                                <Form.Check 
                                    type="radio"
                                    id={`default-${types}`}
                                    label={types}
                                    name="types"
                                    value={types === "All" ? "" : types}
                                    checked={populateForm.types === (types === "All" ? "" : types)}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </Form>
                    
                <h6 className="sidebar-title">Muscle Group</h6>
                <Form>
                    {muscles.map(muscle => (
                        <div key={`default-${muscle}`} className="mb-3">
                            <Form.Check 
                                type="radio"
                                id={`default-${muscle}`}
                                label={muscle}
                                name="muscles"
                                value={muscle === "All" ? "" : muscle}
                                checked={populateForm.muscles === (muscle === "All" ? "" : muscle)}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </Form>

                <h6 className="sidebar-title">Equipment</h6>
                <Form>
                    {equipment.map(equipment => (
                        <div key={`default-${equipment}`} className="mb-3">
                            <Form.Check 
                                type="radio"
                                id={`default-${equipment}`}
                                label={equipment}
                                name="equipment"
                                value={equipment === "None" ? "" : equipment}
                                checked={populateForm.equipment === (equipment === "None" ? "" : equipment)}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </Form>

                </div>
                <Offcanvas show={show} onHide={handleClose} responsive="lg" className='offcanvas'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Add Filter <CiCirclePlus /></Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
            <h6 className='sidebar-title'>Intensity Level</h6>
                    <Input 
                    value=""
                    title="All"
                    name="level"
                    />
                    <Input 
                    value="Beginner"
                    title="Beginner"
                    name="level"
                    />
                    <Input 
                    value="Intermediate"
                    title="Intermediate"
                    name="level"
                    />
                    <Input 
                    value="Expert"
                    title="Expert"
                    name="level"
                    />
                <h6 className="sidebar-title">Exercise Type</h6>
                    <Input 
                    value=""
                    title="All"
                    name="types"
                    />
                    <Input 
                    value="Strength-Training"
                    title="Strength Training"
                    name="types"
                    />
                    <Input 
                    value="Warm-up"
                    title="Warm Up"
                    name="types"
                    />
                    <Input 
                    value="Stretching"
                    title="Stretching"
                    name="types"
                    />
                <h6 className="sidebar-title">Muscle Group</h6>
                    <Input 
                    value=""
                    title="All"
                    name="muscles"
                    />
                    <Input 
                    value="Biceps"
                    title="Biceps"
                    name="muscles"
                    />
                    <Input 
                    value="Triceps"
                    title="Triceps"
                    name="muscles"
                    />
                    <Input 
                    value="Chest"
                    title="Chest"
                    name="muscles"
                    />
                    <Input 
                    value="Back"
                    title="Back"
                    name="muscles"
                    />
                    <Input 
                    value="Legs"
                    title="Legs"
                    name="muscles"
                    />
                    <Input 
                    value="Abs"
                    title="Abs"
                    name="muscles"
                    />
                    <Input 
                    value="Lats"
                    title="Lats"
                    name="muscles"
                    />
                    <Input 
                    value="Hamstrings"
                    title="Hamstrings"
                    name="muscles"
                    />
                    <Input 
                    value="Calves"
                    title="Calves"
                    name="muscles"
                    />
                    <Input 
                    value="Quadriceps"
                    title="Quadriceps"
                    name="muscles"
                    />
                    <Input 
                    value="Trapezius"
                    title="Trapezius"
                    name="muscles"
                    />
                    <Input 
                    value="Shoulders"
                    title="Shoulders"
                    name="muscles"
                    />
                    <Input 
                    value="Glutes"
                    title="Glutes"
                    name="muscles"
                    />
                <h6 className="sidebar-title">Equipment</h6>
                    <Input 
                    value="none"
                    title="None"
                    name="equipment"
                    />
                    <Input 
                    value="Resistance-Bands"
                    title="Resistance Bands"
                    name="equipment"
                    />
                    <Input 
                    value="KettleBell"
                    title="KettleBell"
                    name="equipment"
                    />
                    <Input 
                    value="Dumbbell"
                    title="Dumbbell"
                    name="equipment"
                    />
                    <Input 
                    value="Barbell"
                    title="Barbell"
                    name="equipment"
                    />
                    <Input 
                    value="Bench"
                    title="Bench"
                    name="equipment"
                    />
                    <Input 
                    value="Cable-Machine"
                    title="Cable Machine"
                    name="equipment"
                    />
                    <Input 
                    value="Pull-Up-Bar"
                    title="Pull-Up Bar"
                    name="equipment"
                    />
                    <Input 
                    value="Smith-Machine"
                    title="Smith Machine"
                    name="equipment"
                    />
            </Offcanvas.Body>
        </Offcanvas>


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
