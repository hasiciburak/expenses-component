import AnimatedNumber from "react-animated-numbers";
import "./index.scss";

const Summary = () => {
  return (
    <div className="summary-wrapper">
      <div className="summary-left-col">
        <small className="t">Total this month</small>
        <p className="total-animated-amount">
          $
          <AnimatedNumber
            className=""
            animateToNumber={478.33}
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
          />
        </p>
      </div>
      <div className="summary-right-col">
        <small>2.4%</small>
        <p>from last month</p>
      </div>
    </div>
  );
};

export default Summary;
