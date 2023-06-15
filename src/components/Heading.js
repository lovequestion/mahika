import {Navbar, Container} from 'react-bootstrap';
import Magical from "./../images/Magic.png";

const Heading = () => {
    return ( 
        <div>
      <Navbar bg="danger">
        <Container className='justify-content-center enchanted-love'>
          <Navbar.Brand href="#home">Enchanted Love</Navbar.Brand>
        </Container>
      </Navbar>
      <img src={Magical} className= 'w-100' alt="" />
        </div>
     );
}
 
export default Heading;