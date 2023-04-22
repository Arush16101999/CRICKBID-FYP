import { useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "./Home.css";

type Image = {
  text: string;
  url: string;
  imgText: string;
};

function Home() {
  const [images, setImages] = useState<Image[]>([
    {
      text: "Text Here",
      url: "https://i.ibb.co/9tT3T90/place.jpg",
      imgText: "Image Text",
    },
    {
      text: "Text Here",
      url: "https://images.pexels.com/photos/12162438/pexels-photo-12162438.png?auto=compress&cs=tinysrgb&w=600",
      imgText: "Image Text",
    },
    {
      text: "Text Here",
      url: "https://images.pexels.com/photos/12162438/pexels-photo-12162438.png?auto=compress&cs=tinysrgb&w=600",
      imgText: "Image Text",
    },
    {
      text: "Text Here",
      url: "https://images.pexels.com/photos/12162438/pexels-photo-12162438.png?auto=compress&cs=tinysrgb&w=600",
      imgText: "Image Text",
    },
    {
      text: "Text Here",
      url: "https://images.pexels.com/photos/12162438/pexels-photo-12162438.png?auto=compress&cs=tinysrgb&w=600",
      imgText: "Image Text",
    },
    {
      text: "Text Here",
      url: "https://images.pexels.com/photos/12162438/pexels-photo-12162438.png?auto=compress&cs=tinysrgb&w=600",
      imgText: "Image Text",
    },
    {
      text: "Text Here",
      url: "https://images.pexels.com/photos/12162438/pexels-photo-12162438.png?auto=compress&cs=tinysrgb&w=600",
      imgText: "Image Text",
    },
    {
      text: "Text Here",
      url: "https://i.ibb.co/gt6d2dS/franchise.jpg",
      imgText: "Image Text",
    },
  ]);

  /* https://i.ibb.co/rGWLfw6/iplcup.jpg
https://i.ibb.co/RGXNHpC/Main.jpg
https://i.ibb.co/5ByvxbP/home1.jpg
https://i.ibb.co/M8vssbG/Auction.jpg
https://i.ibb.co/0sCm92g/home2.jpg
https://i.ibb.co/9tT3T90/place.jpg
https://i.ibb.co/RytwvR3/home3.jpg
https://i.ibb.co/LCHmNf2/Auction-2.jpg
https://i.ibb.co/gt6d2dS/franchise.jpg
https://i.ibb.co/SmWd1Tc/homee.jpg */

  return (
    <>
      <div>
        <Container>
          {/* <Row>
            <div className="img-list">
              <Row>
                {images.map((image) => (
                  <Col>
                    <div className="item-align-home ">
                      <div className="img-background">
                        <img
                          src={image.url}
                          alt={image.imgText}
                          className="img-size-home"
                        />
                      </div>
                      <p className="text-home">{image.text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Row> */}
          <Row>
            <Col className="label-bg-home">
              <label>
                <b>How System Works </b>
              </label>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "whitesmoke",
                }}
              >
                As a first step User needs to select the player who is sold out
                or left out the auction from the pool of players available in
                the system by searching the name of the player. After that in
                the selecting draft players from the pool section user can
                choose from which performance based recommendation user needs.
                Then user should able to select more that 3 draft players for
                the recommendation for the sold out player. According to the
                selected draft players system will display the performance
                points based ranking and recommend the best possible players for
                the sold out player.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
