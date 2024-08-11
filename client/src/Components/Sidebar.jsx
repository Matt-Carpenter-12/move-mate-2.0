import { useState, useEffect } from 'react';
import '../assets/css/sidebar.css'
import { CiCirclePlus } from "react-icons/ci";
import Input from './input';
import { Offcanvas, Form, Button, ButtonGroup } from 'react-bootstrap';


function Sidebar() {
    const [show, setShow] = useState(false);
    const [populateForm, setPopulateForm] = useState({ level: "", types: "", muscles: "", equipment: "" });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (key, value) => {
        setPopulateForm({ ...populateForm, [key]: value === "All" || value === "All" ? "" : value });
    }

    const levels = ["All", "Beginner", "Intermediate", "Expert"];
    const types = ["All", "Strength Training", "Warm Up", "Stretching"];
    const muscles = ["All", "Biceps", "Triceps", "Chest", "Back", "Legs", "Abs", "Lats", "Hamstrings", "Calves", "Quadriceps", "Trapezius", "Shoulders", "Glutes"];
    const equipment = ["None", "Resistance Bands", "KettleBell", "Dumbbell", "Barbell", "Bench", "Cable Machine", "Pull-Up Bar", "Smith Machine"];

    useEffect(() => {
        const getData = async () => {
            try {
                const userId = sessionStorage.getItem('userId');
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
                console.log("Response Data:", data);

                const equipment = JSON.parse(data.form[0].equipment);
                setPopulateForm(previous => ({ ...previous, level: data.form[0].fitnessLevel, equipment: equipment}));
            } catch (error) {
                console.error("Error:", error);
            }
        };

        getData();
    }, []);
    
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
                                <Button
                                    className="button-item"
                                    variant={populateForm.level === (level === "all" ? "" : level) ? "primary" : "secondary"}
                                    onClick={() => handleClick("level", level)}
                                >
                                    {level}
                                </Button>
                            </div>
                        ))}
                    </Form>                

                <h6 className="sidebar-title">Exercise Type</h6>
                    <Form>
                        {types.map(type => (
                            <div key={`default-${type}`} className="mb-3">
                                <Button
                                    className="button-item"
                                    variant={populateForm.types === (type === "All" ? "" : type) ? "primary" : "secondary"}
                                    onClick={() => handleClick("types", type)}
                                >
                                    {type}
                                </Button>
                            </div>
                        ))}
                    </Form>
                    
                <h6 className="sidebar-title">Muscle Group</h6>
                    <Form>
                        {muscles.map(muscle => (
                            <div key={`default-${muscle}`} className="mb-3">
                                <Button
                                    className="button-item"
                                    variant={populateForm.muscles === (muscle === "All" ? "" : muscle) ? "primary" : "secondary"}
                                    onClick={() => handleClick("muscle", muscle)}
                                >
                                    {muscle}
                                </Button>
                            </div>
                        ))}
                    </Form>

                <h6 className="sidebar-title">Equipment</h6>
                    <Form>
                        {equipment.map(equipment => (
                            <div key={`default-${equipment}`} className="mb-3">
                                <Button
                                    className="button-item"
                                    variant={populateForm.equipment === (equipment === "All" ? "" : equipment) ? "primary" : "secondary"}
                                    onClick={() => handleClick("equipment", equipment)}
                                >
                                    {equipment}
                                </Button>
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
                            
                            <Form>
                                {levels.map(level => (
                                    <div key={`default-${level}`} className="mb-3">
                                        <Button
                                            className="button-item"
                                            variant={populateForm.level === (level === "all" ? "" : level) ? "primary" : "secondary"}
                                            onClick={() => handleClick("level", level)}
                                        >
                                            {level}
                                        </Button>
                                    </div>
                                ))}
                            </Form>                

                        <h6 className="sidebar-title">Exercise Type</h6>
                            <Form>
                                {types.map(type => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Button
                                            className="button-item"
                                            variant={populateForm.types === (type === "All" ? "" : type) ? "primary" : "secondary"}
                                            onClick={() => handleClick("types", type)}
                                        >
                                            {type}
                                        </Button>
                                    </div>
                                ))}
                            </Form>
                            
                        <h6 className="sidebar-title">Muscle Group</h6>
                            <Form>
                                {muscles.map(muscle => (
                                    <div key={`default-${muscle}`} className="mb-3">
                                        <Button
                                            className="button-item"
                                            variant={populateForm.muscles === (muscle === "All" ? "" : muscle) ? "primary" : "secondary"}
                                            onClick={() => handleClick("muscle", muscle)}
                                        >
                                            {muscle}
                                        </Button>
                                    </div>
                                ))}
                            </Form>

                        <h6 className="sidebar-title">Equipment</h6>
                            <Form>
                                {equipment.map(equipment => (
                                    <div key={`default-${equipment}`} className="mb-3">
                                        <Button
                                            className="button-item"
                                            variant={populateForm.equipment === (equipment === "All" ? "" : equipment) ? "primary" : "secondary"}
                                            onClick={() => handleClick("equipment", equipment)}
                                        >
                                            {equipment}
                                        </Button>
                                    </div>
                                ))}
                            </Form>
                    </Offcanvas.Body>
        </Offcanvas>
        </div>
        </>
    )
}

export default Sidebar;
