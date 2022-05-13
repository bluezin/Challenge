import React from "react";
import { Container, CountryAttribute, CountryTitle } from "../styles/country";

const Country = ({
  name,
  capital,
  phone,
  currency,
  native,
  continent,
  emoji,
  emojiU,
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
    </Container>
  );
};

export default Country;
