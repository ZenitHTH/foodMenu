import React, { useState } from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import FoodCard from "./foodCard/foodCard.component";
import Image from "./foodCard/food.jpg";
import "./home.css";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <CardGroup className="mt-3">
      <Row
        className={
          width >= 768
            ? "justify-content-center g-4"
            : width < 768 && width >= 576
            ? "mobile-center g-4"
            : "small-center g-4"
        }
      >
        {elements.map((value, index) => {
          return (
            <Col md="auto">
              <FoodCard
                cardStyleWidth="18rem"
                cardVariant="top"
                image={Image}
                title="Title"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet."
              />
            </Col>
          );
        })}
      </Row>
    </CardGroup>
  );
}

export default Home;
