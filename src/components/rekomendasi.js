import CardRekom from "./cardRekom";
import Flash1 from "./../assets/flash/flash1.jpg";

const Rekomendasi = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#EE4D2D"
          fill-opacity="1"
          d="M0,32L20,48C40,64,80,96,120,138.7C160,181,200,235,240,224C280,213,320,139,360,128C400,117,440,171,480,208C520,245,560,267,600,250.7C640,235,680,181,720,176C760,171,800,213,840,229.3C880,245,920,235,960,213.3C1000,192,1040,160,1080,170.7C1120,181,1160,235,1200,245.3C1240,256,1280,224,1320,176C1360,128,1400,64,1420,32L1440,0L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
      <div className="pb-3" style={{ backgroundColor: "#EE4D2D" }}>
        <div className=" px-5">
          <div className="row text-center border-bottom border-body mb-3">
            <h5 style={{ color: "white" }}>Rekomendasi</h5>
          </div>
          <div className="row">
            {Array.from({ length: 12 }, (_, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6 mb-2 px-1">
                <CardRekom image={Flash1}></CardRekom>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rekomendasi;
