import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  margin: 50px auto;

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  color: #6379da;
`;

const SubTitle = styled.strong`
  color: #a39797;
  display: block;
  margin-bottom: 20px;
`;

const Search = styled.div`
  border: 2px solid #ccd2eb;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;

  input {
    padding: 8px;
    width: 100%;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 15px;
  }

  img {
    margin-left: 5px;
  }
`;

const Button = styled.button`
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  background-color: #0c5cee;
  cursor: pointer;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

const GroupSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  h2 {
    color: #687fe2;
  }

  @media screen and (max-width: 530px) {
    display: block;
    text-align: center;

    button {
      margin-bottom: 10px;
    }
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const CountriesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;

  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export {
  Container,
  Search,
  Title,
  SubTitle,
  GroupSearch,
  Button,
  Message,
  CountriesContainer,
};
