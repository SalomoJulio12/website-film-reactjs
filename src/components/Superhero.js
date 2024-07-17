import { Card, Container, Row, Col, Image } from "react-bootstrap";
import haikyuuImage from "../assets/images/haikyuu.jpg";
import conjuringImage from "../assets/images/conjuring.jpg";
import kungfupandaImage from "../assets/images/kungfupanda.jpg";
import endgameImage from "../assets/images/endgame.jpg";
import fastxImage from "../assets/images/fastx.jpg";
import godzilakongImage from "../assets/images/godzilakong.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-center text-white">Movie List</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
                <Image src={haikyuuImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">HAIKYUU FINAL MOVIE</Card.Title>
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
                <Image src={conjuringImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">CONJURING 2</Card.Title>
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
                <Image src={kungfupandaImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">KUNG FU PANDA 4</Card.Title>
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
                <Image src={endgameImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">AVENGERS: END GAME</Card.Title>
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
                <Image src={fastxImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">FAST X</Card.Title>
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
                <Image src={godzilakongImage} alt="His Only Son image" className="images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center mt-3">GODZILLA X KONG</Card.Title>
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
