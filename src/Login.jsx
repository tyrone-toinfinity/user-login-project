import { Footer } from "./components/Footer";
import { Navbar } from "./components/navbar";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login__page">
      <Navbar />
      <main className="login__main">
        <div className="login__container">
          <div className="login__graphic">
            <div>
              <p>Return On</p>
              <p>Investment</p>
            </div>
            <img
              src="/public/graphics/hero-graphics.svg"
              alt="image of investment account increasing"
            />
          </div>
          <div className="login__form">
            <h1>login in!</h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
