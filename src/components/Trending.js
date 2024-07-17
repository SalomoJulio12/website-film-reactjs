import { Card, Container, Row, Col, Image } from "react-bootstrap";
import hisOnlySonImage from "../assets/images/hisonlyson.jpg";
import toystoryImage from "../assets/images/toystory.jpg";
import insideOutImage from "../assets/images/insideout.jpg";
import ironmanImage from "../assets/images/ironman.jpg";
import spidermanImage from "../assets/images/spiderman.jpg";
import howtomakeImage from "../assets/images/howtomake.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-center text-white">Trending Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
                <Image src={hisOnlySonImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">HIS ONLY SON</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
                <Image src={toystoryImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">TOY STORY 2</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
                <Image src={insideOutImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">INSIDE OUT 2</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
                <Image src={spidermanImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">SPIDERMAN: NO WAY HOME</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
                <Image src={ironmanImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">IRON MAN</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
                <Image src={howtomakeImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">HOW TO MAKE MILLIONS BEFORE GRANDMA DIES</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
        </Row>
      </Container> 
    </div>
  );
};

export default Trending;
