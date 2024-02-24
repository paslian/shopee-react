import Card from "react-bootstrap/Card";
import Cod from "./../assets/cod.png";

const CardRekom = (props) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <p>PROMO CUCI GUDANG HP IP 14 RAM 512GB</p>
        <div className="row mb-2">
          <img style={{ width: "50px" }} src={Cod}></img>
        </div>
        <div className="row">
          <div className="col">
            <h6 style={{ color: "#EE4D2D" }}>Rp35.000</h6>
          </div>
          <div className="col text-end">
            <p style={{ fontSize: "13px" }}>12 Terjual</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardRekom;
