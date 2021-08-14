import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const Progress = () => {
  return (
    <div>
      <h1>Progress</h1>
      <div>Graph</div>
      <div className="rectangle" />

      <div> Goal you have set</div>
      <div>$100</div>
      <button>Earn money</button>
      <Link to="goals">
        <button>Set new goal</button>
      </Link>
    </div>
  );
};
