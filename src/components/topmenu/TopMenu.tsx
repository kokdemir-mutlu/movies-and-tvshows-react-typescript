import React from "react";
import './TopMenu.scss';
import { brandName } from "../models/BrandName";
import { MoviesDropdown } from "../dropdown/MoviesDropdown";
import { TvShowsDropDown } from "../dropdown/TvShowsDropdown";
import { PeopleDropdown } from "../dropdown/PeopleDropdown";

export default class TopMenu extends React.Component {

  
  render(): React.ReactNode {
    return (
      <header className="top-header">
        <a href="/#" onClick={e => e.preventDefault()} className="brand-name">{brandName.toLocaleUpperCase()}</a>
        <MoviesDropdown></MoviesDropdown>
        <TvShowsDropDown></TvShowsDropDown>
        <PeopleDropdown></PeopleDropdown>
      </header>
    )
  }
}