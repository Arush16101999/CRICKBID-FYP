import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "./Recommendation-2.css";
import "./general.css";

const baseUrl: string = "http://127.0.0.1:5000";

type Image = {
  id: number;
  url: string;
  name: string;
};

function Rec_2() {

  const [selectedImages, setSelectedImages] = useState<Image[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [radioValue, setRadioValue] = useState("1");
  const [filteredImages, setFilteredImages] = useState<Image[]>([]);
  const [noneSelectedImages, setnoneSelectedImages] = useState<Image[]>([]);

  const radios = [
    { name: "Overall", value: "1" },
    { name: "Recent", value: "2" },
    { name: "Home", value: "3" },
    { name: "Away", value: "4" },
  ];

  const fetchImages = async () => {
    const { data } = await axios.get(`${baseUrl}/Rec-2`);
    setImages(data);
    setnoneSelectedImages(data);
    setFilteredImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const selectedPlayers = async () => {
    const selectedIds = selectedImages.map((image) => image.id);
    const { data } = await axios.post(`${baseUrl}/Rec-2/selectedPlayers`, {
      ids: selectedIds,
      predictionType: radioValue,
    });
    pageRedirect();
  };

  const SelectedImage = (image: Image) => {
    if (selectedImages.length < 12) {
      setSelectedImages([...selectedImages, image]);
      const newImages = filteredImages.filter((img) => img.id !== image.id);
      const newImages2 = noneSelectedImages.filter((img) => img.id !== image.id);
      setFilteredImages(newImages);
      setnoneSelectedImages(newImages2);
    }
  };

  const filterImages = (value: string) => {
    const filtered = noneSelectedImages.filter((image) =>
      image.name.toLowerCase().startsWith(value.toLowerCase())
    );
    console.log("trigger2");
    setFilteredImages(filtered);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('trigger')
    if (event.target.value !== "") {
      filterImages(event.target.value);
    } else {
     setFilteredImages(noneSelectedImages);
    }
  };

  function pageRedirect() {
    window.location.href = "/Rec-3";
  }

  function clearSelectedImages() {
    setSelectedImages([]);
  }

  return (
    <>
      <div className="left-right-bg">
        <Container className="overflow">
          <Row className="justify-content-center">
            <Col md="auto">
              <h1>Player Selection For Recommendation</h1>
            </Col>
          </Row>
          <Row className="rec-row">
            <Col md={6} className="left-bg">
              <Row>
                <div className="topic-container">
                  <h2>Select Draft Players From Pool</h2>
                </div>
              </Row>
              <Container className="image-container-rec2-first">
                <div className="buttongroup">
                  <Row>
                    <ButtonGroup>
                      {radios.map((radio, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={"outline-primary"}
                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => {
                            setRadioValue(e.currentTarget.value);
                            clearSelectedImages();
                            setFilteredImages(images);
                            setnoneSelectedImages(images);
                          }}
                          style={{
                            borderColor: "#e6c300",
                            color:
                              radioValue === radio.value ? "black" : "#e6c300",
                            backgroundColor:
                              radioValue === radio.value
                                ? "#e6c300"
                                : "transparent",
                          }}
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </Row>
                  <Row>
                    <div className="search-box-rec2">
                      <input
                        type="text"
                        placeholder="Search by name"
                        
                        onChange={handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <Row>
                  {filteredImages.map((image) => (
                    <Col md={3} key={image.id}>
                      <div
                        className="image-container-sub-rec2-first"
                        onClick={() => {
                          SelectedImage(image);
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
                <h2>{selectedImages.length} Players Selected To Bid</h2>
              </div>
              <Container className="image-container-second">
                <Row>
                  {selectedImages.length == 0 ? (
                    <Col className="text-possition">
                      <div className="text-style">
                        <h3>Select more than 3 players</h3>
                      </div>
                    </Col>
                  ) : (
                    selectedImages.map((image) => (
                      <Col md={3} key={image.id}>
                        <div className="image-container-sub">
                          <img
                            src={image.url}
                            alt={image.name}
                            className="img-resize"
                          />
                          <p className="img-text">{image.name}</p>
                        </div>
                      </Col>
                    ))
                  )}
                </Row>
              </Container>
              <Row>
                {selectedImages.length > 2 && (
                  <div className="button-container">
                    <Button variant="outline-primary" onClick={selectedPlayers}>
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

export default Rec_2;
