import Carousel from "react-bootstrap/Carousel";
import "./ImgSlider.css";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/rGWLfw6/iplcup.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Features</h3>
          <p>
            As a first step User needs to select the player who is sold out or
            left out the auction from the pool of players available in the
            system by searching the name of the player. After that in the
            selecting draft players from the pool section user can choose from
            which performance based recommendation user needs. Then user should
            able to select more that 3 draft players for the recommendation for
            the sold out player. According to the selected draft players system
            will display the performance points based ranking and recommend the
            best possible players for the sold out player.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/RGXNHpC/Main.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Recommendation Flow</h3>
          <p>
            {" "}
            1. The system will be able to recommend the best possible players
            <br />
            2. The system will be able to display the statistics of the players
            <br />
            3. MYSQL database is used to store the data from ESPN Player records
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.sportzcraazy.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-22-at-14.54.35.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>About System</h3>
          <p>
            1. The system will be able to recommend the best possible players
            <br />
            2. The system will be able to display the statistics of the players
            <br />
            3. MYSQL database is used to store the data from ESPN Player records
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
/* https://i.ibb.co/rGWLfw6/iplcup.jpg
https://i.ibb.co/RGXNHpC/Main.jpg
https://i.ibb.co/5ByvxbP/home1.jpg
https://i.ibb.co/M8vssbG/Auction.jpg
https://i.ibb.co/0sCm92g/home2.jpg
https://i.ibb.co/9tT3T90/place.jpg
https://i.ibb.co/RytwvR3/home3.jpg
https://i.ibb.co/LCHmNf2/Auction-2.jpg
https://i.ibb.co/gt6d2dS/franchise.jpg
https://i.ibb.co/SmWd1Tc/homee.jpg 
https://www.sportzcraazy.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-22-at-14.54.35.jpeg
*/
export default Slider;
