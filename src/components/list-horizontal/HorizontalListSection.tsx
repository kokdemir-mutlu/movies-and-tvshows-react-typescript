import React from "react";
import CardList from "../card/CardList";
import './HorizontalListSection.scss'
import HorizontalTitleSelector from "./HorizontalTitleSelector";

interface MyHorizontalListSectionProps {
  title: string;
}

interface MyHorizontalListSectionState {
  categoriesForTitleSelector: string[];
  selectedCategory: number;
}

export default class HorizontalListSection extends React.Component<MyHorizontalListSectionProps, MyHorizontalListSectionState> {
  
  constructor(props: MyHorizontalListSectionProps) {
    super(props);
    this.state = {
      categoriesForTitleSelector: [],
      selectedCategory: 0
    }
  }

  public static getDerivedStateFromProps(props: MyHorizontalListSectionProps, state: MyHorizontalListSectionState) {
    switch(props.title) {
      case `What's Popular`:
        state = {
          categoriesForTitleSelector: [
            `Streaming`,
            `On Tv`,
            `For Rent`,
            `In Theaters`
          ],
          selectedCategory: 0
        }
        break;
      case `Free To Watch`:
        state = {
          categoriesForTitleSelector: [
            `Movies`,
            `TV`
          ],
          selectedCategory: 0
        }
        break;
      case `Trending`:
        state = {
          categoriesForTitleSelector: [
            `Today`,
            `This Week`
          ],
          selectedCategory: 0
        }
        break;
      default:
        state = {
          categoriesForTitleSelector: [
            `Streaming`,
            `On Tv`,
            `For Rent`,
            `In Theaters`
          ],
          selectedCategory: 0
        }
        return null;
    }
    return state;
  }


  onClickedCategory = (index: number, event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event);
    console.log(event.currentTarget.innerHTML);
    console.log(this.state.categoriesForTitleSelector[index]);
  }

  render(): React.ReactNode {
    return (
      <div className="horizontal-list-section-parent">
        <div className="top-horizontal-list-section">
          <h2 className="title-horizontal-list">{this.props.title}</h2>
          <HorizontalTitleSelector categories={this.state.categoriesForTitleSelector} onClickedCategory={this.onClickedCategory}/>
        </div>
        <CardList category={this.state.categoriesForTitleSelector[this.state.selectedCategory]}></CardList>
      </div>
    );
  }
}