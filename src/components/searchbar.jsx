export const SearchBar = () => (
  <form action="/" method="get">
    <input
      type="text"
      id="header-search"
      placeholder="Find your saving goal"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);
