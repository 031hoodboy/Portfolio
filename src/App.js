import React from 'react';
import  { createGlobalStyle } from "styled-components";
import Header from '../src/components/Header';
import FirstPage from '../src/pages/FirstPage';
import SecondPage from '../src/pages/SecondPage';
import ThirdPage from '../src/pages/ThirdPage';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Header/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <Footer/>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #080808;
  }
`;