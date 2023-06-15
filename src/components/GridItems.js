import {Card, Col} from 'react-bootstrap';
import './../css/Style.css';
import Button from 'react-bootstrap/Button';
const GridItems = (props) => {
    return (
            <>
           <Col md="4">
              <Card className='text-center'>
                <Card.Img variant='top' src={props.image} />
                <Card.Body>
                  <Card.Title className='font1 text-center'>
                    {props.title}
                  </Card.Title>
                  <Card.Text className='font text-center'>
                   {props.caption}
                 </Card.Text>
                 <Button variant="primary" className='flex justify-content-center'>Story Of Us</Button>
                </Card.Body>
              </Card>
          </Col>
        </>
      );
}
 
export default GridItems;