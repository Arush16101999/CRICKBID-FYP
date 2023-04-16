import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Statistics.css";
import "./general.css";

const baseUrl: string = "http://127.0.0.1:5000";

type Image = {
  id: number;
  name: string;
  runs: string;
  average: string;
  strike_rate: string;
  url: string;
};

function Stat() {
  const [images, setImages] = useState<Image[]>([]);
  const [value, setValue] = useState("");
  const [filteredImages, setFilteredImages] = useState<Image[]>([]);

  const fetchImages = async () => {
    const { data } = await axios.get(`${baseUrl}/Stat`);
    setImages(data);
    setFilteredImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

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
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md="auto">
              <h1>Player Statistics</h1>
            </Col>
          </Row>
          <Row>
            <Row>
              <div className="search-box-stat">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </Row>
            <div className="x">
              <Container className="image-container-stat">
                <Row>
                  {filteredImages.map((image) => (
                    <Col md={3} key={image.id}>
                      <Row
                        className="justify-content-center text-bg"
                        style={{ overflowY: "hidden" }}
                      >
                        <Row className="justify-content-center">
                          <Row className="bg-border">
                            <div className="image-container-stat-sub">
                              <img
                                src={image.url}
                                alt={image.name}
                                className="img-resize-stat"
                              />
                            </div>
                          </Row>
                        </Row>

                        <Row>
                          <div className="img-text-stat">
                            <Row>
                              <label>Name: {image.name}</label>
                              <label>Runs: {image.runs}</label>
                              <label>Average: {image.average}</label>
                              <label>Strike rate: {image.strike_rate}</label>
                            </Row>
                          </div>
                        </Row>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Stat;
