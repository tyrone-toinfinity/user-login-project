import { Navbar } from "./components/navbar";
import "./Login.css";

export const Login = () => {
  return (
    <div>
      <Navbar />

      <main className="login__container">
        <div className="login__graphic">
          <div>
            {/* #1 Intelligent Time Tracking App for In Office, Mobile and Remote
            Teams. */}
            <p>Return On</p>
            <p>Investment</p>
          </div>
          <img src="/public/graphics/hero-graphics.svg" alt="" />
        </div>
        <div className="login__form">
          <h1>login in!</h1>
        </div>
      </main>
    </div>
  );
};
