import { useState } from "react";
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

const people = ["Bob", "Jen", "Dave", "Ash", "Liz", "Beth"];

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");

  function onChange(e) {
    console.log("Target value: " + e.target.value);
    handleSearch(e.target.value);
  }
  const displayNames = people.map((person) => {
    return <li>{person}</li>;
  });

  function handleSearch(newSearchQuery) {
    console.log(newSearchQuery);
    setSearchQuery(newSearchQuery);

    const value = newSearchQuery;

    people.map((person) => {
      if (person.includes(value)) {
        console.log(person);
        console.log(value);
        setFilteredName(value);
      }
    });
  }

  return (
    <div>
      <form action="/" method="get">
        <input
          type="text"
          id="header-search"
          placeholder="Find your saving goal"
          name="s"
          onChange={onChange}
        />
        <button>Search</button>
      </form>
      <h2>
        Filtered Name :<ul style={{ color: "red" }}>{filteredName}</ul>
      </h2>
      <br></br>
      <h2>
        Names Array:
        <ul>{displayNames}</ul>
      </h2>
    </div>
  );
};
