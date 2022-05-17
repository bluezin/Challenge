import React, { useState } from "react";
import { Container, CountriesContainer, Message } from "./styles";
import Search from "./components/Search";
import Head from "./components/Head";
import Group from "./components/Group";
import Continents from "./components/Continents";
import Country from "./components/Country";
import Languages from "./components/Languages";
import "./App.css";

const App = () => {
  const [state, setState] = useState({ countries: {}, groupType: "" });
  const { countries, groupType } = state;

  return (
    <Container>
      <Head />
      <Search state={state} setState={setState} />
      <Group state={state} setState={setState} />

      {countries?.loading && <Message>Loading...</Message>}
      {countries?.error && <Message>An error occurred!</Message>}

      {groupType === "Continent" && countries.data && (
        <Continents countries={countries.data} />
      )}

      {groupType === "Language" && countries.data && (
        <Languages countries={countries.data} />
      )}

      {!groupType && (
        <CountriesContainer>
          {countries.data?.map((country) => (
            <Country {...country} key={country.code} />
          ))}
        </CountriesContainer>
      )}
    </Container>
  );
};
export default App;
