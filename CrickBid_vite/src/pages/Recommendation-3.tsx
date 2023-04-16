import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "./Recommendation-3.css";
import "./general.css";
import RoundedProgressBar from "../Components/ProgressBar";

const baseUrl: string = "http://127.0.0.1:5000";

type Image = {
  id: number;
  name: string;
  average: string;
  runs: string;
  url: string;
  rank: number;
  category: string;
};

function Rec_3() {
  const [images, setImages] = useState<Image[]>([]);
  const [recImages, setRecImages] = useState<Image[]>([]);

  const fetchImages = async () => {
    const { data } = await axios.get(`${baseUrl}/Rec-3`);
    setImages(data["playerRankings"]);
    setRecImages(data["Rec"]);
    console.log(data["playerRankings"]);
    console.log(data["Rec"]);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  function pageRedirect() {
    window.location.href = "/";
  }

  return (
    <>
      <div className="left-right-bg">
        <Container className="overflow">
          <Row className="justify-content-center">
            <Col md="auto">
              <h1>Player Recommendation</h1>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="left-bg">
              <Row>
                <div className="topic-container">
                  <h2>Player Ranking</h2>
                </div>
              </Row>
              <Container className="image-container-third">
                <Col>
                  {images.map((image) => (
                    <div className="image-container-third-sub">
                      <Row key={image.id} className="player-bg">
                        <Col md={3}>
                          <div>
                            <img
                              src={image.url}
                              alt={image.name}
                              className="img-resize img-padding"
                            />
                          </div>
                        </Col>
                        <Col md={6} className="text-side">
                          <div>
                            <Row>
                              <p className="img-text-rec3">{image.name}</p>
                            </Row>
                            <Row>
                              <p className="img-text-rec3">
                                Average: {image.average}
                              </p>
                            </Row>
                          </div>
                        </Col>
                        <Col md={3} className="percentage-padding">
                          <div>
                            <RoundedProgressBar
                              percentage={image.rank}
                              size={65}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Col>
              </Container>
            </Col>
            {recImages.length > 0 && (
              <Col md={8} className="right-bg">
                <div className="topic-container">
                  <h2>Recommendation</h2>
                </div>
                <Row>
                  <Col>
                    <div className="topic-container-rec3">
                      <h3>Current Player</h3>
                    </div>
                  </Col>
                  <Col>
                    <div className="topic-container-rec3">
                      <h3>Recommended Player</h3>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Col className="inner-bg-rec3-1">
                      <Row>
                        <div className="topic-container">
                          <h4>{recImages[0].name}</h4>
                        </div>
                      </Row>

                      <Container>
                        <Row className="img-pos">
                          <div>
                            <img
                              src={recImages[0].url}
                              alt={recImages[0].name}
                              className="img-resize-rec3"
                            />
                          </div>
                        </Row>

                        <div className="text-second-rec">
                          <Row>
                            <Col>
                              <label>
                                Average:
                                <br />
                                {recImages[0].average}
                              </label>
                            </Col>
                            <Col>
                              <div>
                                <RoundedProgressBar
                                  percentage={recImages[0].rank}
                                  size={75}
                                />
                              </div>
                            </Col>
                            <Col>
                              <label>
                                Runs:
                                <br />
                                {recImages[0].runs}
                              </label>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </Col>
                  </Col>
                  <Col md={6}>
                    <Col className="inner-bg-rec3-2">
                      <Row>
                        <div className="topic-container">
                          <h4>{recImages[1].name}</h4>
                        </div>
                      </Row>

                      <Container>
                        <Row className="img-pos">
                          <div>
                            <img
                              src={recImages[1].url}
                              alt={recImages[1].name}
                              className="img-resize-rec3"
                            />
                          </div>
                        </Row>

                        <div className="text-second-rec">
                          <Row>
                            <Col>
                              <label>
                                Average:
                                <br />
                                {recImages[1].average}
                              </label>
                            </Col>
                            <Col>
                              <div>
                                <RoundedProgressBar
                                  percentage={recImages[1].rank}
                                  size={75}
                                />
                              </div>
                            </Col>
                            <Col>
                              <label>
                                Runs:
                                <br />
                                {recImages[1].runs}
                              </label>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </Col>
                  </Col>
                </Row>

                <Row>
                  <Col md={10}>
                    <div className="topic-container-rec3-pred">
                      <h3>{recImages[0].category} Prediction</h3>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="button-container">
                      <Button variant="outline-primary" onClick={pageRedirect}>Done</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Rec_3;
