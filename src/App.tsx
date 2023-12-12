import "./scss/App.scss";
import Balance from "./components/balance";
import Spending from "./components/spending";

function App() {
  return (
    <div className="page-container">
      <div className="card-wrapper">
        <Balance />
        <Spending />
      </div>
    </div>
  );
}

export default App;
