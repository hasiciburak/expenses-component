import "./index.scss";
import expenses from "../../data/data.json";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};
type TooltipProps = {};
type GraphBarProps = { day: string; amount: number };

const GraphTooltip = (props: TooltipProps) => {};

const SpendingGraphBar = (props: GraphBarProps) => {
  const [hoveredDay, setHoveredDay] = useState("");
  const showCondition = hoveredDay === props.day;
  const date = new Date();
  const today = date
    .toLocaleString("en-US", { weekday: "short" })
    .toLowerCase();
  return (
    <div className="graphbar-container">
      {hoveredDay === props.day ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: showCondition ? 0 : 10,
          }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="pop"
          style={{
            color: showCondition ? "white" : "transparent",
            padding: "5px",
            background: showCondition ? "black" : "transparent",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          {props.amount}
        </motion.div>
      ) : (
        <motion.span
          className="pop"
          style={{
            color: "transparent",
            background: "transparent",
            padding: "5px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          {props.amount}
        </motion.span>
      )}
      <div
        className="graphbar"
        style={{
          height: `calc(${(props.amount * 300) / 100} * 1px)`,
          backgroundColor: showCondition
            ? "#ec755d"
            : today === props.day
            ? "#76b5bc"
            : showCondition 
            ? "#b4e0e5"
            : "#FF9B86",
        }}
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
