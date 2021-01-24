import { useEffect, useState } from "react";

const Gear = (props) => (
  <svg
    className="gear"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8.467 8.467"
    {...props}
  >
    <path d="M5.058 1.073c-.095-.002-.177.036-.233.158l-.174.35c-.06.118-.115.238-.256.238h-.461c-.142 0-.196-.12-.256-.239l-.2-.396c-.074-.177-.27-.092-.408-.044l-.184.08h.002c-.2.095-.419.157-.323.408l.127.368c.043.126.091.25-.008.351l-.324.33c-.098.101-.224.054-.35.014l-.423-.134c-.091-.037-.156-.003-.206.058a.675.675 0 0 0-.084.144l-.13.315a.797.797 0 0 0-.047.23c0 .079.03.149.121.184l.402.19c.12.057.242.107.245.25l.013.46c.004.142-.116.2-.233.263l-.344.183c-.224.11-.153.284-.076.472l.053.124a.02.02 0 0 0 .003.006c.046.098.09.2.151.266.064.067.147.098.273.051l.37-.125c.125-.042.25-.09.35.01l.327.326c.1.1.055.224.014.35l-.138.422c-.072.178.124.26.256.322l.3.125c.068.02.153.049.23.05.079 0 .149-.026.183-.119l.184-.404c.056-.12.106-.243.248-.248l.46-.018c.142-.006.201.113.265.23l.188.342c.09.18.22.162.364.106l.27-.116c.06-.03.128-.063.178-.106.06-.052.093-.117.054-.208l-.144-.42c-.044-.126-.093-.249.006-.35l.32-.331c.1-.102.224-.058.35-.017l.373.118c.216.077.29-.074.362-.246l.066-.158c.075-.188.146-.365-.076-.472l-.347-.18c-.117-.062-.237-.119-.234-.26l.008-.462c.002-.142.125-.194.244-.252l.4-.193c.092-.037.12-.108.12-.187a.764.764 0 0 0-.05-.237l-.138-.319c-.032-.062-.07-.137-.12-.191-.054-.059-.123-.091-.214-.052l-.418.149c-.125.044-.248.093-.35-.006l-.334-.318c-.102-.098-.058-.223-.018-.35l.114-.373c.084-.243-.112-.31-.306-.392l-.024-.01-.1-.041a.877.877 0 0 0-.263-.07zm-.809 1.511a1.57 1.57 0 0 1 1.08.478 1.57 1.57 0 0 1-.038 2.22 1.57 1.57 0 0 1-2.22-.038 1.57 1.57 0 0 1 .038-2.22 1.57 1.57 0 0 1 1.14-.44z" />
  </svg>
);

export default function GearMalarkey() {
  const [rot, setRot] = useState(0);
  useEffect(() => {
    var throttle = function (type, name, obj) {
      var obj = obj || window;
      var running = false;
      var handleEvt = function () {
        if (running) return;
        running = true;
        requestAnimationFrame(function () {
          setRot(window.pageYOffset);
          running = false;
        });
      };
      obj.addEventListener(type, handleEvt);
      return handleEvt;
    };
    const listener = throttle("scroll", "optimizedScroll");
    return () => window.removeEventListener("scroll", listener);
  }, []);
  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: "50%",
          height: "200px",
          position: "relative",
        }}
      >
        <Gear
          style={{
            height: "100%",
            animation: "linear",
            transform: `rotate(${rot / 4}deg)`,
            position: "absolute",
            right: -30,
          }}
        />
      </div>

      <div
        style={{
          display: "inline-block",
          width: "50%",
          height: "200px",
          position: "relative",
        }}
      >
        <Gear
          style={{
            height: "100%",
            animation: "linear",
            transform: `rotate(${-(rot + 90) / 4}deg)`,
            position: "absolute",
            left: -30,
          }}
        />
      </div>
    </>
  );
}
