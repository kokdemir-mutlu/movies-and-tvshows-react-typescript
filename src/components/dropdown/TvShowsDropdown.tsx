import React from "react";
import { navTitles } from "../models/NavTitles";
import { Dropdown } from "./Dropdown";

export class TvShowsDropDown extends React.Component {
  render(): React.ReactNode {
    return (
      <Dropdown title={navTitles[1]}></Dropdown>
    )
  }
}