import "./index.scss";
import expenses from "../../data/data.json";
import { useState } from "react";

type Props = {};
type TooltipProps = {};
type GraphBarProps = { day: string; amount: number };

const GraphTooltip = (props: TooltipProps) => {};

const SpendingGraphBar = (props: GraphBarProps) => {
  const [hoveredDay, setHoveredDay] = useState("mon");

  return (
    <div className="graphbar-container">
      <div
        className="graphbar"
        style={{ height: `calc(${(props.amount * 300) / 100} * 1px)` }}
      />
      <p className="graphbar-label">{props.day}</p>
    </div>
  );
};

const SpendingGraph = (props: Props) => {
  return (
    <div>
      <div className="graphbar-wrapper">
        {/* TODO: WE WILL RENDER GRAPH BARS ACCORDING TO DATA */}
        {expenses.map((expense) => (
          <SpendingGraphBar day={expense.day} amount={expense.amount} />
        ))}
      </div>
      <div className="divider" />
    </div>
  );
};

export default SpendingGraph;
