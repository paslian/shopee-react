const ListItem = (props) => {
  return (
    <div className="container col-lg-1 col-md-2 col-sm-3 col-4">
      <div className="row">
        <img src={props.image}></img>
      </div>
      <div className="row" style={{ fontSize: "10px" }}>
        <p className="text-center">{props.pValue}</p>
      </div>
    </div>
  );
};

export default ListItem;
