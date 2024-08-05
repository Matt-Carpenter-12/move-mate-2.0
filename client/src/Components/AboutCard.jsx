import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AboutCard({info}) {
    const {img,name,github,description}= info
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
       <a href={github} target ="_blank" ><Button variant="primary">GitHub</Button></a>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;