// import { SearchBar } from "../components/searchbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const Goals = () => {
  const testArray = [
    {
      Name: "Lego",
      Price: 40,
    },
    {
      Name: "Barbie Doll",
      Price: 30,
    },
  ];

  return (
    <div>
      <h1>Set Goals</h1>

      {/* <SearchBar /> */}
      {testArray.map((item, index) => {
        return (
          <div>
            <h2>Item: {item.Name}</h2>
            <h2>Price: {item.Price}</h2>
          </div>
        );
      })}
    </div>
  );
};
