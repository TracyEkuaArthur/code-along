import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
// import writers from "./writers";
import { ProfileCard } from "./ProfileCard";

function App() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const getWriters = async () => {
      const response = await fetch("/writers.json");
      const data = await response.json();
      console.log(data);
      setWriters(data);
    };
    getWriters();
  }, []);

  return (
    <div>
      <h1>Writer Profile</h1>
      <div className="container">
        {writers.map((writer) => (
          <ProfileCard writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
