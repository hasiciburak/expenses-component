import "./index.scss";
import expenses from "../../data/data.json";
import { useState } from "react";

type Props = {};
type TooltipProps = {};
type GraphBarProps = { day: string; amount: number };

const GraphTooltip = (props: TooltipProps) => {};

const SpendingGraphBar = (props: GraphBarProps) => {
  const [hoveredDay, setHoveredDay] = useState("");

  return (
    <div className="graphbar-container">
      <span
        className="pop"
        style={{
          color: hoveredDay === props.day ? "white" : "transparent",
          padding: "5px",
          background: hoveredDay === props.day ? "black" : "transparent",
          marginBottom: "10px",
          borderRadius: "5px",
        }}
      >
        {props.amount}
      </span>
      <div
        className="graphbar"
        style={{ height: `calc(${(props.amount * 300) / 100} * 1px)` }}
        onMouseOver={() => setHoveredDay(props.day)}
        onMouseLeave={() => setHoveredDay("")}
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
