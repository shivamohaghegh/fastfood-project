import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../Redux/ShoppingCart/cartActions";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container my-5">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                Cart is empty
              </td>
            </tr>
          ) : (
            cartItems.map((item, idx) => (
              <tr key={item.id}>
                <th scope="row">{idx + 1}</th>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt={item.name} width="50" />
                </td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button className="btn btn-danger mb-3" onClick={handleClear}>
        Clear Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
