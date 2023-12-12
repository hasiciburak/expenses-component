import cardBrandImg from "../../assets/logo.svg";
import "./index.scss";

type Props = {};

const Balance = (props: Props) => {
  return (
    <div className="balance-container">
      <div className="balance-left-col">
        <small>My balance</small>
        <p>$9121.48</p>
      </div>
      <div className="balance-right-col">
        <img src={cardBrandImg} alt="Master card logo" />
      </div>
    </div>
  );
};

export default Balance;
