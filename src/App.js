import React from 'react';
import  { createGlobalStyle } from "styled-components";
import Header from '../src/components/Header';
import FirstPage from '../src/pages/FirstPage';
import SecondPage from '../src/pages/SecondPage';
import ThirdPage from '../src/pages/ThirdPage';

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #080808;
  }
`;