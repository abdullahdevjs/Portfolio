import { useEffect, useState } from "react";
import "./Loader.css";

function Loader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1800); // fast & clean

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-content">
        <div className="loader-image">
          <img src="/profile.jpg" alt="Abdullah" />
        </div>
        <h1>Welcome to My Portfolio</h1>
      </div>
    </div>
  );
}

export default Loader;