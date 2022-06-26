import React from "react";
import { navTitles } from "../models/NavTitles";
import { Dropdown } from "./Dropdown";

export class PeopleDropdown extends React.Component {
  render(): React.ReactNode {
    return (
      <Dropdown title={navTitles[2]}></Dropdown>
    );
  }
}