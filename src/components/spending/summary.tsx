import "./index.scss";

type Props = {};

const Summary = (props: Props) => {
  return (
    <div className="summary-wrapper">
      <div className="summary-left-col">
        <small className="t">Total this month</small>
        <p>$478.33</p>
      </div>
      <div className="summary-right-col">
        <small>2.4%</small>
        <p>from last month</p>
      </div>
    </div>
  );
};

export default Summary;
