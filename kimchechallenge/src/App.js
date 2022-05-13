import React from "react";
import "./App.css";
import {
  Button,
  Container,
  CountriesContainer,
  GroupSearch,
  Message,
  Search,
  SubTitle,
  Title,
} from "./styles";
import { useLazyQuery } from "@apollo/react-hooks";
import { SEARCH_COUNTRY } from "./graphql/queries";
import Country from "./components/Country";

const App = () => {
  const [getCountry, results] = useLazyQuery(SEARCH_COUNTRY);
  const { loading, error, data } = results;

  const handleSearch = (event) => {
    const value = event.target.value;

    // Value must be other than blank
    if (value.trim() !== "") {
      getCountry({ variables: { currency: value.toUpperCase() } });
    }
  };

  return (
    <Container>
      <Title>Country Search</Title>
      <SubTitle>Some randow</SubTitle>
      <Search>
        <img
          src="https://icongr.am/octicons/search.svg?size=19&color=ccd2eb"
          alt="search"
        />
        <input onChange={handleSearch} placeholder="Search by Currency..." />
      </Search>
      <GroupSearch>
        <h2>Group by:</h2>
        <div>
          <Button type="button">Continent</Button>
          <Button type="button">Language</Button>
        </div>
      </GroupSearch>

      {loading && <Message>Loading...</Message>}
      {error && <Message>An error occurred!</Message>}

      <CountriesContainer>
        {data &&
          data.countries.map((country) => (
            <Country {...country} key={country.code} />
          ))}
      </CountriesContainer>
    </Container>
  );
};
export default App;
