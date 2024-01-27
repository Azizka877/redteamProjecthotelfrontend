import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hotel1 from '../images/H1.jpg'

function CardComp() {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={hotel1} />
      <Card.Body>
        <Card.Title>Boulevart Aliou ardo sow rue-234</Card.Title>
        <Card.Text>
          Hotel Terrou Bi
        </Card.Text>
        <span >25000 par nuit</span>
      </Card.Body>
    </Card>
  );
}

export default CardComp;