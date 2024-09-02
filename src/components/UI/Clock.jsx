import { useEffect, useState } from "react";
import "../../styles/clock.css"
const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(countDown, 1000);
    return () => clearInterval(interval);
  }, []);

  const countDown = () => {
    const destination = new Date("Oct 10, 2024").getTime();
    const now = new Date().getTime();
    const different = destination - now;

    if (different < 0) {
      // Timer expired
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }

    const days = Math.floor(different / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((different % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <div>
      <div className="clock_wrapper d-flex align-items-center gap-3">
        <div className="clock_data d-flex align-items-center gap-3">
          <div className="text-center ">
            <h1 className="text-white fs-3 mb-2">{days}</h1>
            <h5 className="text-white fs-6">Days</h5>
          </div>
          <span className="text-white fs-1">:</span>
        </div>
        <div className="clock_data d-flex align-items-center gap-3">
          <div className="text-center ">
            <h1 className="text-white fs-3 mb-2">{hours}</h1>
            <h5 className="text-white fs-6">Hours</h5>
          </div>
          <span className="text-white fs-1">:</span>
        </div>

        <div className="clock_data d-flex align-items-center gap-3">
          <div className="text-center ">
            <h1 className="text-white fs-3 mb-2">{minutes}</h1>
            <h5 className="text-white fs-6">Minutes</h5>
          </div>
          <span className="text-white fs-1">:</span>
        </div>

        <div className="clock_data d-flex align-items-center gap-3">
          <div className="text-center ">
            <h1 className="text-white fs-3 mb-2">{seconds}</h1>
            <h5 className="text-white fs-6">Seconds</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
