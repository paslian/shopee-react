import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Hero1 from "./../assets/hero/1.png";
import Hero2 from "./../assets/hero/2.png";
import Hero3 from "./../assets/hero/3.png";
import Hero4 from "./../assets/hero/4.png";
import Hero5 from "./../assets/hero/5.jpg";
import Hero6 from "./../assets/hero/6.png";
import Hero7 from "./../assets/hero/7.jpg";
import Hero8 from "./../assets/hero/8.png";

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 px-0">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img style={{ width: "100%" }} src={Hero1} text="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "100%" }}
                  src={Hero2}
                  text="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{ width: "100%" }} src={Hero3} text="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "100%" }}
                  src={Hero4}
                  text="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{ width: "100%" }} src={Hero5} text="Fivth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{ width: "100%" }} src={Hero6} text="Sixth slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4 d-flex flex-column px-0">
            <div style={{ flex: 1 }}>
              <img style={{ width: "100%" }} src={Hero7}></img>
            </div>
            <div style={{ flex: 1 }}>
              <img style={{ width: "100%" }} src={Hero8}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
