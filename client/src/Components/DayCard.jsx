import { Card } from "react-bootstrap";
import '../assets/css/homepage.css'

export default function DayCard({day, id}) {
  return (
    <div>
        <Card onClick={() => alert("Hello from here")} id={id} className="day-card">
            <Card.Body className="day-card-body">
            <Card.Title className="day-card-title">{day}</Card.Title>
            {/* <Card.Text></Card.Text> */}
            </Card.Body>
        </Card>

    </div>
  )
}
