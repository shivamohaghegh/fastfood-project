const FoodCard = ({ foods }) => {
  return (
    <div className="row">
      {foods?.map((food) => (
        <div className="col-md-3" key={food.id}>
          <div className="card mycard">
            <img
              src={food.image}
              className="card-img-top mycard-img"
              alt={food.name}
            />
            <div className="badge text-bg-success position-absolute bottom-50 end-0 fs-5">
              Price : {food.price}$
            </div>
            <div className="card-body">
              <div className="position-relative">
                <h5 className="card-title">{food.name}</h5>
              </div>
              <p className="card-text mycard-text">
                {food.ingredients.join(", ")}
              </p>
              <button className="btn btn-sm btn-outline-success">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
