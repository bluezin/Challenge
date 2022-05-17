import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LANGUAGES } from "../graphql/queries";
import { Container } from "../styles/languages";
import { CountriesContainer, Message } from "../styles";
import Country from "./Country";

const Languages = ({ countries }) => {
  const [newLanguages, setNewLanguages] = useState([]);
  const { data, loading, error } = useQuery(LANGUAGES);

  useEffect(() => {
    const selectLanguages = () => {
      let newLanguages = [];

      const results = data?.languages.forEach(({ name }) => {
        countries.map(({ languages }) => {
          const select = languages.map((language) => language.name);
          const conditional = select.includes(name);

          conditional &&
            !newLanguages.includes(name) &&
            newLanguages.push(name);
        });
      });

      setNewLanguages(newLanguages);
    };

    selectLanguages();
  }, [data, countries]);

  return (
    <Container>
      {loading && <Message>Loading...</Message>}
      {error && <Message>An error occurred!</Message>}

      {newLanguages.map((language, index) => (
        <React.Fragment key={index}>
          <p className="languageName">{language}</p>

          <CountriesContainer>
            {countries?.map((country) =>
              country.languages.map(
                (item) =>
                  item.name === language && (
                    <Country {...country} key={country.code} />
                  )
              )
            )}
          </CountriesContainer>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Languages;
