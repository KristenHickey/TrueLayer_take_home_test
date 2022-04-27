import React from 'react';
import './App.css';
import Content from './components/content';
import Header from './components/header';

const App: React.FC = ()=> {
  return (
    <>
      <Header />
      <Content/>
    </>
  );
}

export default App;
