import { AiFillSmile } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <img
        // src="https://i.pinimg.com/736x/7e/f3/f2/7ef3f233e5ee2f7833c5c09eed29ec56.jpg"
        // src="https://images.pexels.com/photos/19786212/pexels-photo-19786212.jpeg"
        src="https://images.pexels.com/photos/13387647/pexels-photo-13387647.jpeg"
        // src="https://media.istockphoto.com/id/685168594/fi/valokuva/sulje-pizza.jpg?s=1024x1024&w=is&k=20&c=1-EwsCJYof-U1GpcDgPA1F-M9-lmQtUg7hyzWfWzgxY="
        // src="https://images.pexels.com/photos/6667210/pexels-photo-6667210.jpeg"
        // src=""
        alt="eat-pizza-drink-beer"
        className="landing-page-img"
      />
      <div className="landing-page-btn">
        <div className="d-flex flex-column gap-5">
          <div className="typewriter">
            <h1>WELCOME TO MY WOLRD!</h1>
          </div>
          <NavLink className="btn btn-dark" to="/product">
            Let's Start Guys!{" "}
            <span>
              <AiFillSmile fontSize={"2rem"} />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;
