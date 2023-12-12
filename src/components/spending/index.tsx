import SpendingGraph from "./spending-graph";
import SpendingHeader from "./spending-header";
import Summary from "./summary";

type Props = {};

const Spending = (props: Props) => {
  return (
    <div className="spending-wrapper">
      <SpendingHeader />
      <SpendingGraph />
      <Summary />
    </div>
  );
};

export default Spending;
