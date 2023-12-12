import "./index.scss";

type Props = {};
type GraphBarProps = { day: string };

const SpendingGraphBar = (props: GraphBarProps) => {
  return (
    <div className="graphbar-container">
      <div className="graphbar" />
      <p className="graphbar-label">{props.day}</p>
    </div>
  );
};

const SpendingGraph = (props: Props) => {
  return (
    <div>
      <div className="graphbar-wrapper">
        {/* TODO: WE WILL RENDER GRAPH BARS ACCORDING TO DATA */}
        <SpendingGraphBar day="mon" />
        <SpendingGraphBar day="tue" />
        <SpendingGraphBar day="wed" />
        <SpendingGraphBar day="thu" />
        <SpendingGraphBar day="fri" />
        <SpendingGraphBar day="sat" />
        <SpendingGraphBar day="sun" />
      </div>
      <div className="divider" />
    </div>
  );
};

export default SpendingGraph;
