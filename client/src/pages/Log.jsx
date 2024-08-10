//page for seeing the workout history
import Header from "../Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/log.css";
import History from "../Components/History";
import workoutHistory from "../Components/History";

function Log() {
  return (
    <>
      <Header />
      <div className="log">
        <Container>
          <Row>
            <Col xs={12} lg={3}>
              <h2>
                SELECT A DATE TO SEE YOUR{" "}
                <span className="accent-color">WORKOUT HISTORY</span>
              </h2>
              <p>the calendar will go here!</p>
            </Col>
            <Col lg={9}>
              <div className="workout-history-page">
                <h1>Workout History</h1>
                <History workoutHistory={workoutHistory} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Log;
