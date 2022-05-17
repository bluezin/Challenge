import React, { useEffect } from "react";
import { Search as SearchCountry } from "../styles";
import { useLazyQuery } from "@apollo/react-hooks";
import { SEARCH_COUNTRY } from "../graphql/queries";

const Search = ({ state, setState }) => {
  const [getCountry, results] = useLazyQuery(SEARCH_COUNTRY);

  const handleSearch = (event) => {
    const value = event.target.value;

    // Value must be other than blank
    if (value.trim() !== "") {
      getCountry({ variables: { currency: value.toUpperCase() } });
    }
  };

  useEffect(() => {
    // Every time the result is updated, there will be a new state
    setState({
      ...state,
      countries: { ...results, data: results.data?.countries },
    });
  }, [results]);

  return (
    <SearchCountry>
      <img
        src="https://icongr.am/octicons/search.svg?size=19&color=ccd2eb"
        alt="search"
      />
      <input onChange={handleSearch} placeholder="Search by Currency..." />
    </SearchCountry>
  );
};

export default Search;
