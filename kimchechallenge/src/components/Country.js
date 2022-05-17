import React from "react";
import {
  Container,
  CountryAttribute,
  CountryTitle,
  LanguageList,
} from "../styles/country";

const Country = ({
  name,
  capital,
  phone,
  currency,
  native,
  emoji,
  continent,
  languages,
}) => {
  return (
    <Container>
      <CountryTitle>
        <p>{emoji}</p>
        <strong>{name}</strong>
      </CountryTitle>

      <CountryAttribute>
        Capital:
        <span>{capital}</span>
      </CountryAttribute>
      <CountryAttribute>
        Phone:
        <span>{phone}</span>
      </CountryAttribute>
      <CountryAttribute>
        Currency:
        <span>{currency}</span>
      </CountryAttribute>
      <CountryAttribute>
        Native:
        <span>{native}</span>
      </CountryAttribute>
      <CountryAttribute>
        Continent:
        <span>{continent.name}</span>
      </CountryAttribute>

      <LanguageList>
        <p>Language list:</p>
        <div className="langaugeList">
          {languages.map((language) => (
            <i key={language.code}>{language.name}</i>
          ))}
        </div>
      </LanguageList>
    </Container>
  );
};

export default Country;
