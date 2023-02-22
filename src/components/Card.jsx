import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../helper/data";
import Language from "./Language";

const Card = () => {
  console.log(data);
  return (
    <Container className="rounded-4 mt-4 p-4" style={{ background: "#f48b29" }}>
      <h1 className="text-white my-2">Languages</h1>
      <Row className="g-3 justify-content-center">
      {data.map((item, index) => 
      <Col sm={6} md={4} lg={3} key={index} >

        <Language item={item} />
    
      </Col>
      )}
        </Row>
    </Container>
  );
};

export default Card;
