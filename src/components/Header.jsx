import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <div>
      <Container >
        <Image src={reactLogo} width="250px" />
      </Container>
    </div>
  );
};

export default Header;
