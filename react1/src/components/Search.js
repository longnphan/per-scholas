import "./list.css";

function Search({ handleSearchInput }) {
  const onInputChange = e => {
    handleSearchInput(e);
  };

  return (
    <input
      className="searchbox"
      placeholder="Enter text to search"
      onChange={onInputChange}
    />
  );
}

export default Search;
