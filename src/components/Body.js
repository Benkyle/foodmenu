import React from 'react'
import { Card , Button , Carousel, Container , Tabs , Tab} from 'react-bootstrap'
import Menutabs from './Menutabs'
// import Menutabs from '../../components/Menutabs';
const Body = () => {
  return (
    <div>
        <Container className='d-block w-100'>
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
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title><h3><span>Special title treatment</span></h3></Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      <div>
          <Tabs
            defaultActiveKey="profile"
            id="Menu-Tabs"
            className="mb-3"
            fill
          >
            <Tab eventKey="Burgers" title="Burgers">
              <Menutabs />
            </Tab>
            <Tab eventKey="Sandwich" title="Sandwich">
            <div >
                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Steak Sandwich</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Chicken Avcado Sandwich</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Mexican Sandwich</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Steak Wrap</div>
                <div className="p-2">3500</div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Appetizers" title="Appetizers">
              {/* <Menutabs /> */}
              {/* <div>
                <p className='menus'>
                  Mozarella Sticks 2500
                </p>
                <p className='menus'>
                  Chicken Tenders 2500
                </p>
                <p className='menus'>
                  Loaded Fries 2500
                </p>
                <p className='menus'>
                  Buffalo Wings  2500
                </p>
              </div> */}
              <div >
                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Mozarella Sticks</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Chicken Tenders</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Loaded Fries</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Buffalo Wings</div>
                <div className="p-2">3500</div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Shakes" title="Shakes">
              <div>
                {/* <p className='menus'>
                  Oreo Milk Shakes 2500
                </p>
                <p className='menus'>
                  Vanilla Milk Shakes 2500
                </p>
                <p className='menus'>
                  Strawberry Milk Shakes 2500
                </p>
                <p className='menus'>
                  Chocolate Milk Shakes  2500
                </p> */}
                <div >
                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Vanilla Milk Shakes</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Strawberry Milk Shakes</div>
                <div className="p-2">3500</div>
                </div>

                <div className="d-flex menus">
                <div className="p-2 flex-grow-1">Oreo Milk Shakes</div>
                <div className="p-2">3500</div>
                </div>
              </div>

              </div>
            </Tab>
          </Tabs>
          </div>
    </Container>
    </div>
    
  )
}

export default Body
