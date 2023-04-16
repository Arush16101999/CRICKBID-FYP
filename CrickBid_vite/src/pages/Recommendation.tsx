import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Recommendation.css";
import "./general.css";

const baseUrl: string = "http://127.0.0.1:5000";

type Image = {
  id: number;
  name: string;
  team: string;
  innings: string;
  runs: string;
  average: string;
  strike_rate: string;
  centuries: string;
  fifties: string;
  url: string;
};

function Rec() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedImageText, setSelectedImageText] = useState("");
  const [images, setImages] = useState<Image[]>([]);
  const [value, setValue] = useState("");
  const [filteredImages, setFilteredImages] = useState<Image[]>([]);

  const fetchImages = async () => {
    const { data } = await axios.get(`${baseUrl}/Rec`);
    setImages(data);
    setFilteredImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const selectedPlayer = async (playerID: number) => {
    await axios.post(`${baseUrl}/Rec/slectedPlayer`, playerID);
    pageRedirect();
  };

  function pageRedirect() {
    window.location.href = "/Rec-2";
  }

  const filterImages = (value: string) => {
    const filtered = images.filter((image) =>
      image.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value !== "") {
      filterImages(event.target.value);
    } else {
      setFilteredImages(images);
    }
  };

  return (
    <>
      <div className="left-right-bg">
        <Container className="overflow">
          <Row className="justify-content-center">
            <Col md="auto">
              <h1>Player Selection</h1>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="left-bg">
              <Row>
                <div className="topic-container">
                  <h2>Select Player From Pool</h2>
                </div>
              </Row>
              <Row>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={value}
                    onChange={handleChange}
                  />
                </div>
              </Row>
              <Container className="image-container">
                <Row>
                  {filteredImages.map((image) => (
                    <Col md={3} key={image.id}>
                      <div
                        className="image-container-sub"
                        onClick={() => {
                          setSelectedImage(image);
                          setSelectedImageText(image.name);
                        }}
                      >
                        <img
                          src={image.url}
                          alt={image.name}
                          className="img-resize"
                        />
                        <p className="img-text">{image.name}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
            <Col md={6} className="right-bg">
              <div className="topic-container">
                <h2>Selected Player To Bid</h2>
              </div>
              {selectedImage && (
                <Col className="inner-bg">
                  <Row>
                    <h3 className="img-text-rec2">{selectedImageText}</h3>
                  </Row>

                  <Container className="image-container-rec2">
                    <Row>
                      <img src={selectedImage.url} alt={selectedImage.name} />
                    </Row>
                    <div className="label-text ">
                      <Row>
                        <Col md={6} className="left">
                          <Row>
                            <label>Innings: {selectedImage.innings}</label>
                          </Row>
                          <Row>
                            <label>Average: {selectedImage.average}</label>
                          </Row>
                          <Row>
                            <label>100s: {selectedImage.centuries}</label>
                          </Row>
                        </Col>
                        <Col md={6} className="left">
                          <Row>
                            <label>Runs: {selectedImage.runs}</label>
                          </Row>
                          <Row>
                            <label>
                              Strike rate: {selectedImage.strike_rate}
                            </label>
                          </Row>
                          <Row>
                            <label>50s: {selectedImage.fifties}</label>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                    <Row>
                      <h3 className="img-text-rec2">{selectedImage.team}</h3>
                    </Row>
                  </Container>
                </Col>
              )}

              <Row>
                {selectedImage && (
                  <div className="button-container">
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        selectedPlayer(selectedImage.id);
                      }}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Rec;
