import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.scss'

interface MyProps {

}

interface MyState {
  isBorderSearchingShown: boolean,
  isSiRotateShown: boolean,
  isGoInShown: boolean
}

export default class Search extends Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);
    this.state = {
      isBorderSearchingShown: false,
      isSiRotateShown: false,
      isGoInShown: false
    }
  }

  onSearchInputFocused() {
    this.setState({
      isBorderSearchingShown: true,
      isSiRotateShown: true
    });
  }

  onSearchInputBlured() {
    this.setState({
      isBorderSearchingShown: false,
      isSiRotateShown: false
    });
  }

  onSearchInputKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      // pressed Enter
    } else {
      if (e.currentTarget.value.length > 0) {
        this.setState({
          isGoInShown: true
        });
      } else {
        this.setState({
          isGoInShown: false
        });
      }
    }
  }

  render() {
    const { isBorderSearchingShown, isSiRotateShown, isGoInShown } = this.state;
    return (
      <div className={`search-box-area ${isBorderSearchingShown ? 'border-searching' : ''}`}>
        <div className={`search-icon ${isSiRotateShown ? 'si-rotate' : ''}`}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        <form className="search-form">
          <input onKeyUp={(e) => this.onSearchInputKeyUp(e)} onFocus={() => this.onSearchInputFocused()} onBlur={() => this.onSearchInputBlured()} type="text" placeholder="Search for a movie, tv show, person.." id="search-input-box" autoComplete="off" />
        </form>
        <svg className="search-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 671 111" xmlSpace="preserve">
          {/* <path className="border" d="M135.5,108.5h-580c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"/>
          <path className="border" d="M335.5,108.5h580c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"/> */}
          <path className="border" d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"/>
          <path className="border" d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"/>
        </svg>
        <div className={`go-icon ${isGoInShown ? 'go-in' : ''}`}><FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
    )
  }
}
