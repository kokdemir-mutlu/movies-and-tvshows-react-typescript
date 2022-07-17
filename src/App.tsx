import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/topmenu/TopMenu';
import MainTitleSection from './components/main-title-section/MainTitleSection';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <TopMenu></TopMenu>
        <MainTitleSection></MainTitleSection>
      </div>
    );
  }
}

export default App;
