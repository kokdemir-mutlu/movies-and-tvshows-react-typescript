import React from "react";
import { navTitles } from "../models/NavTitles";
import { Dropdown } from "./Dropdown";

export class MoviesDropdown extends React.Component {
  render(): React.ReactNode {
    return (
      <Dropdown title={navTitles[0]}></Dropdown>
    );
  }
}