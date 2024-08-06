import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/about.css'

function AboutCard({info}) {
    const {img,name,github,description}= info
  return (
    <Card style={{ width: '18rem' }} className='about-card'>
      <Card.Img variant="top" src={img} className='card-img'/>
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>{name}</Card.Title>
        <Card.Text className='card-text'>
          {description}
        </Card.Text>
       <a href={github} target ="_blank" ><Button className='btn card-btn'>GitHub</Button></a>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;