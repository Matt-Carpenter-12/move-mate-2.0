//page for seeing the workout history
import Header from "../Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/log.css";
import StarCalendar from "../Components/Calendar";

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
            </Col>
            <Col lg={9}>
              <StarCalendar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Log;
