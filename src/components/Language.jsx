import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";

const Language = ({ item }) => {
  const { name, img, options } = item;
  const [showImage, setShowImage] = useState(true);

  console.log(item);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="lang-card p-4 rounded-5 h-100"
      onClick={() => setShowImage(!showImage)}
    >
      {/* {showImage && (<Container>
      <Image className="lang-logo" src={img} width="70%" ></Image>
      <h3 className="display-6" > {name} </h3>
    </Container>)}

 { !showImage && (<ul className="h-100 d-flex flex-column justify-content-center">
    {options.map((item)=>{
      return(
        <li className="h5 text-start"> {item} </li>
      )
    })}
    </ul>) }  */}

      {showImage ? (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6"> {name} </h3>
        </Container>
      ) : (
        <ul className=" h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h5 text-start"> {item} </li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
