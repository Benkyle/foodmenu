import React from 'react'
import { Card , Button , Carousel, Container , Tabs , Tab} from 'react-bootstrap'
import Menutabs from './Menutabs'
// import Menutabs from '../../components/Menutabs';
const Body = () => {
  return (
    <div>
        <Container className='d-block w-100%'>
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../slide1.jpg"
          alt="Mozarella Burger"
        />
        <Carousel.Caption>
          <h5>Mozarella Burger</h5>
          <p>Marineted Grilled Chicken,Avocado, Lettuce, Homemade Aioli Sauce.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../chickenbugger.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>crispy chicken bugger</h5>
          <p>EBO dipped fried chicken, Cheddar Chhese, Coleslaw, Pickles, Home made Ai.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="chikenavovado.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>chikenavovado</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bbqburger.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>BBQ Bugger</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Card className='text-center'>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Burgers" title="Burgers">
        <Menutabs />
      </Tab>
      <Tab eventKey="Sandwich" title="Sandwich">
        <Menutabs/>
      </Tab>
      <Tab eventKey="Appetizers" title="Appetizers">
        {/* <Menutabs /> */}
        <p>
        As an unperfect actor on the stage, Who with his fear is put beside his 
        part, Or some fierce thing replete with too much rage, Whose strength's 
        abundance weakens his own heart; So I, for fear of trust, forget to 
        say The perfect ceremony of love's rite, And in mine own love's 
        strength seem to decay, O'ercharg'd with burthen of mine own love's 
        might. O! let my looks be then the eloquence And dumb presagers of my 
        speaking breast
        </p>
      </Tab>
    </Tabs>
    </Container>
    </div>
    
  )
}

export default Body
