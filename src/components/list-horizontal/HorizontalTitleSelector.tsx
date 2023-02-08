import React from "react";
import './HorizontalTitleSelector.scss'

interface MyHorizontalTitleSelectorProp {
  categories: string[];
  onClickedCategory: (index: number, event: React.MouseEvent<HTMLLIElement>) => void;
}

interface MyHorizontalTitleSelectorState {

}

export default class HorizontalTitleSelector extends React.Component<MyHorizontalTitleSelectorProp, MyHorizontalTitleSelectorState> {

  render(): React.ReactNode {
    return(
      <div className="title-selector-parent">
        <ul className="title-selector-ul">
          {this.props.categories.map((c: string,index: number) => {
            return (
              <li className="horizontal-list-item" key={index} onClick={(e) => this.props.onClickedCategory(index,e)}>{c}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}