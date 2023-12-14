import cardBrandImg from "../../assets/logo.svg";
import "./index.scss";
import AnimatedNumber from "react-animated-numbers";

type Props = {};

const Balance = (props: Props) => {
  return (
    <div className="balance-container">
      <div className="balance-left-col">
        <small>My balance</small>
        <p>
          $
          <AnimatedNumber
            className=""
            animateToNumber={9121.48}
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
          />
        </p>
      </div>
      <div className="balance-right-col">
        <img src={cardBrandImg} alt="Master card logo" />
      </div>
    </div>
  );
};

export default Balance;
