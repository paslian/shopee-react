import FlashSaleLogo from "./../assets/flashsale_shopee.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Flash1 from "./../assets/flash/flash1.jpg";
import Flash2 from "./../assets/flash/flash2.png";
import Flash3 from "./../assets/flash/flash3.jpg";

const FlashSale = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-content-center">
          <img src={FlashSaleLogo}></img>
          <a
            href="https://shopee.co.id/flash_sale?promotionId=202665479045121"
            style={{ textDecoration: "none", color: "#EE4D2D" }}
          >
            Lihat Semua
          </a>
        </div>
        <div className="row wrapperContent mt-3 ">
          <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Flash1} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center align-content-center">
                  Rp. 24.000
                </Card.Title>
                <ProgressBar now={20} />
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Flash2} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center align-content-center">
                  Rp. 34.000
                </Card.Title>
                <ProgressBar now={90} />
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Flash3} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center align-content-center">
                  Rp. 94.000
                </Card.Title>
                <ProgressBar now={50} />
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Flash1} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center align-content-center">
                  Rp. 24.000
                </Card.Title>
                <ProgressBar now={20} />
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Flash2} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center align-content-center">
                  Rp. 34.000
                </Card.Title>
                <ProgressBar now={90} />
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Flash3} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center align-content-center">
                  Rp. 94.000
                </Card.Title>
                <ProgressBar now={50} />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSale;
