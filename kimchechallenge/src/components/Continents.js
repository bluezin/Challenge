import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CONTINENTS } from "../graphql/queries";
import { Container } from "../styles/continents";
import { CountriesContainer, Message } from "../styles";
import Country from "./Country";

const Continents = ({ countries }) => {
  const [newContinents, setNewContinents] = useState([]);
  const { data, loading, error } = useQuery(CONTINENTS);

  useEffect(() => {
    const selectContinents = () => {
      let newContinents = [];

      // A mapping is being carried out to be able to show only the continents that match the continents of each city.
      const results = data?.continents.map(({ name }) => {
        countries.map(({ continent }) => {
          const conditional = continent.name === name;

          conditional &&
            !newContinents.includes(name) &&
            newContinents.push(name);
        });
      });

      setNewContinents(newContinents);
    };

    selectContinents();
  }, [data, countries]);

  return (
    <Container>
      {loading && <Message>Loading...</Message>}
      {error && <Message>An error occurred!</Message>}

      {newContinents?.map((continent, index) => (
        <React.Fragment key={index}>
          <p className="containerName">{continent}</p>

          <CountriesContainer>
            {countries?.map(
              (country) =>
                country.continent.name === continent && (
                  <Country {...country} key={country.code} />
                )
            )}
          </CountriesContainer>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Continents;
