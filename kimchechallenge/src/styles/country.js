import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #b0efb0;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const CountryTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 5px;
  justify-content: center;

  p {
    font-size: 30px;
  }
`

const CountryAttribute = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 18px;

  span {
    margin-left: 5px;
    font-weight: lighter;
  }
`

export { Container, CountryTitle, CountryAttribute };
