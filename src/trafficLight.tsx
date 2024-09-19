import { useEffect, useState } from "react";
import "./trafficLight.css";
const TrafficLight = () => {
  const colors = ["green", "yellow", "red"] as const;
  const colorObj = { red: 4000, yellow: 500, green: 3000 };

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const selectedColor = colors[currIndex];
    const timeout = colorObj[selectedColor];
    const interval = setTimeout(() => {
      setCurrIndex((currIndex + 1) % colors.length);
    }, timeout);

    return () => clearTimeout(interval);
  }, [currIndex]);

  return (
    <div className="light-container">
      {colors.map((c, index) => (
        <div
          key={index}
          className="lights"
          style={{
            backgroundColor: currIndex === index ? colors[currIndex] : "gray",
          }}
        ></div>
      ))}
    </div>
  );
};
export default TrafficLight;
