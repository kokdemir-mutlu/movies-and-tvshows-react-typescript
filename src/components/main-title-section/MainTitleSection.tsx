import React, { Component } from 'react'
import Search from './Search'
import './MainTitleSection.scss'

export default class MainTitleSection extends Component {
  render() {
    return (
      <div className='main-title-section'>
        <div className='title-section'>
          <p className="p-welcome">Welcome.</p>
          <p className="p-title">Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        <Search></Search>
      </div>
    )
  }
}
