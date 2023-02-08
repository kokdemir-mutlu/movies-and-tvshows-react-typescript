import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/topmenu/TopMenu';
import MainTitleSection from './components/main-title-section/MainTitleSection';
import HorizontalListSection from './components/list-horizontal/HorizontalListSection';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <TopMenu></TopMenu>
        <MainTitleSection></MainTitleSection>
        <HorizontalListSection title={`What's Popular`}></HorizontalListSection>
      </div>
    );
  }
}

export default App;
